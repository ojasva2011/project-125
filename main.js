leftWristX=0;
rightWristX=0;
difference=0;


function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('poseNet Is Initialized')
}

function draw(){
    document.getElementById("font_size").innerHTML = "Font Size Of The Text Will Be : "+difference+"px";
    background("#808080");
    fill('#31BCEC');
    textSize(difference);
    text("Ojasva",240,250)
}


function gotPoses(results){
    if(results.length > 0){
     console.log(results)
    
  leftWristX = results[0].pose.leftWrist.x;
  rightWristX = results[0].pose.rightWrist.x;
  difference = floor(leftWristX - rightWristX);
  console.log("difference" + difference);

}
}