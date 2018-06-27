type Easing = "ease-in" | "ease-out" | "ease-in-out";

class UIElement {

    constructor(public easeing: Easing = "ease-in") {

    }

    aimate(dx: number, dy: number, easing: Easing) {
        if (easing === "ease-in") {

        } else if (easing === "ease-out") {

        } else {

        }
    }
}

let button = new UIElement("ease-in");
button.aimate(0, 0, "ease-in");
