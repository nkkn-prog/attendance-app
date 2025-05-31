'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Container,
  Stack,
  Box,
  Divider,
  Alert,
  Checkbox,
} from '@mantine/core';
import { Building2, Mail, Lock, User, Building, AlertCircle } from 'lucide-react';

export default function TraditionalSignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    companyName: '',
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('パスワードが一致しません');
      setLoading(false);
      return;
    }

    // Supabase認証ロジックをここに実装
    setTimeout(() => {
      setLoading(false);
      router.push('/login/traditional');
    }, 1000);
  };

  return (
    <Box
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a8e 100%)',
        display: 'flex',
        alignItems: 'center',
        padding: '40px 0',
      }}
    >
      <Container size={480}>
        <Paper radius="lg" p={40} shadow="xl" style={{ backgroundColor: '#ffffff' }}>
          <Stack gap="md">
            <Box style={{ textAlign: 'center' }}>
              <Box
                style={{
                  display: 'inline-flex',
                  padding: '16px',
                  borderRadius: '50%',
                  backgroundColor: '#f0f4f8',
                  marginBottom: '16px',
                }}
              >
                <Building2 size={32} color="#1e3a5f" />
              </Box>
              <Title order={2} style={{ color: '#1e3a5f', marginBottom: '8px' }}>
                新規アカウント登録
              </Title>
              <Text size="sm" c="dimmed">
                貴社の勤怠管理を効率化します
              </Text>
            </Box>

            <Divider my="sm" />

            {error && (
              <Alert icon={<AlertCircle size={16} />} color="red" variant="light">
                {error}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <Stack gap="md">
                <TextInput
                  label="会社名"
                  placeholder="株式会社〇〇"
                  required
                  leftSection={<Building size={16} />}
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  styles={{
                    label: { color: '#1e3a5f', fontWeight: 600 },
                    input: {
                      borderColor: '#d1d9e0',
                      '&:focus': { borderColor: '#2d5a8e' },
                    },
                  }}
                />

                <TextInput
                  label="ご担当者名"
                  placeholder="山田 太郎"
                  required
                  leftSection={<User size={16} />}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  styles={{
                    label: { color: '#1e3a5f', fontWeight: 600 },
                    input: {
                      borderColor: '#d1d9e0',
                      '&:focus': { borderColor: '#2d5a8e' },
                    },
                  }}
                />

                <TextInput
                  label="メールアドレス"
                  placeholder="your-email@company.jp"
                  required
                  type="email"
                  leftSection={<Mail size={16} />}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  styles={{
                    label: { color: '#1e3a5f', fontWeight: 600 },
                    input: {
                      borderColor: '#d1d9e0',
                      '&:focus': { borderColor: '#2d5a8e' },
                    },
                  }}
                />

                <PasswordInput
                  label="パスワード"
                  placeholder="8文字以上で設定"
                  required
                  leftSection={<Lock size={16} />}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  styles={{
                    label: { color: '#1e3a5f', fontWeight: 600 },
                    input: {
                      borderColor: '#d1d9e0',
                      '&:focus': { borderColor: '#2d5a8e' },
                    },
                  }}
                />

                <PasswordInput
                  label="パスワード（確認）"
                  placeholder="パスワードを再入力"
                  required
                  leftSection={<Lock size={16} />}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  styles={{
                    label: { color: '#1e3a5f', fontWeight: 600 },
                    input: {
                      borderColor: '#d1d9e0',
                      '&:focus': { borderColor: '#2d5a8e' },
                    },
                  }}
                />

                <Checkbox
                  label="利用規約に同意する"
                  checked={formData.agreeTerms}
                  onChange={(e) => setFormData({ ...formData, agreeTerms: e.currentTarget.checked })}
                  styles={{
                    label: { color: '#5a6670' },
                  }}
                />

                <Button
                  type="submit"
                  fullWidth
                  loading={loading}
                  disabled={!formData.agreeTerms}
                  style={{
                    backgroundColor: '#1e3a5f',
                    height: '48px',
                    fontSize: '16px',
                    fontWeight: 600,
                  }}
                  styles={{
                    root: {
                      '&:hover': { backgroundColor: '#2d5a8e' },
                      '&:disabled': { backgroundColor: '#a0a8b0' },
                    },
                  }}
                >
                  アカウント作成
                </Button>
              </Stack>
            </form>

            <Divider my="md" />

            <Text size="sm" style={{ textAlign: 'center' }}>
              既にアカウントをお持ちの方は{' '}
              <Link
                href="/login"
                style={{ color: '#2d5a8e', textDecoration: 'none', fontWeight: 600 }}
              >
                ログイン
              </Link>
            </Text>
          </Stack>
        </Paper>

        <Text size="xs" c="white" style={{ textAlign: 'center', marginTop: '24px' }}>
          © 2024 勤怠管理システム. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
}