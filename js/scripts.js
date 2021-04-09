var vidcapture, ctracker, drawcanvas;

function setup() {

	var cnv = createCanvas (windowWidth, windowHeight/2);
	cnv.parent("p5canvas");

	vidcapture = createCapture (VIDEO);
	vidcapture.size(vidcapture.width*2, vidcapture.height*2.5);

	ctracker = new clm.tracker();
	ctracker.init ();
	ctracker.start (vidcapture.elt);
	drawcanvas = document.getElementById ('defultCanvas0')


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
	}








}


