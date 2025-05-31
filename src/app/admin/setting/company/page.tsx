'use client';

import { Title, Paper, Stack, Text, Button } from '@mantine/core';
import { Building, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { EmployeeLayout } from '@/components/layout/EmployeeLayout';

export default function CompanySettingsPage() {
  const router = useRouter();

  return (
    <EmployeeLayout title="会社情報・基本勤務設定">
      <Paper p="xl" shadow="md" withBorder>
        <Stack>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Button
              variant="subtle"
              leftSection={<ArrowLeft size={16} />}
              onClick={() => router.push('/admin/settings')}
            >
              戻る
            </Button>
          </div>

          <Title order={1}>会社情報・基本勤務設定</Title>
          <Text c="dimmed">会社の基本情報と勤務時間を設定します</Text>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2rem' }}>
            <Building size={20} />
            <Text>会社情報・勤務時間設定フォームを実装予定</Text>
          </div>
        </Stack>
      </Paper>
    </EmployeeLayout>
  );
}