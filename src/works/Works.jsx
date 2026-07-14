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
            name_small: 'trading is constantly overcoming',
            preview_big: 'diver.jpg',
            video_big: 'fx1.mp4',
            id_big: 795577052,
            name_big: 'this is new you',
            title: 'FXPRO',
            text: "A series of brand videos for the Broker of the Year 2025, built entirely from stock footage with no original shoot. Despite the constraint, the series reached broadcast quality and aired on Bloomberg TV, one of the world's leading financial channels.",
            extra_fields: [
                ['agency', 'blaster'],
                ['role', 'directing / editing'],
            ],
        },
        {
            preview_small: null,
            video_small: null,
            id_small: null,
            name_small: null,
            preview_big: 'zarkov.jpg',
            video_big: 'martini.mp4',
            id_big: 999,
            name_big: null,
            title: 'MARTINI',
            text: "A video diary following restaurateur Boris Zarkov on a journey through Piedmont, the birthplace of MARTINI. Searching for inspiration, he retraces the origins of his relationship with the brand, moving through the landscapes, people, and places that shaped it. Framed around Zarkov's own notes, observations, and reflections along the way.",
            extra_fields: [
                ['agency', 'journey'],
                ['role', 'editing'],
            ],
        },
        {
            preview_small: 'sber_alp1.jpg',
            video_small: 'sber_alp.mp4',
            id_small: 934921550,
            name_small: 'dmitry',
            preview_big: 'sber_guide1.jpg',
            video_big: 'sber_guide.mp4',
            id_big: 797666557,
            name_big: 'pavel',
            title: 'SBERBANK',
            text: "A series of videos for Russia's largest bank, profiling real people who built careers around their passions. Each video has its own visual style and pacing, shaped around the subject's story and personality.",
            extra_fields: [
                ['agency', 'agenda'],
                ['role', 'editing'],
            ],
        },
        {
            preview_small: null,
            video_small: null,
            id_small: null,
            name_small: null,
            preview_big: 'cheesls.png',
            video_big: 'cheesls.mp4',
            id_big: 1053015652,
            name_big: null,
            title: "CHEESL'S",
            text: "A 3D animated commercial for Cheesl's cheese chips, centered on a mouse mafia family in a human basement world. Won Best Animation at BIG PICTURE FESTIVAL 2024 and placed in the 3D category at DPROFILE FEST 2024.",
            extra_fields: [
                ['agency', 'lion films x blaster'],
                ['role', 'editing'],
            ],
        },
        {
            preview_small: null,
            video_small: null,
            id_small: null,
            name_small: null,
            preview_big: 'rostics.png',
            video_big: 'rostics.mp4',
            id_big: 1174829058,
            name_big: null,
            title: "ROSTIC'S",
            text: "An AI-generated video for Rostic's, combining generated backgrounds with 3D graphics and flying figures. The main challenge was building a photorealistic restaurant that closely matched real Rostic's locations, then populating it with AI-generated crowd.",
            extra_fields: [
                ['agency', 'blaster'],
                ['role', 'editing'],
            ],
        },
        {
            preview_small: null,
            video_small: null,
            id_small: null,
            name_small: null,
            preview_big: 'cabbage.png',
            video_big: 'cabbage.mp4',
            id_big: 1139777289,
            name_big: null,
            title: 'THE CABBAGE PATCH',
            text: 'One of the first AI-generated TV commercials in Russia, imagining a world where babies live before birth. Built through hundreds of generations and extensive compositing, with 60–90 variants produced for every final frame to land the right emotion and match the edit.',
            extra_fields: [
                ['agency', 'rabochee_nazvanie'],
                ['role', 'editing'],
            ],
        },
        {
            preview_small: null,
            video_small: null,
            id_small: null,
            name_small: null,
            preview_big: 'bdysh.png',
            video_big: 'bdysh.mp4',
            id_big: 1159649408,
            name_big: null,
            title: 'BDYSH!',
            text: 'A documentary series about the comic book industry in Russia, tracing the origins of publishers like BUBBLE — known as "Russia\'s Marvel" — and its expanding cinematic universe. Features interviews with key figures in the industry, including BUBBLE founder Artem Gabrelyanov and actors from the Major Grom franchise. Reached over 5 million views.',
            extra_fields: [
                ['agency', 'stereotactic'],
                ['role', 'explainer video director'],
            ],
        },
        {
            preview_small: 'form1.jpg',
            video_small: 'form1.mp4',
            id_small: 1210001724,
            name_small: null,
            preview_big: 'form2.jpg',
            video_big: 'form2.mp4',
            id_big: 1210001725,
            name_big: null,
            title: 'SHORT-FORM',
            text: 'A collection of vertical videos made for social media — covering brands and parties. Fast-paced edits built for Instagram and TikTok, designed to hook attention in the first seconds and hold it.',
            extra_fields: [['role', 'directing / editing']],
            vertical: true,
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
