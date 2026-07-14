import VideoArea from './VideoArea.jsx'

const WorkSection = ({ work }) => {
    return (
        <li className="grid max-md:grid-rows-[auto_auto_auto_auto] md:grid-cols-[1fr_2fr] px-3 md:px-7 gap-3 md:gap-7 mt-32 mb-40">
            <p className="text-[7.4vw] md:text-[3.3vw] leading-[1] md:leading-[0.9] font-medium md:tracking-[-1.5px]">
                {work.title}
            </p>
            <p className="md:text-2xl leading-[1.2]">{work.text}</p>
            <VideoArea
                className="max-md:row-start-4"
                preview={work.preview_small}
                src={work.video_small}
                videoId={work.id_small}
                title={work.name_small}
            />
            <VideoArea
                className="max-md:row-start-3 max-md:mb-10 max-md:mt-2"
                preview={work.preview_big}
                src={work.video_big}
                videoId={work.id_big}
                title={work.name_big}
            />
        </li>
    )
}

export default WorkSection
