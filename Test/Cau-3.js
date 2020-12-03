function isFibonacci(num) {
    let a = 0, b = 1, temp = 0;
    while (true) {
        if (num == a) {
            return true;
        }
        if (a > num) {
            return false;
        }
        temp = b;
        b += a;
        a = temp;
    }
}