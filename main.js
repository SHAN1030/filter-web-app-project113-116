nose_x = 0;
nose_y = 0;
img="";
function preload(){
    img = loadImage("https://i.postimg.cc/wTTwJWxm/mustache.png");
}

function setup(){
canvas = createCanvas(700,600);
canvas.center();
video=createCapture(VIDEO);
video.size(700,600);
video.hide();
posenet = ml5.poseNet(video,modelloaded);
posenet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,700,600);    
    image(img,nose_x-50,nose_y-15,100,100)
}
function take_snap(){
    save('capturephoto.png');
}
function modelloaded(){
    console.log('Posenet is initialized.');
}
function gotPoses(results){
if(results.length>0)
{
    console.log(results);
    nose_x = results[0].pose.nose.x;
    nose_y = results[0].pose.nose.y;
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
}
}