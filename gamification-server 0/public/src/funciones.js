function func1(x, y) {
    let points = 0;
    points += Math.trunc(x / 10);
    points += Math.trunc(y / 5);
    return points
}

function func2(x, y) {
    let points = 0;
    points += Math.trunc(x / 15);
    points += Math.trunc(y / 10);
    return points
}

function func3(x, y, z) {
    let points = 0;
    points += Math.trunc(x / 10);
    points += Math.trunc(y / 5);
    points += Math.trunc(z / 2);
    return points
}

function func4(x, y, z) {
    let points = 0;
    points += Math.trunc(x / 15);
    points += Math.trunc(y / 10);
    points += Math.trunc(z / 5);
    return points
}