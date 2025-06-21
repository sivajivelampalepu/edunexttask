 export const mockData = {
      overview: {
        totalRevenue: 125400,
        revenueChange: 12.5,
        totalUsers: 8465,
        usersChange: -2.3
      },
      charts: {
        revenueByMonth: [
          { month: 'Jan', revenue: 4200, users: 1200 },
          { month: 'Feb', revenue: 5100, users: 1350 },
          { month: 'Mar', revenue: 6200, users: 1500 }
        ],
        trafficSources: [
          { source: 'Organic Search', value: 45, color: '#10b981' },
          { source: 'Social Media', value: 25, color: '#3b82f6' },
          { source: 'Direct', value: 20, color: '#f59e0b' },
          { source: 'Referral', value: 10, color: '#ef4444' }
        ],
        topProducts: [
          { name: 'Premium Plan', sales: 1250, revenue: 25000 },
          { name: 'Basic Plan', sales: 850, revenue: 12750 },
          { name: 'Enterprise Plan', sales: 320, revenue: 16000 }
        ]
      },
      recentActivity: [
        {
          id: 1,
          type: 'sale',
          message: 'New order #12345 received',
          value: '$250.00',
          timestamp: '2024-06-18T10:30:00Z',
          status: 'success'
        },
        {
          id: 2,
          type: 'user',
          message: 'New user registration',
          value: 'john.doe@email.com',
          timestamp: '2024-06-18T09:15:00Z',
          status: 'info'
        }
      ]
    };