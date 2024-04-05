import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    const localTime = "videoplayer-current-time";

    player.on('timeupdate', throttle(onTimeUpdate, 1000));

    player.setCurrentTime(localStorage.getItem(localTime));

    function onTimeUpdate(data) {
        localStorage.setItem(localTime, data.seconds);
    }

  
    
 
