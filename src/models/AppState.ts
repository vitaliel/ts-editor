import {Canvas} from "./Canvas";
import {CanvasElement} from "./CanvasElement";

export class AppState {
    constructor(public canvas: Canvas = new Canvas()) {
    }

    addElement(elem: CanvasElement): AppState {
        return new AppState(new Canvas([
            ...this.canvas.elements,
            elem
        ]))
    }

    moveElement(id: number, x: number, y: number) {
        const newElements = this.canvas.elements.map(element => {
            if (element.id == id) {
                const newElement = element.clone();
                newElement.x = x;
                newElement.y = y;
                return newElement;
            } else {
                return element;
            }
        });

        return new AppState(new Canvas(newElements))
    }

    selectElement(id: number): AppState {
        const newElements = this.canvas.elements.map(element => {
            if (element.id == id) {
                const newElement = element.clone();
                newElement.selected = true;
                return newElement;
            } else if (element.selected) {
                const newElement = element.clone();
                newElement.selected = false;
                return newElement;
            }
            else {
                return element;
            }
        });

        return new AppState(new Canvas(newElements))
    }

    sendSelectedElementToBack(): AppState {
        const figure = this.canvas.elements.find(e => e.selected);

        if (figure) {
            return new AppState(new Canvas(
                [figure, ...this.canvas.elements.filter(e => e.id != figure.id)]))
        } else {
            return this;
        }
    }

    bringSelectedElementToTop() : AppState {
        const figure = this.canvas.elements.find(e => e.selected);

        if (figure) {
            return new AppState(new Canvas([...this.canvas.elements.filter(e => e.id != figure.id), figure]));
        } else {
            return this;
        }
    }

    deselectAll() : AppState {
        if (this.canvas.elements.some(f => f.selected)) {

            const newElements = this.canvas.elements.map(element => {
                if (element.selected) {
                    const newElement = element.clone();
                    newElement.selected = false;
                    return newElement;
                } else {
                    return element;
                }
            });

            return new AppState(new Canvas(newElements));
        } else {
            return this;
        }
    }
}
