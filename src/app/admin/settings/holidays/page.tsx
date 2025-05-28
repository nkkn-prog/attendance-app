'use client';

import { Container, Title, Paper, Stack, Text, Button } from '@mantine/core';
import { Calendar, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function HolidaysSettingsPage() {
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

          <Title order={1}>休日カレンダー設定</Title>
          <Text c="dimmed">祝日や会社休日を設定します</Text>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2rem' }}>
            <Calendar size={20} />
            <Text>休日カレンダー設定機能を実装予定</Text>
          </div>
        </Stack>
      </Paper>
    </Container>
  );
}