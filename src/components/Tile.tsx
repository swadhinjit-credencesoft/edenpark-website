import Image from "next/image";
import type { TileSize } from "@/data/surroundings";

interface TileProps {
  img: string;
  alt: string;
  caption: string;
  size: TileSize;
  priority?: boolean;
  /** Remove the rounded frame (used inside flush cards). */
  flat?: boolean;
}

/** Photo tile with caption chip, used in the surroundings mosaic and gems. */
export default function Tile({ img, alt, caption, size, priority = false, flat = false }: TileProps) {
  return (
    <figure className={`tile tile--${size}`} style={flat ? { borderRadius: 0 } : undefined}>
      <Image
        src={`/assets/img/${img}`}
        alt={alt}
        fill
        sizes="(max-width: 900px) 100vw, 33vw"
        priority={priority}
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
