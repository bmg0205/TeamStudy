// 모듈을 추출합니다
const express = require('express'); 

//서버를 생성합니다.
const app = express(); //express() >> 서버 애플리케이션 객체를 생성합니다.

// request 이벤트 리스너를 설정합니다.
app.use((req, res) => { // app.use >> 요청이 왔을 때 실행할 함수를 지정합니다.
    res.send('<h1>hello express</h1>');
});

// 서버를 실행합니다.
app.listen(3000, () => { // app.listen >> 서버를 실행합니다.
    console.log('server running at');
});

// npm install express@4