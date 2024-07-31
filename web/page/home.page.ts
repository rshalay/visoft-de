import { expect } from "@playwright/test";
import { AppPage } from "../abstractClasses";
import { step } from "../../misc/reporters/step";
import { group } from "console";

export class Home extends AppPage {
    public pagePath = '/';
    
    private carousel = this.page.getByRole('heading', { name: 'ViSoft Ultimate' }).first();
    private ViSoftPremiumLink = this.page.getByRole('menuitem', { name: 'ViSoft Premium' })
    private logo = this.page.locator('.elementor-widget-container > a').first();
    private buttonInCarousel = this.page.locator('div .swiper-slide-active').first();
    private swiperPaginationBullet = this.page.locator('.swiper-pagination-bullet').first();
    private numberOfSwiperPaginationBullet = this.page.locator('.swiper-pagination-bullet');


    @step()
    async expectLoaded(message = 'Expected Home page to be opened') {
        await expect(this.carousel).toBeVisible();
    }

    @step()
    async clickOnLogo() {
        await this.logo.click();        
    }

    @step()
    async openViSoftPremium() {
        await this.ViSoftPremiumLink.click()
    }


    @step()
    async clickOnButtonInCarousel(number: number) {
        await expect(this.numberOfSwiperPaginationBullet).toHaveCount(5);
        await this.page.getByRole('button', { name: `Go to slide ${number}` }).click();
        await this.buttonInCarousel.click();
    }

    @step()
    async clickOnChevronInCarousel() {
        for (let i = 0; i < 4; i++) {
            await this.page.getByRole('button', { name: `Next slide` }).click();
        }
        await expect(this.numberOfSwiperPaginationBullet).toHaveCount(5);
        for (let i = 1; i < 2; i++) {
            await this.page.getByRole('button', { name: `Previous slide` }).click();
        }
    }
    
    @step()
    async expectThatButtonInCarouselIsClickedAndPageOpened() {
        var chapter = ['ViSoft Premium 2024', 'ViSoft Ultimate', 'ViSoft Photo Tuning add-on module', 'ViPlan', 'We are at your disposal'];
        for (let i = 1; i < 5; i++) {
            await this.clickOnButtonInCarousel(i);
            await this.expectLoaded();
            await expect(this.page.getByRole('heading', { name: chapter[i-1] }).first()).toBeVisible();
            await expect(this.page.getByRole('heading', { name: chapter[i-1] }).first()).toHaveText(chapter[i-1]);
            await this.logo.click();
        }
        
    }

    @step()
    async expectThatChevronIsClickedAndPageOpened() {
            await this.clickOnChevronInCarousel();
            await this.expectLoaded();
            await this.clickOnButtonInCarousel(2);
            await expect(this.page.getByRole('heading', { name: 'ViSoft Ultimate' }).first()).toBeVisible();
            await expect(this.page.getByRole('heading', { name: 'ViSoft Ultimate' }).first()).toHaveText('ViSoft Ultimate');
    }
}