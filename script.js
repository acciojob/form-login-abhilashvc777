let form = document.querySelector("#form1")
const input = document.querySelectorAll(".a")
function getFormvalue(e) {
    //Write your code here
	let bag = ""
  for(let i=0; i<=input.length-1; i++){
	  bag = bag+input[i].value+" "
  }
   let g = bag.replace(/^\s+|\s+$/gm,'')
	return alert(g)
}
