'use client';

import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from '../styles/cursor.module.scss';

const CustomCursor: React.FC = () => {
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    const springConfig = { stiffness: 800, damping: 30 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
        window.removeEventListener('mousemove', moveCursor);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
        className={styles.cursor}
        style={{
            translateX: cursorXSpring,
            translateY: cursorYSpring,
        }}
        />
    );
};

export default CustomCursor;
