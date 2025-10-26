import winston from 'winston';

// Definizione colori personalizzati
const customColors = {
    error: 'red',
    warn: 'yellow',
    info: 'cyan',
    debug: 'magenta',
};

const logFormat = winston.format.combine(
    // winston.format.colorize({ all: true }), // Colora tutto il messaggio 
    winston.format.colorize({ level: true }), // Colora tsolo il tipo
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.printf(({ timestamp, level, message }) => `[${timestamp}] [${level}] ${message}`)
);

// Configura i colori in Winston
winston.addColors(customColors);

// Inizializzazione
export const logger = winston.createLogger({
    level: 'info', // Mostra tutti i log fino a debug
    format: logFormat,
    transports: [
        new winston.transports.Console(), // Stampa colorata nel terminale
        // new winston.transports.File({ filename: 'app.log' }) // Log normale su file
    ]
});
