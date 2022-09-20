class Paddle {
    constructor(canvas, ctx, x, y, width, height, velocity) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velocity = velocity;
    }

    draw() {
        this.ctx.fillRect(
            this.x, 
            this.y, 
            this.width, 
            this.height
        );
    }

    getRealX() {
        return this.x - Math.floor(this.width / 2);
    }

    getRealY() {
        return this.y - Math.floor(this.height / 2);
    }

    up() {
        const y = this.y - this.velocity;

        if ( this.isBound(y) )
            this.y -= this.velocity;
        else
            this.y = 0;
    }

    down() {
        const y = this.y + this.velocity;

        if ( this.isBound(y) )
            this.y = y;
        else
            this.y = this.canvas.height - this.height;
    }

    isBound(y) {
        return y >= 0 && y < (this.canvas.height - this.height);
    }
}
