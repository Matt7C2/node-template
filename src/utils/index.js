import winston from 'winston';
import chalk from 'chalk';

// Definizione colori personalizzati per i livelli
const customColors = {
  error: 'red',
  warn: 'yellow',
  info: 'cyan',
  debug: 'magenta',
};

// Formatter custom per gestire opzione { color: '...' }
const colorizeMessage = winston.format((info) => {
  if (info.color) {
    // Usa chalk dinamicamente (es: 'bgBlue.white' → chalk.bgBlue.white)
    const parts = info.color.split('.');
    let fn = chalk;
    for (const p of parts) {
      if (fn[p]) fn = fn[p];
    }
    if (typeof fn === 'function') {
      info.message = fn(info.message);
    }
  }
  return info;
});

const logFormat = winston.format.combine(
  colorizeMessage(), // applica il colore custom
  winston.format.colorize({ level: true }), // colora solo il livello
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.printf(({ timestamp, level, message }) => `[${timestamp}] [${level}] ${message}`)
);

winston.addColors(customColors);

export const logger = winston.createLogger({
  level: 'info',
  format: logFormat,
  transports: [new winston.transports.Console()],
});
