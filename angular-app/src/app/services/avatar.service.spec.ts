import { TestBed } from '@angular/core/testing';

import { AvatarService } from './avatar.service';

describe('AvatarService', () => {
  let service: AvatarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvatarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getInitials', () => {
    it('should return initials for a full name', () => {
      expect(service.getInitials('Jane Doe')).toBe('JD');
    });

    it('should return single initial for a single name', () => {
      expect(service.getInitials('Jane')).toBe('J');
    });

    it('should use first and last name for multi-word names', () => {
      expect(service.getInitials('John Michael Doe')).toBe('JD');
    });

    it('should return empty string for empty input', () => {
      expect(service.getInitials('')).toBe('');
    });

    it('should return uppercase initials', () => {
      expect(service.getInitials('alice bob')).toBe('AB');
    });
  });

  describe('getAvatarColor', () => {
    it('should return a string color', () => {
      expect(typeof service.getAvatarColor('Jane Doe')).toBe('string');
    });

    it('should return the same color for the same name', () => {
      const color1 = service.getAvatarColor('Jane Doe');
      const color2 = service.getAvatarColor('Jane Doe');
      expect(color1).toBe(color2);
    });

    it('should return a hex color', () => {
      const color = service.getAvatarColor('Jane Doe');
      expect(color).toMatch(/^#[0-9a-f]{6}$/i);
    });

    it('should return a fallback color for empty input', () => {
      expect(service.getAvatarColor('')).toBeTruthy();
    });
  });
});
