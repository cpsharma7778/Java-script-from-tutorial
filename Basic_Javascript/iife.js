// function iff(){
//     console.log("Db Connected");
// }



( function user(name){
//    Named iife
    console.log(`Db Connected ${name}`);
}

)("cp sharma");


(   (name)=>{
     console.log(`dbconnected ${name}`);

    
}
)("kp");


 const user=()=>{
    console.log("hello arrow")
} 
user();