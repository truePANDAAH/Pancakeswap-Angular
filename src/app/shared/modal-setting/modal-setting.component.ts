import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-setting',
  templateUrl: './modal-setting.component.html',
  styleUrls: ['./modal-setting.component.css']
})
export class ModalSettingComponent implements OnInit {
  @Output() closeModal = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

}
