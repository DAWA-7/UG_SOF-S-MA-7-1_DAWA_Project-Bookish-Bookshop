import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-secondary',
  templateUrl: './button-secondary.component.html',
  styleUrls: ['./button-secondary.component.css'],
})
export class ButtonSecondaryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() buttonName: string = ''; // Receive parameter from parent component
}
