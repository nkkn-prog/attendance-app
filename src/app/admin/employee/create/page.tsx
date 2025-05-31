'use client';

import { Title, Paper, Stack, Button, Text } from '@mantine/core';
import { UserPlus, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { EmployeeLayout } from '@/components/layout/EmployeeLayout';

export default function CreateEmployeePage() {
  const router = useRouter();

  return (
    <EmployeeLayout title="従業員新規登録">
      <Paper p="xl" shadow="md" withBorder>
        <Stack>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Button
              variant="subtle"
              leftSection={<ArrowLeft size={16} />}
              onClick={() => router.push('/admin/employee')}
            >
              戻る
            </Button>
          </div>

          <Title order={1}>従業員新規登録</Title>
          <Text c="dimmed">新しい従業員を登録します</Text>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2rem' }}>
            <UserPlus size={20} />
            <Text>従業員登録フォームを実装予定</Text>
          </div>
        </Stack>
      </Paper>
    </EmployeeLayout>
  );
}