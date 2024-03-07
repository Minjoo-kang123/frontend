/**
 * 은닉성   -> 껍데기가 없을 시 오염이 심고 고장이 자주 남
 *              따라서 겉껍데기를 씌워서 보호하자
 *              클로저 처럼 : 데이터를 보호 및 접근권한을 부여하기 위해
 * 상속성   -> 근접한 형태의 혹은 필요한 것을 지닌 객체를 상속받아 만드는 것
 *              코드의 재활용도를 높이고 프레임 워크를 만드는데 가장 중요한 성격
 * 다형성   -> 다양한 성격, overloaging, overriding지원
 * 추상성 - 클래스 내부구조의 정확한 내용을 몰라도 사용이 가능한 성격
 *          추상성이 그개도하 될 수록 사용하기 편해짐
 *          
 * 
 * 3세대 : 구조적 프로그래밍언어
 *          모듈 단위로 프로그래밍을 함(함수, 프로시저 존재)
 *          함수는 반환값이 있고 프로
 */

class Person{
    /**
     * 객체 생성시 호출되는 특별한 유형의 함수
     * 호출자가 시스템이다.
     * 생성자는 자바 클래스명() 자바스크립트는 constructor() 로 정의한다.
     * 자바스크립트는 overloading 이 지원되지 않는다.
     * 생성자는 여러개 있으며 안된다.
     * 소멸자 => 객체가 소멸될 떄, 호쵤되어야하는데 GC가 있는 언어들은
     * 별도로 생성하지 않고 GC가 해결한다.
     */
    constructor(name = "홍길동", age = 25){
        this.name = name
        this.age = age
        console.log("person 객체 생성")
    }

    // 함수 앞에 function 붙이기 불가 
    display() {
        console.log(`${this.name}, ${this.age}`)
    }

    get getAge(){
        return this.age;
    } // 속성 : property - 함수와 변수의 중간쯤 존재
    // 만들때는 get 함수명(){...} 실제 사용시에는 변수처럼 이용

    set setAge(age){
        this.age = age
    }
    get getName(){
        return this.name;
    }
    set setName(Name){
        this.Name = Name
    }
}
let person = new Person()
person.display();
age = person.getAge

console.log(person.getAge)
person.setAge = 100
console.log(person.getAge)

//직