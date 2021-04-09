

var vidcapture, ctracker, drawcanvas;



function setup() {

	var cnv = createCanvas (windowWidth, windowHeight);
	cnv.parent("p5canvas");

	vidcapture = createCapture (VIDEO);
	vidcapture.size(vidcapture.width*1.8, vidcapture.height*2.65);
	vidcapture.hide();

	ctracker = new clm.tracker();
	ctracker.init ();
	ctracker.start (vidcapture.elt);
	drawcanvas = document.getElementById ('defaultCanvas0')




}




function draw(){

	translate (vidcapture.width, 0)
	scale (-1, 1)
	// image (vidcapture, 0,0);


	var position = ctracker.getCurrentPosition ();

	if (position) {

		// ctracker.draw(drawcanvas);
		background(255, 50);

		var facecenterX= position[33][0];
		var facecenterY= position[33][1];

		var facewidth = position [14][0] - position [0][0];
		var faceheight = (position [7][1] - position [0][1])*1.8;
		

		var r = map(position[62][0], 150, 300, 0, 255, true)
		var b = map(position[62][1], 100, 250, 0, 255, true)
		fill (r,200, b, 100);
		noStroke();
		ellipse (facecenterX, facecenterY, facewidth, faceheight);


}
}


		// var r = map(position[63][0], 150, 300, 0, 100, true)
		// var b = map(position[63][1], 100, 250, 0, 100, true)
		// noStroke();
		// fill (r, 255, b);
		// position.forEach (function (pos){
		// 		ellipse(pos[0], pos[1],7);





		// })