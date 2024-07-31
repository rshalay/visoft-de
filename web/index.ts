import { PageHolder } from "./abstractClasses";
import { Home } from "./page/home.page";
import { ViSoftPremium } from "./page/visoftPremium.page";

export class WebApplication extends PageHolder {
  public home = new Home(this.page);
  public visoftPremium = new ViSoftPremium(this.page);
}