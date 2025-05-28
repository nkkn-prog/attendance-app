'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLink, ScrollArea, Group, Text, ThemeIcon } from '@mantine/core';
import { Home, Clock, Calendar, FileText, Settings } from 'lucide-react';

const navigationItems = [
  { id: 'dashboard', label: 'ホーム', icon: Home, path: '/dashboard' },
  { id: 'clock', label: '打刻', icon: Clock, path: '/attendance/clock' },
  { id: 'attendances', label: '勤怠履歴', icon: Calendar, path: '/attendances' },
  { id: 'requests', label: '申請', icon: FileText, path: '/requests' },
  { id: 'settings', label: '設定', icon: Settings, path: '/settings/profile' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <ScrollArea h="100%">
      <div style={{ padding: '1rem' }}>
        <Group mb="xl">
          <ThemeIcon size="lg" variant="filled" color="blue">
            <Clock size={24} />
          </ThemeIcon>
          <Text size="xl" fw={700}>勤怠管理</Text>
        </Group>
        
        <nav>
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;
            
            return (
              <NavLink
                key={item.id}
                component={Link}
                href={item.path}
                label={item.label}
                leftSection={<Icon size={20} />}
                active={isActive}
                styles={{
                  root: {
                    borderRadius: '0.5rem',
                    marginBottom: '0.5rem',
                  },
                }}
              />
            );
          })}
        </nav>
      </div>
    </ScrollArea>
  );
};

export default Sidebar;