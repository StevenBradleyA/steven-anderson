'use client';

import { useAudioPlayer } from '../Context/audioContext';

const AudioPlayer = () => {
    const {
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

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${
            remainingSeconds < 10 ? '0' : ''
        }${remainingSeconds}`;
    };
    return (
        <div className="flex flex-col w-full h-full items-center">
            <div className="mt-10">{currentTitle}</div>
            <div className="text-sm text-black/50 ">{currentArtist}</div>
            <input
                className="w-3/4 "
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={handleSliderChange}
            />
            <div className="w-3/4 flex justify-between text-xs text-black/50">
                <div>{formatTime(currentTime)}</div>
                <div>{formatTime(duration)}</div>
            </div>
            <div className='flex w-1/2 justify-between'>
                <button onClick={handlePrev}>Prev</button>
                <button
                    onClick={()=> handlePlayPause()}
                    className="bg-stevenBlue rounded-full p-3 z-40"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z"
                            fill="currentColor"
                        />
                        <path
                            d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z"
                            fill="currentColor"
                        />
                    </svg>
                </button>
                <button onClick={handleNext}>Next</button>
            </div>
            <button onClick={toggleShuffle}>
                {isShuffling ? 'Stop Shuffle' : 'Shuffle'}
            </button>
            <button onClick={toggleRepeat}>
                {isRepeating ? 'Stop Repeat' : 'Repeat'}
            </button>
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
                className="mt-2 "
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
