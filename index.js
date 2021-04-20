// You are given a two-digit integer n. Return the sum of its digits.

function addTwoDigits(n) {
    return n.toString().split("").reduce((acc, val) => acc + Number(val), 0);
}
