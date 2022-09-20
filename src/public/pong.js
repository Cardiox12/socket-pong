class Pong {
    constructor(id) {
        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext("2d");
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.middle = { 
            x: this.width / 2, 
            y: this.height / 2 
        }
        this.paddleDimension = {
            width: 5, 
            height: 25 
        };
        this.paddleVelocity = 5;
        this.paddleMargin = 10;
        this.leftPaddle = new Paddle(
            this.canvas,
            this.ctx, 
            this.getInitPaddleX(this.paddleMargin), 
            this.getInitPaddleY(this.middle.y),
            this.paddleDimension.width,
            this.paddleDimension.height,
            this.paddleVelocity
        )
        this.rightPaddle = new Paddle(
            this.canvas,
            this.ctx,
            this.getInitPaddleX(this.width - this.paddleMargin),
            this.getInitPaddleY(this.middle.y),
            this.paddleDimension.width,
            this.paddleDimension.height,
            this.paddleVelocity
        )
    }

    setup() {
        
    }

    update() {
        this.clear();
        this.drawCenterLine();
        this.leftPaddle.draw();
        this.rightPaddle.draw();
    }

    run() {
        this.update();
        setTimeout(() => this.run(), 100);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    drawCenterLine() {
        this.ctx.setLineDash([3, 2]);
        this.ctx.beginPath();
        this.ctx.moveTo(this.middle.x, 0);
        this.ctx.lineTo(this.middle.x, this.height);
        this.ctx.stroke();
    }

    upLeft() {
        this.leftPaddle.up();
    }

    downLeft() {
        this.leftPaddle.down();
    }

    upRight() {
        this.rightPaddle.up();
    }

    downRight() {
        this.rightPaddle.down();
    }

    getInitPaddleX(x) {
        return x - Math.floor(this.paddleDimension.width / 2);
    }

    getInitPaddleY(y) {
        return y - Math.floor(this.paddleDimension.height / 2);
    }
}