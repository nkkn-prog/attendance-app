'use client';

import { Button, Container, Paper, Text, Stack } from '@mantine/core';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    // 自動リダイレクトを無効化（スタイルテスト用）
    // router.push('/dashboard');
  }, [router]);
  
  return (
    <Container size="sm" mt="xl">
      <Paper p="xl" shadow="md" withBorder>
        <Stack>
          <Text size="xl" fw={700} ta="center">勤怠管理アプリ</Text>
          <Text c="dimmed" ta="center">ログインして勤怠管理を始めましょう</Text>
          
          <Button 
            onClick={() => router.push('/dashboard')}
            fullWidth
            size="lg"
            mt="md"
          >
            ダッシュボードを表示
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}
