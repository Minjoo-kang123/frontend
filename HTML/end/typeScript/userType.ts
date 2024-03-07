/**
 * 타입스크립트에서 사용하는 구조체이다.
 * 특정 정보의 묶음을 사용 할 때 어떤 정보가 빠지지 않는지 확인하기 좋다.
 */
type PersonInfo = {
    id:number;
    name:string;
    age:number;
    address:string;
}

let person1:PersonInfo;
person1 = {id:1, name:"남예준", age : 12, address :"아스테룸 134-1"}
console.log(person1)