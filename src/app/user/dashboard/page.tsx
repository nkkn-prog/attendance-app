'use client';

import { EmployeeLayout } from '@/components/layout/EmployeeLayout';
import { CurrentStatus } from '@/components/dashboard/CurrentStatus';
import { StatCard } from '@/components/common/StatCard';
import { Announcements } from '@/components/dashboard/Announcements';
import { Grid } from '@mantine/core';
import { Calendar, Clock, AlertCircle } from 'lucide-react';

export default function UserDashboardPage() {
  return (
    <EmployeeLayout title="ホーム">
      <CurrentStatus />
      
      <Grid gutter="md" mb="lg">
        <Grid.Col span={{ base: 12, md: 4 }}>
          <StatCard
            icon={<Calendar size={24} />}
            value="20日"
            label="出勤日数"
            iconColor="blue"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <StatCard
            icon={<Clock size={24} />}
            value="160.5h"
            label="総労働時間"
            iconColor="green"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <StatCard
            icon={<AlertCircle size={24} />}
            value="8.5h"
            label="時間外労働"
            iconColor="orange"
            valueColor="orange"
          />
        </Grid.Col>
      </Grid>

      <Announcements />
    </EmployeeLayout>
  );
}