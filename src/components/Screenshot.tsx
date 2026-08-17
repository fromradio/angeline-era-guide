export default function Screenshot({
  src,
  alt,
  className = '',
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`w-full rounded-lg border border-dream-purple/15 object-cover ${className}`}
    />
  )
}
