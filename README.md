# @faysal0x1/inertia-admin-kit

Reusable React/Inertia admin components shared across projects. The kit bundles the core UI blocks you already use in tbz (forms, tables, listing pages, image managers, etc.) plus a demo `country` resource.

## Folder structure

```
npmPackage/
  admin-ui-kit/
    package.json
    src/
      components/        # GlobalForm, DataTable, etc.
      components/ui/     # shadcn-based primitives
      components/form-layouts/
      components/DataTables/
      components/permissions/Can.jsx
      utils/             # image utils
      demo/country/      # sample CRUD screens
      index.js           # exports
```

## Getting started

```bash
cd npmPackage/admin-ui-kit
npm install
npm run build
```

This outputs `dist/` (ES modules). Publish by running `npm publish --access public` from this folder.

## Usage in another project

```bash
npm install @faysal0x1/inertia-admin-kit
```

```jsx
import { GlobalForm, DataTable, ListingPage } from '@faysal0x1/inertia-admin-kit';
```

### Required peer deps
- React 18+ / React DOM 18+
- `@inertiajs/react`
- `@tanstack/react-table`
- `@tinymce/tinymce-react` + `tinymce`
- `react-select`, `date-fns`, `lucide-react`, `sonner`

### Building blocks included
- GlobalForm & GlobalEditForm
- DataTable, DataTableExtraButtons, PaginationComponent
- ListingPage wrapper + ActionsDropdown + Can
- Form helpers (GlobalSelect, GlobalSelection, ImageUpdateComponent, LazyImage)
- RichTextEditor, QuillEditor, RenderedContent
- ToastManager + country demo screens

### Demo
Import the demo screens to jump-start CRUD wiring:
```jsx
import { default as CountryIndex } from '@faysal0x1/inertia-admin-kit/demo/country/index.jsx';
```

## Notes
- Components are authored in plain JS/JSX; Vite library mode builds ESM output.
- Styles rely on your Tailwind/Shadcn setup. Copy the included `ui` primitives or map their CSS tokens.
- If you need additional shared components, drop them under `src/components` and export via `src/index.js`.
