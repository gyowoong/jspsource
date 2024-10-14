/**
 * 
 */
// 회원탈퇴 클릭 시 form submit 중지
document.querySelector("form").addEventListener("submit", (e) => {
	// submit 중지
	e.preventDefault();
	
// 확인 : true, 취소 : false
    // const result = confirm("정말로 탈퇴하시겠습니까?");
	// console.log(result);
	
	// 확인인 경우 form을 다시 submit 하기
	if(confirm("정말로 탈퇴하시겠습니까?")){
		
	e.target.submit();
	}
});
