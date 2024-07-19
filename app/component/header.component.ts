import { expect } from "@playwright/test";
import { Component } from "../abstractClasses";
import { step } from "../../misc/reporters/step";

export class Header extends Component {
    private ViSoftPremiumLink = this.page.getByRole('menuitem', { name: 'ViSoft Premium' })

    @step()
    async expectLoaded(message = 'Expected Header to be loaded'): Promise<void> {
        await expect(this.ViSoftPremiumLink, message).toBeVisible();
    }


    @step()
    async openViSoftPremium() {
        await this.ViSoftPremiumLink.click()
    }
}