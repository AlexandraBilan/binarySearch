let assert = chai.assert;
let array = [0, 2, 5, 6, 8, 10, 11, 20, 24, 31];
let empty_array = [];
function binarySearch(array, start, end, value){
    let middle = Math.floor((start+end)/2);
    if(start>=end || middle == 0)
    {
        return -1;
    }
    if(array[middle] == value)
    {
        return middle;
    }
    if(array[middle] > value)
    {
        return binarySearch(array, start, middle-1, value);
    }
    else{
        return binarySearch(array, middle+1, end, value);
    }
}

mocha.setup('bdd');
describe("binarySearch", function() {
    it("В массиве нет этого числа 7", function() {
        assert.equal(binarySearch(array, 0, array.length, 7), -1);
    });

    it("Инекс 10-ки в массиве равен 5", function() {
        assert.equal(binarySearch(array, 0, array.length, 10), 5);
    });

    it("Инекс 31-го в массиве равен 9", function() {
        assert.equal(binarySearch(array, 0, array.length, 31), 9);
    });

    it("В массиве нет числа 31", function() {
        assert.equal(binarySearch(empty_array, 0, empty_array.length, 31), -1);
    });
});
mocha.run();