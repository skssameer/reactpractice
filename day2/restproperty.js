const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(others); // { b: 2, c: 3 }

const [first, ...others2] = [1, 2, 3];
console.log(others2); // [2, 3]
function myBio(firstName, lastName, ...otherInfo) { 
    console.log(firstName,lastName) ;
  }
  
  // Invoke myBio function while passing five arguments to its parameters:
  myBio("sameer", "Shaikh", "CodeSweetly", "Web Developer", "Male");
  
  // The invocation above will return:
  ["CodeSweetly", "Web Developer", "Male"]