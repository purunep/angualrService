import { ColorsImmutable } from "./services/colors-immutable";
import { Colors } from "./services/colors";
import { Logger, simpleLogger } from "./services/logger";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

import "../../scss/styles.scss";

const useImmutable = true;
const colorFactory = (logger: Logger) => {
    if (useImmutable) {
        return new ColorsImmutable(logger);
    } else {
        return new Colors(logger);
    }
};

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ],
    providers: [{provide: Logger, useValue: simpleLogger},
    {provide: Colors, useFactory: colorFactory, deps: [Logger]}],
})
export class AppModule { }
