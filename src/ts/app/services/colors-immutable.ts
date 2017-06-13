import { Logger } from "./logger";
import { Injectable } from "@angular/core";

@Injectable()

export class ColorsImmutable {
    private colorList: string[] = [];

    constructor(private logger: Logger) {

    }

    public getAll() {
        this.logger.log("Retrieved color list immutable");
        return this.colorList;
    }

    public addColor(color: string) {
        this.logger.log("Added color  to list immutable: " + color);
        this.colorList = this.colorList.concat(color);
    }

}
