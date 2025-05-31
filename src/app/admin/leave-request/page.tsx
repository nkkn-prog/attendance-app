'use client';

import { Title, Paper, Stack, Text } from '@mantine/core';
import { Calendar } from 'lucide-react';
import { EmployeeLayout } from '@/components/layout/EmployeeLayout';

export default function LeaveRequestsPage() {
  return (
    <EmployeeLayout title="休暇申請管理">
      <Paper p="xl" shadow="md" withBorder>
        <Stack>
          <Title order={1}>休暇管理</Title>
          <Text c="dimmed">休暇申請の一覧と管理</Text>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2rem' }}>
            <Calendar size={20} />
            <Text>休暇申請一覧表示機能を実装予定</Text>
          </div>
        </Stack>
      </Paper>
    </EmployeeLayout>
  );
}