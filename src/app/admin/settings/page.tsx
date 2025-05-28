'use client';

import { Container, Title, Paper, Stack, Text, Grid, Card } from '@mantine/core';
import { Settings, Building, Calendar, Clock, Users, FileText, User } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SettingsPage() {
  const router = useRouter();

  const settingsMenuItems = [
    {
      title: '会社情報・基本勤務設定',
      description: '会社の基本情報と勤務時間の設定',
      icon: <Building size={24} />,
      path: '/admin/settings/company'
    },
    {
      title: '休日カレンダー設定',
      description: '祝日や会社休日の設定',
      icon: <Calendar size={24} />,
      path: '/admin/settings/holidays'
    },
    {
      title: '勤務パターン設定',
      description: 'シフトパターンや勤務時間の設定',
      icon: <Clock size={24} />,
      path: '/admin/settings/work-patterns'
    },
    {
      title: '部署管理',
      description: '部署の追加・編集・削除',
      icon: <Users size={24} />,
      path: '/admin/settings/departments'
    },
    {
      title: '申請フォーム設定',
      description: '各種申請フォームの設定',
      icon: <FileText size={24} />,
      path: '/admin/settings/request-forms'
    },
    {
      title: '管理者アカウント設定',
      description: '管理者アカウントの管理',
      icon: <User size={24} />,
      path: '/admin/settings/account'
    }
  ];

  return (
    <Container size="xl" mt="xl">
      <Paper p="xl" shadow="md" withBorder>
        <Stack>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Settings size={24} />
            <Title order={1}>設定</Title>
          </div>
          <Text c="dimmed">システムの各種設定を管理します</Text>
          
          <Grid gutter="md" mt="lg">
            {settingsMenuItems.map((item, index) => (
              <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
                <Card
                  p="lg"
                  shadow="sm"
                  withBorder
                  style={{ cursor: 'pointer', height: '100%' }}
                  onClick={() => router.push(item.path)}
                >
                  <Stack gap="sm">
                    <div style={{ color: 'var(--mantine-color-blue-6)' }}>
                      {item.icon}
                    </div>
                    <Title order={4}>{item.title}</Title>
                    <Text size="sm" c="dimmed">{item.description}</Text>
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Paper>
    </Container>
  );
}