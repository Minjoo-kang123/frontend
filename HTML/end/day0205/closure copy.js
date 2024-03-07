let counter = 1;
function increase(){
    counter++
    return counter
}

console.log(increase());
console.log(increase());
console.log(increase());
counter = 100 //값의 오염 발생
console.log(increase());
console.log(increase());

/**
 * 값의 오염을 막기 위해 할 수 있는 것은
 * 함수 안에 함수를 만듬 / 함수는 외부함수 내부하수가 있다
 * 외부함수의 반환값에 내부함수의 주소를 반환한다.
 */

function myCounter(){
    let count = 0;
    function increase(){
        count++
        return count
    }
    return increase()
}

const counter1= myCounter()
/**
 * counter1에는 count 지역 변수화 increase 라는 함수가 존재
 * counter1에는 increase주소가 저장된다.  따라서 함수 실행 시 return increase를 만난다.
 * 따라서 increse 함수 참조가 counter1 이 된다.
 * 
 * java의 private
 */

console.log(counter1)
console.log(counter1)
console.log(counter1)
console.log(counter1)

const counter2= myCounter()


console.log(counter2)
console.log(counter2)

function myCounter2(){
    let count = 0;
    function chagedBy(value){
        count+= value
        return count
    }
    return {
        increase(){
            chagedBy(+1);
        },
        decrease(){
            chagedBy(-1);
        },
        value(){
            return count;
        }
    
    }
}