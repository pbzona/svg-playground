import { gridSize } from "./constants";

export const createPoint = (x = 0, y = 0): Point => {
  return new Point().at(x, y);
};

export type Coordinate = {
  x: number;
  y: number;
};

export class Point {
  private _x = 0;
  private _y = 0;
  private _coords: Coordinate = { x: 0, y: 0 };

  static copy(p: Point): Point {
    return new Point().at(p.x, p.y);
  }

  static mirrorX(p: Point): Point {
    return new Point().at(Math.abs(gridSize - p.x), p.y);
  }

  static mirrorY(p: Point): Point {
    return new Point().at(p.x, Math.abs(gridSize - p.y));
  }

  get x() {
    return this._x;
  }

  set x(val: number) {
    this._x = val;
    this._coords = {
      x: val,
      y: this._y,
    };
  }

  get y() {
    return this._y;
  }

  set y(val: number) {
    this._y = val;
    this._coords = {
      x: this._x,
      y: val,
    };
  }

  get() {
    return this._coords;
  }

  at(x: number, y: number): Point {
    this.x = x;
    this.y = y;
    return this;
  }

  atRelative(x: number, y: number): Point {
    this.x = gridSize * x;
    this.y = gridSize * y;
    return this;
  }

  move(x: number, y: number): Point {
    this.x = this.x + x;
    this.y = this.y + y;
    return this;
  }

  moveRelative(x: number, y: number): Point {
    this.x += gridSize * x;
    this.y += gridSize * y;
    return this;
  }
}
