# Nuxt 3 Ultimate Boilerplate

This starter includes Pinia with persisted auth, Tailwind CSS, i18n and Vuetify 3 ready to go.

### UI kit

Reusable components under `components/ui` wrap Vuetify elements with sensible defaults:

```
AppButton.vue  BaseInput.vue  BaseSelect.vue
Card.vue       Modal.vue      Toast.vue
Spinner.vue
```

Route guards can enforce user roles or permissions via `middleware/role` and
`middleware/permission`.

## Setup

Install dependencies and run the dev server:

```bash
pnpm install
pnpm dev
```

Create `.env` based on `.env.example` for API endpoints and token expiry settings.
Set `TOKEN_STRATEGY` to `bearer`, `access_refresh` or `cookie` depending on how your backend issues tokens. See [docs/token_strategy.md](docs/token_strategy.md) for details.

To package the project as a zip archive you can run the provided script:

```bash
pnpm zip
```
