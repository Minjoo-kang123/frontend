let s1 = "We saided to find Something"
let s2 = "Like vurtual idol "
let s3 = "We have to like"

//대소문자 상관 있음
console.log("/like/", "대소문자 관계있음")
let regexp = new RegExp(/like/);
console.log(s1, regexp.test(s1));
console.log(s2, regexp.test(s2));
console.log(s3, regexp.test(s3));

//대소문자 상관 없음 슬래시 뒤 i 포함시 /i
console.log("\n/like/i", "대소문자 관계없음")
let regexp2 = new RegExp(/like/i);
console.log(s1, regexp2.test(s1));
console.log(s2, regexp2.test(s2));
console.log(s3, regexp2.test(s3));

//^ < 시작하는가
console.log("\n/^like/i", "대소문자 관계없이 like로 시작하는가")
let regexp3 = new RegExp(/^like/i);
console.log(s1, regexp3.test(s1));
console.log(s2, regexp3.test(s2));
console.log(s3, regexp3.test(s3));

//대소문자 상관 없음 슬래시 뒤 i 포함시 /i
console.log("\n/^like/i", "대소문자 관계없이 like로 끝나는가")
let regexp4 = new RegExp(/like$/i);
console.log(s1, regexp4.test(s1));
console.log(s1, regexp4.exec(s1));
console.log(s2, regexp4.test(s2));
console.log(s3, regexp4.exec(s3));

//대소문자 상관 없음 슬래시 뒤 i 포함시 /i
console.log("\n/(\d{3})-(\d{4})-(\d{4})/ 숫자 정규화 및 그룹화")
s5 = "010-2222-3333";
let regexp5 = new RegExp(/(\d{3})-(\d{4})-(\d{4})/ );
console.log(s5, regexp5.test(s5));
console.log(s5, regexp5.exec(s5));

/**
 * exec함수는 해당 패턴에 일치자가 없으면 null 반환
 * 일치자로는 단어, 인덱스, 입력문자, groups가 있다
 * ex > 전화번호 앞자리는 과거 010 011 016 018 등이 있었다
 * /d{3} >> 숫자로 시작하는 세자리
 * /\d{3}-\d{4}-\d{4}/ > 숫자로 각 3자리 4자리 4자리로 해라
 *  >> 000-0000-0000의 패턴으로 해라
 * /(\d{3})-(\d{4})-(\d{4})/ 
 * 괄호는 보통 그룹화를 의미한다.
 */

s = `
Your voice is music to my ears, I'm wide awake
Stuck on the way your frequencies resonate
You say that no matter what, you're watching over me
I knew when I first read your lips
Only angels speak like this
You encourage everyone without trying
All of your boundaries keep me in line
God is within us, what you're always saying
Your energy is enough to suffice
Only angels speak like this
`
/**
 * test > 존재 유무만 판단한다.
 * exec > 첫번째 것만 찾는다
 * ig option >> 전체에서 대소문자 상관없이 다 찾아봐라
 * exec 함수는 한개만 찾아준다
 */
console.log("------------")
console.log(/like/i.test(s))
console.log(/like/i.exec(s))
console.log(/like/ig.exec(s))
console.log(/like/igm.exec(s))

/**
 * 여러번 등장할 경우에 >> match 함수를 사용한다.
 * 문자열.match(정규식)
 * match함수는 정규식에 속한 함수가 아니라 문자열에 속하는 함수이다.
 * 매개변수로 정규식(리터럴)을 받아서 이를 판단한다.
 */

console.log("---match 함수 -- 문자열.match(정규식");
result = s.match(/like/ig);
console.log(result);

//그룹나눠보기

s1 = "노아의 전화번호는 010-1234-5678이고 예준이네는 134-1입니다"
regexp6 = /\d{3}-\d{4}-\d{4}/ 
console.log(regexp6.exec(s1))
regexp7 = /(\d{3})-(\d{4})-(\d{4})/ 
result = regexp7.exec(s1)
console.log(result[0], result[1], result[2], result[3])


