class Circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    render(canvas){
        let context = canvas.getContext('2d');
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        context.fill();
        context.closePath();
    }
}