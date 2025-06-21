import React, { useEffect, useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { mockData } from './mockdata';
import KPI from './KPI';



const ModernDashboard = () => {
  const [data, setData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
   

    setData(mockData);
  }, []);

  if (!data) return <p>Loading...</p>;

  const { overview, charts, recentActivity } = data;

  return (
    <div className={`dashboard-container ${darkMode ? 'dark' : ''}`}>
      <div className="dashboard-topbar">
        <h1>Executive Business Dashboard</h1>
        <button onClick={() => setDarkMode((prev) => !prev)} className="dark-toggle">
          {darkMode ? '☀️ Light' : '🌙 Dark'} Mode
        </button>
      </div>

      <div className="kpi-grid">
        <KPI
          title="Total Revenue"
          value={overview.totalRevenue}
          change={`+${overview.revenueChange}%`}
          trend="up"
          icon="trending-up"
          color="success"
        />
        <KPI
          title="Active Users"
          value={overview.totalUsers}
          change={`${overview.usersChange}%`}
          trend="down"
          icon="users"
          color="warning"
        />
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h3>Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={charts.revenueByMonth}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Traffic Sources</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Tooltip />
              <Pie
                data={charts.trafficSources}
                dataKey="value"
                nameKey="source"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {charts.trafficSources.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Product Performance</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={charts.topProducts} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Bar dataKey="revenue" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="activity-section">
        <h3>Recent Activity</h3>
        <ul className="activity-list">
          {recentActivity.map((activity) => (
            <li key={activity.id} className={`activity-item ${activity.status}`}>
              <div className="message">{activity.message}</div>
              <div className="value">{activity.value}</div>
              <div className="timestamp">{new Date(activity.timestamp).toLocaleString()}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ModernDashboard;
