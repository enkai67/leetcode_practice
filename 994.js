/**
 * @param {number[][]} grid
 * @return {number}
 */

const grid = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1]
];

var orangesRotting = function (grid) {
    let rottingQueue = [];
    let freshOranges = 0;
    let time = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) freshOranges++;
            if (grid[i][j] === 2) rottingQueue.push([i, j, 0]);
        }
    }

    const direction = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const endR = grid.length - 1;
    const endC = grid[0].length - 1;

    while (rottingQueue.length && freshOranges) {
        const [curR, curC, curTime] = rottingQueue.shift();

        if (grid[curR][curC] === 1) {
            grid[curR][curC] = 2;
            freshOranges--;
            time = curTime;
        }

        for (let [addR, addC] of direction) {
            const [newR, newC] = [curR + addR, curC + addC];
            if (newR > endR || newR < 0 || newC > endC || newC < 0) continue;
            if (grid[newR][newC] === 1) {
                rottingQueue.push([newR, newC, curTime + 1]);
            }
        }
    }

    return freshOranges === 0 ? time : -1;
};

console.log(orangesRotting(grid));
