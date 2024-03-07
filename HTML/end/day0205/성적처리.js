class ScoreData{
    constructor(name = "예준이", kor = 0, eng = 0, mat =0){
        this.name = name
        this.kor = kor
        this.eng =eng
        this.mat = mat
        this.process
    }
    process(){
        this.total = this.kor + this.eng + this.mat
    }
    toString(){
        return `${this.name}의 점수는 kor = ${this.kor} eng = ${this.eng} mat = ${this.mat}`
    }
}

class ScoreMgr{
    constructor() {
        this.dataList = []
    }
    append(data){
        this.dataList.push(data);
    }
    display(){
        this.dataList.forEach((score)=>{
            console.log(score.toString())
            
        })
    }
}

let mrg = new ScoreMgr()
mrg.append(new ScoreData("A", 90,90,90));
mrg.append(new ScoreData("B", 90,80,90));
mrg.append(new ScoreData("C", 90,70,70));
mrg.append(new ScoreData("D", 90,80,80));
mrg.append(new ScoreData("E", 90,90,90));

mrg.display()

/**
 * forEaxch
 * find : boolean 값을 반환해야한다. 첫번재 것을 찾음 멈추고 객체반환
 * filter boolena 값을 반환해야 한다. 삼환값이 true 인 데이터만 묶어서 객체배열 반환
 */

class MiddleScore extends ScoreData{
    constructor() {
        super();
        /**
         * 부모생성자를 내가 호출해야한다. super()
         * 가장 첫라인에 호출을 해야하며
         * 새로추가된 요소를 처리해야하니 생성자는 새로 만들어야한다.
         * 
         */
    }
}

console.log("상속받은 객체생성")
m1 = new MiddleScore()
console.log(m1.toString())