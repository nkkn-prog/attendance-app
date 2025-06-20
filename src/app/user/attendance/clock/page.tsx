'use client';

import { EmployeeLayout } from '@/components/layout/EmployeeLayout';
import { ClockScreen } from '@/components/attendance/ClockScreen';

export default function UserAttendanceClockPage() {
  return (
    <EmployeeLayout title="打刻">
      <ClockScreen />
    </EmployeeLayout>
  );
}