'use client';

import { EmployeeLayout } from '@/components/layout/EmployeeLayout';
import { Grid, Paper, Title } from '@mantine/core';

export default function AttendancesPage() {
  return (
    <EmployeeLayout title="勤怠履歴">
      <Paper p="lg" shadow="sm">
        <Title order={2} mb="md">勤怠一覧ページ</Title>
        <Grid>
          {/* 勤怠履歴コンテンツをここに実装 */}
        </Grid>
      </Paper>
    </EmployeeLayout>
  );
}