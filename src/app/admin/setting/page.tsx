'use client';

import { Title, Paper, Stack, Text, Grid, Card } from '@mantine/core';
import { Building, Calendar, Clock, Users, FileText, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { EmployeeLayout } from '@/components/layout/EmployeeLayout';

export default function SettingsPage() {
  const router = useRouter();

  const settingsMenuItems = [
    {
      title: '会社情報・基本勤務設定',
      description: '会社の基本情報と勤務時間の設定',
      icon: <Building size={24} />,
      path: '/admin/setting/company'
    },
    {
      title: '休日カレンダー設定',
      description: '祝日や会社休日の設定',
      icon: <Calendar size={24} />,
      path: '/admin/setting/holidays'
    },
    {
      title: '勤務パターン設定',
      description: 'シフトパターンや勤務時間の設定',
      icon: <Clock size={24} />,
      path: '/admin/setting/work-patterns'
    },
    {
      title: '部署管理',
      description: '部署の追加・編集・削除',
      icon: <Users size={24} />,
      path: '/admin/setting/departments'
    },
    {
      title: '申請フォーム設定',
      description: '各種申請フォームの設定',
      icon: <FileText size={24} />,
      path: '/admin/setting/request-forms'
    },
    {
      title: '管理者アカウント設定',
      description: '管理者アカウントの管理',
      icon: <User size={24} />,
      path: '/admin/setting/account'
    }
  ];

  return (
    <EmployeeLayout title="各種設定">
      <Paper p="xl" shadow="md" withBorder>
        <Stack>
          <Title order={2} mb="lg">各種設定</Title>
          <Grid gutter="lg">
            {settingsMenuItems.map((item, index) => (
              <Grid.Col span={{ base: 12, md: 6, lg: 4 }} key={index}>
                <Card 
                  shadow="sm" 
                  padding="lg" 
                  radius="md" 
                  withBorder 
                  onClick={() => router.push(item.path)}
                  style={{ cursor: 'pointer' }}
                >
                  <Stack align="flex-start" gap="xs">
                    {item.icon} 
                    <Text fw={500}>{item.title}</Text>
                    <Text size="sm" c="dimmed">{item.description}</Text>
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Paper>
    </EmployeeLayout>
  );
}