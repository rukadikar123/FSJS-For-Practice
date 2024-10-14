import  { useState } from 'react';


function AudioBar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(50);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };                

  const handleProgress = (e) => {
    setProgress(e.target.value);
  };

  const handleVolume = (e) => {
    setVolume(e.target.value);
  };

  return (
    <div className="audio-bar">
      <div className="song-info">
        <img src="song-album-art.jpg" alt="Song Album Art" />
        <div>
          <h5>Song Title</h5>
          <p>Artist Name</p>
        </div>
      </div>
      <div className="controls">
        <i className="fas fa-step-backward" />
        {isPlaying ? (
          <i className="fas fa-pause-circle" onClick={handlePlayPause} />
        ) : (
          <i className="fas fa-play-circle" onClick={handlePlayPause} />
        )}
        <i className="fas fa-step-forward" />
      </div>
      <div className="progress-bar">
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleProgress}
        />
        <span>{progress}%</span>
      </div>
      <div className="volume-controls">
        <i className="fas fa-volume-down" />
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolume}
        />
        <i className="fas fa-volume-up" />
        <span>{volume}%</span>
      </div>
    </div>
  );
}

export default AudioBar;