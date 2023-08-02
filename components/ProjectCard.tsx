'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import ProjectUserActions from "./ProjectUserActions"


type Props = {
    id: string;
    image: string;
    title: string;
    name: string;
    avatarUrl: string;
    userId: string;
}

const ProjectCard = ({ id, image, title, name, avatarUrl, userId }: Props) => {
    const [randomLikes, setRandomLikes] = useState(0);
    const [randomViews, setRandomViews] = useState('');

    useEffect(() => {
        setRandomLikes(Math.floor(Math.random() * 1000))
        setRandomViews(String((Math.floor(Math.random() * 10000) / 1000).toFixed(1) + 'k'))
    }, []);


  return (
    <div className="flexCenter flex-col rounded-2xl drop-shadow-card">
        <Link href={`/project/${id}`} className="flexCenter group relative w-full h-full">
            <Image
                src={image}
                width={414}
                height={314}
                className="w-full h-full object-cover rounded-2xl"
                alt='project image'/>
            <div className="flex justify-between opacity-0 group-hover:opacity-100 profile_card-title transition-opacity duration-300" >
                <p className="my-auto">{title}</p>
                <div className="flex justify-end items-center gap-2">
                    <ProjectUserActions applyClass='small' />
                </div>
            </div>
        </Link>
        <div className="flexBetween w-full px-2 mt-3 font-semibold text-sm">
            <Link href={`/profile/${userId}`}>
                <div className="flexCenter gap-2">
                    <Image
                        src={avatarUrl}
                        width={24}
                        height={24}
                        className="rounded-full"
                        alt='Profile Image' />
                    <p>{name}</p>
                </div>
            </Link>
            <div className="flexCenter gap-3">
                <div className="flexCenter gap-2">
                    <Image 
                        src='/hearth.svg'
                        width={13}
                        height={13}
                        alt="heart" />
                    <p className="texzt-sm">{randomLikes}</p>
                </div>
                <div className="flexCenter gap-2">
                    <Image 
                        src='/eye.svg'
                        width={13}
                        height={13}
                        alt="heart" />
                    <p className="texzt-sm">{randomViews}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard