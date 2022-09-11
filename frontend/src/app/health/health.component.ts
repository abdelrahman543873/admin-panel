import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss'],
})
export class HealthComponent implements OnInit {
  url: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.url = this.router.url;
  }
}
