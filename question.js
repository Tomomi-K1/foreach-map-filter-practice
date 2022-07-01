/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    const newArr =[];
    arr.forEach(function(obj){
        obj[key] = value;
        newArr.push(obj);
     
        // return obj[key] = cpvalue;
    })
    return newArr;
  
}

///Springboard Solution : why don't we need empty array?

function addKeyAndValue(arr, key, value) {
    arr.forEach(function(val) {
      val[key] = value;
    });
    return arr;
  }

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
    const filter = arr.filter(function(value){
        return value===searchValue;
    })
    if(filter[0]===undefined){
        return undefined;
    } else {
        return filter[0];
    }
}
//I couldn't show undefined. empty [] array was showing up for the second example.

  //Springboard solution : what's [0]

  function find(arr, searchValue) {
    return arr.filter(function(val) {
      return val === searchValue;
    })[0];
  }