import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT = 'videoplayer-current-time';
const videoEl = document.querySelector('iframe');


const player = new Player(videoEl);


const onPlay = function ({seconds: currentTime}) {
    localStorage.setItem(CURRENT, JSON.stringify(currentTime))
};

player.on('timeupdate', throttle(onPlay, 1000));



player.setCurrentTime(localStorage.getItem(CURRENT)).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});



