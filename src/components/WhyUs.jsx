const WhyUs = () => {
  return (
    <section className="textMe mt-28">
      <h2 className="text-4xl font-bold text-center">Why Choose TilesMart</h2>
      <br />
      <h4 className="text-center text-xl">
        We combine premium craftsmanship, modern design, and dependable service
        to help you create beautiful spaces that last for years.
      </h4>
      <br />
      <br />
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">
          Premium Quality Materials
        </div>
        <div className="collapse-content text-sm">
          Every tile in our collection is carefully selected for durability,
          strength, and long-lasting beauty. From ceramic to porcelain finishes,
          we provide products designed to withstand everyday life while
          maintaining their elegant appearance.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">Trend-Driven Designs</div>
        <div className="collapse-content text-sm">
          Stay ahead with modern textures, luxurious marble looks, minimalist
          patterns, and timeless finishes inspired by contemporary interior
          design trends around the world.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">Affordable Luxury</div>
        <div className="collapse-content text-sm">
          We believe premium spaces should not require premium prices. Our
          collections balance sophisticated aesthetics with competitive pricing
          for every budget.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Durable & Easy Maintenance
        </div>
        <div className="collapse-content text-sm">
          Our tiles are crafted to resist moisture, stains, scratches, and wear,
          making them ideal for kitchens, bathrooms, living spaces, and
          commercial environments.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Fast & Reliable Delivery
        </div>
        <div className="collapse-content text-sm">
          We ensure secure packaging and efficient delivery so your tiles arrive
          safely and on time, ready to transform your space without delays.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Expert Customer Support
        </div>
        <div className="collapse-content text-sm">
          Need help choosing the perfect style or size? Our team is ready to
          guide you through design ideas, product selection, and installation
          recommendations.
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
