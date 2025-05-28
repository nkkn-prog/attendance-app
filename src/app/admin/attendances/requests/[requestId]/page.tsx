'use client';

import { Container, Title, Paper, Stack, Text, Button } from '@mantine/core';
import { FileCheck, ArrowLeft } from 'lucide-react';
import { useRouter, useParams } from 'next/navigation';

export default function AttendanceRequestDetailPage() {
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
              onClick={() => router.push('/admin/attendances/requests')}
            >
              戻る
            </Button>
          </div>

          <Title order={1}>申請詳細・承認画面</Title>
          <Text c="dimmed">申請ID: {params.requestId} の詳細と承認</Text>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2rem' }}>
            <FileCheck size={20} />
            <Text>申請詳細表示・承認/却下機能を実装予定</Text>
          </div>
        </Stack>
      </Paper>
    </Container>
  );
}