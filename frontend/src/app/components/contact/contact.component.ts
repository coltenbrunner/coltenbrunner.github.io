import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private api = inject(ApiService);

  // Contact form is hidden until a Formspree form is configured.
  // To re-enable: set a real formspreeId in api.service.ts, then flip this to true.
  formEnabled = false;

  status: 'idle' | 'sending' | 'success' | 'error' = 'idle';

  form = this.fb.group({
    name:    ['', [Validators.required, Validators.minLength(2)]],
    email:   ['', [Validators.required, Validators.email]],
    subject: [''],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.status = 'sending';

    this.api.sendContact(this.form.value as any).subscribe({
      next: () => { this.status = 'success'; this.form.reset(); },
      error: () => { this.status = 'error'; },
    });
  }

  isInvalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl?.invalid && ctrl?.touched);
  }
}
