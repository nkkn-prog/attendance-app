'use client';

import { useState } from 'react';
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
  Center,
} from '@mantine/core';
import { Building2, Mail, Lock, AlertCircle } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Supabase認証ロジックをここに実装
    setTimeout(() => {
      setLoading(false);
      router.push('/user/dashboard');
    }, 1000);
  };

  return (
    <Box
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a8e 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Center mih="100vh" p="md">
        <Container size="xs" w="100%">
          <Paper radius="lg" p="xl" shadow="xl">
            <Stack>
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
                勤怠管理システム
              </Title>
              <Text size="sm" c="dimmed">
                企業の効率的な勤怠管理をサポート
              </Text>
            </Box>

            <Divider my="sm" />

            {error && (
              <Alert icon={<AlertCircle size={16} />} color="red" variant="light">
                {error}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <Stack>
                <TextInput
                  label="メールアドレス"
                  placeholder="your-email@company.jp"
                  required
                  leftSection={<Mail size={16} />}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  placeholder="パスワードを入力"
                  required
                  leftSection={<Lock size={16} />}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  styles={{
                    label: { color: '#1e3a5f', fontWeight: 600 },
                    input: {
                      borderColor: '#d1d9e0',
                      '&:focus': { borderColor: '#2d5a8e' },
                    },
                  }}
                />

                <Button
                  type="submit"
                  fullWidth
                  loading={loading}
                  style={{
                    backgroundColor: '#1e3a5f',
                    height: '48px',
                    fontSize: '16px',
                    fontWeight: 600,
                  }}
                  styles={{
                    root: {
                      '&:hover': { backgroundColor: '#2d5a8e' },
                    },
                  }}
                >
                  ログイン
                </Button>
              </Stack>
            </form>
          </Stack>
        </Paper>

          <Text size="xs" c="white" ta="center" mt="xl">
            © 2024 勤怠管理システム. All rights reserved.
          </Text>
        </Container>
      </Center>
    </Box>
  );
}