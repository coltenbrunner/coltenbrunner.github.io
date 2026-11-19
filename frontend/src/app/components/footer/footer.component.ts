import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container">
        <p>
          © {{ year }} Colten Brunner · Designed with help from
          <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>
        </p>
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

      a {
        color: inherit;
        text-decoration: underline;
        text-underline-offset: 2px;
      }
    }
  `],
})
export class FooterComponent {
  year = new Date().getFullYear();
}
