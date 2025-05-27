// src/components/atoms/Icon/Icon.jsx
const Icon = ({ component: IconComponent, size = 24, color, className = '' }) => {
  if (!IconComponent) return null;
  return <IconComponent size={size} color={color} className={className} />;
};
export default Icon;