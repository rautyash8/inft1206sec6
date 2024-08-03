// Setup canvas
const canvas = document.querySelector('canvas');
// CanvasRenderContext2D
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;


// Function to generate random number
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}


// Function to generate random color
function randomRGB() {
  return `rgb(${ random(0, 255) },${ random(0, 255) },${ random(0, 255) })`;
}


// Object to represent a ball
class Ball {

    x;
    y;
    velX;
    velY;
    color;
    size;

    constructor(x, y, velX, velY, color, size) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
    }

    // Drawing the ball
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    // Moving the ball
    update() {
        if ((this.x + this.size) >= width) {
            this.velX = -(this.velX);
        }

        if ((this.x - this.size) <= 0) {
            this.velX = -(this.velX);
        }

        
        if ((this.y + this.size) >= height) {
            this.velY = -(this.velY);
        }

        if ((this.y - this.size) <= 0) {
            this.velY = -(this.velY);
        }

        this.x += this.velX;
        this.y += this.velY;
    }

    // Collision detection
    collisionDetect() {
        for (const ball of balls) {
            // Check to make sure that current ball being looped through is not
            // the same ball as the one being checked
            // Code only runs if not the same
            if (!(this === ball)) {
                // Distance (hypotenuse of a right triangle) is equal to the
                // square root of the squared x and y distances (legs) added
                // togther; Pythagorean Theorem c = √(x^2 + y^2)
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;
                const distance = Math.sqrt(dx ** 2  + dy ** 2);

                // If balls collide (whether any of the two circles'
                // areas overlap), assign both the same new random color
                if (distance < this.size + ball.size) {
                    ball.color = this.color = randomRGB();
                }
            }
        }
    }

}


// Add balls to the canvas and animate them
const balls =[];

while (balls.length < 25) {
    const size = random(10, 20);
    const ball = new Ball(
        // Ball Position always draw at least one ball width away from the edge
        // of the canvas, to avoid drawing errors
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        randomRGB(),
        size
    );

    balls.push(ball);
}

function loop() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.fillRect(0, 0, width, height);

    for (const ball of balls) {
        ball.draw();
        ball.update();
        ball.collisionDetect();
    }

    requestAnimationFrame(loop);
}


// Start the animation
loop();
