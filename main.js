Webcam.set({
    width:500,
    height:450,
    image_format:'png',
    png_quality:100
});
console.log('ml5 version: ',ml5.version);
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_image(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='CapturedImage' src="+data_uri+">";
    });
}
    classifier=ml5.imageClassifier('MobileNet',modelLoaded);

function modelLoaded(){
    console.log('MobileNet Model Has Been Loaded');
}
function check_image(){
    img=document.getElementById('CapturedImage');
    classifier.classify(img,gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.log(error + " ERROR");
    } else {
        console.log(results);
        url_part_1='https://www.google.com/search?q=';
        url_part_2=results[0].label;
        url=url_part_1+url_part_2;
        window.open(url,'_blank');
        document.getElementById('CapturedImage').style.height=0;
        document.getElementById('CapturedImage').style.width=0;
    }
}