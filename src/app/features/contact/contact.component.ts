import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  standalone: true
})
export class ContactComponent {
  contactForm!: FormGroup;

  constructor(
    private _fb: FormBuilder
  ) {}

  ngOnInit() {
    this.contactForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  public sendEmail() {
    if (this.contactForm.invalid) return;

    const { name, email, message } = this.contactForm.value;

    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    const mailtoLink = `mailto:esteban.software.dev@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    this.contactForm.reset();
  }

}
