# 🚀 Enhanced Code Blocks

A standalone Next.js project featuring high-quality, interactive code blocks with syntax highlighting, copy functionality, text wrapping, and more. Perfect for documentation sites, blogs, or any application that needs beautiful code display.

## ✨ Features

- **📋 Copy to Clipboard**: One-click code copying with toast notifications
- **🔄 Text Wrapping**: Toggle between wrapped and scrollable code
- **🎨 Syntax Highlighting**: Vibrant colors powered by sugar-high
- **⚡ Performance**: Lazy loading for large code blocks
- **🌓 Theme Support**: Built-in dark/light theme switching
- **📱 Responsive**: Works perfectly on all device sizes
- **🎯 Accessible**: Fully keyboard navigable and screen reader friendly

## 🛠️ Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **sugar-high** - Syntax highlighting (lightweight alternative to Shiki)
- **Sonner** - Toast notifications
- **Lucide React** - Icons
- **Geist Font** - Modern typography

## 🚀 Quick Start

### 1. Clone or Download

```bash
git clone [your-repo-url]
cd enhanced-code-blocks
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
```

### 3. Run Development Server

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the demo.

## 📦 Using the Components

### Basic Usage

```tsx
import { CodeBlock } from "@/components/code-block";

export default function MyPage() {
  const code = `
console.log("Hello, world!");
const greeting = "Welcome to enhanced code blocks!";
  `;

  return (
    <div>
      <h1>My Code Example</h1>
      <CodeBlock code={code} language="javascript" />
    </div>
  );
}
```

### Available Props

```tsx
interface CodeBlockProps {
  code: string;           // The code to display
  language?: string;      // Programming language for highlighting
  className?: string;     // Additional CSS classes
  showLineNumbers?: boolean; // Show/hide line numbers (default: true)
  maxHeight?: string;     // Maximum height before scrolling
  allowCopy?: boolean;    // Enable/disable copy functionality (default: true)
  allowWrap?: boolean;    // Enable/disable wrap toggle (default: true)
}
```

### Advanced Example

```tsx
<CodeBlock
  code={myLongCode}
  language="typescript"
  maxHeight="400px"
  showLineNumbers={true}
  allowCopy={true}
  allowWrap={true}
  className="my-custom-class"
/>
```

## 🎨 Customization

### Styling

The code blocks use CSS custom properties for easy theming:

```css
:root {
  /* Light theme colors */
  --sh-class: oklch(0.54 0.213 262.881);
  --sh-identifier: oklch(0.53 0.164 285.949);
  --sh-sign: oklch(0.538 0.201 288.284);
  --sh-string: oklch(0.59 0.089 80.85);
  --sh-keyword: oklch(0.505 0.238 305.372);
  --sh-comment: oklch(0.505 0.016 285.949);
  --sh-jsxliterals: oklch(0.116 0.196 227.485);
  --sh-property: oklch(0.54 0.213 262.881);
  --sh-entity: oklch(0.628 0.258 23.131);
}

.dark {
  /* Dark theme colors */
  --sh-class: oklch(0.7 0.213 262.881);
  --sh-identifier: oklch(0.75 0.164 285.949);
  /* ... etc */
}
```

### Language Support

Supports all major programming languages including:
- JavaScript/TypeScript
- Python
- HTML/CSS
- JSON
- Bash/Shell
- And many more...

## 🏗️ Project Structure

```
enhanced-code-blocks/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── code-block.tsx    # Main enhanced component
│   │   │   └── toaster.tsx       # Toast notifications
│   │   └── code-block.tsx        # Simple wrapper component
│   ├── lib/
│   │   └── utils.ts              # Utility functions
│   └── app/
│       ├── globals.css           # Global styles with syntax colors
│       ├── layout.tsx            # Root layout with toaster
│       └── page.tsx              # Demo page
├── package.json
└── README.md
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

Build the project:

```bash
npm run build
```

The `out` directory contains the static files ready for deployment.

## 🔧 Development

### Adding New Features

1. **New Language Support**: sugar-high automatically detects most languages
2. **Custom Themes**: Modify CSS custom properties in `globals.css`
3. **Additional Functionality**: Extend the `CodeBlock` component

### Testing

```bash
npm run lint     # ESLint
npm run type-check  # TypeScript checking
```

## 📄 License

MIT License - feel free to use in your projects!

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 🐛 Issues

Found a bug or have a suggestion? Please open an issue on GitHub.

## 🌟 Showcase

This project demonstrates:
- Clean, professional code presentation
- Smooth user interactions
- Performance-optimized components
- Modern React patterns
- Accessibility best practices
- Mobile-first responsive design

Perfect for:
- Documentation websites
- Technical blogs
- Code tutorials
- API documentation
- Developer portfolios
- Educational platforms

---

**Made with ❤️ for developers who care about beautiful code presentation**
