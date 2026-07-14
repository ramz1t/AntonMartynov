import Block from '../common/Block.jsx'
import useScreen from '../useScreen.js'
import { useEffect, useState, Suspense } from 'react'

const Introduction = () => {
    const { isTablet } = useScreen()
    const [active, setActive] = useState(false)

    useEffect(() => {
        let timeoutId
        const onScrollStart = () => setActive(true)
        const onScrollEnd = () => {
            timeoutId = setTimeout(() => setActive(false), 1)
        }

        window.addEventListener('scroll', onScrollStart)
        window.addEventListener('scrollend', onScrollEnd)

        return () => {
            window.removeEventListener('scroll', onScrollStart)
            window.removeEventListener('scrollend', onScrollEnd)
            clearTimeout(timeoutId)
        }
    }, [])

    const start = new Date('2019-06-01')
    const today = new Date()
    const inMilliseconds = today - start
    const inYears = inMilliseconds / 31557600000
    const n = Math.floor(inYears)

    return (
        <Suspense>
            <div
                style={{
                    background:
                        isTablet && active ? "url('/media/intro.gif')" : null,
                }}
                className="!bg-cover !bg-no-repeat"
            >
                <Block
                    title={'BASICS'}
                    sectionClass="!pt-40 md:!pt-[304px] !pb-40 md:!pb-80"
                    // handler={() => setActive(true)}
                >
                    HI! MY NAME IS ANTON.
                    <br />I AM A VIDEO EDITOR & DIRECTOR
                    {isTablet && <br />} WITH OVER {!isTablet && <br />} {n} YEARS
                    OF EXPERIENCE.
                    <br />
                    {!isTablet && <br />}BASED IN SWEDEN.
                </Block>
            </div>
        </Suspense>
    )
}

export default Introduction
