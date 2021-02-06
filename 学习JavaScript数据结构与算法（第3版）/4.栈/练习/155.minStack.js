class MinStack {
    constructor() {
        this.items = [];
        this.min = Number.MAX_VALUE;
    }

    push(x) {
        let min = this.min;
        if (x < min) { // 比最小值还要小即更新最小值
            this.min = x;
        }
        // 存入当前新的元素与当前最小值的差，结果为正数时，说明比上一个元素大，结果为负数时，说明该值是最新的最小值
        this.items.push(x - min);
        console.log(x - min, this.min);
    }

    pop() {
        let item = this.items.pop();
        let min = this.min;
        if (item < 0) { // 元素为负数，说明该值是最新的最小值
            // item[原始元素与最小值的差] => item = 元素x[负数时等于最新min] - 上一个min(x - min)
            // 上一个min[即将变为最新的min] = 元素item[负数时等于最新min] - item;
            this.min = min - item;
            return min;
        }

        return item + min;
    }

    top() {
        let item = this.items.pop();
        let min = this.min;
        if (item < 0) {
            return min;
        }

        return item + min;
    }

    getMin() {
        return this.min;
    }
}

let minStack = new MinStack();
// minStack.push(-1);
// minStack.push(-2);
// minStack.push(-3);
// minStack.push(-4);
// minStack.push(-5);

minStack.push(-5);
minStack.push(-4);
minStack.push(-3);
minStack.push(-2);

class MinTwoStack {
    constructor() {
        this.items = [];
        this.mins = [number];
    }

    push(item) {
        this.items.push(item);
        if (this.mins.length === 0 || item < this.getMin()) {
            this.mins.push(item);
        }
    }

    pop() {
        let item = this.items.pop();
        if (this.mins.length > 0 && item === this.getMin()) {
            this.mins.pop();
        }
        return item;
    }

    top() {
        return this.items[this.items.length - 1];
    }

    getMin() {
        return this.mins[this.mins.length - 1];
    }
}
