var container = document.getElementById('container');

function countdown({ initial: current, final: final = 0, interval: interval = 1 }) {

  while (current > final) {
    container.innerHTML = current;
    current -= interval;
  }
}

countdown({
  initial: 10
})
