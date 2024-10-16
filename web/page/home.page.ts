import { expect } from "@playwright/test";
import { AppPage } from "../abstractClasses";
import { step } from "../../misc/reporters/step";


export class Home extends AppPage{
    public pagePath = '/';
    
    
    private logo = this.page.locator('.elementor-widget-container a').first();
    private buttonInCarousel = this.page.locator('div .swiper-slide-active').first();
    private numberOfSwiperPaginationBullet = this.page.locator('.swiper-pagination-bullet');
    
    @step()
    async expectLoaded(message = 'ViSoft Premium 2024') {
        await expect(this.page.locator('.elementor-slide-heading').first(), message).toBeVisible();
    }

    @step()
    async expectThatViSoftPremiumPageOpened() {
        await expect(this.page.getByRole('heading', { name: 'ViSoft Premium 2024' }).first()).toBeInViewport();
        await expect(this.page.getByRole('heading', { name: 'ViSoft Premium 2024' }).first()).toHaveText('ViSoft Premium 2024');
    }

    @step()
    async clickOnLogo() {
        await this.logo.click();        
    }

    @step()
    async openViSoftPremium() {
        await this.page.getByRole('menuitem', { name: 'ViSoft Premium' }).click()
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
        var chapter = ['ViSoft Premium 2024', 'ViSoft Ultimate', 'ViSoft Photo Tuning add-on module', 'ViPlan', 'ViSoft ViSion'];
        for (let i = 1; i <= 5; i++) {
            await this.clickOnButtonInCarousel(i);
            await expect(this.page.getByRole('heading', { name: chapter[i-1] }).first()).toBeVisible();
            await expect(this.page.getByRole('heading', { name: chapter[i-1] }).first()).toHaveText(chapter[i-1]);
            await this.logo.click();
        }
        
    }

    @step()
    async expectThatChevronIsClickedAndPageOpened() {
            await this.clickOnChevronInCarousel();
            await this.clickOnButtonInCarousel(2);
            await expect(this.page.getByRole('heading', { name: 'ViSoft Ultimate' }).first()).toBeInViewport();
            await expect(this.page.getByRole('heading', { name: 'ViSoft Ultimate' }).first()).toHaveText('ViSoft Ultimate');
    }

    @step()
    async expectThatTextInTileSanitaryDigitalSectionIsCorrect() {       
        await expect(this.page.getByRole('heading', { name: 'Tile / Sanitary / Digital' })).toBeVisible();
        await expect(this.page.getByText('Sales and planning solutions')).toBeVisible();
        await expect(this.page.getByRole('heading', { name: 'Individual concepts' })).toBeVisible();
        await expect(this.page.locator('.far').first()).toHaveScreenshot('individualConcepts.png', {maxDiffPixelRatio: 0.1});
        await expect(this.page.getByText('Fast, easy to use and with a')).toBeVisible();
        await expect(this.page.getByRole('heading', { name: 'Cross-channel' })).toBeVisible();
        await expect(this.page.locator('div:nth-child(2) > div > div > .elementor-widget-container > .elementor-icon-wrapper > .elementor-icon > .far')).toHaveScreenshot('cross-channel.png', {maxDiffPixelRatio: 0.1});
        await expect(this.page.getByText('All our products, apps and')).toBeVisible();
        await expect(this.page.getByRole('heading', { name: 'Innovative and future-oriented' })).toBeVisible();
        await expect(this.page.locator('div:nth-child(3) > div > div > .elementor-widget-container > .elementor-icon-wrapper > .elementor-icon > .far')).toHaveScreenshot('innovativeAndFuture-oriented.png', {maxDiffPixelRatio: 0.1});
        await expect(this.page.getByRole('heading', { name: 'For a unique purchasing' })).toBeVisible();
        await expect(this.page.locator('div:nth-child(4) > div > div > .elementor-widget-container > .elementor-icon-wrapper > .elementor-icon > .far')).toHaveScreenshot('forAUniquePurchasing.png', {maxDiffPixelRatio: 0.1});
        await expect(this.page.getByText('Take advantage of the')).toBeVisible();
    }

    @step()
    async expectThatTextInViSoftPremium2024SectionIsCorrect() {
        await expect(this.page.locator('h2').filter({ hasText: 'ViSoft Premium 2024' })).toBeVisible();
        await expect(this.page.getByText('ViSoft Premium is the professional planning and customer consulting software')).toBeVisible();
    }

    @step()
    async clickOnGetDemoButton() {
        await this.page.getByRole('link', { name: 'Get demo' }).nth(1).click();
    }

    @step()
    async expectThatGetDemoFormPageOpened() {
        await expect(this.page.getByRole('heading', { name: 'Test ViSoft Premium 2024' })).toBeVisible();
    }

    
    @step()
    async clickOnLearnMoreButton() {
        await this.page.getByRole('link', { name: 'Learn more', exact: true }).first().click();
    }

