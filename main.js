function preload() {
    mustache = loadImage('https://i.postimg.cc/Xq41sJKV/image.png');
  }

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
     video = createCapture(VIDEO);
    video.size = (300, 300)
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses)
}

function draw()
{
    image(video, 0,0,300,300);
}

function save()
{
    save("filtered_image.png")
}

function modelLoaded()
{
    console.log("Posenet has intialized");
}
function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose;
        noseY = results[0].pose.nose;
        console.log("nose x = " + + noseX);
        console.log("nose y = " + noseY);
    }
}

