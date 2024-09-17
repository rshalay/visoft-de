import { expect } from "@playwright/test";
import { AppPage, Component } from "../abstractClasses";
import { step } from "../../misc/reporters/step";

export class ViSoftPremium extends AppPage{
    public pagePath = '/visoft-premium';

    private ViSoftPremiumInHeaderMenu = this.page.getByRole('menuitem', { name: 'ViSoft Premium' })

    @step()
    async expectLoaded(message = 'Expected Header to be loaded'){
        await expect(this.page.getByRole('heading', { name: 'ViSoft Premium 2024' }).first()).toBeInViewport();
        await expect(this.page.getByRole('heading', { name: 'ViSoft Premium 2024' }).first()).toHaveText('ViSoft Premium 2024');
    }

    //============================================Best Features=============================================================

    @step()
    async openBestFeatures() {
        await this.ViSoftPremiumInHeaderMenu.hover();
        await this.page.getByRole('link', { name: 'Best features' }).click();
    }

    @step()
    async expectThatBestFeaturesTitleIsInViewport() {
        await this.page.waitForTimeout(1000);
        return expect(this.page.getByRole('heading', { name: 'ViSoft Premium 2024' }).first()).toBeInViewport();
    }

    //============================================System Requirements=============================================================

    @step()
    async openSystemRequirements() {
        await this.ViSoftPremiumInHeaderMenu.hover();
        await this.page.getByRole('link', { name: 'System Requirements' }).click();
    }

    @step()
    async expectThatSystemRequirementsIsInViewport() {
        await this.page.waitForTimeout(1000);
        return expect(this.page.getByRole('heading', { name: 'System Requirements​ for' }).first()).toBeInViewport();
    }

    //============================================Customer References=============================================================

    @step()
    async openCustomerReferences() {
        await this.ViSoftPremiumInHeaderMenu.hover();
        await this.page.getByRole('link', { name: 'Customer references' }).click();
    }

    @step()
    async expectThatCustomerReferencesIsInViewport() {
        await this.page.waitForTimeout(1000);
        return expect(this.page.getByRole('heading', { name: 'Customers worldwide' }).first()).toBeInViewport();
    }

    //============================================ViSoft Ultimate=============================================================

    @step()
    async openViSoftUltimate() {
        await this.ViSoftPremiumInHeaderMenu.hover();
        await this.page.getByRole('link', { name: 'ViSoft Ultimate' }).click();
    }

    @step()
    async expectThatViSoftUltimateIsInViewport() {
        return expect(this.page.getByRole('heading', { name: 'ViSoft Ultimate' }).first()).toBeInViewport();
    }

    //============================================ViSoft Live=============================================================

    @step()
    async openViSoftLive() {
        await this.ViSoftPremiumInHeaderMenu.hover();
        await this.page.getByRole('link', { name: 'ViSoft Live' }).click();
    }

    @step()
    async expectThatViSoftLiveIsInViewport() {
        return expect(this.page.getByRole('heading', { name: 'ViSoft Live' }).first()).toBeInViewport();
    }

    //============================================ViSoft Photo Tuning=============================================================

    @step()
    async openViSoftPhotoTuning() {
        await this.ViSoftPremiumInHeaderMenu.hover();
        await this.page.getByRole('link', { name: 'ViSoft Photo Tuning' }).click();
    }

    @step()
    async expectThatViSoftPhotoTuningIsInViewport() {
        return expect(this.page.getByRole('heading', { name: 'ViSoft Photo Tuning add-on module' }).first()).toBeInViewport();
    }

    //============================================Get Demo=============================================================

    @step()
    async openViSoftPremiumSubmenu() {
        await this.ViSoftPremiumInHeaderMenu.hover();
    }

    @step()
    async checkTextForFreeDemoVersion() {
        await expect(this.page.getByRole('menu', { name: 'Expand: ViSoft Premium' }).getByRole('paragraph')).toHaveText('Looking for a software for design and visualization? Try now ViSoft Premium 2024 free of charge and without obligation.');
    }

    @step()
    async clickOnGetDemo() {
        await this.page.getByRole('menu').getByRole('link', { name: 'Get demo' }).click();
    }

    @step()
    async expectThatFreeDemoVersionTextIsInViewport() {
        return expect(this.page.getByRole('heading', { name: 'Test ViSoft Premium 2024' })).toBeVisible();
        
    }

}