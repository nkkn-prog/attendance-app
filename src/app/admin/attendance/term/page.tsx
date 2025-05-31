'use client';

import EmployeeLayout from '@/components/layout/EmployeeLayout';
import { Title, Paper, Stack, Text, Button } from '@mantine/core';
import { CalendarDays, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AttendanceTermPage() {
  const router = useRouter();

  return (
    <EmployeeLayout title="期間指定勤怠一覧">
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

          <Title order={1}>期間指定勤怠一覧</Title>
          <Text c="dimmed">期間を指定して勤怠データを確認できます</Text>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2rem' }}>
            <CalendarDays size={20} />
            <Text>期間指定フィルター機能を実装予定</Text>
          </div>
        </Stack>
      </Paper>
    </EmployeeLayout>
  );
}