//네이밍 그룹화 - 이름을 줄 수 있다.
//(?<그룹명>정규식)
regexp8 = /(?<ph1>\d{3})-(?<ph2>\d{4})-(?<ph3>\d{4})/ 
result = regexp8.exec(s1)
console.log(result.groups["ph1"], result.groups["ph2"], result.groups["ph3"])

/**
 * 문장에서 휴대폰 번호만 찾기
 */

s10 = `
이름: 김지연, 전화번호: 010-1234-5678
이름: 이승우, 전화번호: 010-2345-6789
이름: 박지현, 전화번호: 010-3456-7890
이름: 최영호, 전화번호: 010-4567-8901
이름: 정미경, 전화번호: 010-5678-9012
이름: 홍성민, 전화번호: 010-6789-0123
`

regexp8 = /(?<ph1>\d{3})-(?<ph2>\d{4})-(?<ph3>\d{4})/ 
result = s10.match(/(?<ph1>\d{3})-(?<ph2>\d{4})-(?<ph3>\d{4})/ig)
console.log(result)

//search 
result = s10.search(/(?<ph1>\d{3})-(?<ph2>\d{4})-(?<ph3>\d{4})/ig)
console.log(result)

/**
 * search > 문자열 함수로 찾아서 인덱스를 반환한다.
 * 첫번째만 찾으며 없으면 -1을 반환한다.
 * 정수를 반환하는 함수를 만들 시 index의 시작은 0
 * 반환값이 객체이여야 하는 경우는 참조를 반환해야 하는데 -1을 가지지 못한다.
 * 0 or null을 반환한다.
 * js의 경우 반환값이 없으면 undifined가 반환된다.
 *
 */


/**
 * replace => 패턴 a >> 패턴 b 로변경 가능하다
 * 문자열에서 함수를 가지고 있다
 * ex ) 문자열을 like > love로 변경
 * 바뀐 문자열을반환한다. 기존 문자열을 변경하는 것이 아니다.
 * readonly의 문자열을 반환해준다.
 * replace > 1개 // replaceAll 모두
 * 문자열 , 문자열
 * 정규식 , 문자열
 * 이 가능하다.
 */

result1 = s.replace("like", "love")
console.log(result1)


console.log("")
result1 = s.replaceAll(/like/ig, "love")
console.log(result1)

//replace는 callbak함수가 있다.
console.log("---------callback------")
result2 = s.replace(/like/ig, function(a, b, c){
    console.log("a", a)
    console.log("b", b)
    console.log("c", c)
})

console.log("---------callback2------")
result2 = s.replace(/like/ig, function(item, index){
    console.log(item, index)
    return item.toUpperCase();
})
console.log(result2)

regexp11 = new RegExp(/(\d{3})-(\d{4})-(\d{4})/ig)
result3 = s10.replace(regexp11, function(item, index){
    console.log(item, index)
})

//$1,$2,$3등은 그룹화를 사용했을 떄만 작동된다.
regexp11 = new RegExp(/(\d{3})-(\d{4})-(\d{4})/ig)
result3 = s10.replace(regexp11, '$1$2$3')
console.log(result3)



let sen1 = "I love my cat"
let sen2 = "I love my Cat"
let sen3 = "Cat is cute"
reg = /cat/ // == reg = new RegExp(/cat/)
console.log(reg.test(sen1), reg.test(sen2))

reg = /cat/i
console.log(reg.test(sen1), reg.test(sen2))

reg = /^cat/i
console.log(reg.test(sen1), reg.test(sen2), reg.test(sen3))

reg = /cat$/i
console.log(reg.test(sen1), reg.test(sen2), reg.test(sen3))

reg = /c.t/i // .은 한글자면 됨 어떤 글자든 .의 갯수로 사이 글자의 갯수 선택됨
console.log(reg.test("ct")) //글자가 부족해서 false
console.log(reg.test("cat")) // true
console.log(reg.test("cccccct"))
console.log(reg.test("c231cadt"))


// --------- [] > 괄호안의 문자들 중 하나라도 있을 시 true

console.log("\n\n -------[KkcC]")

