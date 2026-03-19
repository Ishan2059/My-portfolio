"use client";

import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import { MinimalistHero } from '@/app/components/ui/minimalist-hero';

export default function Hero() {
    const navLinks = [
        { label: 'HOME', href: '#' },
        { label: 'ABOUT', href: '#about' },
        { label: 'PROJECTS', href: '#projects' },
        { label: 'CASE STUDIES', href: '/case-studies' },
        { label: 'CONTACT', href: '#contact' },
    ];

    const socialLinks = [
        { icon: Instagram, href: 'https://www.instagram.com/ish_ann1/' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/ishan-mishra-b874b3287/' },
    ];

    // Always use the light mode image (green jacket)
    const profileImage = "/profile-light.png";

    return (
        <MinimalistHero
            logoText="Ishan."
            mainText="Hi, I'm Ishan, a UI/UX Designer who translates complex problems into intuitive, comfortable digital experiences. My focus is on Human-Centered design, ensuring every pixel serves a purpose."
            readMoreLink="#about"
            imageSrc={profileImage}
            imageAlt="Profile photo of Ishan Mishra"
            overlayText={{
                part1: 'less is',
                part2: 'more.',
            }}
            socialLinks={socialLinks}
            locationText="Nepal"
        />
    );
}
