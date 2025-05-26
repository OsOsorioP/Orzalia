export const FeatureSection = ({ title, description, icon }) => {
  return (
    <section>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div>
        <i>{icon}</i>
      </div>
    </section>
  );
};

export default FeatureSection;