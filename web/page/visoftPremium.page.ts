import { expect } from "@playwright/test";
import { AppPage, Component } from "../abstractClasses";
import { step } from "../../misc/reporters/step";
import { group } from "console";

export class ViSoftPremium extends AppPage{
    public pagePath = '/visoft-premium';

    private ViSoftPremiumInHeaderMenu = this.page.getByRole('menuitem', { name: 'ViSoft Premium' })

    @step()
    async expectLoaded(message = 'Expected Header to be loaded'): Promise<void> {
        await expect(this.ViSoftPremiumInHeaderMenu, message).toBeVisible();
    }

    @step()
    async openBestFeatures() {
        await this.ViSoftPremiumInHeaderMenu.hover();
        await this.page.getByRole('link', { name: 'Best features' }).click();
    }


}