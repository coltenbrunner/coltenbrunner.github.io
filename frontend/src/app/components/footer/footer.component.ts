import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container footer__inner">
        <p>Designed &amp; Built by <span>Colten Brunner</span></p>
        <p class="footer__year">© {{ year }}</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      padding: 2rem 0;
      border-top: 1px solid var(--border);
      text-align: center;

    .footer__inner {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
      }

      p {
        font-size: 0.85rem;
        color: var(--text-muted);
        span { color: var(--accent); }
      }

    .footer__year { color: var(--text-faint); }
    }
  `],
})
export class FooterComponent {
  year = new Date().getFullYear();
}
