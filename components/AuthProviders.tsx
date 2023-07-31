'use client'

import { getProviders, signIn } from "next-auth/react"
import { useState, useEffect } from "react"
import Button from "./Button";

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | null;

}

type Providers = Record<string, Provider>



const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null)


  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders()
      console.log(res)

      setProviders(res)
    }
    fetchProviders()
  }, [])



  if (providers) {
    return (
      <div className="flex gap-4 items-center justify-end	">
        {Object.values(providers).map
        ((provider: Provider, i) => (
          <>
          <p
            onClick={() => {signIn(provider?.id)}}
            className="hidden lg:block text-sm cursor-pointer after:content-['\2022'] after:pl-4 link_hover"
          >
            Log in
          </p>
          <div className="hidden md:flex gap-4">
          <Button 
            key={i}
            title='Sign in'
            handleClick={() => {signIn(provider?.id)}}
            bgColor='bg-[#f8f7f4]'
            textColor="text-black"

          />
          <Button 
            key={i+1}
            title='Hire Creatives'
            handleClick={() => {signIn(provider?.id)}}
            bgColor='bg-[#0d0c22]'
            textColor="text-white"
        />
          </div>
          <div className="flex md:hidden gap-4">
          <Button 
            key={i+2}
            title='Sign in'
            handleClick={() => {signIn(provider?.id)}}
            bgColor='bg-[#0d0c22]'
            textColor="text-white"
        />
          </div>
        </>
        ))}
      </div>
    )
  }
}

export default AuthProviders