import React, { Suspense } from 'react'
import CLink from '../common/CLink.jsx'
import Block from '../common/Block.jsx'

const Profile = () => {
    return (
        <Suspense>
            <main className="md:mt-36">
                <Block
                    sectionClass="max-md:h-dvh max-md:!pt-20"
                    className="max-md:self-center"
                >
                    <a
                        className="text-[6.6vw] md:text-[3.3vw] hover:opacity-70 transition-opacity duration-75"
                        href="mailto:matrynovxas@gmail.com"
                    >
                        MARTYNOVXAS@GMAIL.COM
                    </a>
                    <br />
                    <a
                        className="hover:opacity-70 transition-opacity duration-75"
                        href="tel:+46707782279"
                    >
                        +46 70-778 22 79
                    </a>
                    <br />
                    <a
                        className="hover:opacity-70 transition-opacity duration-75"
                        href="https://www.instagram.com/antoncekc777/"
                        target="_blank"
                    >
                        INSTAGRAM
                    </a>
                    <br />
                    <a
                        className="hover:opacity-70 transition-opacity duration-75"
                        href="https://t.me/njysx"
                        target="_blank"
                    >
                        TELEGRAM
                    </a>
                    <br />
                    <a
                        className="hover:opacity-70 transition-opacity duration-75"
                        href="https://linkedin.com/in/antonxmartynov"
                        target="_blank"
                    >
                        LINKEDIN
                    </a>
                </Block>
            </main>
        </Suspense>
    )
}

export default Profile
