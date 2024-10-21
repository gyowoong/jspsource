// 목록 클릭 시 
// actionForm action = "list.do" 수정 후 submit
const actionForm = document.querySelector("#actionForm");
document.querySelector("#readForm .btn-success").addEventListener("click",()=> {
    // actionForm bno 요소 제거
	
	actionForm.querySelector("[name='bno']").remove();
	actionForm.action = "/list.do";
    actionForm.submit();
	
});

// read.jsp 에서 수정 클릭 시 
// actionForm action="modify.do" 수정 후 submit
document.querySelector("#readForm .btn-primary").addEventListener("click",()=> {
	// 값이 있다면 실행
    actionForm.action = "/modify.do";
    actionForm.submit();
});

// modify.jsp 에서 수정 클릭 시 (submit) => submit 중지
// readForm password, title, content 값이 있는지 확인하고
// 없다면 message 띄우고, 있으면 submit

const readForm = document.querySelector("#readForm");
readForm.addEventListener("submit",(e)=> {
	e.preventDefalut();
	
	const title = readForm.querySelector("#title");
	const content = readForm.querySelector("#content");
	const password = readForm.querySelector("#password");
	
	if(title.value ==="") {
		alert("제목을 입력하세요");
		title.focus();
		return;
	} else if (content.value === "") {
		alert("내용을 입력하세요");
		content.focus();
		return;
	} else if (password.value === "") {
		alert("비밀번호를 입력하세요");
		password.focus();
		return;
	}
	
	
	readForm.submit();
});



// 삭제 클릭 시
// readForm action = /delete.do 변경 후 readForm submit

document.querySelector(".btn-danger").addEventListener("click",()=> {
	document.querySelector("#readForm").action = "/delete.do";
	document.querySelector("#readForm").submit();
});