'use client';

import React from 'react';
import { Paper, Group, Text, ThemeIcon } from '@mantine/core';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  iconColor?: string;
  valueColor?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ 
  icon, 
  value, 
  label, 
  iconColor = 'blue',
  valueColor
}) => {
  return (
    <Paper shadow="sm" radius="md" p="lg">
      <Group justify="space-between" mb="xs">
        <ThemeIcon size="xl" variant="light" color={iconColor}>
          {icon}
        </ThemeIcon>
        <Text size="xl" fw={700} c={valueColor}>
          {value}
        </Text>
      </Group>
      <Text size="sm" c="dimmed">{label}</Text>
    </Paper>
  );
};