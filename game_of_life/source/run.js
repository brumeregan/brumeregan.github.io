export default function () {
    const self = this;
    if (this.isPlay) {
        return;
    }

    this.playingGame = setInterval(function () {
        self.loop();
    }, this.speed);

    this.isPlay = true;
};