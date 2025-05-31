'use client';

import React from 'react';
import { Group, Text, Avatar, Indicator, ActionIcon, Box } from '@mantine/core';
import { Bell, User } from 'lucide-react';

interface HeaderProps {
  title: string;
}

export function Header({}: HeaderProps) {
  return (
    <Box h="100%" px="md" style={{ display: 'flex', alignItems: 'center' }}>
      <Group justify="space-between" style={{ width: '100%' }}>
        <Text size="xl" fw={700}>勤怠管理アプリ</Text>
        <Group>
          <Indicator color="red" size={8} processing>
            <ActionIcon variant="subtle" size="lg" radius="xl">
              <Bell size={20} />
            </ActionIcon>
          </Indicator>
          <Group gap="sm">
            <Avatar color="gray" radius="xl">
              <User size={20} />
            </Avatar>
            <Text size="sm" fw={500}>山田 太郎</Text>
          </Group>
        </Group>
      </Group>
    </Box>
  );
};
export default Header;