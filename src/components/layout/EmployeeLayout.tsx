'use client';

import React, { useState } from 'react';
import { AppShell, Burger, Group, Box } from '@mantine/core';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';

interface EmployeeLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function EmployeeLayout({ children, title }: EmployeeLayoutProps) {
  const [navbarOpened, setNavbarOpened] = useState(false);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: 'sm',
        collapsed: { mobile: !navbarOpened, desktop: false },
      }}
      padding="md"
      styles={{
        main: {
          backgroundColor: '#f9fafb',
        },
      }}
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Box hiddenFrom="sm">
            <Burger
              opened={navbarOpened}
              onClick={() => setNavbarOpened((o) => !o)}
              size="sm"
              aria-label="ナビゲーションを開閉"
            />
          </Box>
          <Header title={title} />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p={0}>
        <Sidebar />
      </AppShell.Navbar>

      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  );
};

export default EmployeeLayout;