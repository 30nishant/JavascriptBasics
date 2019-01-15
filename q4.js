let arr = [
    { ver:113},
    { ver:111},
    { ver:112}
];
// Ascending Order
class SortArray {
    constructor(arr,sort) {
        this.arr = arr;
        
        this.sort = function(arr) {
            for(let i=0 ; i<arr.length ; i++){
                for(let j=0 ; j<arr.length ; j++){
                    if(arr[j].ver > arr[i].ver){
                        let temp = arr[i].ver;
                        arr[i].ver = arr[j].ver;
                        arr[j].ver = temp;
                    }
                }
            }
            return arr;
        }

        this.new = function getSortedArray(arr) {
            Object.defineProperty(SortedArray,'arr',{
                get function() {
                    return arr;
                }
            });
            return arr;
        }
    }
}

class sortObjectArray extends SortArray {
    constructor(arr,sort) {
        super(arr,sort);
    }
}
let obj = new sortObjectArray();
let ansSort = obj.sort(arr);
console.log(ansSort);