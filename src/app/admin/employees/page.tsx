'use client';

import { Container, Title, Paper, Stack, Button, Text } from '@mantine/core';
import { Users, Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function EmployeesPage() {
  const router = useRouter();

  return (
    <Container size="xl" mt="xl">
      <Paper p="xl" shadow="md" withBorder>
        <Stack>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <Title order={1}>従業員管理</Title>
              <Text c="dimmed">従業員の一覧と管理</Text>
            </div>
            <Button
              leftSection={<Plus size={16} />}
              onClick={() => router.push('/admin/employees/create')}
            >
              新規従業員登録
            </Button>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2rem' }}>
            <Users size={20} />
            <Text>従業員一覧表示機能を実装予定</Text>
          </div>
        </Stack>
      </Paper>
    </Container>
  );
}