'use client';

import React from 'react';
import { Paper, Stack, Text, ThemeIcon } from '@mantine/core';
import { LucideIcon } from 'lucide-react';

interface ClockButtonProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  disabled?: boolean;
  color: string;
  subText?: string;
}

export const ClockButton: React.FC<ClockButtonProps> = ({
  icon: Icon,
  label,
  onClick,
  disabled = false,
  color,
  subText
}) => {
  return (
    <Paper
      shadow="sm"
      radius="md"
      p="xl"
      onClick={onClick}
      style={{
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'all 0.2s',
        '&:hover': {
          boxShadow: disabled ? undefined : '0 8px 16px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <Stack align="center" gap="md">
        <ThemeIcon size={80} variant="light" color={color}>
          <Icon size={48} />
        </ThemeIcon>
        <Text size="xl" fw={700}>{label}</Text>
        {subText && <Text size="sm" c="dimmed">{subText}</Text>}
      </Stack>
    </Paper>
  );
};