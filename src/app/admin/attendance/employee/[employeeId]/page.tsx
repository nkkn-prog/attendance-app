'use client';

import EmployeeLayout from '@/components/layout/EmployeeLayout';
import { Title, Paper, Stack, Text, Button } from '@mantine/core';
import { User, ArrowLeft } from 'lucide-react';
import { useRouter, useParams } from 'next/navigation';

export default function EmployeeAttendancePage() {
  const router = useRouter();
  const params = useParams();

  return (
    <EmployeeLayout title="従業員勤怠履歴">
      <Paper p="xl" shadow="md" withBorder>
        <Stack>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Button
              variant="subtle"
              leftSection={<ArrowLeft size={16} />}
              onClick={() => router.push('/admin/attendance')}
            >
              戻る
            </Button>
          </div>

          <Title order={1}>従業員勤怠履歴</Title>
          <Text c="dimmed">従業員ID: {params.employeeId} の勤怠履歴</Text>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2rem' }}>
            <User size={20} />
            <Text>特定従業員の勤怠履歴表示機能を実装予定</Text>
          </div>
        </Stack>
      </Paper>
    </EmployeeLayout>
  );
}