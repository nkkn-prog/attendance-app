'use client';

import EmployeeLayout from '@/components/layout/EmployeeLayout';
import { Title, Paper, Stack, Text, Grid } from '@mantine/core';
import { Calendar } from 'lucide-react';

export default function AdminAttendancePage() {
  return (
    <EmployeeLayout title="勤怠管理">
      <Paper p="xl" shadow="md" withBorder>
          <Stack>
            <Title order={1}>勤怠管理</Title>
            <Text c="dimmed">全従業員の勤怠一覧（日別表示）</Text>
          
            <Grid gutter="md" mt="lg">
              <Grid.Col span={12}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Calendar size={20} />
                  <Text>今日の勤怠状況表示機能を実装予定</Text>
                </div>
              </Grid.Col>
            </Grid>
          </Stack>
      </Paper>
    </EmployeeLayout>
  );
}