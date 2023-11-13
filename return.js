let a = 5;

a++;  // a+1;
++a;  // a = a + 1;

const arr = ["회사소개", "제품소개", "고객센터"];  // array, object는 참조값(주소) 저장
arr[3] = "아무값";

const arr2 = ["네이버", "다음", "구글"];
const arr3 = [...arr];

const obj = {};
const obj2 = { ...obj };

console.log(arr3);


//  변수 x를 써서 for in문으로 콘솔 출력
for (x in arr) {
  // console.log(arr[x]);
}

for (var x = 0; x < arr.length; x++) {
  // console.log(arr[x]);
}



// arr.map()