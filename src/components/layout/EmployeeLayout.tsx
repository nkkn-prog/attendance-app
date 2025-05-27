'use client';

import React from 'react';
import { AppShell } from '@mantine/core';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';

interface EmployeeLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const EmployeeLayout: React.FC<EmployeeLayoutProps> = ({ children, title }) => {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 250, breakpoint: 'sm' }}
      padding="md"
      styles={{
        main: {
          backgroundColor: '#f9fafb',
        },
      }}
    >
      <AppShell.Header>
        <Header title={title} />
      </AppShell.Header>
      <AppShell.Navbar>
        <Sidebar />
      </AppShell.Navbar>
      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  );
};