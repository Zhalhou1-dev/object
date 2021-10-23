function draw() {  
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    video.hide();
}
function draw(){
    image(video,0,0,480,380);
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Object Detected";
}
function modelLoaded(){
    console.log("Model Loaded!");
    status=true;

}