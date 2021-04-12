This project is an exploration of the clmtrackr library and p5js. I attempted to explore the mapping
function to coordinate multiple variables to work together (shape, color, positioning). I also used
conditional statements to add some interactivity to the user experience. 
Initially, I wanted to make an "emotion detector" where the page would be populated with emojis that
correspond to the user's facial expression. However, it was challenging to get the tracker to detect
small changes in the distance between the coordinates of a few given points. The code between lines (88,99)
is an example of what I tried to do. The idea that when the mouth opens, the eyes change from ellipses to
squares. However, the way it works was very spotty, and it shows up at random times.
Aside from that, I also had trouble including images in the project. When I used the image function,
I was constantly faced with errors. When I used the pre-load function with an "img" global variable,
I had no errors, but the site kept "loading", but nothing ever showed up. Therefore, I had to stick
with primitive shapes (ellipses, rectangles, and triangles) to avoid errors and make sure that the
program would function properly. 