    @step()
    async expectThatLearnMorePageOpened(newPage: any) {
        await expect(newPage.getByRole('heading', { name: 'ViSoft Premium 2024', exact: true })).toBeVisible();
        await expect(newPage.getByText('ViSoft Premium is the').first()).toBeVisible();
        await expect(newPage.getByRole('link', { name: 'Get free demo now' })).toBeVisible();
    }

    @step()
    async expectThatTextIn7StepsForSalesSuccessSectionIsCorrect() {
        await expect(this.page.getByRole('heading', { name: 'steps for sales success' })).toBeVisible();
        await expect(this.page.getByText('The ViSoft family supports')).toBeVisible();
    }

    @step()
    async expectThatTextIn01SectionIsCorrect() {
        await expect(this.page.getByRole('link', { name: 'Customer visits your website' })).toBeVisible();
        await expect(this.page.getByText('Playful getting to know your').first()).toBeVisible();
        await expect(this.page.getByText('01', { exact: true })).toBeVisible();
        await this.page.locator('div:nth-child(1) > .eael-content-timeline-img').scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(2000);
        await expect(this.page.locator('div:nth-child(1) > .eael-content-timeline-img')).toHaveScreenshot('01.png', {maxDiffPixelRatio: 0.1})
    }

    @step()
    async clickOnViSoftVisionButton() {
        await this.page.getByRole('link', { name: 'ViSoft Vision', exact: true }).first().click();
    }

    @step()
    async expectThatViSoftVisionPageOpened() {
        await expect(this.page.getByRole('heading', { name: 'ViSoft ViSion', exact: true })).toBeVisible();
        await expect(this.page.getByRole('heading', { name: 'Room configurator for Web,' })).toBeVisible();
        await expect(this.page.getByText('ViSoft ViSion creates a space')).toBeVisible();
    }

    @step()
    async expectThatTextIn02SectionIsCorrect() {
        await expect(this.page.getByRole('link', { name: 'For the self-planner' })).toBeVisible();
        await expect(this.page.getByText('Playful getting to know your').nth(1)).toBeVisible();
        await expect(this.page.getByText('02', { exact: true })).toBeVisible();
        await this.page.locator('div:nth-child(2) > .eael-content-timeline-img').scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(2000);
        await expect(this.page.locator('div:nth-child(2) > .eael-content-timeline-img')).toHaveScreenshot('02.png', {maxDiffPixelRatio: 0.1})
    }

    @step()
    async clickOnViSoftViPlanButton() {
        await this.page.locator('#eael-content-timeline-b182dee').getByRole('link', { name: 'ViSoft ViPlan' }).click();
    }

    @step()
    async expectThatViSoftViPlanPageOpened() {
        await expect(this.page.getByRole('heading', { name: 'ViPlan', exact: true })).toBeVisible();
        await expect(this.page.getByRole('heading', { name: 'The online planner for tiles' })).toBeVisible();
        await expect(this.page.getByText('ViPlan is a versatile')).toBeVisible();
    }

    @step()
    async expectThatTextIn03SectionIsCorrect() {
        await expect(this.page.getByRole('link', { name: 'Appointment on the building' })).toBeVisible();
        await expect(this.page.getByText('Take up the dimensions')).toBeVisible();
        await expect(this.page.getByText('03', { exact: true })).toBeVisible();
        await this.page.locator('div:nth-child(3) > .eael-content-timeline-img').scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(2000);
        await expect(this.page.locator('div:nth-child(3) > .eael-content-timeline-img')).toHaveScreenshot('03.png', {maxDiffPixelRatio: 0.1})
    }

    @step()
    async clickOnViSoftSmartButton() {
        await this.page.locator('#eael-content-timeline-b182dee').getByRole('link', { name: 'ViSoft Smart' }).click();
    }

    @step()
    async expectThatViSoftSmartPageOpened() {
        await expect(this.page.getByRole('heading', { name: 'ViSoft Smart' })).toBeVisible();
        await expect(this.page.getByRole('heading', { name: 'The online planner for tiles' })).toBeVisible();
        await expect(this.page.getByText('ViSmart is a versatile')).toBeVisible();
    }

    // @step()
    // async expectThatTextIn04SectionIsCorrect() {
    //     await expect(this.page.getByRole('link', { name: 'Present your planning from' })).toBeVisible();
    //     await expect(this.page.getByText('Rendering at the highest level')).toBeVisible();
    //     await expect(this.page.getByText('04', { exact: true })).toBeVisible();
    //     await this.page.locator('div:nth-child(4) > .eael-content-timeline-img').scrollIntoViewIfNeeded();
    //     await this.page.waitForTimeout(2000);
    //     await expect(this.page.locator('div:nth-child(4) > .eael-content-timeline-img')).toHaveScreenshot('04.png', {maxDiffPixelRatio: 0.1})
    // }

