//  function TwoNumberadd(a,b){
//      console.log(a+b);
//  }
//  TwoNumberadd(4,4)



// function TwoNumberadd(a,b){
//   return(a+b)
// }
// const result=TwoNumberadd(4,4);
// console.log(result);

// function restoperator( val1,val2,...num1){
//     return num1
// }
//        console.log(restoperator(100,101,102));


let Phone={
  model:"I-phone 15 pro max",
  price:"1,50,000"
}

function Phonedate(getdata){
  return (`model is ${getdata.model} And price is ${getdata.price} `);
}
  console.log(Phonedate(Phone));