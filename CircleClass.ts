
class Circle {
    private _radius: number;
    private _color: string;

    constructor(radius: number = 1.0, color: string = "red") {
        this._radius = radius;
        this._color = color;
    }

    getRadius(): number {
        return this._radius;
    }

    setRadius(radius: number): void {
        this._radius = radius;
    }

    getColor(): string {
        return this._color;
    }

    setColor(color: string): void {
        this._color = color;
    }

    toString(): string {
        return `Circle[radius = ${this._radius}, color = ${this._color}]`;
    }

    getArea(): number {
        return Math.PI * this._radius * this._radius;
    }

    getCircumference(): number {
        return 2 * Math.PI * this._radius;
    }
}
let circle=new Circle();
