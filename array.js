//finding out the last element in a array
let arr1 = new Array(3,7,34,90,12);
let slice = arr1.slice(-1);
console.log({slice});

//finding out the last element in the array 
let arr2 = new Array(true,"green","where",12,56);
let sliceArray = arr2.slice(-1);
console.log({sliceArray});

//joining array into a string
let stringmyPets=("Cow","Bird","Snake","Dog");
let x = stringmyPets.toString();
console.log({x});

//sorting an array
const arr3 = [-5,9,5,3,2,-3,6,8,4,1];
let k = arr3.sort();
console.log({k});

//remove duplicate in an array
let arr=["boy","man","girl",    "school","girl","woman"];
console.log(arr);

function removeDuplicates(arr){
    return [...new Set(arr)];

}
console.log(removeDuplicates(arr));

//searching for a element in a array using include method
let arr5 = ["the","way","x",4];
let w = arr5.includes("food");
if(w==true){
    console.log("food")
}
else{
console.log("the search word was not found")
}

//sorting a string 
let word ="renniw";
let array1 = word.split();
console.log(array1);
let s= array1.sort();
console.log(s);
const myString= array1.toString();
console.log(myString);


