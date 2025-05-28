'use client';

import { Container, Title, Paper, Stack, Text, Button } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { CalendarDays, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AttendanceTermPage() {
  const router = useRouter();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

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

          <Title order={1}>期間指定勤怠一覧</Title>
          <Text c="dimmed">期間を指定して勤怠データを確認できます</Text>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2rem' }}>
            <CalendarDays size={20} />
            <Text>期間指定フィルター機能を実装予定</Text>
          </div>
        </Stack>
      </Paper>
    </Container>
  );
}