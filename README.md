<div align="center">
  <img src="public/icon-github-repositories-explorer.png" alt="GitHub Repositories Explorer" width="128" height="128" />
  <h1>GitHub Repositories Explorer</h1>
  <p><em>A modern, modular web application for exploring GitHub users and their public repositories</em></p>

  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
</div>

---

## ✨ Features

🔍 **Smart User Search** - Search GitHub users with real-time results
📂 **Repository Explorer** - Browse public repositories with detailed information
🎨 **Modern UI** - Clean, responsive interface with smooth animations
⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
🧪 **Type Safety** - Full TypeScript support with comprehensive type definitions
📱 **Mobile Responsive** - Works seamlessly across all device sizes

---

## 🏗️ Architecture Overview

Built with a **feature-first architecture** that emphasizes:
- 🔧 **Modular Components** - Each feature is self-contained and reusable
- 🛡️ **Type Safety** - Strong TypeScript integration throughout
- 🎯 **Separation of Concerns** - Clean API, UI, and business logic separation
- 🚀 **Scalability** - Easy to extend with new features
- 🧹 **Maintainability** - Well-organized code structure

---

## 📂 Project Structure

```
github-repositories-explorer/
├── 📁 .github/                                 # GitHub configuration
│   └── 📁 workflows/                           # GitHub Actions
│       └── 🤖 deploy.yml                       # Automated deployment
├── 📁 dist/                                    # Production build output
├── 📁 public/                                  # Static assets
│   └── 🖼️ icon-github-repositories-explorer.png
├── 📁 src/                                     # Source code
│   ├── 📁 api/                                 # API layer
│   │   └── 🔌 fetchGitHubUsers.ts             # GitHub API integration
│   ├── 📁 assets/                              # Static assets
│   ├── 📁 components/                          # React components
│   │   ├── 📁 GitHubRepositoriesExplorer/      # Main feature
│   │   │   ├── 📁 RepoList/                    # Repository listings
│   │   │   │   ├── ⚛️ RepoList.tsx
│   │   │   │   ├── 🎨 RepoList.css.ts
│   │   │   │   ├── ⚛️ RepoListLoading.tsx
│   │   │   │   └── 🎨 RepoListLoading.css.ts
│   │   │   ├── 📁 SearchBar/                   # Search functionality
│   │   │   │   ├── ⚛️ SearchBar.tsx
│   │   │   │   └── 🎨 SearchBar.css.ts
│   │   │   └── 📁 UserList/                    # User results
│   │   │       ├── 📁 UserItem/
│   │   │       │   ├── ⚛️ UserItem.tsx
│   │   │       │   └── 🎨 UserItem.css.ts
│   │   │       └── ⚛️ UserList.tsx
│   │   ├── ⚛️ GitHubRepositoriesExplorer.tsx   # Main component
│   │   ├── 🎨 GitHubRepositoriesExplorer.css.ts
│   │   └── 📁 UI/                              # Reusable UI components
│   │       ├── 🔽 Chevron.tsx
│   │       ├── ❌ ErrorMessage.tsx
│   │       └── ✨ ShimmerBar.tsx
│   ├── 📄 App.css
│   ├── ⚛️ App.tsx
│   ├── 🏷️ custom.d.ts                          # Type definitions
│   ├── 🌐 GlobalStyle.ts                       # Global styles
│   ├── 📄 index.css
│   ├── 🚀 main.tsx                             # Entry point
│   ├── 🎨 tailwind-utilities.css               # Utility classes
│   ├── 🏷️ types.ts                             # TypeScript types
│   └── 🔧 vite-env.d.ts                        # Vite types
├── 📁 vitest/                                  # Test configuration
│   └── 📁 __test__/
│       └── 🧪 api.test.ts
├── 📄 .gitignore
├── 🔧 eslint.config.js
├── 📄 index.html
├── 📦 package.json
├── 🔒 package-lock.json
├── 📖 README.md
├── 🔧 tsconfig.json
├── 🔧 tsconfig.app.json
├── 🔧 tsconfig.node.json
└── ⚡ vite.config.ts
```

---

## 🛠️ Technology Stack

### **Core Framework**
| Technology | Purpose | Why We Chose It |
|------------|---------|-----------------|
| **⚛️ React.js** | UI Framework | Component-based architecture, excellent ecosystem, hooks for state management |
| **⚡ Vite** | Build Tool | Lightning-fast HMR, optimized builds, modern dev experience |
| **🏷️ TypeScript** | Type System | Compile-time error checking, better IDE support, improved maintainability |

### **Styling & UI**
| Technology | Purpose | Why We Chose It |
|------------|---------|-----------------|
| **💅 styled-components** | CSS-in-JS | Component-scoped styles, dynamic theming, no CSS conflicts |
| **🎨 Tailwind Utilities** | Utility Classes | Consistent spacing, rapid prototyping, design system foundation |
| **🎯 Lucide React** | Icons | Modern, consistent icons with tree-shaking support |

### **Development & Testing**
| Technology | Purpose | Why We Chose It |
|------------|---------|-----------------|
| **🧪 Vitest** | Testing Framework | Fast, Vite-native testing with TypeScript support |
| **🔌 vite-plugin-svgr** | SVG Processing | Import SVGs as React components for better performance |

---

## 🚀 Quick Start

### **Prerequisites**
- 📦 Node.js (v16 or higher)
- 🧶 npm or yarn

### **Installation**

