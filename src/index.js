function add(numbers){
    if(numbers === "") return 0;
    let delimiter = ',';
    let newString = numbers.replace(/[\n/g]/,delimiter);
    
    return findSum(newString, delimiter);

}

function findSum(newString, delimiter) {
    let finalArr = newString.split(delimiter);

    return finalArr.reduce((acc,item) => acc+parseInt(item), 0);

}

// add('1,2\n3');
module.exports = { add };