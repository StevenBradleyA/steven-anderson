'use client';
import React, { createContext, useState, useContext, useRef } from 'react';

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
    const trackList = {
        synthwave: [
            {
                src: '/music/synthwave/horizon.mp3',
                title: 'Horizon',
                artist: 'VOYAGER',
            },
            {
                src: '/music/synthwave/flare.mp3',
                title: 'Flare',
                artist: 'Jasper De Ceuster',
            },
            {
                src: '/music/synthwave/supernal.mp3',
                title: 'Supernal',
                artist: 'Forhill & oDDling',
            },
            {
                src: '/music/synthwave/addictiveFeeling.mp3',
                title: 'Addictive Feeling',
                artist: 'Mad Animal',
            },
            {
                src: '/music/synthwave/laDreamin.mp3',
                title: 'L.A Dreamin',
                artist: 'Mad Animal',
            },
            {
                src: '/music/synthwave/loveFrequencies.mp3',
                title: 'Love Frequencies',
                artist: 'Mad Animal',
            },
            {
                src: '/music/synthwave/ghostTrigger.mp3',
                title: 'Ghost Trigger',
                artist: 'SHIKIMO',
            },
            {
                src: '/music/synthwave/retrowave.mp3',
                title: 'Retrowave',
                artist: 'Paul Velchev',
            },
        ],
        phonk: [
            {
                src: '/music/phonk/upgrade.mp3',
                title: 'UPGRADE',
                artist: 'OFFL1NX',
            },
            { src: '/music/phonk/chase.mp3', title: 'Chase', artist: 'KSLV' },
            {
                src: '/music/phonk/doOrDie.mp3',
                title: 'DO OR DIE',
                artist: 'Dxrk',
            },
            {
                src: '/music/phonk/paradigma.mp3',
                title: 'PARADIGMA',
                artist: 'ORSEN',
            },
            {
                src: '/music/phonk/rapture.mp3',
                title: 'RAPTURE',
                artist: 'INTERWORLD',
            },
            {
                src: '/music/phonk/cowbell.mp3',
                title: 'cowbell',
                artist: 'ditro',
            },
            {
                src: '/music/phonk/sxndnxdes.mp3',
                title: 'S.X.N.D N.X.D.E.S',
                artist: 'GREEN ORXNGE, SEND 1',
            },
        ],
    };
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isShuffle, setIsShuffle] = useState(false);
    const [isRepeat, setIsRepeat] = useState(false);

    const [genre, setGenre] = useState('synthwave');
    const [trackIndex, setTrackIndex] = useState(0);

    return (
        <AudioContext.Provider
            value={{
                audioRef,
                isPlaying,
                setIsPlaying,
                genre,
                setGenre,
                setTrackIndex,
                trackIndex,
                isShuffle,
                setIsShuffle,
                isRepeat,
                setIsRepeat,
            }}
        >
            {children}

            <audio ref={audioRef} src={trackList[genre][trackIndex]['src']} />
        </AudioContext.Provider>
    );
};

export const useAudioPlayer = () => {
    const context = useContext(AudioContext);
    if (!context) {
        throw new Error('useAudioPlayer must be used within an AudioProvider');
    }
    return context;
};
