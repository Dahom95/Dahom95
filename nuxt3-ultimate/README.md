# Nuxt 3 Ultimate Boilerplate

This starter includes Pinia with persisted auth, Tailwind CSS, i18n and Vuetify 3 ready to go.

### UI kit

Reusable components under `components/ui` wrap Vuetify elements with sensible defaults:

```
AppButton.vue  BaseInput.vue  BaseSelect.vue
Card.vue       Modal.vue      Toast.vue
Spinner.vue
```

## Setup

Install dependencies and run the dev server:

```bash
pnpm install
pnpm dev
```

Create `.env` based on `.env.example` for API endpoints and token expiry settings.
You can also set `TOKEN_STRATEGY` to `bearer`, `access_refresh` or `cookie` to control authentication mode.

To package the project as a zip archive you can run the provided script:

```bash
pnpm zip
```
