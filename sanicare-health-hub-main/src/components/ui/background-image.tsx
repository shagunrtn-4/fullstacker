
import { cn } from "@/lib/utils";

interface BackgroundImageProps {
  className?: string;
  imageUrl: string;
  overlay?: boolean;
}

export function BackgroundImage({ className, imageUrl, overlay = true }: BackgroundImageProps) {
  return (
    <div 
      className={cn(
        "absolute inset-0 bg-cover bg-center -z-10 transition-opacity duration-700",
        className
      )} 
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background/40" />
      )}
    </div>
  );
}
