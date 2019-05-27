function insertFib_n() {
    const n = parseInt(document.getElementById('number_n').value)
    if (typeof n === "number") {
        if (n >= 0) {
            document.getElementById('answer').innerHTML = log_fib_n(n)
        } else {
            document.getElementById('answer').innerHTML = "INVALID INPUT"
        }
    }
}

document.getElementById('number_n')
    .addEventListener('keypress', function () {
        insertFib_n();
    });

document.getElementById('calculate')
    .addEventListener('click', function () {
        insertFib_n();
    });

function naive_fib_n(n) {
    if (n === 0) { return 0; }
    if (n === 1) { return 1; }
    else { return naive_fib_n(n - 1) + naive_fib_n(n - 2); }
}

function dynamic_fib_n(n) {
    mem = new Array(n);
    const fib_n = function (n, mem) {
        if (mem[n] != undefined) {
            return mem[n];
        }
        if (n === 0) {
            mem[n] = 0;
            return 0;
        }
        if (n === 1) {
            mem[n] = 1;
            return 1;
        }
        const fn1 = fib_n(n - 1, mem);
        const fn2 = fib_n(n - 2, mem);
        if (mem[n - 1] === undefined) {
            mem[n - 1] = fn1;
        }
        if (mem[n - 2] === undefined) {
            mem[n - 2] = fn2;
        }
        mem[n] = fn1 + fn2;
        return fn1 + fn2;
    }

    return fib_n(n, mem);
}

function log_fib_n(n) {
    const fib_matrix = [
        [1, 1],
        [1, 0]
    ];

    const a00 = fib_matrix[0][0];
    const a01 = fib_matrix[0][1];
    const a10 = fib_matrix[1][0];
    const a11 = fib_matrix[1][1];

    if (n === 0) { return a11; }

    /*
        [a00, a01]   [b00, b01] = [a00*b00+a01*b10, a00*b01+a01*b11] 
        [a10, a11]   [b10, b11]   [a10*b00+a11*b10, a10*b01 + a11*b11]
    */
    let fib_n = fib_matrix;
    for (let i = 1; i < n - 1; i++) {
        const b00 = fib_n[0][0];
        const b01 = fib_n[0][1];
        const b10 = fib_n[1][0];
        const b11 = fib_n[1][1];
        fib_n[0][0] = a00 * b00 + a01 * b10;
        fib_n[0][1] = a00 * b01 + a01 * b11;
        fib_n[1][0] = a10 * b00 + a11 * b10;
        fib_n[1][1] = a10 * b01 + a11 * b11;
    }

    return fib_n[0][0];
}
