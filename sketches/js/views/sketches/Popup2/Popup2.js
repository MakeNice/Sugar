import {BaseSketch} from "../../BaseSketch.js";

export default class Popup2 extends BaseSketch {

    constructor() {
        super('Popup2');

        var component = document.getElementsByClassName("popup")[0].cloneNode(true);
        this.el.appendChild(component);


    }

}