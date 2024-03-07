/*
    업캐스팅 : 자식객체가 부모타입 참조변수에 대입된다.
                object obj = new Person();

                Person 타입(자식) => 잠깐 Object(부모)으로 형전환이 방생함
                자식이 부모타입으로 올라가는 것을 타입전환(업캐스팅)이라고 하며 언제나 가능하다
    다운캐스팅  : 부모객체가 자식타입 참조변수에 대입된다
                    자식타입 참조변수는 부모객체가 갖고 있지 않은 요소들도 접근할 수 있다고
                    생각하기에 허용하면 안된다. 원칙이 불가하다.
                    그러나 함수의 매개변수로 전달 될 때 원래는 자식객체 => 부모객체타입
                    으로 전환ㄴ된 경우에는 원상복구가 가능해야 한다.
                    그래서 이떄는 예외적으로 강제 형전환자에 의해 가능하다.

                    Person p1 = (Person)obj;

    배열 : 연속된 메모리를 필요로함 10m 10m 20m 

    링크드리스트 : 불연속적메모리를 필요로한다
                    새로운 데이터가 들어올때마다 메모리 생성해서 서로 연결을 시킨다
                    장점 : 중간에 추가 및 삭제가 편함
                    단점 : 느리다 메모리 차지도 많음
                    데이터 공간 + 참조 공간이 필요 데이터가 많을 시 참조 공간 낭비가 크다
                    단일 링크드리스트 > 한쪽방향 검색 가능
                    더블링크드리스트 > 양쪽방향 검생가능
                */
    
class nodeData{
    data;
    next;

    constructor(data){
        this.data = data
        this.next = null
    }
}

class MyList{
    constructor(){
        this.head = new nodeData();
        this.tail = new nodeData();
        this.head.next = this.tail;
        this.tail.next = this.tail;
    }

    insertHead(data){
        let temp = new nodeData();
        temp.data = data;
        temp.next = this.head.next;
        this.head.next = temp;
    }
    deleteHead(){
        if(this.head.next == this.tail)
            return null
        let a = this.head.next.data
        this.head.next = this.head.next.next;
        return a
    }

    insertOrdered(data){
        let temp = new nodeData();
        temp.data = data;

        let t1= this.head.next;
        let t2 = this.head;
        let flag = false
        while(t1 != this.tail && !flag){
            if(t1.data < temp.data){
                t1 = t1.next
                t2 = t2.next
            }else{
                flag = true
            }
        }
        t2.next = temp;
        temp.next = t1;

    }
    deleteItem(data){
        let t1= this.head;
        let t2 = this.head.next;
        let flag = false
        while(t2 != this.tail && !flag){
            if(t2.data == data){
                flag = true
            }else{
                t1 = t1.next
                t2 = t2.next
            }
        }
        if(flag == true)
            t1.next = t2.next;
        else   
            console.log(`${data}를 찾을 수 없습니다.`)
    }

    display(){
        let trace = this.head.next
        while(trace != this.tail){
            console.log(trace.data + "->")
            trace = trace.next
        }
    }
    get isEmpty(){
        return this.head.next = this.tail
    }
}

let linked = new MyList()

linked.insertOrdered("A");
linked.insertOrdered("B");
linked.insertOrdered("C");
linked.insertOrdered("D");
linked.insertOrdered("E");
linked.display()
linked.deleteItem("A")
linked.deleteItem("A")

linked.display()

/**
 * 데이터와 실제 데이터에 대한 다음번 요소의 참조 필요
 * 나의 다음 요소만 알아 링크가 끊어지면 다음 요소를 알 수 없음
 * 중간의 요소를 끼워 넣거나, 중간의 요소를 삭제하기 쉽다
 * 배열의 경우 n번째가 지워짐 후에 따라오는 노드를 n-1 로 모두 옮겨야한다.
 * 배열 요소 추가도 동일하다. 오버헤드가 크다.
 */

class Stack{
    data = new MyList()
    push(data){
        this.data.insertHead(data)
    }
    pop(){
        if(!this.isEmpty){
            return this.data.deleteHead();
        }
    }
}

let stack = new Stack()

stack.push("a")
stack.push("b")
stack.push("c")
stack.push("d")
stack.push("e")
stack.push("f")

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())