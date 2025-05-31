'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoginPage from './login/page';

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    // 自動リダイレクトを無効化（スタイルテスト用）
    // router.push('/dashboard');
  }, [router]);
  
  return (
    <LoginPage />
  );
}
