'use client';

import { Container, Title, Paper, Stack, Text, Button } from '@mantine/core';
import { FileText, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AttendanceRequestsPage() {
  const router = useRouter();

  return (
    <Container size="xl" mt="xl">
      <Paper p="xl" shadow="md" withBorder>
        <Stack>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Button
              variant="subtle"
              leftSection={<ArrowLeft size={16} />}
              onClick={() => router.push('/admin/attendances')}
            >
              戻る
            </Button>
          </div>

          <Title order={1}>勤怠関連申請一覧</Title>
          <Text c="dimmed">勤怠修正・変更の申請一覧</Text>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2rem' }}>
            <FileText size={20} />
            <Text>申請一覧表示・承認機能を実装予定</Text>
          </div>
        </Stack>
      </Paper>
    </Container>
  );
}