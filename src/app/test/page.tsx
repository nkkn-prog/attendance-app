'use client';

import { Button, Container, Paper, Text, Stack, Group, Title, Divider } from '@mantine/core';

export default function TestPage() {
  return (
    <Container size="md" p="md">
      <Title order={1} mb="lg" ta="center">Mantineスタイルテスト</Title>
      <Divider mb="lg" />
      
      <Group grow mb="lg">
        <Paper p="lg" withBorder>
          <Title order={3} mb="md">ボタン</Title>
          <Group mb="md">
            <Button>デフォルト</Button>
            <Button color="primary">プライマリ</Button>
            <Button color="red">赤</Button>
            <Button variant="outline">アウトライン</Button>
          </Group>
          <Group>
            <Button variant="light">ライト</Button>
            <Button variant="subtle">サブタイル</Button>
            <Button variant="filled">フィルド</Button>
            <Button variant="gradient">グラデーション</Button>
          </Group>
        </Paper>
        
        <Paper p="lg" withBorder>
          <Title order={3} mb="md">テキスト</Title>
          <Stack>
            <Text size="xs">Extra Small</Text>
            <Text size="sm">Small</Text>
            <Text size="md">Medium</Text>
            <Text size="lg">Large</Text>
            <Text size="xl">Extra Large</Text>
            <Text fw={700}>太字</Text>
            <Text c="primary">カラーテキスト</Text>
          </Stack>
        </Paper>
      </Group>
      
      <Paper p="lg" withBorder>
        <Title order={3} mb="md">カラー</Title>
        <Group grow>
          {Array.from({ length: 10 }).map((_, i) => (
            <div 
              key={i} 
              style={{ 
                height: '50px', 
                backgroundColor: `var(--mantine-color-primary-${i})`,
                borderRadius: 'var(--mantine-radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text c={i > 5 ? 'white' : 'black'}>
                {i}
              </Text>
            </div>
          ))}
        </Group>
      </Paper>
    </Container>
  );
}