(function(){
 var b=document.body,t0=Date.now(),done=false;
 function go(){
  if(done)return;done=true;
  b.classList.add('ready');
  setTimeout(function(){var l=document.getElementById('loader');if(l)l.remove()},1200);
 }
 function check(){setTimeout(go,Math.max(0,2800-(Date.now()-t0)))}
 if(document.readyState==='complete')check();else addEventListener('load',check);
 setTimeout(go,7000);
})();
