'use client';

import { useAudioPlayer } from '../Context/audioContext';

const AudioPlayer = () => {
    const {
        isPlaying,
        currentTime,
        duration,
        volume,
        isShuffling,
        isRepeating,
        currentTitle,
        currentArtist,
        handlePlayPause,
        handleSliderChange,
        handleVolumeChange,
        handleNext,
        handlePrev,
        changeGenre,
        toggleShuffle,
        toggleRepeat,
        currentGenre,
    } = useAudioPlayer();

    return (
        <div className="audio-player">
            <div>
                <span>
                    {currentTitle} - {currentArtist}
                </span>
            </div>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handlePlayPause}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <button onClick={handleNext}>Next</button>
            <button onClick={toggleShuffle}>
                {isShuffling ? 'Stop Shuffle' : 'Shuffle'}
            </button>
            <button onClick={toggleRepeat}>
                {isRepeating ? 'Stop Repeat' : 'Repeat'}
            </button>
            <input
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={handleSliderChange}
            />
            <span>
                {Math.floor(currentTime)} / {Math.floor(duration)}
            </span>
            <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="volume-slider"
            />

            <button
                className="mt-10 "
                onClick={() => {
                    if (currentGenre === 'synthwave') {
                        changeGenre('phonk');
                    } else if (currentGenre === 'phonk') {
                        changeGenre('synthwave');
                    }
                }}
            >
                PHONK
            </button>
        </div>
    );
};

export default AudioPlayer;
