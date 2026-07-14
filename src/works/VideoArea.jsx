import React, { useEffect, useRef, useState } from 'react'
import { Cross as Hamburger } from 'hamburger-react'
import useScreen from '../useScreen.js'
import Player from '@vimeo/player'

const VideoArea = ({ preview, src, videoId, className = '', title }) => {
    const [initialState, setInitialState] = useState(true)
    const [open, setOpen] = useState(false)
    const { isTablet } = useScreen()
    const videoRef = useRef()

    const playerRef = useRef(null)
    const [player, setPlayer] = useState(null)
    const [videoAspectRatio, setVideoAspectRatio] = useState(16 / 9)
    const [coverAspectRatio, setCoverAspectRatio] = useState(16 / 9)

    useEffect(() => {
        if (!preview) return
        const img = new Image()
        img.onload = () => {
            if (img.naturalWidth && img.naturalHeight) {
                setCoverAspectRatio(img.naturalWidth / img.naturalHeight)
            }
        }
        img.src = '/previews/' + preview
    }, [preview])

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isTablet) return
            if (e.key === 'Escape') setOpen(false)
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    useEffect(() => {
        const createPlayer = async () => {
            const newPlayer = new Player(playerRef.current, {
                portrait: false,
                title: false,
                vimeoLogo: false,
                responsive: true,
            })
            await newPlayer.loadVideo({ id: videoId })
            const [width, height] = await Promise.all([
                newPlayer.getVideoWidth(),
                newPlayer.getVideoHeight(),
            ])
            if (width && height) {
                setVideoAspectRatio(width / height)
            }
            setPlayer(newPlayer)
        }

        if (playerRef.current) {
            createPlayer()
        }

        return () => {
            if (player) {
                player.destroy()
            }
        }
    }, [playerRef])

    useEffect(() => {
        if (player) {
            if (open) {
                player.play()
            } else {
                player.pause()
                player.setCurrentTime(0)
            }
        }
    }, [open])

    return (
        <>
            <div className={'relative flex flex-col w-full ' + className}>
                <div
                    className="hover:cursor-pointer relative w-full"
                    style={{ aspectRatio: coverAspectRatio }}
                    onClick={() => setOpen(true)}
                    onMouseEnter={() => {
                        src && isTablet && setInitialState(false)
                        videoRef.current && isTablet && videoRef.current.play()
                    }}
                    onMouseLeave={() => {
                        setInitialState(true)
                        videoRef.current && isTablet && videoRef.current.pause()
                    }}
                >
                    {isTablet && (
                        <img
                            src={'/previews/' + preview}
                            className="absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-300"
                            style={{
                                opacity: initialState ? 1 : 0,
                            }}
                        />
                    )}
                    {isTablet ? (
                        <video
                            ref={videoRef}
                            src={'/videos/' + src}
                            loop={true}
                            muted
                            className="w-full h-full object-cover p-px"
                        />
                    ) : (
                        <iframe
                            src={`https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0`}
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            className="w-full h-full"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>

                {/* {title && (
                    <p className="pt-3 text-neutral-500 text-xl leading-tight">
                        {title}
                    </p>
                )}*/}
            </div>

            <div
                className="fixed bg-black top-0 left-0 h-dvh w-dvw z-[999] transition-opacity flex items-center justify-center duration-300"
                style={{
                    opacity: open ? 1 : 0,
                    pointerEvents: open ? 'all' : 'none',
                }}
            >
                <div className="absolute right-2 top-0">
                    <Hamburger
                        duration={0.25}
                        direction="right"
                        distance="sm"
                        rounded
                        color={open ? '#FFFFFF' : '#000000'}
                        toggled={true}
                        toggle={setOpen}
                    />
                </div>
                <div
                    className="grid mx-auto"
                    style={{
                        width: `min(90vw, 90vh * ${videoAspectRatio})`,
                    }}
                    ref={playerRef}
                    data-vimeo-id={videoId}
                ></div>
            </div>
        </>
    )
}

export default VideoArea
