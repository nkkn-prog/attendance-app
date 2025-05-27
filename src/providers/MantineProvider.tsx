'use client';

import { MantineProvider as MantineBaseProvider, createTheme, MantineColorsTuple } from '@mantine/core';
import { ReactNode } from 'react';

// カスタムカラーを定義
const primaryBlue: MantineColorsTuple = [
  '#e6f7ff', // 0
  '#bae7ff', // 1
  '#91d5ff', // 2
  '#69c0ff', // 3
  '#40a9ff', // 4
  '#1890ff', // 5 - メインカラー
  '#096dd9', // 6
  '#0050b3', // 7
  '#003a8c', // 8
  '#002766', // 9
];

const theme = createTheme({
  fontFamily: 'var(--font-geist-sans)',
  colors: {
    primary: primaryBlue,
  },
  primaryColor: 'primary',
  defaultRadius: 'md',
  components: {
    Button: {
      defaultProps: {
        radius: 'md',
      },
    },
    Paper: {
      defaultProps: {
        p: 'md',
        radius: 'md',
      },
    },
    Card: {
      defaultProps: {
        p: 'md',
        radius: 'md',
      },
    },
  },
});

export function MantineProvider({ children }: { children: ReactNode }) {
  return (
    <MantineBaseProvider 
      theme={theme} 
      defaultColorScheme="light"
    >
      {children}
    </MantineBaseProvider>
  );
}