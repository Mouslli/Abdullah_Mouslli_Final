

var vidcapture, ctracker, drawcanvas;


function setup() {

	var cnv = createCanvas (windowWidth/2, windowHeight);
	cnv.parent("p5canvas");

	vidcapture = createCapture (VIDEO);
	vidcapture.size(vidcapture.width*1.8, vidcapture.height*2.65);
	vidcapture.hide();

	ctracker = new clm.tracker();
	ctracker.init ();
	ctracker.start (vidcapture.elt);
	drawcanvas = document.getElementById ('defaultCanvas0');


}


function draw(){

	translate (vidcapture.width, 0)
	scale (-1, 1)
	// image (vidcapture, 0,0);


	var position = ctracker.getCurrentPosition ();

	if (position) {

		// ctracker.draw(drawcanvas);
		background(255, 50);
///Calculating entire face measurements  
		var facecenterX= position[33][0];
		var facecenterY= position[33][1];

		var facewidth = position [14][0] - position [0][0];
///Multiply the distance to cover the entire face not just until the eyebrows 
		var faceheight = (position [7][1] - position [0][1])*1.8;
		
///map the RGB values of the face with according to the position of the nose 
		var r = map(position[62][0],50, 400, 0, 255, true)
		var b = map(position[62][1], 50, 400, 0, 255, true)
		fill (r,200, b, 100);
		noStroke();
		ellipse (facecenterX, facecenterY, facewidth, faceheight);
///Create eye points 
//map the RGB values of the face with according to the position of the nose 
		var r1 = map(position[32][0], 100, 300, 0, 255, true)
		var b1 = map(position[32][1], 100, 350, 0, 255, true)

		fill (r1,200, b1, 100);
		noStroke();
		ellipse (position [27][0], position[27][1], 20)
		ellipse (position [32][0], position[32][1], 20)

///beard lines 
		// var face = position [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];

		// face.forEach (function(face){
		// 	stroke(0);
		// 	strokeWeight (5);
		// 	line (face[0], face[1], face[0], face[1]-30);
		
		// })
		stroke(r, 100, b);
		strokeWeight (5)
		line (position[0][0], position[0][1], position[0][0] , position[0][1]+25);
		line (position[1][0], position[1][1], position[1][0] , position[1][1]+25);
		line (position[2][0], position[2][1], position[2][0] , position[2][1]+25);
		line (position[3][0], position[3][1], position[3][0] , position[3][1]+25);
		line (position[4][0], position[4][1], position[4][0] , position[4][1]+25);
		line (position[5][0], position[5][1], position[5][0] , position[5][1]+25);
		line (position[6][0], position[6][1], position[6][0] , position[6][1]+25);
		line (position[7][0], position[7][1], position[7][0] , position[7][1]+25);
		line (position[8][0], position[8][1], position[8][0] , position[8][1]+25);
		line (position[9][0], position[9][1], position[9][0] , position[9][1]+25);
		line (position[10][0], position[10][1], position[10][0] , position[10][1]+25);
		line (position[11][0], position[11][1], position[11][0] , position[11][1]+25);
		line (position[12][0], position[12][1], position[12][0] , position[12][1]+25);
		line (position[13][0], position[13][1], position[13][0] , position[13][1]+25);
		line (position[14][0], position[14][1], position[14][0] , position[14][1]+25);

////Switch eyes to squares when mouth is open
		let mouthX = position [60][1]-position[57][1];
		
		if (mouthX > mouthX*0.1){ 


			noStroke();
			fill (r1, 40, b1);
			rect (mouseX + (position [27][0]-position[32][0]), position[27][1]- 15, 30, 30)
			rect (mouseX, position[32][1]- 15, 30, 30)

		}
////Switching between a rectangle and triangle for mouth if the x coordinates of point 62 passes the width mid point
		if (position [62][0] < width/2){

			noStroke();
			fill (r, 146, b)
			rect (position [60][0] -25, position [60][1] -10, 50, 10);
		}

		if (position [62][0] > width/2) {

			noStroke();
			fill(r, 146, b)
			triangle (position [47][0], position[47][1] -20, position [44][0], position[44][1], position[50][0], position[50][1])
		}

////adding ears if the y coordinates of point 33 is bigger than the quarter the window height
		if (position[33][1] > height/4) {

			noStroke();
			ellipse (position[13][0], position[13][1], 30);
			ellipse (position [1][0], position [1][1], 30);
		} 



	}
}