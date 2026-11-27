import { useState } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackIcon?: string;
  fallbackLabel?: string;
  isLogo?: boolean;
}

export function SafeImage({
  src,
  alt,
  className = '',
  fallbackIcon = 'local_shipping',
  fallbackLabel = 'OSS Logistics ',
  isLogo = false,
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    if (isLogo) {
      return (
        <div
          role="img"
          aria-label={alt}
          className={`${className} flex items-center justify-center bg-light-primary text-light-on-primary font-headline font-extrabold text-xs tracking-tight select-none`}
        >
          OSS
        </div>
      );
    }

    return (
      <div
        role="img"
        aria-label={alt}
        className={`${className} flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-light-primary to-light-primary-container text-light-on-primary p-6 text-center`}
      >
        <span className="material-symbols-outlined text-3xl text-light-secondary-container" aria-hidden="true">
          {fallbackIcon}
        </span>
        <span className="font-label text-label-sm text-light-inverse-on-surface">{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
