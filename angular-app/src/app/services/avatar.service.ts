import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AvatarService {
  private readonly colors = [
    '#c0392b', '#e74c3c', '#9b59b6', '#8e44ad', '#2980b9',
    '#3498db', '#1abc9c', '#16a085', '#27ae60', '#2ecc71',
    '#f39c12', '#d35400', '#e67e22', '#c0392b', '#2c3e50',
    '#34495e', '#7f8c8d', '#6c5ce7', '#e17055', '#00b894',
  ];

  getInitials(name: string): string {
    if (!name || !name.trim()) {
      return '';
    }
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) {
      return parts[0].charAt(0).toUpperCase();
    }
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  }

  getAvatarColor(name: string): string {
    if (!name || !name.trim()) {
      return this.colors[0];
    }
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
      hash = hash & hash;
    }
    const index = Math.abs(hash) % this.colors.length;
    return this.colors[index];
  }
}
