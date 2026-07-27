import Image from "next/image";
import Container from "@/components/ui/Container";
import { galleryImages, type GalleryImage } from "@/data/mockGallery";

const heights = [
  "h-[200px] sm:h-[240px] md:h-[280px]",
  "h-[260px] sm:h-[300px] md:h-[350px]",
  "h-[320px] sm:h-[360px] md:h-[420px]",
];

function GalleryCard({ image, height }: { image: GalleryImage; height: string }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl ${height}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <p className="text-white text-sm font-semibold leading-snug">{image.alt}</p>
        <span className="text-white/50 text-[10px] font-bold uppercase tracking-widest mt-1">
          {image.category}
        </span>
      </div>
    </div>
  );
}

function splitIntoColumns(images: GalleryImage[], cols: number) {
  const columns: GalleryImage[][] = Array.from({ length: cols }, () => []);
  images.forEach((img, i) => columns[i % cols].push(img));
  return columns;
}

export default function GalleryGrid() {
  const mobileColumns = splitIntoColumns(galleryImages, 2);
  const desktopColumns = splitIntoColumns(galleryImages, 3);

  return (
    <section className="bg-[#fdf8f2] py-10 md:py-14">
      <Container>
        {/* Mobile: 2 columns */}
        <div className="flex gap-4 md:hidden">
          {mobileColumns.map((col, colIndex) => (
            <div key={colIndex} className="flex-1 flex flex-col gap-4">
              {col.map((image, i) => (
                <GalleryCard key={image.id} image={image} height={heights[i % 3]} />
              ))}
            </div>
          ))}
        </div>

        {/* Desktop: 3 columns — col 1 short, col 2 medium, col 3 tall */}
        <div className="hidden md:flex gap-5">
          {desktopColumns.map((col, colIndex) => (
            <div key={colIndex} className="flex-1 flex flex-col gap-5">
              {col.map((image) => (
                <GalleryCard key={image.id} image={image} height={heights[colIndex]} />
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
