$(document).ready( function(){
    $("#left div").each(function(){
        $(this).click(function(){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        });
    });
})

function show(y,x) {
    console.log(y+" "+x);
    
    var url_image='https://sex4arab.xxx/contents/videos_screenshots/'+y+'/'+x+'/preview_360.mp4.jpg';
    var right=document.getElementById('right');
    console.log(url_image);
    right.innerHTML='<div id="image" onclick="video('+x+')"></div>';
    var image=document.getElementById('image');
    image.style.backgroundImage="url("+url_image+")";
}


function video(x) {
    if ((x>=0) && (x<=999)) {
        var url_video = "https://sex4arabxxx.b-cdn.net/0/"+x+"/"+x+".mp4";
        window.location.href=url_video;
    }
    else{
            if ((x>= 1000) && (x<=1999)) {
                var url_video = "https://sex4arabxxx.b-cdn.net/1000/"+x+"/"+x+".mp4";
            
                window.location.href=url_video;
            }
            else{
                if ((x>=2000) && (x<=2999)) {
                    var url_video = "https://sex4arabxxx.b-cdn.net/2000/"+x+"/"+x+".mp4";
                    
                    window.location.href=url_video;
                }
                else{
                    if ((x>= 3000) && (x<=3999)) {
                        var url_video = "https://sex4arabxxx.b-cdn.net/3000/"+x+"/"+x+".mp4";
                        

                        window.location.href=url_video;
                    }
                    else{
                        if ((x>=4000) && (x<=4999)) {
                            var url_video = "https://sex4arabxxx.b-cdn.net/4000/"+x+"/"+x+".mp4";
                            
    
                            window.location.href=url_video;
                        }
                        else{
                            if ((x>= 5000) && (x<=5999)) {
                                var url_video = "https://sex4arabxxx.b-cdn.net/5000/"+x+"/"+x+".mp4";
                                
        
                                window.location.href=url_video;
                            }
                        else{
                            if ((x>= 6000) && (x<=6400)) {
                                var url_video = "https://sex4arabxxx.b-cdn.net/5000/"+x+"/"+x+".mp4";
                                
        
                                window.location.href=url_video;
                            }
                        }
                    }
                }
            }
        }
    }
}
