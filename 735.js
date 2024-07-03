/**
 * @param {number[]} asteroids
 * @return {number[]}
 */

asteroids = [10, 2, -15];

var asteroidCollision = function (asteroids) {
    const stack = [];

    for (let i = 0; i < asteroids.length ; i++) {
        if (asteroids[i] > 0 || !stack.length) {
            stack.push(asteroids[i]);
        } else {
            while (true) {
                const peek = stack[stack.length -1];
                if (peek < 0) {
                    stack.push(asteroids[i])
                    break;
                } else if (peek === -asteroids[i]) {
                    stack.pop();
                    break;
                } else if (peek > -asteroids[i]) {
                    break;
                } else {
                    stack.pop();
                    if (!stack.length) {
                        stack.push(asteroids[i]);
                        break;
                    }
                }
            }
        }
    }

    return stack;
};

console.log(asteroidCollision(asteroids));