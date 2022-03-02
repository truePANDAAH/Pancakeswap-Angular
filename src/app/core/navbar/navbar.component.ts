import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() scrollDeltaY!: number;
  @Output() openModal = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
