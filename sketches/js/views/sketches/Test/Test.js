import {BaseSketch} from "../../BaseSketch.js";

export default class Test extends BaseSketch {

    constructor() {
        super('Test');

        var component = document.getElementsByClassName("popup")[0].cloneNode(true);
        this.el.appendChild(component);


    }

}