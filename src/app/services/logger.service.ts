import { Injectable } from '@angular/core';

export const LOG_LEVEL = {
  TRACE: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3
};

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private level = LOG_LEVEL.INFO;

  constructor() { }

  setLevel(level) {
    this.level = level;
  }

  private log(level, ...msg) {
    msg.reverse();
    msg.push(`[${level}] [] :: `);
    msg.reverse();
    console.log.apply(console, msg);
  }

  trace(...msg) {
    this.log('TRACE', msg);
  }

  info(...msg) {
    this.log('INFO', msg);

  }

  warn(...msg) {
    this.log('WARN', msg);
  }

  error(...msg) {
    this.log('ERROR', msg);
  }

}
