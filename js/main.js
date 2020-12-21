// Element Variable

let cursor = document.getElementById('cursor');
let anchor = document.querySelectorAll('a');
let water = document.getElementById("water");

// add realtime positionX & PositionY for cursor 

document.addEventListener('mousemove' , (e) => {
    let x = e.pageX,
        y = e.pageY;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
})

anchor.forEach((anc) => {
    anc.addEventListener('mouseover' , () => {
        cursor.style.transform = "scale(2)";
        cursor.style.animationName = "borderAnim";
    })
    anc.addEventListener('mouseleave' , () => {
        cursor.style.transform = "";
        cursor.style.animationName = "";
    })
})

// Add Style & animation for cursor

let widthWater = 350;
let heightWater = 350;

water.addEventListener("mouseover" , () => {
    cursorSize(cursor , widthWater , heightWater , "borderAnim");
})

water.addEventListener('mouseleave' , () => {
    cursorSize(cursor , 30 , 30 , "");
})

// cursor size fucntion

cursorSize = (element , width , height , animationName) => {
    element.style.width = `${width}px`;
    element.style.height = `${height}px`;
    element.style.animationName = animationName;
}

// change Color Cursor

let colorcursor = document.getElementById("colorcursor");
let messageColor = document.getElementById("messageColor");

colorcursor.addEventListener('change' , () => {
    if(colorcursor.value == "#000000" || colorcursor.value == "#ffffff"){
        messageColor.classList.add("show");
    }
    else{
        messageColor.classList.remove("show");
        cursor.style.backgroundColor = colorcursor.value;
    }
})