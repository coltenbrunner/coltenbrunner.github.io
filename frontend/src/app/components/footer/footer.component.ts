import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container">
        <p>© {{ year }} Colten Brunner</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      margin-top: 3.5rem;
      padding: 1.5rem 0;
      border-top: 1px solid var(--border);

      p {
        font-size: 0.85rem;
        color: var(--text-faint);
      }
    }
    .footer p span { color: var(--accent); }
    .footer__year { color: var(--text-faint); }
  `],
})
export class FooterComponent {
  year = new Date().getFullYear();
}
