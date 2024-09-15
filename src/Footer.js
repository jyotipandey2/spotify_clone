import React, {useEffect, useState} from 'react';
import './Footer.css';
import { useDataLayerValue } from './DataLayer';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { Grid, Slider } from '@mui/material';







function Footer({spotify}) {
    const [{ token, item, playing }, dispatch] = useDataLayerValue();

    useEffect(() => {
        if(spotify && spotify.skipToPrevious && spotify.getMyCurrentPlaybackState &&spotify.getMyCurrentPlayingTrack) 
        spotify.getMyCurrentPlaybackState().then((r) => {
          console.log("hello",r);
    
          dispatch({
            type: "SET_PLAYING",
            playing: r.is_playing,
          });
    
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
        });
      }, [spotify]);
    
      const handlePlayPause = () => {
        if (playing) {
          spotify.pause();
          dispatch({
            type: "SET_PLAYING",
            playing: false,
          });
        } else {
          spotify.play();
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        }
      };
    
      const skipNext = () => {
        spotify.skipToNext();
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      };
    
      const skipPrevious = () => {
            spotify.skipToPrevious();
            spotify.getMyCurrentPlayingTrack().then((r) => {
                dispatch({
                    type: "SET_ITEM",
                    item: r.item,
                });
                dispatch({
                    type: "SET_PLAYING",
                    playing: true,
                });
            });
        
      };


    return(
        <div className='footer'>
            <div className='footer_left'>
                <img 
                 className='footer_albumLogo'
                 src="" 
                 alt=""
                 />
                <div className='footer_songInfo'>
                    <h4>Yeah</h4>
                    <p>Usher</p>
                </div>
            </div>
            
            
            <div className='footer_center'>
                <ShuffleIcon className='footer_green'/>
                <SkipPreviousIcon className='footer_icon'/>
                <PlayCircleOutlinedIcon fontSize='large' className='footer_icon'/>
                <SkipNextIcon className='footer_icon'/>
                <RepeatIcon className='footer_green'/>
            </div>
            

            <div className='footer_right'>
                <Grid container spacing={2}>
                    <Grid item><PlaylistPlayIcon/></Grid>
                    <Grid item><VolumeDownIcon/></Grid>
                    <Grid item xs><Slider aria-labelledby="continuous-slider" /></Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Footer;