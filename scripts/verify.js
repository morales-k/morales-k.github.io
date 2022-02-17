const form=document.getElementById("contact"),email=document.getElementById("email"),message=document.getElementById("message");

form.addEventListener("submit",e=>{""!==email.value||""!==message.value?e.preventDefault():form.action="https://formspree.io/f/xnqwdvpr"});