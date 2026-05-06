import Marquee from "react-fast-marquee";
const TilesMarquee = () => {
  return (
    <div>
      <Marquee pauseOnHover speed={150}>
        <div className="flex gap-12 text-2xl marquee py-4">
          <p>
            <span className="font-semibold">New Arrivals:</span> Marble Luxe
            Series | Premium Ceramic Collection Now In Stock | Explore Latest
            Designs
          </p>
          <p>
            <span className="font-semibold">Trending Now:</span> Marble Effect
            Porcelain Tiles | Seamless Luxury Look | Contemporary Living
            Inspired
          </p>
          <p>
            <span className="font-semibold">Weekend Deal:</span> Free Delivery
            on Orders Over £100
          </p>
          <span></span>
        </div>
      </Marquee>
    </div>
  );
};

export default TilesMarquee;
