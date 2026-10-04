(()=>{"use strict";
const $=s=>document.querySelector(s);
let state={pool:7400,qty:1000,joined:false,complete:false};
const fmt=n=>new Intl.NumberFormat("ru-RU").format(n);
const rub=n=>fmt(Math.round(n))+" ₽";
function render(){
 const pct=Math.min(100,state.pool/10000*100), price=state.pool>=10000?21:25;
 $("#pool").textContent=fmt(state.pool); $("#price").textContent=price+" ₽"; $("#qty").textContent=fmt(state.qty);
 $("#meter").style.width=pct+"%"; $("#heroMeter").style.width=pct+"%"; $("#heroVolume").textContent=fmt(state.pool)+" / 10 000 ед."; $("#heroPrice").textContent=price+" ₽";
 $("#alternative").textContent=rub(state.qty*40); $("#goods").textContent=rub(state.qty*21); $("#saving").textContent=rub(state.qty*40-(state.qty*21+1500));
 $("#join").classList.toggle("hidden",state.joined); $("#others").classList.toggle("hidden",!state.joined||state.complete);
 $("#status").textContent=state.complete?"Ступень достигнута":state.joined?"Ваш объём подтверждён":"Сбор объёма";
 $("#resultTitle").textContent=state.complete?"Целевая ступень достигнута":"Потенциальная экономика при 10 000 ед.";
}
$("#minus").addEventListener("click",()=>{state.qty=Math.max(100,state.qty-100);render()});
$("#plus").addEventListener("click",()=>{state.qty+=100;render()});
$("#join").addEventListener("click",()=>{state.pool=Math.min(10000,state.pool+state.qty);state.joined=true;if(state.pool>=10000)state.complete=true;render()});
$("#others").addEventListener("click",()=>{state.pool=10000;state.complete=true;render()});
$("#reset").addEventListener("click",()=>{state={pool:7400,qty:1000,joined:false,complete:false};render()});
render();
})();