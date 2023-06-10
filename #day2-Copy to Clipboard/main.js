let copyText = document.querySelector(".copy-text");
function myfunction(){
    let input = copyText.querySelector("input.text");
	input.select();
    navigator.clipboard.writeText(input.value);
    document.getElementById("copied").innerHTML = "Copied!!";
	copyText.classList.add("active");
	window.getSelection().removeAllRanges();
	setTimeout(function () {
		copyText.classList.remove("active");
	}, 2500);
}


/*

copyText.querySelector("button").addEventListener("click", function () {
	let input = copyText.querySelector("input.text");
	input.select();
	document.execCommand("copy");
    navigator.clipboard.writeText(input.value);
	copyText.classList.add("active");
	window.getSelection().removeAllRanges();
	setTimeout(function () {
		copyText.classList.remove("active");
	}, 2500);
});

*/