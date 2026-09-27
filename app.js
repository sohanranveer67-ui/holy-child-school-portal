
document.getElementById('f').addEventListener('submit',e=>{
e.preventDefault();
document.getElementById('msg').innerHTML='Registration Submitted. ID: HCSJ-'+Math.floor(Math.random()*100000);
});
