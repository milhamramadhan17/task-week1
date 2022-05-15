const countToTen = (start) => {
    const num = ['0','1','2','3','4','5','6','7','8','9','10'];

    let nul = "";
    for(let i = start; i <= 10; i++){
        nul += num[i] + " ";
    }
    return nul;
}

console.log(countToTen(5));



/**
 * 1. Buatlah sebuah function dengan nama countToTen
 *  parameter
 *    - start
 *  output
 *    - urutan angka string mulai dari start sampai dengan 10 (dipisahkan dengan spasi)
 * 
 * CONTOH:
 *  input = 5
 *  output = 5 6 7 8 9 10
 */
