'use client';

import { Container, Title, Paper, Stack, Text, Button } from '@mantine/core';
import { Users, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function DepartmentsSettingsPage() {
  const router = useRouter();

  return (
    <Container size="xl" mt="xl">
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

          <Title order={1}>部署管理</Title>
          <Text c="dimmed">部署の追加・編集・削除を行います</Text>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2rem' }}>
            <Users size={20} />
            <Text>部署管理機能を実装予定</Text>
          </div>
        </Stack>
      </Paper>
    </Container>
  );
}