console.log(/[KkcC]/.test('korea'));
console.log(/[KkcC]/.test('Korea'));
console.log(/[KkcC]/.test('corea'));
console.log(/[KkcC]/.test('Corea'));
console.log(/[KkcC]/.test('abc'));
console.log(/[KkcC]/.test('AkbeWw'));

console.log("\n\n ---------^[KkcC]")
console.log(/^[KkcC]/.test('korea'));
console.log(/^[KkcC]/.test('Korea'));
console.log(/^[KkcC]/.test('corea'));
console.log(/^[KkcC]/.test('Corea'));
console.log(/^[KkcC]/.test('abc'));
console.log(/^[KkcC]/.test('AkbeWw'));

console.log("\n\n ---------a[0-9]b") //a와 b 사이에 숫자가 반드시 하나 존재해야함
console.log(/a[0-9]b/.test('ab'));
console.log(/a[0-9]b/.test('a9b'));
console.log(/a[0-9]b/.test('a99b'));

/**
 * /^[0-9]/ > 안에 있는 글자로 시작한다면 이지만
 * /[^0-9]/  > 안에 있는 문자로 시작한다면으로 인식된다.
 * /^[^0-9]/ > 안에 있는 문자로 시작하지 않는다면 으로 인식한다.
 */
console.log("a와 b 사이에 숫자를 제외한 문자가 반드시 하나 존재해야한다")
console.log("/a[^0-9]b/", /a[^0-9]b/.test("a$b"))
console.log("/a[^0-9]b/", /a[^0-9]b/.test("a8b"))
console.log("/a[^0-9]b/", /a[^0-9]b/.test("aa123avb"))

console.log("\n\n첫글자가 숫자가 안될 떄")
console.log("/^[^0-9]/ a$b", /^[^0-9]/.test("a$b"))
console.log("/^[^0-9]/ a3b", /^[^0-9]/.test("a3b"))
console.log("/^[^0-9]/ 3a3b", /^[^0-9]/.test("3a3b"))

console.log("\n\n 문자가 하나라도 포함이 되었는가")
console.log("/[^0-9]/ a$b", /[^0-9]/.test("a$b"))
console.log("/[^0-9]/ a3b", /[^0-9]/.test("123"))
console.log("/[^0-9]/ 3a3b", /[^0-9]/.test("3a3b"))

console.log("\n\n ======*===== \n ")//a라는 글자가 b앞에 0번 있어도 
                                    //되고 1번 있어도 n번 있어도 된다.
console.log("/a*b/ a$b", /a*b/.test("a$b"))
console.log("/a*b/ a3b", /a*b/.test("a3b"))
console.log("/a*b/ 3a3b", /a*b/.test("3a3b"))
console.log("/a*b/ 3a3b", /a*b/.test("aabaabbbb"))


console.log("\n\n ======+===== \n ")//a가 1번 이상 반복되면
console.log("/a+b/ a$b", /a+b/.exec("a$b"))
console.log("/a+/ a$b", /a+/.test("a$ba"))
console.log("/a+b/ a3b", /a+b/.test("a3b"))
console.log("/a+b/ 3a3b", /a+b/.test("3adb"))
console.log("/a+b/ aabaabbbb", /a+b/.test("aabaabbbb"))

console.log("\n----------- {n}번 반복 ---------")
console.log("/[0-9]{3}/", /[0-9]{3}/.test("1abc"))
console.log("/[0-9]{3}/", /[0-9]{3}/.test("123abb"))
console.log("/[0-9]{3}/", /[0-9]{3}/.test("a19bc3"))
console.log("/[0-9]{3}/", /[0-9]{3}/.test("aa12aa998bc"))

/**
 * \w 문자의 의미
 * \d 숫자의 의미
 * \b 시작과 끝이 공통인가
 */

function ValidateEmail(mail)
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
    {
        return (true)
    }
    return (false)
}

regexp12 = new RegExp(/\d{2,3}-\d{3,4}-\d{4}/);
console.log(regexp12.test('123-456-1111'))

// \b > 단어의 경계를 결정짓는다.
regexp12 = new RegExp(/\b\d{2,3}-\d{3,4}-\d{4}\b/);
console.log(regexp12.test('123123-456-1111'))
console.log(regexp12.test('123-456-1111'))