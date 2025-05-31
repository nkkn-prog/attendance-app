'use client';

import { Title, Paper, Stack, Text, Button } from '@mantine/core';
import { Clock, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { EmployeeLayout } from '@/components/layout/EmployeeLayout';

export default function WorkPatternsSettingsPage() {
  const router = useRouter();

  return (
    <EmployeeLayout title="勤務パターン設定">
      <Paper p="xl" shadow="md" withBorder>
        <Stack>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Button
              variant="subtle"
              leftSection={<ArrowLeft size={16} />}
              onClick={() => router.push('/admin/setting')}
            >
              戻る
            </Button>
          </div>

          <Title order={1}>勤務パターン設定</Title>
          <Text c="dimmed">シフトパターンや勤務時間を設定します</Text>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2rem' }}>
            <Clock size={20} />
            <Text>勤務パターン設定機能を実装予定</Text>
          </div>
        </Stack>
      </Paper>
    </EmployeeLayout>
  );
}