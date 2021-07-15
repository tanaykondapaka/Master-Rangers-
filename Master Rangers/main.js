
var canvas= new fabric.Canvas("myCanvas")
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var ranger_update = "";

function new_image(get_image)
{
fabric.Image.fromURL(get_image,function(Img){
ranger_update=Img
ranger_update.scaleToHeight(size);
ranger_update.scaleToWidth(size);
ranger_update.set(
	{
		top:block_y,
		left:block_x

    }
)
}
);
canvas.add(ranger_update);

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		block_x = 0;
		block_y=0;
		size=300;
		
		new_image("rr1.png")
		
		
	}
	if(keyPressed == '71')
	{
		block_x = 260;
		size=210
		
		new_image("gr.png")
	}
	
	if(keyPressed == '89')
	{
		block_x =420;
		block_y=0
		size=300
		new_image("yr.png")
	}
	if(keyPressed == '80')
	{
		block_x = 650;
		block_y=0
		size=250
		new_image("pr.png")
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		block_y=50
		size=570
		new_image("br.png")
	}
	
}
window.addEventListener("load",function hi(){document.getElementById("1st").style.display="none"})

function change(){
	document.getElementById("2nd").remove();
	document.body.style.overflow="scroll";
	document.getElementById("1st").style.display="inline-block"
	document.body.style.overflowX="hidden";
	

}

