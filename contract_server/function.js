// 일반 함수 생성
function func_1(){
    console.log("Hello World")
}
// 함수 호출
func_1()

// 매개변수가 존재하는 함수 선언
function func_2(a, b){
    result = a + b
    return result
}

console.log(func_2(5,3))

// 매개변수가 존재 기본값 지정 함수

function func_3(a, b=2){
    result = a + b
    return result
}

console.log(func_3(3))
