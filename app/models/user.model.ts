import { Observable } from 'rxjs';

export interface User {
  userName?: Observable<string>;
  email?: string;
  password: string;
  status: string;
}
