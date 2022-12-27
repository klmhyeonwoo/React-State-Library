import { setupWorker } from "msw";
import { handlers } from './handlers';

// handlers 파일에는 worker 변수에 handlers 배열을 setup 해주기만 하면 된다.
export const worker = setupWorker(...handlers);