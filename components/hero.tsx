"use client";
import { Link as LinkIcon } from 'lucide-react';
import React, { useEffect, useRef } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

function HeroSection() {
    const imageRef = useRef(null);
    useEffect(() => {
        const imageElement = imageRef.current;
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100;

            if (scrollPosition > scrollThreshold) {
                imageElement?.classList.add('scrolled');
            }
            else { imageElement?.classList.remove('scrolled'); }
        };
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
    <section className="pt-40 pb-20 px-4">
            <div className='container mx-auto text-center'>
                <h1 className='text-5xl font-bold md:text-8xl lg:text-[105px] pb-6 gradiant-text'>
                    Smart Decisions For Better Finances
                </h1>
                <p className='text-xl md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto'>
                    An AI-powered platform built to simplify financial management and help you make confident, data-driven decisions
                </p>
                <div className="flex justify-center space-x-4">
                    <Link href="/dashboard">
                        <Button size="lg" className="px-8">
                            Get Started
                        </Button>
                    </Link>
                </div>
                <div className="hero-image-wrapper mt-5 md:mt-0">
                    <div ref={imageRef} className='hero-image'>
                        <Image
                            src="/main.jpg"
                            alt="Dashboard preview"
                            width={1280}
                            height={720}
                            className='rounded-lg mx-auto shadow-2xl border'
                            priority />
                    </div>
                </div>
            </div>
    </section>      
    );
};

export default HeroSection;