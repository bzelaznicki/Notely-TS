import { describe, it, expect } from 'vitest';
import { getAPIKey } from '../api/auth';

describe('getAPIKey', () => {
  it('returns the API key when header is present and correct', () => {
    const headers = { authorization: 'ApiKey my-secret-key' };
    expect(getAPIKey(headers)).toBe('my-secret-key');
  });

  it('returns null if authorization header is missing', () => {
    const headers = {};
    expect(getAPIKey(headers)).not.toBeNull();
  });

  it('returns null if authorization header does not start with ApiKey', () => {
    const headers = { authorization: 'Bearer something' };
    expect(getAPIKey(headers)).toBeNull();
  });

  it('returns null if authorization header is malformed', () => {
    const headers = { authorization: 'ApiKey' };
    expect(getAPIKey(headers)).toBeNull();
  });

});