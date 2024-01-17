import Image from "next/image";

import myPhoto from "../public/me.jpg";
import {SocialNetworkLink} from "@/src/components/SocialNetworkLink";
import {AboutMeParagraphs} from "@/src/components/AboutMeParagraphs";

export default function Home() {
  return (<>
      <div className="landing-photo">
        <div className="welcome-message">
          <div className="welcome-message-hey">&mdash; Hey, I`m &mdash;</div>
          <div className="welcome-message-name">Olaf Gałązka</div>
        </div>
      </div>

      <div className="about-me">
        <h1>&mdash; About me &mdash;</h1>
        <div className="about-me-tiles">
          <div className="about-me-tile about-me-tile-photo">
            <Image
              priority
              src={myPhoto}
              alt="Olaf Gałązka"
              className="about-me-photo"
            />
          </div>
          <div className="about-me-tile about-me-tile-text">
            <AboutMeParagraphs />
          </div>
        </div>
      </div>

      <div className="find-me">
        <h1>&mdash; Where to find me &mdash;</h1>
        <div className="find-me-icons">
          <SocialNetworkLink service="github" serviceFullName="GitHub" />
          <SocialNetworkLink service="linkedin" serviceFullName="LinkedIn" />
          <SocialNetworkLink service="facebook" serviceFullName="Facebook" />
          <SocialNetworkLink service="youtube" serviceFullName="YouTube" />
          <SocialNetworkLink service="x" serviceFullName="X (Twitter)" />
        </div>
      </div>
  </>)
}
