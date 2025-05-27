'use client';

import React from 'react';
import { Container, Paper, Text, Grid, Stack, Group } from '@mantine/core';
import { LogIn, LogOut, Coffee, CoffeeIcon } from 'lucide-react';
import { ClockButton } from './ClockButton';
import { useAttendance } from '@/hooks/useAttendance';

export const ClockScreen: React.FC = () => {
  const { clockedIn, onBreak, handleClockIn, handleClockOut, handleBreakStart, handleBreakEnd } = useAttendance();
  const currentTime = new Date().toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' });
  const currentDate = new Date().toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });

  return (
    <Container size="md">
      <Paper shadow="sm" radius="md" p="xl" mb="lg" style={{ textAlign: 'center' }}>
        <Text c="dimmed" mb="xs">{currentDate}</Text>
        <Text size="3rem" fw={700}>{currentTime}</Text>
      </Paper>

      <Grid gutter="lg" mb="lg">
        <Grid.Col span={6}>
          <ClockButton
            icon={LogIn}
            label="出勤"
            onClick={handleClockIn}
            disabled={clockedIn}
            color="blue"
            subText={clockedIn ? '09:00 打刻済み' : undefined}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <ClockButton
            icon={LogOut}
            label="退勤"
            onClick={handleClockOut}
            disabled={!clockedIn}
            color="red"
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <ClockButton
            icon={Coffee}
            label="休憩開始"
            onClick={handleBreakStart}
            disabled={!clockedIn || onBreak}
            color="yellow"
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <ClockButton
            icon={CoffeeIcon}
            label="休憩終了"
            onClick={handleBreakEnd}
            disabled={!onBreak}
            color="green"
          />
        </Grid.Col>
      </Grid>

      <Paper shadow="sm" radius="md" p="lg">
        <Text size="lg" fw={600} mb="md">本日の記録</Text>
        <Stack gap="sm">
          <Group justify="space-between" pb="sm" style={{ borderBottom: '1px solid #e9ecef' }}>
            <Text c="dimmed">出勤時刻</Text>
            <Text fw={500}>09:00</Text>
          </Group>
          <Group justify="space-between" pb="sm" style={{ borderBottom: '1px solid #e9ecef' }}>
            <Text c="dimmed">休憩時間</Text>
            <Text fw={500}>1:00</Text>
          </Group>
          <Group justify="space-between">
            <Text c="dimmed">現在の労働時間</Text>
            <Text fw={500} c="blue">7:30</Text>
          </Group>
        </Stack>
      </Paper>
    </Container>
  );
};