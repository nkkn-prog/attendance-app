'use client';

import React from 'react';
import { Paper, Text, Stack, Timeline, Box } from '@mantine/core';

interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  type: 'info' | 'important';
}

const announcements: Announcement[] = [
  {
    id: '1',
    title: '年末年始の勤務について',
    content: '12月29日〜1月3日は年末年始休業となります。',
    date: '2024/12/20',
    type: 'info'
  },
  {
    id: '2',
    title: '有給休暇の申請について',
    content: '有給休暇は2週間前までに申請してください。',
    date: '2024/12/15',
    type: 'important'
  }
];

export const Announcements: React.FC = () => {
  return (
    <Paper shadow="sm" radius="md">
      <Box p="lg" style={{ borderBottom: '1px solid #e9ecef' }}>
        <Text size="lg" fw={600}>お知らせ</Text>
      </Box>
      <Box p="lg">
        <Timeline bulletSize={12} lineWidth={2}>
          {announcements.map((announcement) => (
            <Timeline.Item
              key={announcement.id}
              bullet={<div />}
              color={announcement.type === 'important' ? 'red' : 'blue'}
            >
              <Stack gap="xs">
                <Text fw={500}>{announcement.title}</Text>
                <Text size="sm" c="dimmed">{announcement.content}</Text>
                <Text size="xs" c="dimmed">{announcement.date}</Text>
              </Stack>
            </Timeline.Item>
          ))}
        </Timeline>
      </Box>
    </Paper>
  );
};