'use client';

import { EmployeeLayout } from '@/components/layout/EmployeeLayout';
import { RequestCard, Request } from '@/components/requests/RequestCard';
import { Stack, Title, Paper } from '@mantine/core';

export default function RequestPage() {
  // サンプルデータ（実際の実装ではAPIから取得）
  const requests: Request[] = [
    {
      id: '1',
      type: '有給休暇',
      date: '2025/06/15',
      reason: '私用のため',
      status: 'pending',
      submittedDate: '2025/06/01'
    },
    {
      id: '2',
      type: '勤怠修正',
      date: '2025/05/28',
      reason: '打刻忘れのため修正をお願いします',
      status: 'approved',
      submittedDate: '2025/05/29'
    },
    {
      id: '3',
      type: '残業申請',
      date: '2025/06/10',
      reason: 'プロジェクト納期のため',
      status: 'rejected',
      submittedDate: '2025/06/05'
    }
  ];

  return (
    <EmployeeLayout title="申請">
      <Paper p="lg" shadow="sm" mb="lg">
        <Title order={2} mb="lg">申請一覧</Title>
        <Stack gap="md">
          {requests.map(request => (
            <RequestCard key={request.id} request={request} />
          ))}
        </Stack>
      </Paper>
    </EmployeeLayout>
  );
}