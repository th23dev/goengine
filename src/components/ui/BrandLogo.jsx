export default function BrandLogo({ className = "", light = false }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}logo-header-transparent.png`}
      alt="goengine"
      width="2172"
      height="724"
      className={`block shrink-0 object-contain ${light ? "brightness-0 invert" : ""} ${className}`}
    />
  );
}
