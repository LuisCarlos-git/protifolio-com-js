const text = document.querySelector(".welcome h1");

function MachineWriter(item) {
  const textArray = item.innerHTML.split("");
  item.innerHTML = "";

  textArray.forEach((element, index) => {
    setTimeout(() => {
      item.innerHTML += element;
    }, 65 * index);
  });
}

MachineWriter(text);
