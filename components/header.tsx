
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import React from 'react'
import { LayoutDashboard, Link } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';
import { Sign } from 'crypto';

const Header = () => {
  return (
    <div className='fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 boreder-b'>
      <nav className='container mx-auto px-4 flex items-center justify-between h-16'>
        <Link href="/">
          <Image src='/logodesign.svg' alt="Logo" width={200} height={60} 
          className='h-12 w-auto object-contain' priority/>
        </Link>
        
        <div>
          <SignedIn>
            <Link href={"/dashboard"}>
             
              <Button  variant={'outline'}>
                <LayoutDashboard size={18}/>
                <span> Dashboard</span>
              </Button>
            </Link>
          </SignedIn>
           
          
        
            <SignedOut>
              <SignInButton forceRedirectUrl="/dashboard">
                <Button variant={'outline'}> Login</Button>
              </SignInButton>

            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
        </div> 
         </nav>
          

          
    </div>
  )
}

export default Header;

                                                                                                             