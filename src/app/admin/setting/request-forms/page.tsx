'use client';

import { Title, Paper, Stack, Text, Button } from '@mantine/core';
import { FileText, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { EmployeeLayout } from '@/components/layout/EmployeeLayout';

export default function RequestFormsSettingsPage() {
  const router = useRouter();

  return (
    <EmployeeLayout title="申請フォーム設定">
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

          <Title order={1}>申請フォーム設定</Title>
          <Text c="dimmed">各種申請フォームの設定を行います</Text>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2rem' }}>
            <FileText size={20} />
            <Text>申請フォーム設定機能を実装予定</Text>
          </div>
        </Stack>
      </Paper>
    </EmployeeLayout>
  );
}