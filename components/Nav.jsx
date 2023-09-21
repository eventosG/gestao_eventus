'use client';
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

import React from 'react'
import Link from "next/link";
import Image from "next/image";
import Provider from "./Provider";

function Nav() {
    const {data: session } = useSession();
    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        }
        setUpProviders();
    },[]);
  return (
    <div className="flex-between w-full mb-16 pt-3">
        <Link className="flex gap-2 flex-center" href={"/"}>
            <Image 
            src={"/assets/images/logo.png"}
            alt={"Gestao de Eventos Logo"}
            width={100}
            height={30}
            className="object-contain"          
            />
        </Link>
        {/* Destop Navigation */}
        <div className="sm:flex hidden">
            {session?.user ? (
                <div className="flex z-40">
                    <Image 
                    alt="Profilo Pic" 
                    src={session?.user.image}
                    width={37}
                    height={37}
                    onClick={() => setToggleDropdown((prev) => !prev)}
                    />

                    {toggleDropdown && (
                        <div className="dropdownDesktop">
                            <Link 
                            href={"/profile"}
                            className="dropdown_link"
                            onClick={() => setToggleDropdown(false)}
                            >
                            Perfil
                            </Link>
                            <Link 
                            href={"#"}
                            className="dropdown_link"
                            onClick={() => setToggleDropdown(false)}
                            >
                            Criar Evento
                            </Link>
                            <Link 
                            href={"#"}
                            className="dropdown_link"
                            onClick={() => setToggleDropdown(false)}
                            >
                            Meus Eventos
                            </Link>
                            <button
                                type="button"
                                onClick={() => {
                                    setToggleDropdown(false);
                                    signOut();
                                }}
                                className="mt-5 w-full black_btn"
                            >
                                Sign Out
                            </button>
                        </div>
                    )}
                </div>
            ): (
                <>
                {providers && Object.values(providers).map((provider) => (
                    <button 
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="black_btn"
                    >
                        Sign In
                    </button>
                ))}
                </>
            )}
        </div>
        {/* Mobile Navigation */}
        <div className="sm:hidden flex relative">
            {session?.user ? (
                <div className="flex z-40">
                    <Image 
                    alt="Profilo Pic" 
                    src={session?.user.image}
                    width={37}
                    height={37}
                    onClick={() => setToggleDropdown((prev) => !prev)}
                    />

                    {toggleDropdown && (
                        <div className="dropdown">
                            <Link 
                            href={"/profile"}
                            className="dropdown_link"
                            onClick={() => setToggleDropdown(false)}
                            >
                            Perfil
                            </Link>
                            <Link 
                            href={"/create-prompt"}
                            className="dropdown_link"
                            onClick={() => setToggleDropdown(false)}
                            >
                            Criar Evento
                            </Link>
                            <button
                                type="button"
                                onClick={() => {
                                    setToggleDropdown(false);
                                    signOut();
                                }}
                                className="mt-5 w-full black_btn"
                            >
                                Sign Out
                            </button>
                        </div>
                    )}
                </div>
                
            ):(
                <>
                {providers && Object.values(providers).map((provider) => (
                    <button 
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="black_btn"
                    >
                        Sign In
                    </button>
                ))}
                </>
            )
            }
        </div>
    </div>
  )
}

export default Nav