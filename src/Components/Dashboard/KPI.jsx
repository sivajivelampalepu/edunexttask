import { useEffect, useState } from "react";

const KPI = ({ title, value, change, trend, icon, color }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1000;
    const increment = end / (duration / 16);

    const animate = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animate();
  }, [value]);

  return (
    <div className={`kpi-card ${color}`}>
      <div className="kpi-header">
        <span className="icon">📊</span>
        <div className="details">
          <h4>{title}</h4>
          <h2>{Math.floor(count).toLocaleString()}</h2>
          <p className={`trend ${trend}`}>{change}</p>
        </div>
      </div>
    </div>
  );
};
export default KPI