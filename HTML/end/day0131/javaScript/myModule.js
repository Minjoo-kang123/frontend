function sigma(limit = 10){
    if (limit < 10 ){
        return;//값 지정 x시 undifined 전달
    }
    let sum = 0
    for(i = 1; i <= limit; i++){
        sum += i;
    } 
    return sum;
}

function upper(s="hello"){
    return s.toUpperCase();
}
console.log(sigma())
console.log(sigma(100))

exports.sigma = sigma; //함수 명을 이로 설정하겠다는 의미
exports.upper = upper; //함수 명을 이로 설정하겠다는 의미