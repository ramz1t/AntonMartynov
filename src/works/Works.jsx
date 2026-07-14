import React, { Suspense } from 'react'
import Block from '../common/Block.jsx'
import useScreen from '../useScreen.js'
import WorkSection from './WorkSection.jsx'

const Works = () => {
    const { isTablet } = useScreen()
    const works = [
        {
            preview_small: 'fx2.jpg',
            video_small: 'fx2.mp4',
            id_small: 803844658,
            name_small: 'TRADING IS CONSTANTLY OVERCOMING',
            preview_big: 'diver.jpg',
            video_big: 'fx1.mp4',
            id_big: 795577052,
            name_big: 'THIS IS NEW YOU',
            title: 'FXPRO',
            text: "A series of brand videos for the Broker of the Year 2025, built entirely from stock footage with no original shoot. Despite the constraint, the series reached broadcast quality and aired on Bloomberg TV, one of the world's leading financial channels.",
        },
        {
            preview_small: 'sber_alp1.jpg',
            video_small: 'sber_alp.mp4',
            id_small: 934921550,
            name_small: 'DMITRY',
            preview_big: 'sber_guide1.jpg',
            video_big: 'sber_guide.mp4',
            id_big: 797666557,
            name_big: 'PAVEL',
            title: 'SBERBANK',
            text: "A series of videos for Russia's largest bank, profiling real people who built careers around their passions. Each video has its own visual style and pacing, shaped around the subject's story and personality.",
        },
    ]

    return (
        <Suspense>
            <main className="text-white mt-20 md:mt-36">
                <Block>
                    I SPECIALIZE IN COMMERCIAL{isTablet && <br />} VIDEOS,
                    DOCUMENTARY FILMS, {isTablet && <br />} AND SOCIAL MEDIA
                    CONTENT.
                </Block>
                <ul>
                    {works.map((work, key) => (
                        <WorkSection work={work} key={key} />
                    ))}
                </ul>
                <script src="https://player.vimeo.com/api/player.js"></script>
            </main>
        </Suspense>
    )
}

export default Works
