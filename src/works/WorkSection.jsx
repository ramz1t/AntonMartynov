import React from 'react'
import VideoArea from './VideoArea.jsx'

const Facts = ({ extra_fields, margin }) => {
    if (!extra_fields) return
    return (
        <div
            className={`grid h-fit grid-cols-[1fr_1fr] text-neutral-500 text-xl leading-tight ${margin ? 'mt-auto pt-5' : null}`}
        >
            {extra_fields.map(([label, value], key) => (
                <React.Fragment key={key}>
                    <p>{label}:</p>
                    <p className="-translate-x-[45px]">{value}</p>
                </React.Fragment>
            ))}
        </div>
    )
}

const WorkSection = ({ work }) => {
    return (
        <li className="grid max-md:grid-rows-[auto_auto_auto_auto] md:grid-cols-[1fr_2fr] px-3 md:px-7 gap-3 md:gap-7 mt-32 mb-40">
            <div className="flex flex-col">
                <p className="text-[7.4vw] md:text-[3.3vw] leading-[1] md:leading-[0.9] font-medium md:tracking-[-1.5px]">
                    {work.title}
                </p>
                {work?.extra_fields && work.id_small && (
                    <Facts margin extra_fields={work.extra_fields} />
                )}
            </div>

            <p className="md:text-2xl leading-[1.2]">{work.text}</p>
            {work.id_small ? (
                <VideoArea
                    className="max-md:row-start-4"
                    preview={work.preview_small}
                    src={work.video_small}
                    videoId={work.id_small}
                    title={work.name_small}
                />
            ) : (
                <Facts extra_fields={work?.extra_fields} />
            )}
            <VideoArea
                className="max-md:row-start-3 md:col-start-2 max-md:mb-10 max-md:mt-2"
                preview={work.preview_big}
                src={work.video_big}
                videoId={work.id_big}
                title={work.name_big}
            />
        </li>
    )
}

export default WorkSection
