// proecess 객체의 속성과 메소드를 사용합니다.
console.log('- process.arch:', process.arch); //프로세서의 아키텍처를 나타냅니다.
console.log('- process.platform:', process.platform); //플랫폼을 나타냅니다.
console.log('- process.connected:', process.connected); 
console.log('- process.execArgv:', process.execArgv); 
console.log('- process.exitCode:', process.exitCode);// 프로그램을 종료합니다
console.log('- process.mainModule:', process.mainModule); 
console.log('- process.release:', process.release); 
console.log('- process.memoryUsage():', process.memoryUsage()); //메모리 사용 정보 객체를 리턴합니다.
console.log('- process.uptime():', process.uptime()); //현재 프로그램이 실행된 시간을 리턴합니다.

//강제로 종료합니다
process.exit();

//웨에서 강제 종료되었으므로 이후 부분은 실행되지 않습니다.
console.log('테스트');
console.log('테스트');
console.log('테스트');