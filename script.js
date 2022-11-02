//write your script here
function chgTableWidth200px(){
    document.getElementById('myTable').style.width="200px"
}
function chgTableWidth500px(){
    document.getElementById('myTable').style.width="500px"
}
function chgBorder1px(){
    document.getElementById('myTable').style.border="1px solid black";
    document.getElementById('myTable').style.borderSpacing="1px";
}
function chgBorder10px(){
    document.getElementById('myTable').style.border="10px solid black";
    document.getElementById('myTable').style.borderSpacing="10px";
}
function chgBorder20px(){
    document.getElementById('myTable').style.border="20px  solid black";
    document.getElementById('myTable').style.borderSpacing="20px";
}
function chgColorGreen(){
    document.getElementById("myTable").style.backgroundColor="green";
}
function chgColorBlue(){
    document.getElementById("myTable").style.backgroundColor="blue";
}
function chgColorPurple(){
    document.getElementById("myTable").style.backgroundColor="purple";
}
function chgColorOrange(){
    document.getElementById("myTable").style.backgroundColor="orange";
}
function reset(){
    document.getElementById("myTable").removeAttribute('style')
}
