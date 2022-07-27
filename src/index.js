module.exports = function reverse(n) {
    let newN = Math.abs(n);
    let str = newN.toString();
    let array = [...str].reverse().join("");
    let rez = Number(array);
    return rez;
};
