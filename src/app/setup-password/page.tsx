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
  Progress,
  List,
} from '@mantine/core';
import { Building2, Mail, Lock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

export default function SetupPasswordPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // パスワードの強度を計算
  const getPasswordStrength = () => {
    const pass = formData.password;
    if (!pass) return 0;
    
    let strength = 0;
    if (pass.length >= 8) strength += 25;
    if (pass.length >= 12) strength += 25;
    if (/[a-z]/.test(pass) && /[A-Z]/.test(pass)) strength += 25;
    if (/[0-9]/.test(pass)) strength += 12.5;
    if (/[^a-zA-Z0-9]/.test(pass)) strength += 12.5;
    
    return strength;
  };

  const getPasswordStrengthColor = () => {
    const strength = getPasswordStrength();
    if (strength < 50) return 'red';
    if (strength < 75) return 'yellow';
    return 'green';
  };

  // パスワード要件チェック
  const passwordRequirements = [
    { label: '8文字以上', check: formData.password.length >= 8 },
    { label: '大文字を含む', check: /[A-Z]/.test(formData.password) },
    { label: '小文字を含む', check: /[a-z]/.test(formData.password) },
    { label: '数字を含む', check: /[0-9]/.test(formData.password) },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // バリデーション
    if (!formData.email) {
      setError('メールアドレスを入力してください');
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('パスワードが一致しません');
      setLoading(false);
      return;
    }

    if (getPasswordStrength() < 50) {
      setError('パスワードが弱すぎます。より強力なパスワードを設定してください');
      setLoading(false);
      return;
    }

    // ここでSupabaseまたはAPIを呼び出してパスワードを設定
    try {
      // await setupPassword(formData.email, formData.password);
      
      // 成功時はログインページへリダイレクト
      setTimeout(() => {
        setLoading(false);
        router.push('/login');
      }, 1000);
    } catch {
      setError('パスワードの設定に失敗しました');
      setLoading(false);
    }
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
        <Container size="sm" w="100%">
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
                  初回パスワード設定
                </Title>
                <Text size="sm" c="dimmed">
                  安全なパスワードを設定してください
                </Text>
              </Box>

              <Divider my="sm" />

              <Alert icon={<AlertCircle size={16} />} color="blue" variant="light">
                初めてログインされる方は、こちらでパスワードを設定してください。
                管理者から通知されたメールアドレスを入力してください。
              </Alert>

              {error && (
                <Alert icon={<XCircle size={16} />} color="red" variant="light">
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

                  <Box>
                    <PasswordInput
                      label="新しいパスワード"
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
                    {formData.password && (
                      <Box mt="xs">
                        <Text size="xs" style={{ color: '#5a6670', marginBottom: '4px' }}>
                          パスワード強度
                        </Text>
                        <Progress
                          value={getPasswordStrength()}
                          size="sm"
                          radius="xl"
                          color={getPasswordStrengthColor()}
                        />
                        <List size="xs" mt="sm" spacing="xs">
                          {passwordRequirements.map((req, index) => (
                            <List.Item
                              key={index}
                              icon={
                                req.check ? 
                                  <CheckCircle size={14} color="#4caf50" /> : 
                                  <XCircle size={14} color="#9e9e9e" />
                              }
                              style={{ 
                                color: req.check ? '#4caf50' : '#9e9e9e',
                                fontSize: '12px'
                              }}
                            >
                              {req.label}
                            </List.Item>
                          ))}
                        </List>
                      </Box>
                    )}
                  </Box>

                  <PasswordInput
                    label="パスワード（確認）"
                    placeholder="もう一度入力してください"
                    required
                    leftSection={<Lock size={16} />}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    error={
                      formData.confirmPassword && 
                      formData.password !== formData.confirmPassword ? 
                        'パスワードが一致しません' : ''
                    }
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
                    disabled={
                      !formData.email || 
                      !formData.password || 
                      !formData.confirmPassword ||
                      formData.password !== formData.confirmPassword ||
                      getPasswordStrength() < 50
                    }
                    style={{
                      backgroundColor: '#1e3a5f',
                      height: '48px',
                      fontSize: '16px',
                      fontWeight: 600,
                      marginTop: '16px',
                    }}
                    styles={{
                      root: {
                        '&:hover': { backgroundColor: '#2d5a8e' },
                        '&:disabled': { backgroundColor: '#a0a8b0' },
                      },
                    }}
                  >
                    パスワードを設定
                  </Button>
                </Stack>
              </form>

              <Divider my="md" />

              <Text size="sm" style={{ textAlign: 'center' }}>
                既にパスワードを設定済みの方は{' '}
                <a
                  href="/login"
                  style={{ color: '#2d5a8e', textDecoration: 'none', fontWeight: 600 }}
                >
                  ログイン画面へ
                </a>
              </Text>
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