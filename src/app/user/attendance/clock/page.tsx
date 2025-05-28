'use client';

import { EmployeeLayout } from '@/components/layout/EmployeeLayout';
import { ClockScreen } from '@/components/attendance/ClockScreen';

export default function ClockPage() {
  return (
    <EmployeeLayout title="打刻">
      <ClockScreen />
    </EmployeeLayout>
  );
}