
// Create canvas variable

//Set initial positions for ball and hole images.


block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y >=550){
		ball_y=ball_y +block_image_height;
			console.log("block image height = "+block_image_height);
			console.log("When up arrow key is pressed, X = "+ball_x +", Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function down(){
		if(ball_y <=550){
			ball_y=ball_y +block_image_height;
			console.log("block image height = "+block_image_height);
			console.log("When down arrow key is pressed, X = "+ball_x +", Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}
	
		
	

	function left()
	{
		if(ball_x >5)
		{
			ball_x=ball_x +block_image_height;
			console.log("block image height = "+block_image_height);
			console.log("When left arrow key is pressed, X = "+ball_x +", Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x=ball_x +block_image_height;
			console.log("block image height = "+block_image_height);
			console.log("When right arrow key is pressed, X = "+ball_x +", Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
			// Write a code to move ball right side.
		}
	}
	
}

