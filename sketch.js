let brush ="Green"

function setup() {

    // create a 640x480 pixel canvas and attach it to your HTML
    createCanvas(800, 500).parent('p5')
print("this is setup")

  background(186, 224, 220,230)
}

function draw() {

if (mouseIsPressed && mouseX>50) {

  if (brush=="Green-ish"){
    stroke(77, 136, 145)
  strokeWeight(3)
  line(pmouseX,pmouseY,mouseX,mouseY) //draws line from previous position to current - make to bellier curve for more seaweed
}
  if(brush=="star"){
      stroke(219, 204, 218) //make me random//
    strokeWeight(1.25)
    fill(random(170,270),random(0-30),random(80,170)) //limit to pink-orange //
 star(mouseX,mouseY,20,45,5);

 line(mouseX,mouseY,mouseX+10,mouseY-20)
 line(mouseX,mouseY,mouseX-20,mouseY-15)
 line(mouseX,mouseY,mouseX-20,mouseY+15)
 line(mouseX,mouseY,mouseX+10,mouseY+30)
 line(mouseX,mouseY,mouseX+27,mouseY+2)

}
  if(brush=="seacucumber"){
    fill(50, 37, 89)
      circle(pmouseX,pmouseY,45)
}
if(brush=="sand"){
  fill(random(220,250),random(220,240),random(150,210))
  circle(mouseX + random(-5,5), mouseY + random(-5,5), random(5,5))
}
  if(brush=="seaweed"){
    stroke(0,random(100,255),0)
    fill(0,random(170),random(50))
    bezier(mouseX,mouseY,mouseX-10,mouseY-20,mouseX+20,mouseY-50,mouseX-30,mouseY-80);
    bezier(mouseX,mouseY,mouseX-20,mouseY-35,mouseX+5,mouseY-60,mouseX-30,mouseY-80);

  }
  if(brush=="urchin"){
    stroke(0,0,0)
    strokeWeight(1.5)
    line(mouseX,mouseY,mouseX-random(-25,50),mouseY-random(0,50))
  }
if(brush=="bubbles"){
fill(0,random(100,250),random(100,250),100)
circle(mouseX + random(-10, 10), mouseY + random(-10, 10), random(2, 15))
}

if(brush=="fish"){
  stroke(94, 110, 103)
  strokeWeight(.25)
  fill(random(270),random(270),random(270))
  arc(mouseX,mouseY, 35,35,PI - HALF_PI, PI + HALF_PI ,PIE);
  ellipse(mouseX-44,mouseY,60,35)
  fill(0,0,0)
  circle(mouseX-60,mouseY-5,9)
  fill(270,270,270)
  circle(mouseX-61,mouseY-7,4)
  fill(random(270),random(270),random(270))
  triangle(mouseX-51,mouseY+2,mouseX-38,mouseY+1,mouseX-44,mouseY+9);
}
if(brush=="rocks"){
stroke(0)
strokeWeight(.75)
  fill(random(0,30),random(0,30),random(0,30),175)
  triangle(mouseX + random(-20,20), mouseY + random(-15, 15),mouseX + random(-5,5), mouseY + random(-2,2),mouseX + random(-10, 10), mouseY + random(-10, 10) )
  circle(mouseX + random(-5,5), mouseY + random(-7,7), random(2,10))
}

}

  stroke(129, 140, 128)
  strokeWeight(.5)

  fill(77, 136, 145) // lines
  rect(10,10,30,30)
  fill(270)
  text("L", 20, 25)


  fill(237, 204, 232)
  rect(10,50,30,30)
  fill(181, 34, 49)
  star(25,65,5,10,5);

  fill(115, 110, 125,250)
  rect(10,90,30,30)

  fill(89, 58, 148)
  circle(25,103,15)

  fill(63, 138, 50)
  rect(10,130,30,30)

  fill(9, 79, 0)
  ellipse(25,140,5,15)

  fill(136, 128, 140) // sea urchin
  rect(10,170,30,30)
  fill(0)
text("U", 20, 185)


  fill(72, 175, 219)
  rect(10,220,30,30)

  fill(30, 24, 204)
  circle(25,236,4)
  circle(20,230,5)
  circle(27,234,2)
  circle(22,232,4)
  circle(26,238,3)

  fill(230, 226, 188)
  rect(10,270,30,30)
  fill(0)
  text("S", 20, 291) //sand

  fill(94, 110, 103)
  rect(10,320,30,30)
  fill(270)
  text("F", 21, 340) //makee a fish

  fill(53, 56, 55)
  rect(10,370,30,30)
  fill(270)
  text("R", 21, 392)

  fill(255)
    rect(10,440, 40, 40)
    fill(0)
    text("SAVE",14,460)

  }


  function mouseClicked(){
    print(int(mouseX), int(mouseY))
    if(mouseX>10 && mouseX<40 && mouseY>10 && mouseY<40){
        print("Green-ish")
        brush="Green-ish"
      }
    if(mouseX>10 && mouseX<40 && mouseY>30 && mouseY<70){
        print("star")
        brush="star"
        }
    if(mouseX>10 && mouseX<40 && mouseY>90 && mouseY<120){
      print("seacucumber")
      brush="seacucumber"
    }
    if(mouseX>10 && mouseX<40 && mouseY>140 && mouseY<150){
      print("seaweed")
      brush="seaweed"
    }
    if(mouseX>10 && mouseX<40 && mouseY>170 && mouseY<190){
    print("urchin")
    brush="urchin"
  }
  if(mouseX>10 && mouseX<40 && mouseY>220 && mouseY<250){
    print("bubbles")
    brush="bubbles"
  }
  if(mouseX>10 && mouseX<40 && mouseY>270 && mouseY<290){
    print("sand")
    brush="sand"
  }
  if(mouseX>10 && mouseX<40 && mouseY>320 && mouseY<350){
    print("fish")
    brush="fish"
  }
  if(mouseX>10 && mouseX<40 && mouseY>370 && mouseY<400){
    print("rocks")
    brush="rocks"
  }
  if(mouseX>10 && mouseX<50 && mouseY>440 && mouseY<480){
    save()  // saves an image of the canvas
  }
}

function star(x,y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
