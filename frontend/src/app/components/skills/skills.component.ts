import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillGroup {
  category: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  // Mirrors the CV's skills section — languages and tooling actually used in
  // research and industry work, not everything ever touched.
  skillGroups: SkillGroup[] = [
    {
      category: 'Languages',
      skills: ['Python', 'Rust', 'C', 'C++', 'SystemVerilog'],
    },
    {
      category: 'Cryptography & Security',
      skills: ['Secure MPC', 'Zero-Knowledge Proofs', 'Oblivious Transfer', 'MP-SPDZ', 'HoneyBadgerMPC', 'Plonky2', 'PKI / Let’s Encrypt'],
    },
    {
      category: 'Machine Learning & Data',
      skills: ['PyTorch', 'NumPy', 'SciPy', 'Pandas', 'Matplotlib'],
    },
    {
      category: 'Infrastructure & Tools',
      skills: ['Git', 'Linux / Unix', 'GCP', 'AWS', 'HashiCorp Vault'],
    },
  ];
}
