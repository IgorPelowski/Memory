function przycisk() {
  const button = document.querySelector("button");
  function onClick() {
    const x = document.querySelector(".grid__container");
    x.classList.toggle("grid__container_js");
  }
  button.addEventListener("click", onClick);
}
let sumka = 0;

const a = document.querySelector(".a");
function onClickk() {
  const x = document.querySelector(".a");
  x.classList.toggle("aa");
  sumka = sumka + 10;
}
a.addEventListener("click", onClickk);

function obracanie() {
  const suma = 0;
  if (suma == 4) {
    console.log(suma);
  } else {
    const x = document.querySelector(".a");
    x.classList.remove("aa");
    wygrana();
    setTimeout(obracanie, 10000);
  }
}
obracanie();

//function alertihno(){
//    alert('udało sie')
//}

const b = document.querySelector(".b");
function onClickkb() {
  const x = document.querySelector(".b");
  x.classList.toggle("bb");
  sumka = sumka + 2;
}
b.addEventListener("click", onClickkb);

function obracanieb() {
  const suma = 0;
  if (suma == 4) {
    console.log(suma);
  } else {
    const x = document.querySelector(".b");
    x.classList.remove("bb");
    wygrana();
    setTimeout(obracanieb, 10000);
  }
}
obracanieb();

const c = document.querySelector(".c");
function onClickkc() {
  const x = document.querySelector(".c");
  x.classList.toggle("cc");
  sumka = sumka + 2;
}
c.addEventListener("click", onClickkc);

function obracaniec() {
  const suma = 0;
  if (suma == 4) {
    console.log(suma);
  } else {
    const x = document.querySelector(".c");
    x.classList.remove("cc");
    wygrana();
    setTimeout(obracaniec, 10000);
  }
}
obracaniec();

const d = document.querySelector(".d");
function onClickkd() {
  const x = document.querySelector(".d");
  x.classList.toggle("dd");
  sumka = sumka + 10;
}
d.addEventListener("click", onClickkd);

function obracanied() {
  const suma = 0;
  if (suma == 4) {
    console.log(suma);
  } else {
    const x = document.querySelector(".d");
    x.classList.remove("dd");
    wygrana();
    setTimeout(obracanied, 10000);
  }
}
obracanied();

function wygrana() {
  if (sumka == 20) {
    alert("udalo ci sie połaczyć zielone");
    reset();
  } else if (sumka == 4) {
    alert("udalo ci sie połaczyć czerwone");
    reset();
  } else if (sumka == 24) {
    alert("udalo ci sie połaczyć czerwone i zielone");
    reset();
  } else if (sumka > 0 && sumka !== 6 && sumka !== 4 && sumka !== 20) {
    alert("niestety źle połączone");
    reset();
  } else {
    reset();
  }
}
function reset() {
  sumka = 0;
}
