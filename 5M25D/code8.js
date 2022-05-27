// 모듈을 추출합니다
const url = require('url');

//모듈을 사용합니다
const parsedObject = url.parse('http://wwww.hanbit.co.kr/sotr/books/look.php?p_coede=B4250257160');
console.log(parsedObject);