import React from 'react';

export function formatMessage(text: string): string {
  return text.replace(/\*\*/g, '');
}