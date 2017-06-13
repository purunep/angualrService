import { Colors } from "./models/colors";
import { Component, Inject } from "@angular/core";
import { ColorToken } from "./tokens/colors-token";

@Component({
    selector: "main",
    template: `<ul>
    <li *ngFor="let color of colors"> {{color}} </li>
     </ul>`,

})
export class AppComponent {

    public colors: string[] = [];
    constructor(@Inject(ColorToken) private colorsSvc: Colors) {
        this.colorsSvc.addColor("blue");
        this.colorsSvc.addColor("red");
        this.colorsSvc.addColor("white");
        this.colors = this.colorsSvc.getAll();
        }
}
