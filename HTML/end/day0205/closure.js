let user;
/**
 * 블럭안에 객체가 선언되면
 * 객체참조변수는 스택에 존재 -> but 객체 자체는 힙공간에 존재함
 * privateUser는 블럭 안에 존재하는 상수 > 힙공간에 있음
 * {"name" : 홍길동, age : 14} >> 객체자체에는 힙이 있음
 * 블럭을 따로 정이ㅡ하면 블럭 내에만 존재
 */

{
    const privateUser = {"name" : 홍길동, age : 14};
    console.log(privateUser)
    user = privateUser; // 참조를 외부변수에 맡긴다.
}


// privateUser ===> {"name" : 홍길동, age : 14}
// user ====> {"name" : 홍길동, age : 14}
/**
 * 블럭 종료 시 privateUser가 사라지기 때문에 GC가 
 * 메모리가 부족한 상황 시 {"name" : 홍길동, age : 14}를 삭제하려 하지만
 * 외부에서 {"name" : 홍길동, age : 14}를 참조했기 떄문에 이를 삭제하지 않는다.
 */