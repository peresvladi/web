const setPause = () => {
    vid.autoplay = false;
    if (vid.paused === false) { vid.pause(); vid.muted = false; }
}