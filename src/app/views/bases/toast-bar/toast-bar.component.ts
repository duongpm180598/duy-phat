import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast-bar',
  templateUrl: './toast-bar.component.html',
  styleUrls: ['./toast-bar.component.scss'],
})
export class ToastBarComponent implements OnInit {
  @Input() visible = false;
  @Input() message = 'Thao tác thành công';
  @Input() color = 'success';
  constructor() {}

  ngOnInit(): void {}
}
