import { Observable } from 'rxjs';

export interface ChatMessage {
  $key?: string;
  email?: string;
  userName?: Observable<string>;
  // userName?: string;
  message?: string;
  timeSent?: string;
  // timeSent?: Date;
}
