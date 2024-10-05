import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'

export default function Home() {
    return (
        <div className="container mx-auto px-4 py-8">
            <motion.h1
                initial={{opacity: 0, y: -50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                className="text-4xl font-bold mb-4"
            >
                Welcome to IThihas Madala's Personal Website
            </motion.h1>

            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.2, duration: 0.5}}
            >
                <h2 className="text-2xl font-semibold mb-2">About Me</h2>
                <p className="mb-4">
                    Hello! I'm IThihas Madala, a passionate software developer and technology
                    enthusiast. I'm currently pursuing my Master's in Computer Science at the
                    University of Florida, where I'm expanding my knowledge and skills in various
                    areas of computer science.
                </p>
                <p className="mb-4">
                    My interests lie in web development, machine learning, and creating innovative
                    solutions to real-world problems. I'm always eager to learn new technologies and
                    apply them in creative ways.
                </p>
            </motion.div>

            <motion.nav
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.4, duration: 0.5}}
            >
                <h2 className="text-2xl font-semibold mb-2">Explore My Work</h2>
                <ul className="list-disc list-inside">
                    <li>
                        <Link href="/projects" className="text-blue-500 hover:underline">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/resume" className="text-blue-500 hover:underline">
                            Resume
                        </Link>
                    </li>
                    <li>
                        <Link href="/skills" className="text-blue-500 hover:underline">
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link href="/bio" className="text-blue-500 hover:underline">
                            Detailed Bio
                        </Link>
                    </li>
                    <li>
                        <Link href="/games" className="text-blue-500 hover:underline">
                            Games
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" className="text-blue-500 hover:underline">
                            Blog
                        </Link>
                    </li>
                </ul>
            </motion.nav>

            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.6, duration: 0.5}}
                className="mt-8"
            >
                <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
                <p>
                    Feel free to reach out to me at{' '}
                    <a
                        href="mailto:helloithihas@gmail.com"
                        className="text-blue-500 hover:underline"
                    >
                        helloithihas@gmail.com
                    </a>
                </p>
            </motion.div>
        </div>
    )
}
