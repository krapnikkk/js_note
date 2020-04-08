/**
 * if-else语句
 */
var mid = 25, high = 50, low = 1, current = 13, found = -1;
if (current < mid) {
    mid = (current - low) / 2;
} else if (current > mid) {
    mid = (current + high) / 2;
} else {
    found = current;
}
console.log(mid);