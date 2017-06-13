import { Logger } from "./logger";
import { Injectable } from "@angular/core";

@Injectable()

export class Colors {
    private colorList: string[] = [];

    constructor(private logger: Logger) {

    }

    public getAll() {
        this.logger.log("Retrieved color list");
        return this.colorList;
    }

    public addColor(color: string) {
        this.logger.log("Added color  to list: " + color);
        this.colorList.push(color);
    }

}
