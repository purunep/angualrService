import { Colors } from "./services/colors";
import { Component } from "@angular/core";

@Component({
    selector: "main",
    template: `<ul>
    <li *ngFor="let color of colors"> {{color}} </li>
     </ul>`,

})
export class AppComponent {

    public colors: string[] = [];
    constructor(private colorsSvc: Colors) {
        this.colorsSvc.addColor("blue");
        this.colorsSvc.addColor("red");
        this.colorsSvc.addColor("white");
        this.colors = this.colorsSvc.getAll();
        }
}
