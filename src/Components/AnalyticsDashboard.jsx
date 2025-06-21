import React, { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { activities, chartData, stats } from './AnalyticsData';

const AnalyticsDashboard = () => {
  const [period, setPeriod] = useState('7');

  return (
    <div className="analytics-dashboard">
    
        <h1>Analytics Overview</h1>
        <div className="date-range-picker">
          <select value={period} onChange={(e) => setPeriod(e.target.value)}>
            <option value="7">Last 7 days</option>
            <option value="30">Last 30 days</option>
            <option value="90">Last 90 days</option>
          </select>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className={`stat-card ${stat.trend}`} key={index}>
            <div className="stat-icon">
              <i className={`fas fa-${stat.icon}`}></i>
            </div>
            <div className="stat-content">
              <h3>{stat.title}</h3>
              <p className="stat-value">{stat.value.toLocaleString()}</p>
              <span className="stat-change">
                {stat.change}% from last period
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="charts-section">
        <div className="chart-container">
          <h2>Revenue Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData?.revenueTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-container">
          <h2>User Growth</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData?.userGrowth}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <div className="activity-list">
          {activities.length ? (
            activities.map((activity, index) => (
              <div className="activity-item" key={index}>
                <div className="activity-avatar">
                  <img src={activity.user.avatar} alt={activity.user.name} />
                </div>
                <div className="activity-content">
                  <p>
                    <strong>{activity.user.name}</strong> {activity.description}
                  </p>
                  <span className="activity-time">{activity.createdAt}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="no-activity">No recent activity</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
