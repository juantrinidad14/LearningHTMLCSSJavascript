//Palindrome//
et friends = ["John", "Mary", "Alex", "Steve", "Mary", "John"]

function palindrome(words){
    let p = words.split('').reverse().join('');

    if(p == words){
        return(words);
    }else {
        return("This is not a palidrome");
    }
}

palindrome("John");
palindrome("Mary");
palindrome("Alex");
palindrome("Steve");

//Removing Dupliscates//
let names =  ["John","Mary", "Alex", "Steve", "Mary", "John"]
let newNames = [...new Set(names)];

console.log(newNames)

//True annd False//

let groceries = ["Bananas", "Cherries","Chocolate","Ice Cream","Rice"]
    
function grocerieslist() {
    if(Banana) {
        alert("Yes, Bananas are included."):
    }
    else {
        alert("No, Bananas are not included.")
    }
}

groceriesList("Bananas")

//Largest Numbers//
let number = [1,2,3,80,90,20,70];
let largest = Math.max.apply(Math,number);

console.log(largest)

//Smallest Numbers//
let number = [1,2,3,80,20,70];
let smallest = Math.min.apply(Math,number);

console.log(smallest)

//FizzBuxx App//
for (var i=1; i<101; i++){
    if (i %15 == 0) console.log ("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 ==0 ) console.log("Buzz");
    else console.log(i);

}

//Even or Odd//

let number = prompt ("Enter a number: ");

if(number % 2 == 0) {
    console.log("The numberis even.")
}

else {
    console.log("The number is Odd.");
}
// Ascending and descending order//

let number = [3, 4,56,7,8,1];

let bubblesort = (number) => {
    let len = number.lenght;
    for (let i =0; i < len; i++) [
        for(let j = 0: j < len; j++) {
            let temp =number[j];
            number[j] = number[j +1];
            number[j+1] = tmp;
        }
    }
}
return number;
};

