import { Star } from "lucide-react";
import Image from "next/image";
import { GoogleLogo } from "@/components/ui/icons";

export interface ReviewProps {
  quote: string;
  author: string;
  time: string;
  avatar?: string;
}

export function ReviewCard({ review }: { review: ReviewProps }) {
  return (
    <div className="group w-[300px] md:w-[380px] h-full bg-white rounded-3xl p-6 md:p-8 shrink-0 shadow-lg shadow-black/5 border border-foreground/5 flex flex-col justify-between hover:bg-[#fdf8f2] transition-colors duration-300">
      <div>
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} className="fill-[#FBBC05] text-[#FBBC05]" />
          ))}
        </div>
        <p className="text-foreground/80 leading-relaxed font-medium mb-6">
          &quot;{review.quote}&quot;
        </p>
      </div>

      <div className="flex items-center justify-between mt-auto pt-6">
        <div className="flex items-center gap-3">
          {review.avatar ? (
            <div className="relative w-10 h-10 shrink-0 rounded-full overflow-hidden bg-primary/10">
              <Image
                src={review.avatar}
                alt={review.author}
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">
              {review.author.charAt(0)}
            </div>
          )}
          <div>
            <h4 className="font-bold text-sm text-foreground">{review.author}</h4>
            <p className="text-xs text-foreground/50">{review.time}</p>
          </div>
        </div>
        <GoogleLogo />
      </div>
    </div>
  );
}
