const calculator={displayValue:"0",firstNum:"0",secondNum:null,checkForSecondNum:!1,operator:null,calculated:!1,history:null};function update(){const display=document.querySelector("#displaynum");const history=document.querySelector("#displayhistory");calculator.displayValue=String(calculator.displayValue).substring(0,16);display.innerHTML=calculator.displayValue;history.innerHTML=calculator.history;if(calculator.displayValue.length>=15){display.style.fontSize="24px";display.innerHTML=calculator.displayValue.substring(0,16);return}else if(calculator.displayValue.length<15){display.style.fontSize="32px"}}
update();keyHandler();btnHandler();function keyHandler(e){document.onkeydown=function(e){const btnList=document.querySelectorAll(".btn");let keyValues=[];for(i=0;i<btnList.length;i++){keyValues.push(btnList[i].value)}
if(keyValues.includes(e.key)){if(e.key==="*"||e.key==="-"||e.key==="+"){signs(e.key);update();return}
switch(e.keyCode){case 190:addDecimal(e.key);update();break;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:showDigit(e.key);update();break;case 191:signs("÷");update();break}}else{switch(e.keyCode){case 65:signs("+");update();break;case 68:signs("÷");update();break;case 83:signs("-");update();break;case 88:signs("*");update();break;case 13:equals("=");showHistory();update();break;case 8:backspace("⌫");update();break;case 9:clear();update();break;case 192:squareroot();showHistory();update();break}}}}
function btnHandler(){const allButtons=document.querySelector(".calcbtns");allButtons.addEventListener("click",function(e){const pressed=e.target;if(!pressed.classList.contains("btn")){return}
if(pressed.classList.contains("operator")){signs(pressed.value);update();return}
if(pressed.classList.contains("decimal")){addDecimal(pressed.value);update();return}
if(pressed.classList.contains("clear")){clear();update();return}
if(pressed.classList.contains("equals")){equals(pressed.value);showHistory();update();return}
if(pressed.classList.contains("num")){showDigit(pressed.value);update();return}
if(pressed.classList.contains("backspace")){backspace(pressed.value);update();return}
if(pressed.classList.contains("sqrt")){squareroot();showHistory();update()}})}
function showDigit(digit){const displayValue=calculator.displayValue;if(calculator.calculated===!0){if(calculator.checkForSecondNum===!0){calculator.calculated=!1}else{calculator.calculated=!1;calculator.firstNum=digit;calculator.displayValue=calculator.firstNum;return}}
if(calculator.checkForSecondNum===!0){if(calculator.displayValue.includes("+")){calculator.secondNum=displayValue.split("+")[1]}
if(calculator.displayValue.includes("-")){let count=calculator.displayValue.split("-").length-1;if(count===3){calculator.displayValue=displayValue+digit;calculator.secondNum=calculator.secondNum+digit;return}
if(count===1&&calculator.operator==="-"){calculator.secondNum=displayValue.split("-")[1]}
if(calculator.firstNum.includes("-")&&calculator.operator==="-"){let hold=displayValue.split("-")[1];calculator.secondNum=displayValue.split(hold)[1];calculator.secondNum=calculator.secondNum.substr(1)}
if(!calculator.firstNum.includes("-")&&!calculator.operator==="-"){calculator.secondNum="-"+calculator.secondNum.split("-")[1]}}
if(calculator.displayValue.includes("*")){calculator.secondNum=displayValue.split("*")[1]}
if(calculator.displayValue.includes("÷")){calculator.secondNum=displayValue.split("÷")[1]}}
if(calculator.checkForSecondNum){calculator.displayValue=displayValue+digit;calculator.secondNum=calculator.secondNum+digit;return}
if(displayValue==="0"){calculator.displayValue=digit;calculator.firstNum=digit}else{calculator.displayValue=displayValue+digit;calculator.firstNum=calculator.firstNum+digit}}
function addDecimal(decimal){displayValue=calculator.displayValue;secondNum=calculator.secondNum;if(!displayValue.includes(decimal)){calculator.displayValue=displayValue+=decimal;calculator.firstNum=displayValue;return}
if(secondNum.includes(decimal)){return}
if(calculator.checkForSecondNum===!0){if(displayValue.includes("+")){calculator.secondNum=displayValue.split("+")[1]+=decimal}
if(displayValue.includes("-")){calculator.secondNum=displayValue.split("-")[1]+=decimal}
if(displayValue.includes("*")){calculator.secondNum=displayValue.split("*")[1]+=decimal}
if(displayValue.includes("÷")){calculator.secondNum=displayValue.split("÷")[1]+=decimal}
calculator.displayValue=displayValue+=decimal;calculator.secondNum=displayValue+=decimal}}
function signs(operator){if(calculator.displayValue==="0"&&operator==="-"){calculator.displayValue=operator;calculator.firstNum=operator;return}
if(calculator.operator===null){calculator.operator=operator;calculator.displayValue=calculator.displayValue+operator;calculator.checkForSecondNum=!0;return}
if(calculator.checkForSecondNum===!0&&operator==="-"){if(calculator.secondNum===null){calculator.displayValue=calculator.displayValue+operator;calculator.secondNum=operator}
if(calculator.secondNum.includes("-")){return}}}
function equals(){if(calculator.operator.includes("+")){answer=parseFloat(calculator.firstNum)+parseFloat(calculator.secondNum);calculator.displayValue=answer}
if(calculator.operator.includes("-")){answer=parseFloat(calculator.firstNum)-parseFloat(calculator.secondNum);calculator.displayValue=answer}
if(calculator.operator.includes("*")){answer=parseFloat(calculator.firstNum)*parseFloat(calculator.secondNum);calculator.displayValue=answer}
if(calculator.operator.includes("÷")){answer=parseFloat(calculator.firstNum)/parseFloat(calculator.secondNum);calculator.displayValue=answer}
calculator.checkForSecondNum=!1;calculator.calculated=!0}
function squareroot(){let square=Math.sqrt(calculator.displayValue);calculator.displayValue=square}
function clear(){calculator.displayValue="0";calculator.firstNum=null;calculator.secondNum=null;calculator.checkForSecondNum=!1;calculator.operator=null;calculator.calculated=!1;calculator.history=null}
function backspace(){let length=calculator.displayValue.length;let trimmed=calculator.displayValue.substring(0,length-1);if(!calculator.displayValue){calculator.displayValue=0}
if(calculator.displayValue==="Na"){clear()}
if(calculator.operator){let str=String(calculator.displayValue);let end=str.charAt(str.length-1);if(end==="+"||end==="-"||end==="*"||end==="÷")
calculator.operator=null}
calculator.displayValue=trimmed;if(length<=1){clear()}}
function showHistory(){const history=document.querySelector("#displayhistory");let first=calculator.firstNum;let op=calculator.operator;let second=calculator.secondNum;if(op===null&&second===null){calculator.history="√"+first;history.innerHTML=calculator.history;calculator.firstNum=calculator.displayValue.toString();return}
calculator.history=first+op+second;history.innerHTML=calculator.history;calculator.firstNum=calculator.displayValue.toString();calculator.secondNum=null;calculator.operator=null}