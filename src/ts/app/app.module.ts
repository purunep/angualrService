import { ColorsMutable } from "./services/colors-mutable";
// import { ColorsImmutable } from "./services/colors-immutable";
import { Logger, simpleLogger } from "./services/logger";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ColorToken } from "./tokens/colors-token";

import "../../scss/styles.scss";

// const useImmutable = true;
// const colorFactory = (logger: Logger) => {
//     if (useImmutable) {
//         return new ColorsImmutable(logger);
//     } else {
//         return new Colors(logger);
//     }
// };

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ],
    providers: [{provide: Logger, useValue: simpleLogger},
    {provide: ColorToken, useClass: ColorsMutable }],
})
export class AppModule { }
