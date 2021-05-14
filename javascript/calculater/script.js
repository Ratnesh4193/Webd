function formatted_text(num){
	if(num=="-")return "-"
	n=Number(num);
	s=n.toLocaleString("en");
	return s;
}
function unformatted_text(num){
	if(num=="-")return "-"
	return Number(num.replace(/,/g,''))
}
function get_history(){
	return document.getElementById("history-value").innerHTML;
}
function get_output(){
	return document.getElementById("output-value").innerHTML;
}
function set_history(num){
	document.getElementById("history-value").innerHTML=num;
}
function set_output(num){
	if( num=="-"){
		document.getElementById("output-value").innerHTML="-";
		return
	}
	let n="";
	if(num!="")n=formatted_text(num); 
	document.getElementById("output-value").innerHTML=n;
}

let operator=document.getElementsByClassName("operator")
for(let i=0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		let op=this.id
		let output=get_output()
		if(op=="clear"){	
			set_history("")
			set_output("0")
		}
		else if(op=="backspace"){
			if(output!=""){
				let s=unformatted_text(output).toString();
				s=s.slice(0,s.length-1);
				set_output(s)
			}
			else set_output("0")
		}
		else if(op=="="){
			if(output!="" && output!="-"){
				output=unformatted_text(output);
				let history=get_history();
				ans=eval(history+output)
				set_output(ans);
				set_history("");
			}
			else set_output("0")

		} 
		else {

			if(output!="" && output!="0" && output!="-")
			{
				let num=unformatted_text(get_output());
				num+=op;
				his=get_history()
				set_history(his+num)
				set_output("")
			}
			else if(op=="-")set_output("-");
			else set_output("0")

		}

	})
}
let number=document.getElementsByClassName("number")
for(let i=0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		output=get_output()
		let num=unformatted_text(output);
		num+=this.id;
		set_output(num)
	})
}
