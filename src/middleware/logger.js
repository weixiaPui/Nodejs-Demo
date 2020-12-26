const { createLogger, format, transports } = require('winston');
const { combine, timestamp, prettyPrint, cli } = format

const logger = createLogger({
  level: 'info',
  format: combine(timestamp(), prettyPrint()),
  defaultMeta: { service: 'document-templating-service' },
  transports: [
    new transports.File({
      filename: 'logs/error.log',
      level: 'error'
    }),
    new transports.File({ filename: 'logs/combined.log' })
  ]
})

if (process.env.NODE_ENV !== 'production') {
logger.add(new transports.Console({ format: cli() }))
}
  
module.exports= logger;