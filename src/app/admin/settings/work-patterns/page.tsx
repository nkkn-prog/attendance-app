'use client';

import { Container, Title, Paper, Stack, Text, Button } from '@mantine/core';
import { Clock, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function WorkPatternsSettingsPage() {
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

          <Title order={1}>勤務パターン設定</Title>
          <Text c="dimmed">シフトパターンや勤務時間を設定します</Text>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2rem' }}>
            <Clock size={20} />
            <Text>勤務パターン設定機能を実装予定</Text>
          </div>
        </Stack>
      </Paper>
    </Container>
  );
}