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
  skillGroups: SkillGroup[] = [
    {
      category: 'Languages',
      skills: ['Python', 'C', 'C++', 'Rust', 'Swift', 'SystemVerilog', 'JavaScript', 'HTML/CSS'],
    },
    {
      category: 'Cryptography & Security',
      skills: ['Secure MPC', 'Zero-Knowledge Proofs', 'Oblivious Transfer', 'PKI / Let’s Encrypt', 'MP-SPDZ', 'Snort', 'MITRE Caldera'],
    },
    {
      category: 'Machine Learning & Data',
      skills: ['PyTorch', 'TensorFlow', 'OpenCV', 'Pandas', 'NumPy', 'SciPy', 'Matplotlib'],
    },
    {
      category: 'Infrastructure & Tools',
      skills: ['Git', 'Linux / Unix', 'PowerShell', 'AWS', 'GCP', 'HashiCorp Vault', 'Ansible', 'Terraform'],
    },
  ];
}
