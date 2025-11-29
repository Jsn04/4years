const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Heart {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 200;
        this.size = Math.random() * 20 + 10;
        this.speed = Math.random() * 1 + 0.3;
        this.opacity = Math.random() * 0.5 + 0.3;
    }

    draw() {
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = "#ff6b81";
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.bezierCurveTo(this.x + this.size, this.y - this.size,
                          this.x + this.size * 2, this.y + this.size / 3,
                          this.x, this.y + this.size);
        ctx.bezierCurveTo(this.x - this.size * 2, this.y + this.size / 3,
                          this.x - this.size, this.y - this.size,
                          this.x, this.y);
        ctx.fill();
    }

    update() {
        this.y -= this.speed;
    }
}

function generateHearts() {
    if (particles.length < 60) particles.push(new Heart());
}

function handleHearts() {
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        if (particles[i].y + particles[i].size < 0) {
            particles.splice(i, 1);
            i--;
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    generateHearts();
    handleHearts();
    requestAnimationFrame(animate);
}

animate();
