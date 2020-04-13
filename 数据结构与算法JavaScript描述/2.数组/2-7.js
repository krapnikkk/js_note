/**
 * 对象数组
 */

function Point(x, y) {
    this.x = x;
    this.y = y;
}

function displayPts(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i].x, arr[i].y);
    }
}

var p1 = new Point(0, 0),
    p2 = new Point(3, 5),
    p3 = new Point(2, 8),
    p4 = new Point(4, 4),
    points = [p1, p2, p3, p4];

for (var i = 0; i < points.length; i++) {
    console.log(`Point ${i + 1}: ${points[i].x}, ${points[i].y}`)
}

var p5 = new Point(12, -3);
points.push(p5);
console.log('After push :');
displayPts(points);
points.pop();
console.log('After pop :');
var p6 = new Point(8, 8);
displayPts(points);
points.unshift(p6);
console.log('After unShift :');
displayPts(points);
points.shift();
console.log('After shift :');
displayPts(points);
