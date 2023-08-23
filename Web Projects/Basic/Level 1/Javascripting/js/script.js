let btnChange = document.querySelector("button");
let objBox = document.getElementById("thisBox");
let para = document.getElementById("para");

function changeMe() 
{
    if (objBox.style.background == 'red')
    {
        alert("Testing prompts");
        ParaColor();
        objBox.style.background = 'black';
    }
    else
    {
        ParaColor();
        objBox.style.background = 'red';
    }
}

function ParaColor()
{
    if (para.style.color == 'white')
    {
        para.style.color = 'green';
    }
    else
    {
        para.style.color = 'white';
    }
  
}


