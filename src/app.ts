import { setupAPI, startAPI } from './core/server';
import config from './core/config'


const { APP_NAME } = config;

try {
    setupAPI();
    startAPI();
} catch (e) {
    console.log(`Cannot start ${APP_NAME}:`, e);
}