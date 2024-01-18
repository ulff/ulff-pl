import React, {ReactElement} from "react";
import Link from "next/link";
import Image from "next/image";

import githubIcon from "../../public/social-network/github.svg";
import linkedinIcon from "../../public/social-network/linkedin.svg";
import facebookIcon from "../../public/social-network/facebook.svg";
import youtubeIcon from "../../public/social-network/youtube.svg";
import xIcon from "../../public/social-network/x.svg";

type SocialNetwork = "github" | "linkedin" | "facebook" | "youtube" | "x";

export const socialNetworkLinks: { [key in SocialNetwork]: string } = {
  github: "https://github.com/ulff",
  linkedin: "https://www.linkedin.com/in/olaf-ga%C5%82%C4%85zka-40301485/",
  facebook: "https://www.facebook.com/olaf.galazka",
  youtube: "https://www.youtube.com/@olafgalazka6379",
  x: "https://twitter.com/olafgalazka",
}

const socialNetworkIcons: { [key in SocialNetwork]: any } = {
  github: githubIcon,
  linkedin: linkedinIcon,
  facebook: facebookIcon,
  youtube: youtubeIcon,
  x: xIcon,
}

interface Props {
  service: SocialNetwork;
  serviceFullName: string;
}

export const SocialNetworkLink: React.FC<Props> = ({ service, serviceFullName }: Props): ReactElement => {
  return <Link href={socialNetworkLinks[service]} target="_blank">
    <Image
      priority
      src={socialNetworkIcons[service]}
      height={128}
      width={128}
      className="social-network-icon"
      alt={`Find me on ${serviceFullName}`}
      title={`Find me on ${serviceFullName}`}
    />
  </Link>;
}
