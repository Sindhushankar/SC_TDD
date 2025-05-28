function add(numbers){
    if(numbers === "") return 0;
    let delimiter = ',';
    //extracting delimiter
    if(numbers.startsWith("//")){
        let delimiterMatch = numbers.match(/^\/\/(.)\n/);
        delimiter = delimiterMatch ? delimiterMatch[1] : null;
        // removing delimeter part from string
        numbers = numbers.slice(delimiterMatch[0].length);
    }
    let newString = numbers.replace(/[\n/g]/,delimiter);
    return findSum(newString, delimiter);

}

function findSum(newString, delimiter) {
    let finalArr = newString.split(delimiter);
    // filter all neagative numbers
    let negativeNumbers = finalArr.filter(item => item < 0);

    if(negativeNumbers.length){
        throw new Error(`Negative numbers are not allowed ${negativeNumbers.join(',')}`);
    }
    //return the sum of positive numbers
    return finalArr.reduce((acc,item) => acc+parseInt(item), 0);

}

// add('1,2\n3');
// add('//;\n1;2\n3');

// add('//;\n1;2\n3;-4;2;-1');
module.exports = { add };