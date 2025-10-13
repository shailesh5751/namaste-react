# 📦 npm & Package Management

- **npm**  
  - Stands for **Node Package Manager**.  
  - Manages JavaScript packages (install, update, remove).  
  - Handles **versions** of dependencies.

- **package.json**  
  - Configuration file for npm.  
  - Lists dependencies, scripts, and project metadata.  

- **package-lock.json**  
  - Locks exact versions of installed packages.  
  - Ensures reproducible builds across machines.  
  - Contains `integrity` field → SHA512 hash for verification.

- **Dependencies**  
  - **Normal dependencies (`dependencies`)** → Needed in production.  
  - **Dev dependencies (`devDependencies`)** → Needed only during development (e.g., testing, bundlers).  

- **Symbols in versions**  
  - `^1.2.3` → Updates **minor + patch** versions (`1.x.x`).  
  - `~1.2.3` → Updates **patch** versions only (`1.2.x`).  

- **Transitive dependencies**  
  - Packages depend on other packages.  
  - Example: Parcel → has its own dependencies → which themselves have dependencies.

- **node_modules**  
  - Local "database" of all installed packages.  
  - Can be regenerated using `package.json` + `package-lock.json`.

- **npx**  
  - Comes with npm.  
  - Used to **execute a package** (without permanently installing it).  
  - Example: `npx parcel index.html`.

---

# 📦 Bundlers

Bundlers combine and optimize code before shipping to browsers.  

**Examples:**
- Webpack
- Vite
- Parcel
- Babel (transpiler often used with bundlers)

---

# 🚀 Parcel Features

- Development build + local server
- **HMR (Hot Module Replacement)** → live reload
- File watching algorithm (written in C++)  
- Caching → faster rebuilds  
- Image optimization  
- Minification of files  
- Bundling into fewer files  
- Compression → removes spaces & reduces size  
- Consistent hashing  
- Code splitting → load code on demand  
- Differential bundling → supports older browsers  
- Tree shaking → removes unused code  
- Diagnostics & error handling  
- HTTPs support  
- Separate **dev** and **prod** bundles  

---

# 🏗 Production Build Notes

- Remove `"main"` field from `package.json` (it’s for libraries, not apps).  
- Run:
```bash
npm run build
