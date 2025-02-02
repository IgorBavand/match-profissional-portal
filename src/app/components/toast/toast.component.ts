import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  message: string = '';
  messageType: 'success' | 'error' | 'info' = 'info';
  private toastSubscription: Subscription | undefined;

  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.toastSubscription = this.toastService.toast$.subscribe((toast) => {
      this.message = toast.text;
      this.messageType = toast.type;

      setTimeout(() => {
        this.message = '';
      }, 3000);
    });
  }

  ngOnDestroy() {
    // @ts-ignore
    this.toastSubscription.unsubscribe();
  }
}
