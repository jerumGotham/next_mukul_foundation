# Custom Scripts and Styles Guide

This guide explains how to import and use your existing scripts and stylesheets in the Mukul Foundation Next.js application.

## Directory Structure

```
src/
├── styles/           # CSS files that can be imported in components
│   └── custom.css   # Example custom CSS file
├── scripts/         # JavaScript utilities and functions
│   └── utils.js     # Example utility functions
public/
└── assets/
    ├── css/         # External CSS files
    │   └── foundation-styles.css
    └── js/          # External JavaScript files
        └── custom-scripts.js
```

## Using Custom CSS Files

### Method 1: Import in Components (Recommended)

```javascript
// In any component or page
import "@/styles/custom.css";

export default function MyComponent() {
  return (
    <div className="custom-card">
      <button className="custom-button">Click me</button>
    </div>
  );
}
```

### Method 2: Import in Global Layout

```javascript
// In src/app/layout.js
import "@/styles/custom.css";
import "./globals.css";
```

### Method 3: Load External CSS Files

```javascript
// In src/app/layout.js or specific pages
import Head from "next/head";

export default function Layout() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/foundation-styles.css" />
      </Head>
      {/* Your content */}
    </>
  );
}
```

## Using Custom JavaScript

### Method 1: Import Utility Functions

```javascript
// In any component
import { validateEmail, formatCurrency } from "@/scripts/utils";

export default function ContactForm() {
  const handleSubmit = (formData) => {
    if (validateEmail(formData.email)) {
      // Process form
    }
  };

  return <form onSubmit={handleSubmit}>{/* Form fields */}</form>;
}
```

### Method 2: Load External Scripts with Next.js Script Component

```javascript
// In any component or page
import Script from "next/script";

export default function DonationPage() {
  return (
    <>
      <Script
        src="/assets/js/custom-scripts.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("Custom script loaded");
        }}
      />
      <div>
        <button className="donation-btn" data-amount="25">
          Donate $25
        </button>
      </div>
    </>
  );
}
```

### Method 3: Use useEffect for Client-Side Scripts

```javascript
// In any component
import { useEffect } from "react";

export default function MyComponent() {
  useEffect(() => {
    // Your custom JavaScript code here
    const initializeCustomFeature = () => {
      // Custom initialization logic
    };

    initializeCustomFeature();
  }, []);

  return <div>Your component</div>;
}
```

## Script Loading Strategies

When using the Next.js Script component, you can choose different loading strategies:

- `beforeInteractive`: Load before page is interactive (critical scripts)
- `afterInteractive`: Load after page is interactive (default, recommended)
- `lazyOnload`: Load during idle time (non-critical scripts)
- `worker`: Load in a web worker (experimental)

## Best Practices

1. **Performance**: Import CSS files only where needed to avoid loading unnecessary styles
2. **Tree Shaking**: Use named imports for JavaScript utilities to enable tree shaking
3. **Critical CSS**: Place critical styles in the global CSS file
4. **Script Optimization**: Use appropriate loading strategies for different types of scripts
5. **File Organization**: Keep related styles and scripts organized in their respective directories

## Migration Tips

To migrate your existing CSS and JavaScript:

1. Copy your CSS files to `src/styles/` or `public/assets/css/`
2. Copy your JavaScript files to `src/scripts/` or `public/assets/js/`
3. Convert global scripts to utility functions when possible
4. Use the Script component for third-party libraries
5. Test all functionality after migration

## Example Integration

Here's how to integrate a complete custom feature:

```javascript
// 1. Create utility function in src/scripts/donation.js
export const processDonation = (amount) => {
  // Your donation processing logic
};

// 2. Create styles in src/styles/donation.css
.donation-form {
  /* Your donation form styles */
}

// 3. Use in component
import { processDonation } from '@/scripts/donation';
import '@/styles/donation.css';

export default function DonationForm() {
  const handleDonation = (amount) => {
    processDonation(amount);
  };

  return (
    <form className="donation-form">
      {/* Your form */}
    </form>
  );
}
```

This approach allows you to maintain your existing code while taking advantage of Next.js optimization features.
