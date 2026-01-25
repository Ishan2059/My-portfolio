'use client';

import React, { useRef, useId, useEffect, CSSProperties } from 'react';
import { animate, useMotionValue, AnimationPlaybackControls, motion } from 'framer-motion';
import { useTheme } from 'next-themes';

// Type definitions
interface ResponsiveImage {
    src: string;
    alt?: string;
    srcSet?: string;
}

interface AnimationConfig {
    preview?: boolean;
    scale: number;
    speed: number;
}

interface NoiseConfig {
    opacity: number;
    scale: number;
}

interface EtheralShadowProps {
    type?: 'preset' | 'custom';
    presetIndex?: number;
    customImage?: ResponsiveImage;
    sizing?: 'fill' | 'stretch';
    /** Override color - if not provided, uses theme-aware defaults */
    color?: string;
    /** Light mode color (default: purple glow) */
    lightColor?: string;
    /** Dark mode color (default: gray shadow) */
    darkColor?: string;
    animation?: AnimationConfig;
    noise?: NoiseConfig;
    style?: CSSProperties;
    className?: string;
}

function mapRange(
    value: number,
    fromLow: number,
    fromHigh: number,
    toLow: number,
    toHigh: number
): number {
    if (fromLow === fromHigh) {
        return toLow;
    }
    const percentage = (value - fromLow) / (fromHigh - fromLow);
    return toLow + percentage * (toHigh - toLow);
}

const useInstanceId = (): string => {
    const id = useId();
    const cleanId = id.replace(/:/g, "");
    const instanceId = `shadowoverlay-${cleanId}`;
    return instanceId;
};

export const EtheralShadow = React.memo(function EtheralShadow({
    sizing = 'fill',
    color,
    lightColor = 'rgba(168, 85, 247, 0.35)',  // Purple-500 with transparency
    darkColor = 'rgba(80, 80, 80, 1)',         // Gray for depth
    animation,
    noise,
    style,
    className
}: EtheralShadowProps) {
    const id = useInstanceId();
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
    const animationEnabled = animation && animation.scale > 0;
    const hueRotateMotionValue = useMotionValue(0);
    const hueRotateAnimation = useRef<AnimationPlaybackControls | null>(null);

    // Ensure hydration matches by defaulting to light color on server
    const effectiveColor = color ?? (mounted && resolvedTheme === 'dark' ? darkColor : lightColor);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const displacementScale = animation ? mapRange(animation.scale, 1, 100, 20, 100) : 0;
    const animationDuration = animation ? mapRange(animation.speed, 1, 100, 1000, 50) : 1;

    useEffect(() => {
        if (animationEnabled) {
            if (hueRotateAnimation.current) {
                hueRotateAnimation.current.stop();
            }

            hueRotateAnimation.current = animate(hueRotateMotionValue, [0, 360], {
                duration: animationDuration / 25,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
            });

            return () => {
                if (hueRotateAnimation.current) {
                    hueRotateAnimation.current.stop();
                }
            };
        }
    }, [animationEnabled, animationDuration, hueRotateMotionValue]);

    return (
        <div
            className={className}
            style={{
                overflow: "hidden",
                position: "relative",
                width: "100%",
                height: "100%",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)",
                willChange: "transform",
                ...style
            }}
        >
            <div
                style={{
                    position: "absolute",
                    inset: -displacementScale,
                    filter: animationEnabled ? `url(#${id}) blur(4px)` : "none",
                    willChange: "filter, transform",
                    transform: "translateZ(0) scale(1.5)",
                    transformOrigin: "center",
                    width: "66.66%",
                    height: "66.66%",
                    left: "16.66%",
                    top: "16.66%"
                }}
            >
                {animationEnabled && (
                    <svg style={{ position: "absolute", width: 0, height: 0 }}>
                        <defs>
                            <filter id={id} colorInterpolationFilters="sRGB">
                                <feTurbulence
                                    result="undulation"
                                    numOctaves="1"
                                    baseFrequency={`${mapRange(animation.scale, 0, 100, 0.001, 0.0005)},${mapRange(animation.scale, 0, 100, 0.004, 0.002)}`}
                                    seed="0"
                                    type="turbulence"
                                />
                                <motion.feColorMatrix
                                    in="undulation"
                                    type="hueRotate"
                                    values={hueRotateMotionValue as any}
                                />
                                <feColorMatrix
                                    in="dist"
                                    result="circulation"
                                    type="matrix"
                                    values="4 0 0 0 1  4 0 0 0 1  4 0 0 0 1  1 0 0 0 0"
                                />
                                <feDisplacementMap
                                    in="SourceGraphic"
                                    in2="undulation"
                                    scale={displacementScale}
                                    result="output"
                                />
                            </filter>
                        </defs>
                    </svg>
                )}
                <div
                    style={{
                        backgroundColor: effectiveColor,
                        maskImage: `url('https://framerusercontent.com/images/ceBGguIpUU8luwByxuQz79t7To.png')`,
                        maskSize: sizing === "stretch" ? "100% 100%" : "cover",
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        width: "100%",
                        height: "100%",
                        transition: "background-color 0.3s ease",
                        willChange: "background-color"
                    }}
                />
            </div>

            {noise && noise.opacity > 0 && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")`,
                        backgroundSize: noise.scale * 200,
                        backgroundRepeat: "repeat",
                        opacity: noise.opacity / 2
                    }}
                />
            )}
        </div>
    );
});

export default EtheralShadow;
