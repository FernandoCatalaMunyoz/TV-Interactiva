//Declaro variables necesarias
let onOff = document.getElementById("buttonOnOff");
let screenTv = document.getElementById("screenTv");
let screen = document.getElementById("screenTv");
let infoDate = document.getElementById("dateHour");
let infoChannel = document.getElementById("channelName");

//declaro variable del estado de la tele
let tvStatus = false;

infoDate.style.display = "none";
infoChannel.style.display = "none";

//evento de hacer click en el boton de encendido
onOff.addEventListener("click", () => {
  tvStatus = !tvStatus; // cambio del estado de la tele
  console.log(tvStatus);
  infoDate.style.display = "none";

  if (tvStatus) {
    // comprobamos que la tele esta apagada
    screenTv.classList.add("startChannel");
  } else {
    screenTv.classList.remove(
      screenTv.classList[screenTv.classList.length - 1]
    );
    hideInfoChannel();
    hideInfoDate();
  }
});

//Evento para cambiar de canal si la tele esta encendida o no

const buttons = document.getElementsByClassName("numberButtons");
let arrayButtons = Array.from(buttons);
if (!tvStatus) {
  // comprobamos que la tele esta encendida
  arrayButtons.map((channel) => {
    channel.addEventListener("click", (e) => {
      infoDate.style.display = "block";
      infoChannel.style.display = "block";

      let channelName = document.getElementById("channelName");

      console.log(e.target.id);
      document.getElementById("channelName").innerHTML = e.target.id; // mostramos el nombre del canal en el div correspondiente

      setTimeout(hideInfoDate, 3000);
      setTimeout(hideInfoChannel, 3000);

      if (tvStatus) {
        showInfo(Date);

        screenTv.classList.remove(
          screenTv.classList[screenTv.classList.length - 1]
        );
        screenTv.classList.add("channel" + e.target.id.slice(-1));
      } else {
        infoDate.style.display = "none";
        infoChannel.style.display = "none";
      }
    });
  });
}
//Funcion para mostrar la info de fecha
function showInfo() {
  let hour = document.getElementById("dateHour");
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
}
//Función para ocultar la informacion de fecha y hora despues de 3 segundos
function hideInfoDate() {
  infoDate.style.display = "none";
}
//Funcion para ocultar el nombre del canal despues de 3 segundos
function hideInfoChannel() {
  return (infoChannel.style.display = "none");
}
