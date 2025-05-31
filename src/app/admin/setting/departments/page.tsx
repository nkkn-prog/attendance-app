'use client';

import { Title, Paper, Stack, Text, Button } from '@mantine/core';
import { Users, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { EmployeeLayout } from '@/components/layout/EmployeeLayout';

export default function DepartmentsSettingsPage() {
  const router = useRouter();

  return (
    <EmployeeLayout title="部署管理">
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

          <Title order={1}>部署管理</Title>
          <Text c="dimmed">部署の追加・編集・削除を行います</Text>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2rem' }}>
            <Users size={20} />
            <Text>部署管理機能を実装予定</Text>
          </div>
        </Stack>
      </Paper>
    </EmployeeLayout>
  );
}