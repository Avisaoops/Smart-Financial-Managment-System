import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import { Button } from "./ui/button";
import React from 'react'

const Header = () => {
  return (
    <div>
            <SignedOut>
              <SignInButton />
              <SignUpButton>
                 <Button variant="outline">Login</Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          
    </div>
  )
}

export default Header;

                                                                                                             