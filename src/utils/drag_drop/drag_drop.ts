import {Point} from "../geometry/point";

type DragSessionCallback = (e: DragSessionEvent) => void;

export class DragSessionEvent {
  constructor(public session: DragSession, public translation: Point) {

  }
}

export class DragSession {
  private _startDragPoint: Point;
  private _windowOnMouseMoveFn: (e: MouseEvent) => void;
  private _windowOnMouseUpFn: (e: MouseEvent) => void;

  constructor(e: MouseEvent, private _onDragCallback: DragSessionCallback, private _onDropCallback: DragSessionCallback) {
    this._startDragPoint = new Point(e.clientX, e.clientY)

    window.addEventListener("mousemove", this._windowOnMouseMoveFn = this._onMouseMove.bind(this));
    window.addEventListener("mouseup", this._windowOnMouseUpFn = this._onMouseUp.bind(this));
  }

  private getTranslation(e: MouseEvent) {
    return new Point(e.clientX, e.clientY).subtract(this._startDragPoint);
  }

  private _onMouseMove(e: MouseEvent) {
    this._onDragCallback(new DragSessionEvent(this, this.getTranslation(e)));
  }

  private _onMouseUp(e: MouseEvent) {
    window.removeEventListener("mousemove", this._windowOnMouseMoveFn);
    window.removeEventListener("mouseup", this._windowOnMouseUpFn);
    this._onDropCallback(new DragSessionEvent(this, this.getTranslation(e)));
  }
}