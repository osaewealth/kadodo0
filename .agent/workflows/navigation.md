---
description: How to connect buttons and links to their appropriate routes
---

# Navigation & Linking Workflow

Use this workflow to ensure all interactive elements (buttons, links, CTAs) are correctly connected to the application's routing system.

## 1. Audit Routes
Check `src/App.tsx` to identify all available routes and their corresponding paths.

| Feature | Route Path |
|---------|------------|
| Home | `/` |
| Ghana Gateway | `/ghana` |
| Business Verification | `/business` |
| Individual Verification | `/individual-verification` |
| Kadodo Number | `/kadodo-number` |
| Solutions | `/solutions` |
| Coverage | `/coverage` |
| About Us | `/about-us` |
| Contact Us | `/contact-us` |

## 2. Implementing Navigation

### For Text Links
Use the `Link` component from `react-router-dom`:
```tsx
import { Link } from 'react-router-dom';

<Link to="/target-route">Link Text</Link>
```

### For Buttons
Use the `useNavigate` hook for `Button` components that don't natively support `href`:
```tsx
import { useNavigate } from 'react-router-dom';

const Component = () => {
    const navigate = useNavigate();
    
    return (
        <Button onClick={() => navigate('/target-route')}>
            Click Me
        </Button>
    );
};
```

## 3. Handling Missing Pages
If a target page is not yet implemented:
1. Link to `#` for a safe non-breaking behavior.
2. Or link to a `PagePlaceholder` if available.

## 4. Verification
- Click every button in the section.
- Verify the URL changes correctly.
- Ensure the page scrolls to top (using `ScrollToTop` component).
