import Image from "next/image";

import myPhoto from "../public/me.jpg";

import xIcon from "../public/social-network/x.svg";
import facebookIcon from "../public/social-network/facebook.svg";
import youtubeIcon from "../public/social-network/youtube.svg";
import githubIcon from "../public/social-network/github.svg";
import linkedinIcon from "../public/social-network/linkedin.svg";

const iconSize = 128;

export default function Home() {
  return (
    <main className="main-home">

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
            <p className="about-me-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="about-me-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
                nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
          </div>
        </div>
      </div>

      <div className="find-me">
        <h1>&mdash; Where to find me &mdash;</h1>
        <div className="find-me-icons">
            <Image
                priority
                src={githubIcon}
                height={iconSize}
                width={iconSize}
                className="social-network-icon"
                alt="Find me on GitHub"
            />
            <Image
                priority
                src={linkedinIcon}
                height={iconSize}
                width={iconSize}
                className="social-network-icon"
                alt="Find me on LinkedIn"
            />
            <Image
                priority
                src={facebookIcon}
                height={iconSize * 0.9}
                width={iconSize * 0.9}
                className="social-network-icon"
                alt="Find me on Facebook"
            />
            <Image
                priority
                src={youtubeIcon}
                height={iconSize}
                width={iconSize}
                className="social-network-icon"
                alt="Find me on YouTube"
            />
            <Image
                priority
                src={xIcon}
                height={iconSize * 0.7}
                width={iconSize * 0.7}
                className="social-network-icon"
                alt="Find me on X"
            />
        </div>
      </div>
    </main>
  )
}
