function updatetime() {
  let obj = new Date();
  let date = obj.toLocaleTimeString();

  document.querySelector(".row").innerHTML = date;
}
updatetime()
setInterval(updatetime,1000)