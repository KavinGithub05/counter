import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type HistoryEntry = {
  action: '+1' | '-1' | 'Reset';
  value: number;
};

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  count = 0;
  history: HistoryEntry[] = [];

  increment() {
    this.count++;
    this.history.unshift({ action: '+1', value: this.count });
  }

  decrement() {
    this.count--;
    this.history.unshift({ action: '-1', value: this.count });
  }

  reset() {
    this.count = 0;
    this.history.unshift({ action: 'Reset', value: this.count });
  }

  clearHistory() {
    this.count = 0;
    this.history = [];
  }
}
