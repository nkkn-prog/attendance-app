'use client';

import { Title, Paper, Stack, Grid, Text } from '@mantine/core';
import { BarChart3, Users, Clock, Calendar } from 'lucide-react';
import { StatCard } from '@/components/common/StatCard';
import { EmployeeLayout } from '@/components/layout/EmployeeLayout';

export default function AdminDashboardPage() {
  return (
    <EmployeeLayout title="管理者ダッシュボード">
      <Paper p="xl" shadow="md" withBorder>
        <Stack>
          <Title order={1}>管理者ダッシュボード</Title>
          <Text c="dimmed">勤怠管理システムの統計と概要</Text>
          
          <Grid gutter="md" mt="lg">
            <Grid.Col span={{ base: 12, md: 3 }}>
              <StatCard
                icon={<Users size={24} />}
                value="45"
                label="総従業員数"
                iconColor="blue"
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 3 }}>
              <StatCard
                icon={<Clock size={24} />}
                value="32"
                label="現在出勤中"
                iconColor="green"
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 3 }}>
              <StatCard
                icon={<Calendar size={24} />}
                value="8"
                label="承認待ち申請"
                iconColor="orange"
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 3 }}>
              <StatCard
                icon={<BarChart3 size={24} />}
                value="95%"
                label="出勤率"
                iconColor="teal"
              />
            </Grid.Col>
          </Grid>
        </Stack>
      </Paper>
    </EmployeeLayout>
  );
}