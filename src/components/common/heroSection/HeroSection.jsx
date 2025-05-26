export const FeatureSection = ({ title, subtitle, description, icon }) => {
  return (
    <section>
      <h1>{title}</h1>
      <div>
        <div>
          <h2>{subtitle}</h2>
          <p>{description}</p>
        </div>
        <div>
          <i>{icon}</i>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
