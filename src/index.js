module.exports = function reverse (n) {
    if (n < 0) {
        n *= -1;
        n = String(n);
        n = n.split('');
        n = n.reverse();
        n = n.join('');
        n = Number(n) ;
    } else {
        n = String(n);
        n = n.split('');
        n = n.reverse();
        n = n.join('');
        n = Number(n);
    }
    return n;
}
