import { standardFormatter, LogLevels } from '../../helpers/logging';

export function standardLogger(level: LogLevels, message: string) {
  const log = standardFormatter(level, message);

  console.log(log);
}
