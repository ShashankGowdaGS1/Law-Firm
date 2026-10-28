import React, { useState } from "react";
import { cn } from "@/utils/cn";

export interface ResponsiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  aspectRatio?: "16/9" | "4/3" | "3/2" | "1/1" | "4/5" | "21/9" | "auto";
  objectFit?: "cover" | "contain" | "scale-down";
  priority?: boolean;
  caption?: string;
  containerClassName?: string;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  aspectRatio = "16/9",
  objectFit = "cover",
  priority = false,
  caption,
  className,
  containerClassName,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(!priority);

  const aspectRatioStyles: Record<string, string> = {
    "16/9": "aspect-[16/9]",
    "4/3": "aspect-[4/3]",
    "3/2": "aspect-[3/2]",
    "1/1": "aspect-[1/1]",
    "4/5": "aspect-[4/5]",
    "21/9": "aspect-[21/9]",
    auto: "aspect-auto"
  };

  const objectFitStyles: Record<string, string> = {
    cover: "object-cover",
    contain: "object-contain",
    "scale-down": "object-scale-down"
  };

  return (
    <figure className={cn("relative w-full overflow-hidden", containerClassName)}>
      <div
        className={cn(
          "relative w-full bg-brand-off-white overflow-hidden",
          aspectRatioStyles[aspectRatio]
        )}
      >
        {!hasError ? (
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding={priority ? "sync" : "async"}
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setHasError(true);
            }}
            className={cn(
              "w-full h-full transition-opacity duration-300",
              objectFitStyles[objectFit],
              isLoading ? "opacity-0" : "opacity-100",
              className
            )}
            {...props}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-brand-off-white border border-brand-navy/10 text-brand-text/60">
            <span className="text-xs uppercase font-sans tracking-wider font-semibold text-brand-navy/60 mb-1">
              Visual Asset Placeholder
            </span>
            <p className="text-xs max-w-xs">{alt}</p>
          </div>
        )}

        {isLoading && !hasError && (
          <div className="absolute inset-0 bg-brand-off-white/80 animate-pulse pointer-events-none" />
        )}
      </div>

      {caption && (
        <figcaption className="mt-2 text-xs text-brand-text/70 italic text-center font-sans">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
