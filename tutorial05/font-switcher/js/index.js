const makeBigger = (ev) => {
   alert('make bigger!');
   console.log('make text bigger.');
   document.querySelector(".content").style.fontSize = "xx-large"
};

const makeSmaller = (ev) => {
   alert('make smaller!');
   console.log('make text smaller.');
   document.querySelector(".content").style.fontSize = "smaller"
};

document.querySelector(".a1").onclick = makeBigger;
document.querySelector(".a2").onclick = makeSmaller;