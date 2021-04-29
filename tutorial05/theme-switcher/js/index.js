const defaultTheme = (ev) => {
   alert('switch to default theme');
   console.log('switch to default theme.');
   document.querySelector(".container").style.fontSize = "1.8em"
   document.querySelector(".container").style.fontFamily = "Covered By Your Grace, cursive"
   document.querySelector(".container").style.backgroundColor = "black"
   document.querySelector(".container").style.alignItems = "center"

};

const oceanTheme = (ev) => {
   alert('switch to ocean theme');
   console.log('switch to ocean theme.');
   document.querySelector(".container").style.fontSize = "1.8em"
   document.querySelector(".container").style.fontFamily = "Amatic SC, cursive"
   document.querySelector(".container").style.backgroundColor = "#434a6c"
   document.querySelector(".container").style.alignItems = "center"
};

const desertTheme = (ev) => {
   alert('switch to desert theme');
   console.log('switch to desert theme.');
   document.querySelector(".container").style.fontFamily = "Dokdo, cursive"
   document.querySelector(".container").style.backgroundColor = "#A8651E"
   document.querySelector(".container").style.alignItems = "center"
};

document.querySelector("#default").onclick = defaultTheme;
document.querySelector("#ocean").onclick = oceanTheme;
document.querySelector("#desert").onclick = desertTheme;