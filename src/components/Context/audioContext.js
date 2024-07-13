'use client';
import React, { createContext, useState, useRef, useEffect } from 'react';

const AudioPlayerContext = createContext();

export const AudioPlayerProvider = ({ children }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [volume, setVolume] = useState(0.2);
    const [isShuffling, setIsShuffling] = useState(false);
    const [shuffledOrder, setShuffledOrder] = useState([]);
    const [isRepeating, setIsRepeating] = useState(false);
    const [currentGenre, setCurrentGenre] = useState('synthwave');
    const [sources, setSources] = useState([
        { src: '/music/first.mp3', title: 'Song 1', artist: 'Artist 1' },
        { src: '/music/second.mp3', title: 'Song 2', artist: 'Artist 2' },
        { src: '/music/third.mp3', title: 'Song 3', artist: 'Artist 3' },
    ]);

    const genres = {
        synthwave: [
            {
                src: '/music/first.mp3',
                title: 'Synthwave 1',
                artist: 'Artist 1',
            },
            {
                src: '/music/second.mp3',
                title: 'Synthwave 2',
                artist: 'Artist 2',
            },
            {
                src: '/music/third.mp3',
                title: 'Synthwave 3',
                artist: 'Artist 3',
            },
        ],
        phonk: [
            { src: '/music/first.mp3', title: 'Phonk 1', artist: 'Artist 1' },
            { src: '/music/second.mp3', title: 'Phonk 2', artist: 'Artist 2' },
            { src: '/music/third.mp3', title: 'Phonk 3', artist: 'Artist 3' },
        ],
    };

    const changeGenre = (genre) => {
        setCurrentGenre(genre);
        setIsPlaying(false);
        audioRef.current.pause();
        setSources(genres[genre]);
        setCurrentSongIndex(0);
        audioRef.current.load();
        setTimeout(() => {
            audioRef.current.play();
            setIsPlaying(true);
        }, [1000]);
    };

    const shuffleArray = (array) => {
        let shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    const handlePlayPause = () => {
        if (isPlaying === true) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const handlePlay = () => {
        if (isPlaying === false) {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };

    const handleSliderChange = (e) => {
        const time = e.target.value;
        audioRef.current.currentTime = time;
        setCurrentTime(time);
    };

    const handleVolumeChange = (e) => {
        const volume = e.target.value;
        setVolume(volume);
        audioRef.current.volume = volume;
    };

    const handleNext = () => {
        if (isRepeating) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
            return;
        }
        if (isShuffling) {
            const nextIndex = (currentSongIndex + 1) % shuffledOrder.length;
            setCurrentSongIndex(nextIndex);
        } else {
            const nextIndex = (currentSongIndex + 1) % sources.length;
            setCurrentSongIndex(nextIndex);
        }
    };

    const handlePrev = () => {
        if (isShuffling) {
            const prevIndex =
                (currentSongIndex - 1 + shuffledOrder.length) %
                shuffledOrder.length;
            setCurrentSongIndex(prevIndex);
        } else {
            const prevIndex =
                (currentSongIndex - 1 + sources.length) % sources.length;
            setCurrentSongIndex(prevIndex);
        }
    };

    const handleEnded = () => {
        handleNext();
    };

    const toggleShuffle = () => {
        setIsShuffling(!isShuffling);
        if (!isShuffling) {
            const order = shuffleArray(sources.map((_, index) => index));
            setShuffledOrder(order);
            setCurrentSongIndex(order[0]);
        } else {
            setShuffledOrder([]);
            setCurrentSongIndex(0);
        }
    };

    const toggleRepeat = () => {
        setIsRepeating(!isRepeating);
    };

    const selectSong = (index) => {
        setCurrentSongIndex(index);
    };

    useEffect(() => {
        if (audioRef.current && isPlaying === true) {
            audioRef.current.play();
        }
    }, [currentSongIndex, isPlaying]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.load();
            setDuration(audioRef.current.duration || 0);
            setCurrentTime(0);
        }
    }, [sources]);

    const currentSource = isShuffling
        ? sources[shuffledOrder[currentSongIndex]].src
        : sources[currentSongIndex].src;
    const currentTitle = isShuffling
        ? sources[shuffledOrder[currentSongIndex]].title
        : sources[currentSongIndex].title;
    const currentArtist = isShuffling
        ? sources[shuffledOrder[currentSongIndex]].artist
        : sources[currentSongIndex].artist;

    return (
        <AudioPlayerContext.Provider
            value={{
                audioRef,
                isPlaying,
                currentTime,
                duration,
                currentSongIndex,
                volume,
                isShuffling,
                shuffledOrder,
                isRepeating,
                currentSource,
                currentTitle,
                currentArtist,
                currentGenre,
                changeGenre,
                handlePlayPause,
                handlePlay,
                handleTimeUpdate,
                handleLoadedMetadata,
                handleSliderChange,
                handleVolumeChange,
                handleNext,
                handlePrev,
                handleEnded,
                toggleShuffle,
                toggleRepeat,
                selectSong,
            }}
        >
            <audio
                ref={audioRef}
                src={currentSource}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={handleEnded}
                // onPlay={() => setIsPlaying(true)}
                // onPause={() => setIsPlaying(false)}
            />
            {children}
        </AudioPlayerContext.Provider>
    );
};

export const useAudioPlayer = () => React.useContext(AudioPlayerContext);