    // @step()
    // async clickOnViSoftUltimateButton() {
    //     await this.page.getByRole('link', { name: 'ViSoft Photo Tuning', exact: true }).click();
    // }

    // @step()
    // async expectThatViSoftUltimatePageOpened() {
    //     await expect(this.page.getByRole('heading', { name: 'ViSoft Photo Tuning add-on' })).toBeVisible();
    //     await expect(this.page.getByText('Simple, fast, perfect!')).toBeVisible();
    //     await expect(this.page.getByText('ViSoft Photo Tuning brings out the best in your projects – sunshine, light,')).toBeVisible();
    // }

    @step()
    async expectThatTextIn05SectionIsCorrect() {
        await expect(this.page.getByRole('link', { name: 'Present your planning from' })).toBeVisible();
        await expect(this.page.getByText('Rendering at the highest level')).toBeVisible();
        await expect(this.page.getByText('05', { exact: true })).toBeVisible();
        await this.page.locator('div:nth-child(5) > .eael-content-timeline-img').scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(2000);
        await expect(this.page.locator('div:nth-child(5) > .eael-content-timeline-img')).toHaveScreenshot('05.png', {maxDiffPixelRatio: 0.1})
    }

    @step()
    async clickOnViSoftPhotoTuningButton() {
        await this.page.getByRole('link', { name: 'ViSoft Photo Tuning', exact: true }).click();
    }

    @step()
    async expectThatViSoftPhotoTuningPageOpened() {
        await expect(this.page.getByRole('heading', { name: 'ViSoft Photo Tuning add-on' })).toBeVisible();
        await expect(this.page.getByText('Simple, fast, perfect!')).toBeVisible();
        await expect(this.page.getByText('ViSoft Photo Tuning brings out the best in your projects – sunshine, light,')).toBeVisible();
    }

    @step()
    async expectThatTextIn06SectionIsCorrect() {
        await expect(this.page.getByRole('link', { name: 'Make images and panoramas' })).toBeVisible();
        await expect(this.page.getByText('Share the results of planning')).toBeVisible();
        await expect(this.page.getByText('06', { exact: true })).toBeVisible();
        await this.page.locator('div:nth-child(6) > .eael-content-timeline-img').scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(2000);
        await expect(this.page.locator('div:nth-child(6) > .eael-content-timeline-img')).toHaveScreenshot('06.png', {maxDiffPixelRatio: 0.1})
    }

    @step()
    async clickOnViSoft360Button() {
        await this.page.locator('#eael-content-timeline-b182dee').getByRole('link', { name: 'ViSoft 360' }).click();
    }

    @step()
    async expectThatViSoft360PageOpened() {
        await expect(this.page.getByRole('heading', { name: 'ViSoft 360' })).toBeVisible();
        await expect(this.page.getByRole('heading', { name: 'Inspire your clients' })).toBeVisible();
        await expect(this.page.getByText('The ViSoft Sharing portal is')).toBeVisible();
    }

    @step()
    async expectThatTextIn07SectionIsCorrect() {
        await expect(this.page.getByRole('link', { name: 'The final presentation' })).toBeVisible();
        await expect(this.page.getByText('Emotional sales presentation')).toBeVisible();
        await expect(this.page.getByText('07', { exact: true })).toBeVisible();
        await this.page.locator('div:nth-child(7) > .eael-content-timeline-img').scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(2000);
        await expect(this.page.locator('div:nth-child(7) > .eael-content-timeline-img')).toHaveScreenshot('07.png', {maxDiffPixelRatio: 0.1})
    }

    @step()
    async clickOnViSoftLiveButton() {
        await this.page.getByRole('link', { name: 'ViSoft Live' }).click();
    }

    @step()
    async expectThatViSoftLivePageOpened() {
        await expect(this.page.getByRole('heading', { name: 'ViSoft Live' })).toBeVisible();
        await expect(this.page.getByText('The module, ViSoft Live, can')).toBeVisible();
    }

    @step()
    async clickOnLearnMoreButtonInOurSolutionsBlock() {
        await this.page.getByRole('heading', { name: 'Our solutions for your success' }).scrollIntoViewIfNeeded();
        await this.page.getByText('Our solutions for your success We have set industry standards with our 3D').getByRole('link', { name: 'Learn more', exact: true }).click();
    }

    @step()
    async expectThatTextInOurSolutionsBlockIsCorrect() {
        await expect(this.page.getByRole('heading', { name: 'Our solutions for your success' })).toBeVisible();
        await expect(this.page.getByText('We have set industry')).toBeVisible();
    }

    @step()
    async expectThatLearnMoreInOurSolutionsBlockIsOpenedPage() {
        await expect(this.page.getByRole('heading', { name: 'Contact us' })).toBeVisible();
    }
}