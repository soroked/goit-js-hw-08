import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// LS KEY
const LS_VIDEO_TIME_KEY = "videoplayer-current-time";

const iframeRef = document.querySelector('#vimeo-player');
const player = new Player(iframeRef);

player.setCurrentTime(localStorage.getItem(LS_VIDEO_TIME_KEY) ?? 0);

const onUpdate = (data) => {
  localStorage.setItem(LS_VIDEO_TIME_KEY, data.seconds);
  console.log(data.seconds);
};

player.on('timeupdate', throttle(onUpdate, 1000));