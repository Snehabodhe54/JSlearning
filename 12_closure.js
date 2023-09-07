var globalVariable = 100;
function outer(){
    let outerFunVariable = 200;
    let innerFunction = function(){
        let innerFunVariable = 300;
        console.log(innerFunVariable);
        console.log(outerFunVariable);
        console.log(globalVariable);
    }
    return innerFunction; //If we take 'return innerFunction();' then we hv to call fun like 'outer();'
}
outer()();
 //let innerFun = outer();
//innerFun();
