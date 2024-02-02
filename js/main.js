const buttons = document.getElementsByClassName("numberButtons");

let arrayButtons = Array.from(buttons);

let screen = document.getElementById("screenTv");

arrayButtons.map((channel) => {
  channel.addEventListener("click", (e) => {
    screen.classList.remove(screen.classList);
    screen.classList.add("channel" + e.target.id.slice(-1));
  });
});
