import { PageHolder } from "./abstractClasses";
import { Home } from "./page/home.page";

export class Application extends PageHolder {
  public home = new Home(this.page);
}