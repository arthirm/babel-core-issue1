import { type Plugin } from 'vite';

export abstract class BasePlugin implements Plugin {
  abstract name: string;
}
