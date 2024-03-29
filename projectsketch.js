function setup(){

    createCanvas(600,400);
    background(90,122,172);
}

function draw(){
   
    //head
    stroke(244,216,185)
    fill(244,216,185)
    quad(200,140,300,100,300,320,240,300)
    quad(300,100,400,140,360,300,300,320)
    
    //mouth
    stroke(0,0,0)
    fill(255,255,255)
    triangle(280,260,340,260,280,280)

    //teeth
    stroke(0,0,0)
    line(280,270,340,260)
    line(290,260,290,276)
    line(297,260,297,274)
    line(304,260,304,271)
    line(311,260,311,269)
    line(318,260,318,267)

    //nose
    line(300,220,291,235)
    line(291,235,300,244)

    //shadow
    stroke(227,170,141)
    fill(227,170,141)
    beginShape();
vertex(200,140);
vertex(220,210);
vertex(230,220);
vertex(240,220);
vertex(250,220);
vertex(260,220);
vertex(270,215);
vertex(280,210);
vertex(290,200);
vertex(300,200);
vertex(310,200);
vertex(320,210);
vertex(330,215);
vertex(340,220);
vertex(350,220);
vertex(360,220);
vertex(370,220);
vertex(380,210);
vertex(385,200);
vertex(400,140);
vertex(300,100);
endShape(CLOSE);

//hair
stroke(0)
fill(0)
beginShape();
vertex(200,140);
vertex(160,100);
vertex(200,120);
vertex(160,60);
vertex(220,100);
vertex(200,40);
vertex(280,80);
vertex(280,40);
vertex(320,80);
vertex(320,60);
vertex(360,100);
vertex(380,60);
vertex(380,100);
vertex(400,100);
vertex(420,100);
vertex(400,120);
vertex(440,140);
vertex(400,160);
vertex(410,180);
vertex(393,175);
vertex(380,130);
vertex(360,150);
vertex(340,120);
vertex(310,160);
vertex(300,140);
vertex(280,160);
vertex(270,120);
vertex(238,160);
vertex(238,140);
vertex(200,180);
endShape(CLOSE);

//eyes
strokeWeight(1.5)
noFill();
line(217,120,217,197);
line(224,120,224,215);
line(231,120,231,213);
line(238,100,238,215);
line(245,100,245,218)
line(252,100,252,219);
line(259,100,259,221);
line(266,100,266,220);
line(273,100,273,221);
line(280,100,280,217);
line(287,100,287,210);
line(294,100,294,205);
line(301,100,301,203);
line(308,100,308,205);
line(315,100,315,207);
line(322,100,322,210);
line(329,100,329,215);
line(336,100,336,217);
line(343,100,343,220);
line(350,100,350,222);
line(357,100,357,224);
line(364,100,364,220);
line(371,100,371,217);
line(378,100,378,214);
line(385,100,385,200);

//Highlight
fill(128,128,128)
stroke(0);
beginShape();
vertex(230,70);
vertex(280,100);
vertex(290,70);
vertex(330,110);
vertex(310,140);
vertex(300,133);
vertex(286,142);
vertex(270,115);
vertex(245,145);
vertex(240,134);
vertex(210,160);
vertex(205,105);
vertex(225,115);
endShape(CLOSE);

//sweat
stroke(255,255,255)
fill(255,255,255)
ellipse(260,245,6,5)
triangle(260,240,257,245,263,245)
ellipse(240,235,6,5)
triangle(240,230,237,235,243,235)
ellipse(370,230,6,5)
triangle(370,225,367,230,373,230);

//outline
stroke(0)
noFill();
beginShape();
vertex(200,140);
vertex(240,300);
vertex(300,320);
vertex(360,300);
vertex(400,140);
endShape();
 
}
