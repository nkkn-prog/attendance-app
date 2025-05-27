'use client';

import React from 'react';
import { Paper, Group, Text, Badge, Stack } from '@mantine/core';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

export interface Request {
  id: string;
  type: '勤怠修正' | '有給休暇' | '残業申請';
  date: string;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedDate: string;
}

interface RequestCardProps {
  request: Request;
}

export const RequestCard: React.FC<RequestCardProps> = ({ request }) => {
  const typeColors = {
    '勤怠修正': 'blue',
    '有給休暇': 'green',
    '残業申請': 'violet'
  };

  const statusConfig = {
    pending: { icon: AlertCircle, label: '承認待ち', color: 'yellow' },
    approved: { icon: CheckCircle, label: '承認済み', color: 'green' },
    rejected: { icon: XCircle, label: '却下', color: 'red' }
  };

  const { icon: StatusIcon, label: statusLabel, color: statusColor } = statusConfig[request.status];

  return (
    <Paper shadow="sm" radius="md" p="lg">
      <Group justify="space-between" align="flex-start">
        <Stack gap="sm" style={{ flex: 1 }}>
          <Group gap="md">
            <Badge color={typeColors[request.type]} variant="light">
              {request.type}
            </Badge>
            <Text size="sm" c="dimmed">対象日: {request.date}</Text>
          </Group>
          <Text>{request.reason}</Text>
          <Text size="xs" c="dimmed">申請日: {request.submittedDate}</Text>
        </Stack>
        <Group gap="xs">
          <StatusIcon size={16} color={`var(--mantine-color-${statusColor}-6)`} />
          <Text size="sm" fw={500} c={statusColor}>
            {statusLabel}
          </Text>
        </Group>
      </Group>
    </Paper>
  );
};