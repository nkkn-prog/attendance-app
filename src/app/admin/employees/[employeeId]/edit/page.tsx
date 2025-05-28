'use client';

import { Container, Title, Paper, Stack, Button, Text } from '@mantine/core';
import { UserCog, ArrowLeft } from 'lucide-react';
import { useRouter, useParams } from 'next/navigation';

export default function EditEmployeePage() {
  const router = useRouter();
  const params = useParams();

  return (
    <Container size="xl" mt="xl">
      <Paper p="xl" shadow="md" withBorder>
        <Stack>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Button
              variant="subtle"
              leftSection={<ArrowLeft size={16} />}
              onClick={() => router.push('/admin/employees')}
            >
              戻る
            </Button>
          </div>

          <Title order={1}>従業員情報編集</Title>
          <Text c="dimmed">従業員ID: {params.employeeId} の情報を編集します</Text>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2rem' }}>
            <UserCog size={20} />
            <Text>従業員情報編集フォームを実装予定</Text>
          </div>
        </Stack>
      </Paper>
    </Container>
  );
}