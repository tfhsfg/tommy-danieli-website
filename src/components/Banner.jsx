import "./Banner.css";

export default function Banner({ image = "/images/banner-default.jpg", title, description }) {
  return (
    <section
      className="banner"
      style={{
        backgroundImage: `linear-gradient(to left, rgba(0, 59, 137, 0.98) 40%, rgba(17, 24, 39, 0.75)), url('${image}')`,
      }}
    >
      <div className="bannerContent">
        <h1 className="bannerTitle">{title}</h1>
        {/* <p className="bannerDescription">{description}</p> */}
      </div>
    </section>
  );
}
