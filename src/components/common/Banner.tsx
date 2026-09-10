import Image from "next/image";
import Swoosh from "./Swoosh";
import Ridge from "./Ridge";

export interface BannerProps {
  h1: string;
  sub: string;
  img?: string;
}

/** Inner-page hero banner with photo scrim, swoosh and ridgeline. */
export default function Banner({ h1, sub, img = "banner.jpg" }: BannerProps) {
  return (
    <section className="banner">
      <div className="banner__media">
        <Image src={`/assets/img/${img}`} alt="" aria-hidden="true" fill sizes="100vw" loading="eager" />
      </div>
      <div className="banner__scrim" />
      <Swoosh />
      <Ridge />
      <div className="wrap banner__inner">
        <h1>{h1}</h1>
        <p>{sub}</p>
      </div>
    </section>
  );
}
