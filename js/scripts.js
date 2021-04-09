var vidcapture, ctracker, drawcanvas;

function setup() {

	var cnv = createCanvas (windowWidth, windowHeight/2);
	cnv.parent("p5canvas");

	vidcapture = createCapture (VIDEO);
	vidcapture.size(vidcapture.width*2, vidcapture.height*2.5);

	ctracker = new clm.tracker();
	ctracker.init ();
	ctracker.start (vidcapture.elt);
	drawcanvas = document.getElementById ('defaultCanvas0')


}




function draw(){

	translate (vidcapture.width, 0)
	scale (-1, 1)
	image (vidcapture, 0,0);

	var position = ctracker.getCurrentPosition ();

	if (position) {

		ctracker.draw(drawcanvas);
		// fill (0);
		// ellipse (position[52][0], position [52][1],10);

		// var r = map(position[62][0], 250, 300, 0, 255, true)
		// var b = map(position[62][1], 150, 200, 0, 255, true)

		// background (r, 255, b)
		// tint (255, 126)
		// image (vidcapture, 0,0)

	}








}


