let onOff = document.getElementById("buttonOnOff");
let screenTv = document.getElementById("screenTv");
let tvStatus = false;

const buttons = document.getElementsByClassName("numberButtons");
let arrayButtons = Array.from(buttons);

let screen = document.getElementById("screenTv");

//evento de hacer click en el boton de encendido
onOff.addEventListener("click", () => {
  tvStatus = !tvStatus;
  console.log(tvStatus);

  if (tvStatus) {
    screenTv.classList.add("startChannel");
  } else {
    screenTv.classList.remove(
      screenTv.classList[screenTv.classList.length - 1]
    );
  }
});
//Evento para cmabiar de canal si la tele esta encendida o no
if (!tvStatus) {
  arrayButtons.map((channel) => {
    channel.addEventListener("click", (e) => {
      if (tvStatus) {
        screenTv.classList.remove(
          screenTv.classList[screenTv.classList.length - 1]
        );
        screenTv.classList.add("channel" + e.target.id.slice(-1));
      }
    });
  });
}

let hour = document.getElementById("hourDate");
setInterval(function () {
  let data = new Date();
  return (hour.innerHTML =
    data.getDate() +
    "/" +
    data.getMonth() +
    1 +
    "/" +
    data.getFullYear() +
    "  " +
    data.toLocaleTimeString());
});

setTimeout(function () {
  return (hour.style.display = "hidden ");
}, 3);
