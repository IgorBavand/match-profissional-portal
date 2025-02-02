import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastSubject = new Subject<{ type: 'success' | 'error' | 'info'; text: string }>();
  toast$ = this.toastSubject.asObservable();

  showToast(type: 'success' | 'error' | 'info', text: string) {
    this.toastSubject.next({ type, text });
  }
}

