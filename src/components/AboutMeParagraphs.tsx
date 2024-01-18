import React, {ReactElement} from "react";
import {socialNetworkLinks} from "@/src/components/SocialNetworkLink";

export const AboutMeParagraphs: React.FC = (): ReactElement => {
    return <>
        <p className="about-me-text">
            Hi, my name is Olaf Gałązka. I live in Gdańsk (Poland) and I am a software engineer. Welcome to my tiny
            personal webpage. If you want to contact me, please use the social network links or contact details below.
        </p>
        <p className="about-me-text">
            I was born in 1984, in Elbląg. This is a city located about 60 killometers to the east from Gdańsk. I
            moved to Gdańsk in my early childhood, and I live here till today. In 2009 I have graduated the Information
            Technology at the University of Gdańsk. I started my first job as a programmer at the end of 2006. For over
            10 years I have been working as a PHP developer, I was responsible for creating and managing various
            backend services at several companies. In 2015 I
            joined <a href="https://schibsted.pl/" target="_blank">Schibsted Tech Polska</a> where I still work today.
        </p>
        <p className="about-me-text">
            Somewhere around 2017 or 2018 I started feeling bored with PHP and I decided to learn new programming
            language. Since I always lacked knowledge about frontend development, my choice fell on JavaScript. I
            started learning NodeJS and pretty quickly I switched the team in my company, to another one where I could
            use Node professionally. I also had occassion there to learn React framework so I finally touched the base
            with frontend. In September 2019 I joined my current team. On the daily basis I work with the technologies
            like NodeJS, TypeScript, NextJS, Kubernetes, Docker, AWS, Postgres, SQL.
        </p>
        <p className="about-me-text">
            This is a very brief version of my proffessional life. If you`re interested in more details, please visit
            my <a href={socialNetworkLinks["linkedin"]} target="_blank">LinkedIn profile</a>.
        </p>
    </>
}
