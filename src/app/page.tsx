'use client'

import {useEffect, useState} from 'react'
import {Typography, ConfigProvider, theme} from 'antd'
import {motion} from 'framer-motion'
import styles from './page.module.css'

const {Title, Paragraph} = Typography
const {darkAlgorithm} = theme

export default function Home() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <ConfigProvider
            theme={{
                algorithm: darkAlgorithm
            }}
        >
            <div className={styles.page}>
                <motion.main
                    className={styles.main}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5}}
                >
                    <motion.div
                        initial={{y: -20, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{delay: 0.2, duration: 0.5}}
                    >
                        <Title level={1}>Ithihas Madala v2</Title>
                    </motion.div>
                    <motion.div
                        initial={{y: 20, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{delay: 0.4, duration: 0.5}}
                    >
                        <Paragraph>
                            This site is currently under development. Check back soon for updates!
                        </Paragraph>
                    </motion.div>
                </motion.main>
            </div>
        </ConfigProvider>
    )
}
