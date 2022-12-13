import { format } from 'date-fns';

export function logTimeFormatter() {
  return format(new Date(), 'yyyy-MM-dd HH:mm:ss:SSS');
}
