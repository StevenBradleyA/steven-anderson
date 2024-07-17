'use client';
import { useRef, useEffect, useState } from 'react';
import { useAudioPlayer } from '../Context/audioContext';

const AudioController = () => {
    const trackList = {
        synthwave: [
            {
                src: '/music/synthwave/horizon.mp3',
                title: 'Horizon',
                artist: 'VOYAGER',
                duration: 247.848,
            },
            {
                src: '/music/synthwave/flare.mp3',
                title: 'Flare',
                artist: 'Jasper De Ceuster',
                duration: 218.976,
            },
            {
                src: '/music/synthwave/supernal.mp3',
                title: 'Supernal',
                artist: 'Forhill & oDDling',
                duration: 235.704,
            },
            {
                src: '/music/synthwave/addictiveFeeling.mp3',
                title: 'Addictive Feeling',
                artist: 'Mad Animal',
                duration: 307.272,
            },
            {
                src: '/music/synthwave/laDreamin.mp3',
                title: 'L.A Dreamin',
                artist: 'Mad Animal',
                duration: 219.624,
            },
            {
                src: '/music/synthwave/loveFrequencies.mp3',
                title: 'Love Frequencies',
                artist: 'Mad Animal',
                duration: 226.176,
            },
            {
                src: '/music/synthwave/ghostTrigger.mp3',
                title: 'Ghost Trigger',
                artist: 'SHIKIMO',
                duration: 292.224,
            },
            {
                src: '/music/synthwave/retrowave.mp3',
                title: 'Retrowave',
                artist: 'Paul Velchev',
                duration: 148.632,
            },
        ],
        phonk: [
            {
                src: '/music/phonk/upgrade.mp3',
                title: 'UPGRADE',
                artist: 'OFFL1NX',
                duration: 112.728,
            },
            {
                src: '/music/phonk/chase.mp3',
                title: 'Chase',
                artist: 'KSLV',
                duration: 124.488,
            },
            {
                src: '/music/phonk/doOrDie.mp3',
                title: 'DO OR DIE',
                artist: 'Dxrk',
                duration: 96.408,
            },
            {
                src: '/music/phonk/paradigma.mp3',
                title: 'PARADIGMA',
                artist: 'ORSEN',
                duration: 123.792,
            },
            {
                src: '/music/phonk/rapture.mp3',
                title: 'RAPTURE',
                artist: 'INTERWORLD',
                duration: 164.784,
            },
            {
                src: '/music/phonk/cowbell.mp3',
                title: 'cowbell',
                artist: 'ditro',
                duration: 184.752,
            },
            {
                src: '/music/phonk/sxndnxdes.mp3',
                title: 'S.X.N.D N.X.D.E.S',
                artist: 'GREEN ORXNGE, SEND 1',
                duration: 109.68,
            },
        ],
    };

    const {
        audioRef,
        isPlaying,
        setIsPlaying,
        genre,
        setGenre,
        trackIndex,
        setTrackIndex,
        isShuffle,
        setIsShuffle,
        isRepeat,
        setIsRepeat,
    } = useAudioPlayer();

    const currentTimeRef = useRef(0);
    const requestRef = useRef();
    const [displayedTime, setDisplayedTime] = useState(0);

    useEffect(() => {
        const updateCurrentTime = () => {
            if (audioRef.current) {
                currentTimeRef.current = audioRef.current.currentTime;
                setDisplayedTime(currentTimeRef.current);
                if (
                    currentTimeRef.current >=
                        trackList[genre][trackIndex].duration &&
                    isRepeat === false
                ) {
                    nextTrack();
                } else if (
                    currentTimeRef.current >=
                        trackList[genre][trackIndex].duration &&
                    isRepeat === true
                ) {
                    audioRef.current.currentTime = 0;
                    currentTimeRef.current = 0;
                    setDisplayedTime(0);
                }
            }
            requestRef.current = requestAnimationFrame(updateCurrentTime);
        };

        if (isPlaying) {
            requestRef.current = requestAnimationFrame(updateCurrentTime);
        } else {
            cancelAnimationFrame(requestRef.current);
        }

        return () => cancelAnimationFrame(requestRef.current);
    }, [isPlaying, genre, trackIndex, isRepeat]);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const nextTrack = () => {
        if (isShuffle === true) {
            setTrackIndex((prevIndex) => {
                let newIndex;
                do {
                    newIndex = Math.floor(
                        Math.random() * trackList[genre].length
                    );
                } while (newIndex === prevIndex);
                return newIndex;
            });
        } else {
            setTrackIndex(
                (prevIndex) => (prevIndex + 1) % trackList[genre].length
            );
        }

        setIsPlaying(false);
        currentTimeRef.current = 0;
        setDisplayedTime(0);
        setTimeout(() => {
            setIsPlaying(true);
            audioRef.current.play();
        }, 200);
    };

    const prevTrack = () => {
        if (trackIndex === 0 && isShuffle === false) {
            setTrackIndex(trackList[genre].length - 1);
        } else if (trackIndex > 0 && isShuffle === false) {
            setTrackIndex((prevIndex) => prevIndex - 1);
        } else if (isShuffle === true) {
            setTrackIndex((prevIndex) => {
                let newIndex;
                do {
                    newIndex = Math.floor(
                        Math.random() * trackList[genre].length
                    );
                } while (newIndex === prevIndex);
                return newIndex;
            });
        }

        setIsPlaying(false);
        currentTimeRef.current = 0;
        setDisplayedTime(0);
        setTimeout(() => {
            setIsPlaying(true);
            audioRef.current.play();
        }, 200);
    };
    const changeGenre = () => {
        if (genre === 'synthwave') {
            setIsPlaying(false);
            currentTimeRef.current = 0;
            setDisplayedTime(0);
            setGenre('phonk');
            setTimeout(() => {
                setIsPlaying(true);
                audioRef.current.play();
            }, 200);
        } else if (genre === 'phonk') {
            setIsPlaying(false);
            setGenre('synthwave');
            setTimeout(() => {
                setIsPlaying(true);
                audioRef.current.play();
            }, 200);
        }
    };

    const changeVolume = (e) => {
        audioRef.current.volume = e.target.value;
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${
            remainingSeconds < 10 ? '0' : ''
        }${remainingSeconds}`;
    };

    const handleSliderChange = (e) => {
        const newTime = e.target.value;
        currentTimeRef.current = newTime;
        audioRef.current.currentTime = newTime;
        setDisplayedTime(newTime);
    };

    return (
        <div className="flex flex-col w-full h-full items-center px-3">
            <div className="mt-10">{trackList[genre][trackIndex]['title']}</div>
            <div className="text-sm text-black/50 ">
                {trackList[genre][trackIndex]['artist']}
            </div>
            <input
                className="w-full tablet:w-3/4 custom-range mt-3"
                type="range"
                min="0"
                max={trackList[genre][trackIndex]['duration']}
                value={currentTimeRef.current}
                onChange={handleSliderChange}
            />
            <div className="w-full tablet:w-3/4 flex justify-between text-xs text-black/50">
                <div>{formatTime(displayedTime)}</div>
                <div>
                    {formatTime(trackList[genre][trackIndex]['duration'])}
                </div>
            </div>
            <div className="flex w-full tablet:w-3/4 justify-between mt-3">
                <button
                    onClick={() => setIsShuffle(!isShuffle)}
                    className={`hover:text-white ease-in ${
                        isShuffle ? 'text-stevenBlue' : 'text-black'
                    }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M2 16.25C1.58579 16.25 1.25 16.5858 1.25 17C1.25 17.4142 1.58579 17.75 2 17.75V16.25ZM10.7478 14.087L10.1047 13.7011L10.7478 14.087ZM13.2522 9.91303L13.8953 10.2989L13.2522 9.91303ZM22 7L22.5303 7.53033C22.8232 7.23744 22.8232 6.76256 22.5303 6.46967L22 7ZM19.4697 8.46967C19.1768 8.76256 19.1768 9.23744 19.4697 9.53033C19.7626 9.82322 20.2374 9.82322 20.5303 9.53033L19.4697 8.46967ZM20.5303 4.46967C20.2374 4.17678 19.7626 4.17678 19.4697 4.46967C19.1768 4.76256 19.1768 5.23744 19.4697 5.53033L20.5303 4.46967ZM15.2205 7.3894L14.851 6.73675V6.73675L15.2205 7.3894ZM2 17.75H5.60286V16.25H2V17.75ZM11.3909 14.4728L13.8953 10.2989L12.6091 9.52716L10.1047 13.7011L11.3909 14.4728ZM18.3971 7.75H22V6.25H18.3971V7.75ZM21.4697 6.46967L19.4697 8.46967L20.5303 9.53033L22.5303 7.53033L21.4697 6.46967ZM22.5303 6.46967L20.5303 4.46967L19.4697 5.53033L21.4697 7.53033L22.5303 6.46967ZM13.8953 10.2989C14.3295 9.57518 14.6286 9.07834 14.9013 8.70996C15.1644 8.35464 15.3692 8.16707 15.59 8.04205L14.851 6.73675C14.384 7.00113 14.0315 7.36397 13.6958 7.8174C13.3697 8.25778 13.0285 8.82806 12.6091 9.52716L13.8953 10.2989ZM18.3971 6.25C17.5819 6.25 16.9173 6.24918 16.3719 6.30219C15.8104 6.35677 15.3179 6.47237 14.851 6.73675L15.59 8.04205C15.8108 7.91703 16.077 7.83793 16.517 7.79516C16.9733 7.75082 17.5531 7.75 18.3971 7.75V6.25ZM5.60286 17.75C6.41814 17.75 7.0827 17.7508 7.62807 17.6978C8.18961 17.6432 8.6821 17.5276 9.14905 17.2632L8.41 15.9579C8.18919 16.083 7.92299 16.1621 7.48296 16.2048C7.02675 16.2492 6.44685 16.25 5.60286 16.25V17.75ZM10.1047 13.7011C9.67046 14.4248 9.37141 14.9217 9.09867 15.29C8.8356 15.6454 8.63081 15.8329 8.41 15.9579L9.14905 17.2632C9.616 16.9989 9.96851 16.636 10.3042 16.1826C10.6303 15.7422 10.9715 15.1719 11.3909 14.4728L10.1047 13.7011Z"
                            fill="currentColor"
                        />
                        <path
                            opacity="0.5"
                            d="M2 7.75C1.58579 7.75 1.25 7.41421 1.25 7C1.25 6.58579 1.58579 6.25 2 6.25V7.75ZM10.7478 9.91303L10.1047 10.2989L10.7478 9.91303ZM13.2522 14.087L13.8953 13.7011L13.2522 14.087ZM22 17L22.5303 16.4697C22.8232 16.7626 22.8232 17.2374 22.5303 17.5303L22 17ZM19.4697 15.5303C19.1768 15.2374 19.1768 14.7626 19.4697 14.4697C19.7626 14.1768 20.2374 14.1768 20.5303 14.4697L19.4697 15.5303ZM20.5303 19.5303C20.2374 19.8232 19.7626 19.8232 19.4697 19.5303C19.1768 19.2374 19.1768 18.7626 19.4697 18.4697L20.5303 19.5303ZM15.2205 16.6106L14.851 17.2632V17.2632L15.2205 16.6106ZM2 6.25H5.60286V7.75H2V6.25ZM11.3909 9.52715L13.8953 13.7011L12.6091 14.4728L10.1047 10.2989L11.3909 9.52715ZM18.3971 16.25H22V17.75H18.3971V16.25ZM21.4697 17.5303L19.4697 15.5303L20.5303 14.4697L22.5303 16.4697L21.4697 17.5303ZM22.5303 17.5303L20.5303 19.5303L19.4697 18.4697L21.4697 16.4697L22.5303 17.5303ZM13.8953 13.7011C14.3295 14.4248 14.6286 14.9217 14.9013 15.29C15.1644 15.6454 15.3692 15.8329 15.59 15.9579L14.851 17.2632C14.384 16.9989 14.0315 16.636 13.6958 16.1826C13.3697 15.7422 13.0285 15.1719 12.6091 14.4728L13.8953 13.7011ZM18.3971 17.75C17.5819 17.75 16.9173 17.7508 16.3719 17.6978C15.8104 17.6432 15.3179 17.5276 14.851 17.2632L15.59 15.9579C15.8108 16.083 16.077 16.1621 16.517 16.2048C16.9733 16.2492 17.5531 16.25 18.3971 16.25V17.75ZM5.60286 6.25C6.41814 6.25 7.0827 6.24918 7.62807 6.30219C8.18961 6.35677 8.6821 6.47237 9.14905 6.73675L8.41 8.04205C8.18919 7.91703 7.92299 7.83793 7.48296 7.79516C7.02675 7.75082 6.44685 7.75 5.60286 7.75V6.25ZM10.1047 10.2989C9.67046 9.57518 9.37141 9.07834 9.09867 8.70996C8.8356 8.35464 8.63081 8.16707 8.41 8.04205L9.14905 6.73675C9.616 7.00113 9.96851 7.36397 10.3042 7.8174C10.6303 8.25778 10.9715 8.82806 11.3909 9.52715L10.1047 10.2989Z"
                            fill="#1C274C"
                        />
                    </svg>
                </button>

                <button
                    onClick={prevTrack}
                    className="hover:text-stevenBlue ease-in"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-7 h-7 rotate-180"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M3.76172 7.21957V16.7896C3.76172 18.7496 5.89172 19.9796 7.59172 18.9996L11.7417 16.6096L15.8917 14.2096C17.5917 13.2296 17.5917 10.7796 15.8917 9.79957L11.7417 7.39957L7.59172 5.00957C5.89172 4.02957 3.76172 5.24957 3.76172 7.21957Z"
                            fill="currentColor"
                        />
                        <path
                            d="M20.2383 18.9303C19.8283 18.9303 19.4883 18.5903 19.4883 18.1803V5.82031C19.4883 5.41031 19.8283 5.07031 20.2383 5.07031C20.6483 5.07031 20.9883 5.41031 20.9883 5.82031V18.1803C20.9883 18.5903 20.6583 18.9303 20.2383 18.9303Z"
                            fill="currentColor"
                        />
                    </svg>
                </button>
                <button
                    onClick={togglePlay}
                    className="bg-stevenBlue rounded-full p-3 z-40 hover:bg-opacity-70 ease-in"
                >
                    {isPlaying ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
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
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            viewBox="-0.5 0 7 7"
                            version="1.1"
                        >
                            <g
                                id="Page-1"
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                            >
                                <g
                                    transform="translate(-347.000000, -3766.000000)"
                                    fill="currentColor"
                                >
                                    <g transform="translate(56.000000, 160.000000)">
                                        <path d="M296.494737,3608.57322 L292.500752,3606.14219 C291.83208,3605.73542 291,3606.25002 291,3607.06891 L291,3611.93095 C291,3612.7509 291.83208,3613.26444 292.500752,3612.85767 L296.494737,3610.42771 C297.168421,3610.01774 297.168421,3608.98319 296.494737,3608.57322"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    )}
                </button>
                <button
                    onClick={nextTrack}
                    className="hover:text-stevenBlue ease-in"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M3.76172 7.21957V16.7896C3.76172 18.7496 5.89172 19.9796 7.59172 18.9996L11.7417 16.6096L15.8917 14.2096C17.5917 13.2296 17.5917 10.7796 15.8917 9.79957L11.7417 7.39957L7.59172 5.00957C5.89172 4.02957 3.76172 5.24957 3.76172 7.21957Z"
                            fill="currentColor"
                        />
                        <path
                            d="M20.2383 18.9303C19.8283 18.9303 19.4883 18.5903 19.4883 18.1803V5.82031C19.4883 5.41031 19.8283 5.07031 20.2383 5.07031C20.6483 5.07031 20.9883 5.41031 20.9883 5.82031V18.1803C20.9883 18.5903 20.6583 18.9303 20.2383 18.9303Z"
                            fill="currentColor"
                        />
                    </svg>
                </button>
                <button
                    onClick={() => setIsRepeat(!isRepeat)}
                    className={`hover:text-white ease-in ${
                        isRepeat ? 'text-stevenBlue' : 'text-black'
                    }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 "
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <g opacity="0.4">
                            <path
                                d="M3.58008 5.16016H17.4201C19.0801 5.16016 20.4201 6.50016 20.4201 8.16016V11.4802"
                                stroke="#292D32"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M6.74008 2L3.58008 5.15997L6.74008 8.32001"
                                stroke="#292D32"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                        <path
                            d="M20.4201 18.84H6.58008C4.92008 18.84 3.58008 17.5 3.58008 15.84V12.52"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M17.2598 22.0002L20.4198 18.8402L17.2598 15.6802"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>

            <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                onChange={changeVolume}
                className="custom-volume-slider mt-5 w-1/2"
            />

            <button
                className="absolute right-2 bottom-2 flex gap-1 p-2 rounded-lg border-2 border-stevenBlue text-stevenBlue  text-sm items-center hover:border-red-500 ease-in hover:text-red-500 phonk-button "
                onClick={changeGenre}
            >
                <div className="text-black/50 phonk-button-text">{`${
                    genre === 'phonk' ? 'Synthwave' : 'PHONK'
                }`}</div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5  "
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    version="1.1"
                >
                    <path d="M15.888 31.977c-7.539 0-12.887-5.228-12.887-12.431 0-3.824 2.293-7.944 2.39-8.116 0.199-0.354 0.59-0.547 0.998-0.502 0.404 0.052 0.736 0.343 0.84 0.736 0.006 0.024 0.624 2.336 1.44 3.62 0.548 0.864 1.104 1.475 1.729 1.899-0.423-1.833-0.747-4.591-0.22-7.421 1.448-7.768 7.562-9.627 7.824-9.701 0.337-0.097 0.695-0.010 0.951 0.223 0.256 0.235 0.373 0.586 0.307 0.927-0.010 0.054-1.020 5.493 1.123 10.127 0.195 0.421 0.466 0.91 0.758 1.399 0.083-0.672 0.212-1.386 0.41-2.080 0.786-2.749 2.819-3.688 2.904-3.726 0.339-0.154 0.735-0.104 1.027 0.126 0.292 0.231 0.433 0.603 0.365 0.969-0.011 0.068-0.294 1.938 1.298 4.592 1.438 2.396 1.852 3.949 1.852 6.928 0 7.203-5.514 12.43-13.111 12.43zM6.115 14.615c-0.549 1.385-1.115 3.226-1.115 4.931 0 6.044 4.506 10.43 10.887 10.43 6.438 0 11.11-4.386 11.11-10.431 0-2.611-0.323-3.822-1.567-5.899-0.832-1.386-1.243-2.633-1.439-3.625-0.198 0.321-0.382 0.712-0.516 1.184-0.61 2.131-0.456 4.623-0.454 4.649 0.029 0.446-0.242 0.859-0.664 1.008s-0.892 0.002-1.151-0.364c-0.075-0.107-1.854-2.624-2.637-4.32-1.628-3.518-1.601-7.323-1.434-9.514-1.648 0.96-4.177 3.104-4.989 7.466-0.791 4.244 0.746 8.488 0.762 8.529 0.133 0.346 0.063 0.739-0.181 1.018-0.245 0.277-0.622 0.4-0.986 0.313-0.124-0.030-2.938-0.762-4.761-3.634-0.325-0.514-0.617-1.137-0.864-1.742z" />
                </svg>
            </button>
        </div>
    );
};

export default AudioController;

// const [genre, setGenre] = useState('synthwave');
// const [isPlaying, setIsPlaying] = useState(false);
// const [currentSongIndex, setCurrentSongIndex] = useState(0);
// const [sources, setSources] = useState(genres[genre]);
// const [shuffledOrder, setShuffledOrder] = useState([]);
// const [isShuffling, setIsShuffling] = useState(false);
// const [isRepeating, setIsRepeating] = useState(false);
// const [currentTime, setCurrentTime] = useState(0);
// const [duration, setDuration] = useState(0);
// const [volume, setVolume] = useState(0.5);

// const changeGenre = (genre) => {
//     setGenre(genre);
//     setIsPlaying(false);
//     audioRef.current.pause();
//     setSources(genres[genre]);
//     setCurrentSongIndex(0);
//     audioRef.current.load();
//     setTimeout(() => {
//         audioRef.current.play();
//         setIsPlaying(true);
//     }, 1000);
// };

// const shuffleArray = (array) => {
//     let shuffled = [...array];
//     for (let i = shuffled.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//     }
//     return shuffled;
// };

// const handlePlayPause = () => {
//     if (isPlaying) {
//         audioRef.current.pause();
//     } else {
//         audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
// };

// const handleSliderChange = (e) => {
//     const time = e.target.value;
//     audioRef.current.currentTime = time;
//     setCurrentTime(time);
// };

// const handleVolumeChange = (e) => {
//     const volume = e.target.value;
//     setVolume(volume);
//     audioRef.current.volume = volume;
// };

// const handleNext = () => {
//     if (isRepeating) {
//         audioRef.current.currentTime = 0;
//         audioRef.current.play();
//         return;
//     }
//     const nextIndex = isShuffling
//         ? (currentSongIndex + 1) % shuffledOrder.length
//         : (currentSongIndex + 1) % sources.length;
//     setCurrentSongIndex(nextIndex);
// };

// const handlePrev = () => {
//     const prevIndex = isShuffling
//         ? (currentSongIndex - 1 + shuffledOrder.length) %
//           shuffledOrder.length
//         : (currentSongIndex - 1 + sources.length) % sources.length;
//     setCurrentSongIndex(prevIndex);
// };

// const toggleShuffle = () => {
//     setIsShuffling(!isShuffling);
//     if (!isShuffling) {
//         const order = shuffleArray(sources.map((_, index) => index));
//         setShuffledOrder(order);
//         setCurrentSongIndex(order[0]);
//     } else {
//         setShuffledOrder([]);
//         setCurrentSongIndex(0);
//     }
// };

// const toggleRepeat = () => {
//     setIsRepeating(!isRepeating);
// };

// const selectSong = (index) => {
//     setCurrentSongIndex(index);
// };

// const formatTime = useCallback((seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = Math.floor(seconds % 60);
//     return `${minutes}:${
//         remainingSeconds < 10 ? '0' : ''
//     }${remainingSeconds}`;
// }, []);

// useEffect(() => {
//     if (audioRef.current && isPlaying) {
//         audioRef.current.play();
//     }
// }, [currentSongIndex, isPlaying]);

// useEffect(() => {
//     if (audioRef.current) {
//         audioRef.current.volume = volume;
//     }
// }, [volume]);

// useEffect(() => {
//     if (audioRef.current) {
//         audioRef.current.load();
//         setDuration(audioRef.current.duration || 0);
//         setCurrentTime(0);
//     }
// }, [sources]);

// useEffect(() => {
//     const audio = audioRef.current;
//     const onTimeUpdate = () => setCurrentTime(audio.currentTime);
//     const onLoadedMetadata = () => setDuration(audio.duration);
//     const onEnded = () => handleNext();

//     if (audio) {
//         audio.addEventListener('timeupdate', onTimeUpdate);
//         audio.addEventListener('loadedmetadata', onLoadedMetadata);
//         audio.addEventListener('ended', onEnded);
//     }

//     return () => {
//         if (audio) {
//             audio.removeEventListener('timeupdate', onTimeUpdate);
//             audio.removeEventListener('loadedmetadata', onLoadedMetadata);
//             audio.removeEventListener('ended', onEnded);
//         }
//     };
// }, [handleNext]);

// const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = Math.floor(seconds % 60);
//     return `${minutes}:${
//         remainingSeconds < 10 ? '0' : ''
//     }${remainingSeconds}`;
// };

// const formatTime = useCallback((seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = Math.floor(seconds % 60);
//     return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
// }, []);
