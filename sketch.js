// referenced tutorial by VideoLab https://www.youtube.com/watch?v=rx5PLMij_80&t=1963s
// background
var stars = [];
var velocity =2;

// number of stars
for (var i = 0; i <= 250; i++){
    var circle = new Path.Circle(new Point(view.size.width, view.size.height)* Point.random(), Math.random()*3);
    stars.push(circle);
    circle.fillColor = 'white';
}

// star moving speed
for (var i = 0; i < stars.length; i++) {
    var assignedRate = Math.random() * velocity;
    stars[i].rate = assignedRate;
}

// an array of among us character colors + randomize
var colorArray = ['red','blue','forestgreen','yellow','mediumorchid','orange','gainsboro','darkorchid','saddlebrown','turquoise','lime'];
var randomColor = colorArray[Math.floor(Math.random()*colorArray.length)];

// Backpack
var radius = new Size(15,15)
var backpack = new Rectangle(new Point (175, 200), 40,80);
var backpackOutline = new Path.Rectangle(backpack, radius);
backpackOutline.strokeColor = 'black';
backpackOutline.strokeWidth = 7;
backpackOutline.fillColor= randomColor;
var backpackShadow = new Rectangle(new Point (175, 220), 40,60);
var backpackShadow1 = new Path.Rectangle(backpackShadow, radius);
backpackShadow1.fillColor = 'black';
backpackShadow1.fillColor.alpha = 0.2;

// Legs
var legs = legLOutline, legROutline;
var legL = new Rectangle(new Point (200, 270), 35,50);
var legLOutline = new Path.Rectangle(legL, radius);
var legR = new Rectangle(new Point (255, 265), 35,50);
var legROutline = new Path.Rectangle(legR, radius);

// Body
var body = new Rectangle(new Point(200,200), new Size(90,90));
var bodyOutline = new Path.Rectangle(body);

// Head
var head = new Rectangle(new Point(200,150), 90);
var headOutline = new Path.Ellipse(head);

// Goggles
var gogglesRadius = new Size(30,30);
var goggles = new Rectangle(new Point(227,172), 80,48);
var gogglesOutline = new Path.Rectangle(goggles, gogglesRadius);
gogglesOutline.strokeColor ='black';
gogglesOutline.strokeWidth = 7;
gogglesOutline.fillColor = 'dimgray';
var shadeRadius = new Size (25, 25);
var gogglesShade = new Rectangle(new Point(245,175), 60,35);
var gogglesShade1 = new Path.Rectangle(gogglesShade, shadeRadius);
gogglesShade1.fillColor = 'lightsteelblue';
var gogglesHL = new Rectangle(new Point(260,180), 38,18);
var gogglesHL1 = new Path.Rectangle(gogglesHL, shadeRadius);
gogglesHL1.fillColor = 'white';

// uniting different shapes into one body shape
var headBody = headOutline.unite(bodyOutline);
var legs = legLOutline.unite(legROutline);
var wholeBody = headBody.unite(legs);
wholeBody.strokeColor = 'black';
wholeBody.fillColor = randomColor;
wholeBody.strokeWidth = 7;

// grouping goggles shadows and highlight
var gogglesFinal = new Group({
    children: [gogglesOutline, gogglesShade1, gogglesHL1]
})

// grouping backpack, body, goggles
var bodyFinal = new Group ({
    children: [backpackOutline, backpackShadow1, wholeBody, gogglesFinal]
})

var bodyPos = new Point(5,0);


// Animation
function onFrame(event){
    var randomColor = colorArray[Math.floor(Math.random()*colorArray.length)];

    for (var i = 0; i < stars.length; i++) {
        stars[i].translate(stars[i].rate,0)
        if(stars[i].position.x > view.size.width){
            stars[i].position.x = 0;
        } else if (stars[i].position.x < 0) {
            stars[i].position.x = view.size.width;
        }
    }
    bodyFinal.rotate(3);
   bodyFinal.position += bodyPos;
   if (bodyFinal.position.x > view.size.width +100) {
     bodyFinal.position.x = 0;
     wholeBody.fillColor = randomColor;
     backpackOutline.fillColor = randomColor;
   } 

}


// Text
var thereIs = new PointText(new Point(view.size.width/6, view.size.height/1.8));
thereIs.justification = 'left';
thereIs.fillColor = 'white';
thereIs.content = 'There is';
thereIs.fontSize = '80px'

var amongUs = new PointText(new Point(view.size.width/1.2, view.size.height/1.8));
amongUs.justification = 'right';
amongUs.fillColor = 'white';
amongUs.content = 'among us';
amongUs.fontSize = '80px'