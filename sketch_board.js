const canvas = document.getElementById("canvas")
const body = document.querySelector('body');
canvas.height = window.innerHeight
canvas.width = window.innerWidth
var theColor = '';
var lineW = 5;
let prevX = null
let prevY = null
let draw = false
let selectedShape=null

body.style.backgroundColor = "#FFFFFF";
var theInput = document.getElementById("favcolor");

theInput.addEventListener("input", function(){
  theColor = theInput.value;
  body.style.backgroundColor = theColor;
},false);

const ctx = canvas.getContext("2d")
ctx.lineWidth = lineW;

document.getElementById("ageInputId").oninput = function() {
    draw = null
    lineW = document.getElementById("ageInputId").value;
    document.getElementById("ageOutputId").innerHTML = lineW;
    ctx.lineWidth = lineW;
    console.log(ctx.lineWidth);
}; 

// let shapeBtn=document.querySelectorAll('.shape');
// shapeBtn.addEventListener('click',()=>{
//     selectedShape=shapeBtn.dataset.shapeBtn;

// })

let clrs = document.querySelectorAll(".clr")
clrs = Array.from(clrs)
clrs.forEach(clr => {
    clr.addEventListener("click", () => {
        ctx.strokeStyle = clr.dataset.clr
        console.log(ctx.strokeStyle);
    })
})

let clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});


let saveBtn = document.querySelector(".save")
saveBtn.addEventListener("click", () => {
    let data = canvas.toDataURL("imag/png")
    let a = document.createElement("a")
    a.href = data
    a.download = "sketch.png"
    a.click()

})

window.addEventListener('mousedown', () => draw = true);
window.addEventListener('mouseup', () => draw = false);

window.addEventListener('mousemove', (e) => {
    if (draw) {
        if (prevX === null || prevY === null) {
            prevX = e.clientX;
            prevY = e.clientY;
            return;
        }

        let currentX = e.clientX;
        let currentY = e.clientY;

        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();

        prevX = currentX;
        prevY = currentY;
    } else {
        prevX = null;
        prevY = null;
    }
});

// window.addEventListener('mousemove',(e)=>{
//         if(selectedShape=='line')
//         {

//         }
// })