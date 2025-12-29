"use client";
import { Link as LinkIcon } from 'lucide-react';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

export const HeroSection = () => {
  return (
    <div className='pb-20 px-4'>
        <div className='container mx-auto text-center'>
            <h1 className='text-5xl font-bold md:text-8xl lg:text-[105px] pb-6 gradiant-text'>  
                Smart Decisions For Better Finances
            </h1>
            <p>
                An AI-powered platform built to simplify financial management and help you make confident, data-driven decisions
            </p>
            <div>
                <Link href="/dashboard">
                    <Button size="lg" className="px-8">
                        Get Started
                    </Button>
                </Link>
            </div>
            <div>   
                <div>
                    <Image 
                    src="/main.jpg" 
                    alt="dashboard preview" 
                    width={1280} 
                    height={720} 
                    className='rounded-lg mx-auto shadow-lg border'
                    priority/>
                </div>
            </div>
         </div>
    </div>
  )
}
export default HeroSection;