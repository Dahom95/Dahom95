# Token Strategy Guide

This project supports three modes for handling authentication tokens. You select the strategy via the `TOKEN_STRATEGY` environment variable in your `.env` file.

## 1. Bearer-only (`bearer`)
- Backend returns a single `token` in the login response.
- The client stores this token in Pinia and `localStorage`.
- Use this mode for simple setups where sessions are short lived and security requirements are minimal.

## 2. Access + Refresh (`access_refresh`)
- Backend returns `access` and `refresh` tokens.
- Access tokens are stored in Pinia and `localStorage` while refresh tokens may be stored in an HttpOnly cookie.
- Axios automatically tries to refresh the access token when it expires.
- Recommended for mobile friendly apps that need silent token renewal.

## 3. Cookie-only (`cookie`)
- Backend sets an HttpOnly cookie on login and does not include tokens in the response body.
- No `Authorization` header is sent from the client; the server validates the cookie on each request.
- Provides the highest security and works well with SSR.

## Choosing a strategy
Set `TOKEN_STRATEGY` in `.env` to one of `bearer`, `access_refresh` or `cookie` depending on your backend implementation. Only the logic for the selected mode will run, so you can switch strategies without changing code.

## Future ideas
- Two-factor authentication for critical actions.
- OAuth integration for social logins.
- Admin UI for managing user roles and permissions.
