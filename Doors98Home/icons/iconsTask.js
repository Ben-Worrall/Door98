let dragindex=0;
let dropindex=0;
let clone="";

function dragTASK(e)
{
e.dataTransfer.setData("text",e.target.id);
}

function dropTASK(e)
{
e.preventDefault();
clone=e.target.cloneNode(true);
let data=e.dataTransfer.getData("text"); 
if(clone.id !== data) {
let nodelist=document.getElementById("parent").childNodes;
for(let i=0;i<nodelist.length;i++)
{
if(nodelist[i].id==data)
{
dragindex=i;
}

}

document.getElementById("iconDropTaskBar").replaceChild(document.getElementById(data),e.target);

document.getElementById("iconDropTaskBar").insertBefore(clone,document.getElementById("iconDropTaskBar").childNodes[dragindex]);
  }

}

function allowDropTASK(e)
{
    e.preventDefault();
}















