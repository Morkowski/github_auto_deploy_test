import { useEffect } from "react";
import { Player as BitmovinPlayer } from 'bitmovin-player';
import { UIFactory } from 'bitmovin-player-ui';
import 'bitmovin-player-ui/dist/css/bitmovinplayer-ui.min.css';

const playerConfig = {
    key: 'YOUR KEY HERE',
    ui: false
};

const playerSource = {
    dash: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
    hls: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
    progressive: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/MI201109210084_mpeg-4_hd_high_1080p25_10mbits.mp4',
    poster: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/poster.jpg'
};

export const Player = () => {
    useEffect(() => {
        const player = new BitmovinPlayer(document.getElementById('player'), playerConfig);
        const myUiManager = UIFactory.buildDefaultUI(player);

        player.load(playerSource).then(
            () => { console.log('Successfully loaded source'); },
            () => { console.log('Error while loading source'); }
        );
    }, []);

    return <div id="player" />;
}