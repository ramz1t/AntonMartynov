import { lazy, Suspense, useEffect } from 'react'
import Block from '../common/Block.jsx'
import useScreen from '../useScreen.js'
const Introduction = lazy(() => import('./Introduction.jsx'))
const TextCycle = lazy(() => import('./TextCycle.jsx'))
import { useMotionValue, useTransform, animate } from 'framer-motion'

function Index() {
  const { isTablet } = useScreen()

  const date = new Date()
  const year = date.getFullYear()
  const n_projects = 25 + year % 10

    return (
        <Suspense>
            <main>
                <Introduction />
                <div className="girl pt-[23vw] md:pt-3">
                    <Block title={'VISION'} sectionClass="max-md:!pt-0">
                        EMOTIONS ARE WHAT {!isTablet && <br />} I AIM{' '}
                        {isTablet && <br />}
                        TO EVOKE IN PEOPLE THROUGH {isTablet && <br />}
                        MY WORK.
                        <br />
                        <br />I BELIEVE EDITING CANNOT BE {isTablet && <br />}
                        BASED ONLY ON KNOWLEDGE.
                        <br />
                        <br />I STRIVE TO FEEL THE RHYTHM OF{' '}
                        {isTablet && <br />}
                        THE SCENE AND THE CONNECTION {isTablet && <br />}
                        WITH THE CHARACTERS.
                    </Block>
                </div>

                <Block title={'STYLE'}>
                    I AM A MINIMALIST IN {!isTablet && <br />}MY WORK,{' '}
                    {isTablet && <br />}
                    AND MY FAVOURITE TOOL IS A {isTablet && <br />}SIMPLE CUT.
                </Block>

                <Block title={'CLIENTS'}>
                    <TextCycle
                        words={[
                            'AUDI',
                            'GENESIS',
                            'BACARDI',
                            'MARTINI',
                            'FXPRO',
                            'SBERBANK',
                            'CIAN',
                        ]}
                    />
                </Block>

                <Block
                    title={`COMPLETED PROJECTS IN ${year - 1}`}
                    sectionClass="!pb-2"
                >
                    <p className="font-medium text-[220px] md:text-[19.5vw] leading-[0.7] md:leading-[0.72] tracking-[-10px]">
                        {n_projects}
                    </p>
                </Block>
                <div className="cs max-md:pt-[23vw] mt-5">
                    <Block
                        title={'FUN FACT'}
                        sectionClass="max-md:pb-3 max-md:!pt-0  md:!py-40 md:py-auto"
                        className="!text-base max-md:!font-primary max-md:!leading-[1.2] md:leading-[1] md:!text-4xl md:pr-16 md:tracking-[0px]"
                    >
                        My interest in editing arose in 2010 while I was
                        actively playing Counter-Strike trying to create edits
                        of the most vivid moments that we called "frag movies".
                    </Block>
                </div>
            </main>
        </Suspense>
    )
}

export default Index
