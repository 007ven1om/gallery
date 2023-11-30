<?php
if ($_GET['repo']==0) {
    for ($i=1 ; $i <= 999; $i++) { 
        $url = "https://sex4arabxxx.b-cdn.net/0/$i/$i.mp4";
        $url_image="https://sex4arab.xxx/contents/videos_screenshots/0/$i/preview_360.mp4.jpg";
        echo '
                <div onclick="show(0,'.$i.')"><img src="'.$url_image.'"></div>
            ';
    }
}
if ($_GET['repo']!==0) {
$id=$_GET['repo'];
    function show_video($id,$start,$end){
        for ($i=$start; $i <= $end; $i++) { 
            $url = "https://sex4arabxxx.b-cdn.net/$start/$i/$i.mp4";
            $url_image="https://sex4arab.xxx/contents/videos_screenshots/$start/$i/preview_360.mp4.jpg";
            
            
            echo '
                    <div onclick="show('.$start.','.$i.')"><img src="'.$url_image.'"></div>
                ';
            
            
        }
    }
    switch ($id) {
        case '0':
            
        break;
        case '1':
            $start='1000';
            $end='1999';
            show_video($id,$start,$end);
        break;
        case '2':
            $start='2000';
            $end='2999';
            show_video($id,$start,$end);
        break;
        case '3':
            $start='3000';
            $end='3999';
            show_video($id,$start,$end);
        break;
        case '4':
            $start='4000';
            $end='4999';
            show_video($id,$start,$end);
        break;
        case '5':
            $start='5000';
            $end='5999';
            show_video($id,$start,$end);
        break;
        case '6':
            $start='6000';
            $end='6400';
            show_video($id,$start,$end);
        break;
    }
}

?>