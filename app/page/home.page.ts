import { expect } from "@playwright/test";
import { AppPage } from "../abstractClasses";
import { Header } from "../component/header.component";
import { step } from "../../misc/reporters/step";

export class Home extends AppPage {
    public pagePath = '/';

    public header = new Header(this.page);
    private carousel = this.page.getByRole('heading', { name: 'ViSoft Ultimate' }).first();

    @step()
    async expectLoaded(message = 'Expected Home page to be opened') {
        await expect(this.carousel).toBeVisible();
    }

    @step()
    async clickOnLogo() {
        await this.page.locator('.elementor-widget-container > a').first().click();        
    }
}