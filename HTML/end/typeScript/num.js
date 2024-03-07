var msg = "hello";
var profile = { name: "홍길동", age: 17 };
//msg = "안녕하세요"
/**
 * msg는 const로 선언되어 내용을 변경할 수 없다.
 * hello라는 문자열이 저장된 주소를 msg가 받는다.
 * 안녕하세요는 다른 주소에 저장된다. 따라서 msg의 내용변경이 불가
 */
//profile = {name : "남예준", age : 17} // 위의 객체와 다른 객체 할당은 불가능
profile.name = "남예준"; //profile이 소유하고 있는 객체의 name과 age는 상수가 아니다.
// 따라서 내부의 값은 변경이 가능하며, profile은 계속 동일한 객체 주소를 가질 수 있따.
console.log(msg);
