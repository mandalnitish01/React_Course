export default function Basics(){


// function statement

// function getName(name) {
//     return name;
//   }
  
// or operator 

//   let a = false;
//   let b = false;
//   console.log(a || getName("Sangam Mukherjee"));
  
  //Template literals
  
//   let name1 = "John";
//   let name2 = "Doe";
//   console.log(name1 + " " + name2, `${name1} ${name2}`);
  
  //Ternary operator
  
//   const showRecipeOne = false;
//   function getRecipeOneName(recipeName) {
//     return recipeName;
//   }
  
//   function getRecipeTwoName(recipeName) {
//     return recipeName;
//   }
  
//   if (showRecipeOne) {
//     console.log(getRecipeOneName("Pizza"));
//   } else {
//     console.log(getRecipeTwoName("Coke"));
//   }
  
//   showRecipeOne
//     ? console.log(getRecipeOneName("Pizza"))
//     : console.log(getRecipeTwoName("Coke"));
 

// destructuring the object and array 


// #object 
//   const id = 1;
//   const productName = "Product Apple Watch";
//   const rating = 5;
  
//   const product = {
//     // id:id,
//     // productName:productName,
//     // rating:rating,
//     id,
//     rating,
//     productName
//   };
//   console.log(product);
  


//   const product2 = {
//     description: "Product 2 description",
//     id:1,
//     productName:"kutta",
//     rating:"8.5",
//   };
  
//   the normal way to take things into object that is by using .method 
  // const getProductTwoDescription = product2.description;
  // console.log(getProductTwoDescription);
//   the second thing and easy things is this 
        // 1.
            // const { id,description, productName,rating} = product2;
        // 2.
            //   const { description } = product2;
            //   const { productName } = product2;
            //   const { rating } = product2;
  
                // console.log(id);
                // console.log(description);
                // console.log(rating);
                // console.log(productName);
  
// #array 

//   const array = [1, 2, 3, 4];
  
//   let getArrayFirstValue = array[0];
//   let getArraySecondValue = array[1];
  
//   console.log(getArrayFirstValue, getArraySecondValue);
  
//   const [
//     arrayFirstElement,
//     arraySecondElement,
//     arrayThirdElement,
//     arrayFourthElement,
//     // arrayfifthElement,
//     // if you give extra parameter that are not given in the array the it will return undefined 
//   ] = array;
  
//   console.log(
//     arrayFirstElement,
//     arraySecondElement,
//     arrayThirdElement,
//     arrayFourthElement,
//     // arrayfifthElement,
    
//   );
  

//   //default parameters, spread and rest operators
  
// default parameter 
//   function mulOfTwoNumbers(num1 = 1, num2 = 2) {
//     console.log(num1, num2);
//     return num1 * num2;
//   }
//   console.log(mulOfTwoNumbers(10));
// //    by default num 2 take num2 value 
  

// spread operator
//   const array2 = [2, 3, 4];
//   const array3 = [10, 11, 12];
//   console.log([999, ...array2, 90, ...array3, 10000]);
  

//   function getInfo(a, ...c) {
//     console.log(a, c);
//     return "yo ka hobe hai!";
//   }
  
//   console.log(getInfo(1, 2, 3, 4, 5, 5, 6, 6, 7, 4, 2, 2, 2));
// //   output:- 1, [2, 3, 4, 5, 5, 6, 6, 7, 4, 2, 2, 2]

// map,filter,find , some,every,includes,indexOf,findIndex



const personsArray = [
    {
      name: "Person 0",
      age: 45,
      country: "USA",
    },
    {
      name: "Person 1",
      age: 30,
      country: "USA",
    },
    {
      name: "Person 2",
      age: 40,
      country: "RUSSIA",
    },
    {
      name: "Person 3",
      age: 50,
      country: "INDIA",
    },
    {
        name: "Person 4",
        age: 19,
        country: "INDIA",
      },
  ];

  // map 
// const newpersonsArray =  personsArray.map((Allperson,index)=>{
//     console.log(Allperson,index)
//    return Allperson.name;

//         // by using template literals we can add manu property hear
//         // return `${Allperson.name} age is ${Allperson.age} and he bellongs to  ${Allperson.country}.`
// })  
// console.log(newpersonsArray)

// #find :- find iis do that if the consition is true then it immeditaly return those value and it get exit from the object and do not check the further object property.
// const persomfromUSA = personsArray.find((everyperson,index)=>{
//     return everyperson.country ==="USA"
// });
// console.log(persomfromUSA)


// #filter :- filter is check all the given array object and if whatever is ture then filter is return to the user.

// const personfromUSA = personsArray.filter((USAperson,index)=>{
//     return USAperson.country === "INDIA"
// })
// console.log(personfromUSA)


// some:- it chech one by one each object but at the time of condition checking if it gets the true then it return true and not check further objects.
// let checkSomeArrayMethodWithExample = personsArray.some((singlePerson) => {
//     return singlePerson.age > 40;
//   });
//   console.log(checkSomeArrayMethodWithExample);


//   every :- it check the condition in each object if any one will be not satisfy the conditio then it will return false, if all the condition will satisfy then it gives us true. 
//   let checkEveryArrayMethodWithExample = personsArray.every((singlePerson) => {
//     return singlePerson.age > 25;
//   });
// console.log(checkEveryArrayMethodWithExample)

// include :- includes() returns true if a string contains a specified string.
// let text = "ke haal hai "
// let addedtext = text.includes("haal") 
// console.log(addedtext);


// const fruitsArray = ["apple", "banana", "orange"];

// console.log(fruitsArray.includes("sangam"), fruitsArray.indexOf("sangam"));

// let getIndexOfPersonWhoISFromRussia = personsArray.findIndex((singlePerson) => {
//   return singlePerson.country === "JAPAN";
// });
// console.log(getIndexOfPersonWhoISFromRussia);


// let getListOfproductsElement = document.querySelector(".list-of-products");
// function renderProducts(getProducts) {
//  let getListOfproductsElement = getProducts
//     .map((singleProductItem) => `${singleProductItem.title}  `)
//     .join(" ");
//     console.log(getListOfproductsElement)
// }

// async function fetchListOfProducts() {
//   try {
//     const apiResponse = await fetch("https://dummyjson.com/products", {
//       method: "GET",
//     });

//     const result = await apiResponse.json();

//     // console.log(result);

//     if (result?.products?.length > 0) renderProducts(result?.products);
//   } catch (e) {
//     console.log(e);
//   }
// }

// fetchListOfProducts();






















}