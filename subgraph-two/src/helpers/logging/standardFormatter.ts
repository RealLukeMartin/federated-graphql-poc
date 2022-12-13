import { logTimeFormatter } from '../date';

export type LogLevels = 'INFO' | 'WARN' | 'ERROR';

export function standardFormatter(level: LogLevels, message: string) {
  const timestamp = logTimeFormatter();

  return `${timestamp} ${level} - ${message}`;
}
