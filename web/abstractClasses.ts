import { Page, expect } from '@playwright/test';
import { step } from '../misc/reporters/step';

export abstract class PageHolder { 
    constructor(protected page: Page) { }
}
export abstract class Component extends PageHolder {
    abstract expectLoaded(message?: string): Promise<void>;

    @step()
    async isLoaded(): Promise<boolean> {
        try { 
            await this.expectLoaded()
            return true
        } catch {
            return false
        }
    }
}

export abstract class AppPage extends Component {
    /**
     * Path to the page can be relative to the baseUrl defined in playwright.config.ts
     * or absolute (on your own risk)
     */
    public abstract pagePath: string;

    /**
     * Opens the page in the browser and expectLoaded should pass
     */
    @step()
    async open(path?: string) {
        await this.page.goto(path ?? this.pagePath);
        await this.expectLoaded();
    }

    @step()
    async expectThatTextInTileSanitaryDigitalSectionIsCorrect() {
        await expect(this.page.getByRole('heading', { name: 'Tile / Sanitary / Digital' })).toBeVisible();
        await expect(this.page.getByText('Sales and planning solutions')).toBeVisible();
        await expect(this.page.getByRole('heading', { name: 'Individual concepts' })).toBeVisible();
        await expect(this.page.getByText('Fast, easy to use and with a')).toBeVisible();
        await expect(this.page.getByRole('heading', { name: 'Cross-channel' })).toBeVisible();
        await expect(this.page.getByText('All our products, apps and')).toBeVisible();
        await expect(this.page.getByRole('heading', { name: 'Innovative and future-oriented' })).toBeVisible();
        await expect(this.page.getByRole('heading', { name: 'For a unique purchasing' })).toBeVisible();
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

    @step()
    async expectThatTextIn05SectionIsCorrect() {
        await expect(this.page.getByRole('link', { name: 'Present your planning from' })).toBeVisible();
        await expect(this.page.getByText('Rendering at the highest level')).toBeVisible();
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

}