function StudentMark(){
       var a=Number(document.getElementById("Tamil").value);
       var b=Number(document.getElementById("English").value);
       var c=Number(document.getElementById("Maths").value);
       var d=Number(document.getElementById("Science").value);
       var e=Number(document.getElementById("Social").value);
       var t=document.getElementById("answer").value=a+b+c+d+e;
       document.getElementById("average").value=t/5;
}