'use client';

import React from 'react';
import { Paper, Group, Text, Button, Stack, Grid } from '@mantine/core';
import { useAttendance } from '@/hooks/useAttendance';

export const CurrentStatus: React.FC = () => {
  const { clockedIn, onBreak, handleClockIn, handleClockOut, handleBreakStart, handleBreakEnd } = useAttendance();
  const currentTime = new Date().toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' });
  const currentDate = new Date().toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });

  return (
    <Paper shadow="sm" radius="md" p="lg" mb="lg">
      <Group justify="space-between" mb="lg">
        <Stack gap={4}>
          <Text size="sm" c="dimmed">{currentDate}</Text>
          <Text size="xl" fw={700} style={{ fontSize: '2rem' }}>{currentTime}</Text>
        </Stack>
        <Stack gap={4} align="flex-end">
          <Text size="sm" c="dimmed">現在の状態</Text>
          <Text size="xl" fw={700} c={clockedIn ? 'green' : 'gray'}>
            {clockedIn ? (onBreak ? '休憩中' : '勤務中') : '未出勤'}
          </Text>
        </Stack>
      </Group>
      
      <Grid gutter="md">
        <Grid.Col span={6}>
          <Button
            fullWidth
            size="lg"
            onClick={() => {
              if (!clockedIn) handleClockIn();
              else if (onBreak) handleBreakEnd();
              else handleBreakStart();
            }}
            color={!clockedIn ? 'blue' : onBreak ? 'green' : 'yellow'}
          >
            {!clockedIn ? '出勤' : onBreak ? '休憩終了' : '休憩開始'}
          </Button>
        </Grid.Col>
        <Grid.Col span={6}>
          <Button
            fullWidth
            size="lg"
            onClick={handleClockOut}
            disabled={!clockedIn}
            color="red"
          >
            退勤
          </Button>
        </Grid.Col>
      </Grid>
    </Paper>
  );
};