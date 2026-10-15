const $ = id => document.getElementById(id);
let timer = null, tick = 0;
function addLog(message, type="INFO"){
  const log = $("log"), p = document.createElement("p"), time = new Date().toLocaleTimeString("id-ID",{hour12:false});
  const t = document.createElement("time"); t.textContent = time;
  const s = document.createElement("span"); s.className = type==="READY" ? "ok" : type==="WARN" ? "warn" : ""; s.textContent = `[${type}] `;
  p.append(t,s,document.createTextNode(message)); log.appendChild(p); log.scrollTop=log.scrollHeight;
}
function refreshData(){
  const signal = -35 - Math.floor(Math.random()*42);
  $("signal").textContent = `${signal} dBm`;
  $("latency").textContent = `${12+Math.floor(Math.random()*55)} ms`;
  $("clients").textContent = String(1+Math.floor(Math.random()*8));
  $("signalbar").style.width = `${Math.max(12,Math.min(100,100-(Math.abs(signal)-25)*2))}%`;
  addLog("Demo metrics refreshed; no network scan performed.","INFO");
}
$("start").addEventListener("click",()=>{
  if(timer) return;
  document.body.classList.add("running"); $("start").disabled=true; $("stop").disabled=false;
  $("connection").textContent="SIMULATION ACTIVE"; addLog("Safe visual simulation started.","READY");
  addLog("No packets sent; no devices targeted.","INFO");
  timer=setInterval(()=>{tick++; if(tick%3===0) refreshData(); else addLog("Simulation heartbeat "+tick+".","INFO");},2500);
});
$("stop").addEventListener("click",()=>{
  if(timer){clearInterval(timer);timer=null;}
  document.body.classList.remove("running"); $("start").disabled=false; $("stop").disabled=true;
  $("connection").textContent="SIMULATED ONLINE"; addLog("Simulation stopped by operator.","WARN");
});
$("refresh").addEventListener("click",refreshData);
