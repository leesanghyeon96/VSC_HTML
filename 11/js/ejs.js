var age = 23;

/* 자바스크립트를 사용해서 HTML 문서의 스타일을 적용 */

document.write("<div style='color:red; font-size:24px;'> 외부 자바스크립트 파일 </div>");
                /* body내에 html태그를 적용할 수 있다. 밖을 ""로 처리했기에 안쪽을 ''로 처리(두개는 바뀔 수 있다.) */
document.write('<div style="color:red; font-size:24px;"> 외부 자바스크립트 파일 </div>');
document.write("당신의 나이는 : " + age + "입니다.");