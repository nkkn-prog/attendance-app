'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLink, ScrollArea, Group, Text, ThemeIcon } from '@mantine/core';
import { Home, Clock, Calendar, FileText, Settings, Users, BarChart3, Shield } from 'lucide-react';

const userNavigationItems = [
  { id: 'dashboard', label: 'ホーム', icon: Home, path: '/user/dashboard' },
  { id: 'clock', label: '打刻', icon: Clock, path: '/user/attendance/clock' },
  { id: 'attendance', label: '勤怠履歴', icon: Calendar, path: '/user/attendance' },
  { id: 'request', label: '申請', icon: FileText, path: '/user/request' },
  { id: 'setting', label: '設定', icon: Settings, path: '/user/setting/profile' },
];

const adminNavigationItems = [
  { id: 'dashboard', label: 'ダッシュボード', icon: BarChart3, path: '/admin/dashboard' },
  { id: 'employee', label: '従業員管理', icon: Users, path: '/admin/employee' },
  { id: 'attendance', label: '勤怠管理', icon: Calendar, path: '/admin/attendance' },
  { id: 'leave-request', label: '休暇申請管理', icon: FileText, path: '/admin/leave-request' },
  { id: 'setting', label: '設定', icon: Settings, path: '/admin/setting' },
];

export function Sidebar() {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');
  const navigationItems = isAdminRoute ? adminNavigationItems : userNavigationItems;

  return (
    <ScrollArea h="100%">
      <div style={{ padding: '1rem' }}>
        <Group mb="xl">
          <ThemeIcon size="lg" variant="filled" color={isAdminRoute ? "grape" : "blue"}>
            {isAdminRoute ? <Shield size={24} /> : <Clock size={24} />}
          </ThemeIcon>
          <Text size="xl" fw={700}>{isAdminRoute ? "管理者画面" : "勤怠管理"}</Text>
        </Group>
        
        <nav>
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname.startsWith(item.path);
            
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