//package.json 파일에 "type" 속성이 moudule 일 때 적용됨
import assert from 'assert'


class CommonClass{
    _arr=[]; 
    constructor(...args){
        //가변 매개변수
        //console.log(args)
        //console.log(Array.isArray(args[0]))
        if (Array.isArray(args[0]))
            this._arr = args[0]
        else
            this.arr=args;
        //console.log("생성자이름 :", this.constructor.name)
    }
    clear(){
        this._arr = [] // 새로 빈 배열 할당 시 참조변수가 모두 사라짐
                        // GC가 해결
    }
    //배열의 복사본을 반환 - 복사본을 반환해야 실제 스택 or queue를 건드리지 못함
    //깊은 복사를 통해 건네야 한다. 
     toArray() {
        //배열의 deepcopy가 [...배열];
        return [...this._arr];
    } //배열로 이용해서 만들라고 배열 배열 반환 

    print(){

    }
    remove(){
        if(this.isEmpty)
            null
        //배열에서 앞의 것 제거 > shift
        if (this.isstack){
            this._arr.pop();
        }else if(this.isqueue){
             this._arr.shift();
        }

    }
    get isEmpty(){
        return this._arr.length == 0;
    }
    get peek(){
        if(this.isEmpty)
            null
        if(this.isstack)
            return this._arr[this._arr.length - 1]
        if(this.isqueue)
            return this._arr[0]
    }
    get poll(){
        if(this.isEmpty)
            null
        //배열에서 앞의 것 제거 > shift
        if (this.isstack){
            return this._arr.pop();
        }else if(this.isqueue){
            return this._arr.shift();
        }
    }
    get length(){
        return this._arr.length;
    }
    get isqueue(){
        return this.constructor.name == "Queue"
    }
    get isstack(){
        return this.constructor.name == "Stack"
    }
    get toStirng(){
        let strs = ""
        for(let i = 0; i < this._arr.length; i++){
            strs += this._arr[i]
        }
        return strs
    }
}

let c1 = new CommonClass();
let c2 = new CommonClass([1,2,3]); // 배열을 직접 전달
let c3 = new CommonClass(1,2,3); // 배열을 만들기 싫어서 데이터를 나열해 전달

let c4 = c2.toArray()
//공통 class
console.log(c2.toArray())
console.log(c4)
c4[1] = 10
console.log(c2.toArray())
console.log(c4)

class Stack extends CommonClass{
    
    constructor() {
        super();
        /**
         * 부모생성자를 내가 호출해야한다. super()
         * 가장 첫라인에 호출을 해야하며
         * 새로추가된 요소를 처리해야하니 생성자는 새로 만들어야한다.
         * 
         */
    }
    push(data){
        this._arr.push(data)
        return this;
    }
    pop(){
        if(this.length > 0)
            return this.poll;
    }
}
class Queue extends CommonClass{
    enqueue(data){
        this._arr.push(data)
        return this;
    }
    get dequeue(){
        if(this.length > 0)
            return this.poll;
    }
    
}

let s = new Stack()
s.push("A")
s.push("B")
s.push("B")


let q = new Queue()
q.enqueue("A")
q.enqueue("B")
q.enqueue("C")
q.enqueue("D")
q.enqueue("E")

console.log(q.dequeue);
console.log(q.toStirng);

//
assert.strictEqual("a", "a")
assert.deepStrictEqual(new String("a"), new Object("a"))

assert.deepStrictEqual(s.toArray(), ["A", "B"])