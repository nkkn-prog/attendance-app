'use client';

import { EmployeeLayout } from '@/components/layout/EmployeeLayout';
import { Paper, TextInput, Button, Group, Stack, Avatar } from '@mantine/core';
import { User } from 'lucide-react';

export default function ProfileSettingsPage() {
  return (
    <EmployeeLayout title="プロフィール設定">
      <Paper shadow="sm" p="xl">
        <Group justify="center" mb="xl">
          <Avatar size="xl" color="blue">
            <User size={40} />
          </Avatar>
        </Group>
        
        <form>
          <Stack gap="md">
            <TextInput
              label="氏名"
              placeholder="山田 太郎"
              defaultValue="山田 太郎"
              required
            />
            
            <TextInput
              label="メールアドレス"
              placeholder="email@example.com"
              defaultValue="yamada.taro@example.com"
              required
            />
            
            <TextInput
              label="従業員ID"
              placeholder="EMP001"
              defaultValue="EMP001"
              readOnly
            />

            <TextInput
              label="部署"
              placeholder="開発部"
              defaultValue="開発部"
            />
            
            <Group justify="center" mt="xl">
              <Button type="submit">保存</Button>
            </Group>
          </Stack>
        </form>
      </Paper>
    </EmployeeLayout>
  );
}