```bash
# 📥 Clone the repository
git clone https://github.com/AndreWicaksono/github-repositories-explorer.git

# 📁 Navigate to project directory
cd github-repositories-explorer

# 📦 Install dependencies
npm install
```

### **Development**

```bash
# 🚀 Start development server
npm run dev

# 🌐 Open http://localhost:5173 in your browser
```

### **Testing**

```bash
# 🧪 Run tests
npm run test

# 📊 Run tests with coverage
npm run test:coverage

# 👀 Watch mode
npm run test:watch
```

### **Building**

```bash
# 🏗️ Build for production
npm run build

# 👀 Preview production build
npm run preview
```

---

## 🎯 Key Features Deep Dive

### **🔍 Smart Search**
- **Debounced Input** - Reduces API calls for better performance
- **Real-time Results** - Instant feedback as you type
- **Error Handling** - Graceful handling of API errors and edge cases

### **📂 Repository Explorer**
- **Expandable Cards** - Click to reveal repository details
- **Loading States** - Shimmer animations for better UX
- **Repository Info** - Name, description, language, stars, and forks

### **🎨 Modern UI/UX**
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Smooth Animations** - Micro-interactions enhance user experience
- **Accessibility** - ARIA labels and keyboard navigation support

---

## 🔧 Configuration

### **Environment Variables**
Create a `.env` file in the root directory:

```env
# 🔑 GitHub API (optional - for higher rate limits)
VITE_GITHUB_TOKEN=your_github_token_here
```

### **Customization**
- **🎨 Styling**: Modify `GlobalStyle.ts` for global theme changes
- **🔧 API**: Update `fetchGitHubUsers.ts` for API modifications
- **🏷️ Types**: Extend `types.ts` for new data structures

---

## 🧪 Testing Strategy

The project uses **Vitest** for comprehensive testing:

- **📋 Unit Tests** - Individual component and function testing
- **🔗 Integration Tests** - API and component interaction testing
- **📸 Snapshot Tests** - UI consistency verification
- **🎯 Type Tests** - TypeScript type safety validation

```bash
# 🧪 Run specific test file
npm run test api.test.ts

# 📊 Generate coverage report
npm run test:coverage
```

---

## 🚀 Deployment

### **🤖 Automated GitHub Pages Deployment**

This project includes **automated deployment to GitHub Pages** using GitHub Actions, providing:

- **✅ Zero-maintenance deployment** - Automatically deploys on every push to main
- **🔄 Continuous integration** - Build and deploy pipeline ensures code quality
- **🆓 Free hosting** - GitHub Pages provides reliable, fast hosting at no cost
- **🌐 Custom domain support** - Easy to configure custom domains
- **📈 Version history** - Track deployment history through GitHub Actions

#### **🔧 Setup Components**

**1. GitHub Actions Workflow (`.github/workflows/deploy.yml`)**
```yaml
# Automated deployment pipeline that:
# - Triggers on push to main branch
# - Sets up Node.js environment
# - Installs dependencies and runs tests
# - Builds the production bundle
# - Deploys to GitHub Pages automatically
```

**2. Package.json Scripts**
```json
{
  "scripts": {
    "predeploy": "npm run build",    // Ensures fresh build before deployment
    "deploy": "gh-pages -d dist"     // Deploys dist folder to gh-pages branch
  },
  "devDependencies": {
    "gh-pages": "^6.3.0"           // Utility for GitHub Pages deployment
  }
}
```

#### **🎯 Why This Approach?**

**🚀 Developer Experience Benefits:**
- **No manual deployment** - Push code and it's automatically live
- **Consistent builds** - Same environment every time eliminates "works on my machine"
- **Quick feedback** - See deployment status directly in GitHub
- **Easy rollbacks** - Revert commits to automatically rollback deployments

**🔒 Reliability & Security:**
- **Isolated build environment** - GitHub Actions provides clean, consistent environment
- **Automated testing** - Catches issues before deployment
- **Branch protection** - Only tested, approved code gets deployed
- **Build verification** - Ensures the app actually works before going live

**💰 Cost & Performance:**
- **100% free** - No hosting costs for public repositories
- **Global CDN** - GitHub Pages uses a global content delivery network
- **HTTPS by default** - Secure connections out of the box
- **High availability** - Backed by GitHub's infrastructure

#### **📋 Manual Deployment (Alternative)**
If you prefer manual control:

```bash
# 🏗️ Build for production
npm run build

# 🚀 Deploy to GitHub Pages
npm run deploy
```

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### **📋 Development Process**
1. **🍴 Fork** the repository
2. **🌿 Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **💾 Commit** your changes: `git commit -m 'Add amazing feature'`
4. **📤 Push** to the branch: `git push origin feature/amazing-feature`
5. **🔄 Open** a Pull Request

### **📝 Code Style**
- Use **TypeScript** for all new code
- Follow the established **folder structure**
- Write **tests** for new features
- Use **conventional commits** for commit messages

### **🏗️ Adding New Features**
1. **📁 Create** a new folder in `src/components/`
2. **🏷️ Define** types in `types.ts`
3. **🔌 Add** API functions in `src/api/`
4. **🧪 Write** tests in `vitest/__test__/`
5. **📖 Update** documentation

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Andre Wicaksono**
🐙 GitHub: [@AndreWicaksono](https://github.com/AndreWicaksono)

---

## 🙏 Acknowledgments

- **GitHub API** for providing the data
- **React Team** for the amazing framework
- **Vite Team** for the blazing-fast build tool
- **Open Source Community** for inspiration and resources

---

<div align="center">
  <p>Made with ❤️ by Andre Wicaksono</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
