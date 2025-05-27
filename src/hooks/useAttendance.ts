'use client';

import { useState, useEffect } from 'react';

export function useAttendance() {
  const [clockedIn, setClockedIn] = useState(false);
  const [onBreak, setOnBreak] = useState(false);
  const [clockInTime, setClockInTime] = useState<Date | null>(null);
  const [totalWorkTime] = useState<number>(0);
  const [breakStartTime, setBreakStartTime] = useState<Date | null>(null);
  const [totalBreakTime, setTotalBreakTime] = useState<number>(0);

  // 打刻処理
  const handleClockIn = () => {
    setClockedIn(true);
    setOnBreak(false);
    setClockInTime(new Date());
  };

  const handleClockOut = () => {
    if (clockedIn) {
      setClockedIn(false);
      setOnBreak(false);
      setClockInTime(null);
      setBreakStartTime(null);
      // 実際の実装ではここでAPIに打刻データを送信する
    }
  };

  const handleBreakStart = () => {
    if (clockedIn && !onBreak) {
      setOnBreak(true);
      setBreakStartTime(new Date());
    }
  };

  const handleBreakEnd = () => {
    if (clockedIn && onBreak && breakStartTime) {
      setOnBreak(false);
      const breakEnd = new Date();
      const breakDuration = Math.floor((breakEnd.getTime() - breakStartTime.getTime()) / 1000);
      setTotalBreakTime(prev => prev + breakDuration);
      setBreakStartTime(null);
    }
  };

  // 経過時間の計算
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (clockedIn) {
      timer = setInterval(() => {
        // 勤務時間の更新ロジック（実際のアプリではサーバーと同期する）
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [clockedIn, onBreak]);

  return {
    clockedIn,
    onBreak,
    clockInTime,
    totalWorkTime,
    totalBreakTime,
    handleClockIn,
    handleClockOut,
    handleBreakStart,
    handleBreakEnd
  };
}