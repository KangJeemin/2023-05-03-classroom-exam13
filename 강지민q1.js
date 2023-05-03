function one(value){
    return value +1;
}
function two(value){
    return value +2;
}
function three(value){
    return value +3;
}
function four(value){
    return value +4;
}
function five(value){
    return value +5;
}

function q1(number){
    if(Number.isInteger(number)==true){
        setTimeout(()=>{
            one(number)
            setTimeout(()=>{
                two(number)
                setTimeout(()=>{
                    three(number)
                    setTimeout(()=>{
                        four(number)
                        setTimeout(()=>{
                            five(number)
                            console.log(number)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    }

}

console.log(q1(8))