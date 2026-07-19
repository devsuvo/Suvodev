# Portfolio Website - HTML/Tailwind CSS/JavaScript

A modern, responsive portfolio website built with pure HTML, Tailwind CSS, and JavaScript. Complete with hero section, skills showcase, featured projects, testimonials, and more!

## 📁 Project Structure

```
├── index.html          # Home page with hero, skills, services, projects, testimonials
├── about.html          # About page
├── services.html       # Services page
├── skills.html         # Skills showcase
├── work.html           # Portfolio/Projects
├── contact.html        # Contact form
├── css/
│   └── style.css       # Custom styles
├── js/
│   └── components.js   # Reusable Header & Footer components
├── README.md           # This file
├── CUSTOMIZE.md        # Detailed customization guide (বাংলায়)
└── public/             # For your own images (optional)
```

## ✨ Features

### Homepage Sections
1. **Hero Section** - Eye-catching introduction with CTA buttons
2. **Skill Architecture** - Showcase your technical skills with progress bars
3. **Special Services** - 8 service cards highlighting your expertise
4. **Featured Projects** - 4 project showcases with images and tech stack
5. **Testimonials** - Client reviews with ratings
6. **Call-to-Action** - Conversion section for projects

### General Features
- **Reusable Header & Footer**: Used across all pages via JavaScript components
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Dark Theme with Blue Accents**: Modern and professional look
- **Smooth Transitions**: Hover effects and smooth animations
- **Mobile Menu**: Hamburger menu for mobile devices
- **Web Images**: Uses placeholder images from Unsplash

## 🚀 Getting Started

### Option 1: Open in Browser (Simple)
1. Open `index.html` in your web browser
2. All pages are linked together via the header and footer navigation

### Option 2: Use Live Server (Recommended)
If you have VS Code:
1. Install the "Live Server" extension
2. Right-click on `index.html` → "Open with Live Server"
3. The site will open at `http://localhost:5500`

## 📝 How to Customize

### Quick Start
1. Open `CUSTOMIZE.md` for detailed step-by-step instructions (in Bengali)
2. Each file has comments showing what to change

### Basic Changes
- **Your Name**: Search "SUVO" in `index.html` and replace
- **Your Title**: Find "Web Developer" and change it
- **Statistics**: Update "7+", "110+", "99%" with your numbers
- **Profile Image**: Replace the image URL in hero section
- **Description**: Update the paragraphs about yourself

### Adding New Sections
1. Copy an existing section (e.g., from another page)
2. Paste it into your HTML file
3. Customize the content
4. Header & Footer will appear automatically!

## 🎨 Customization Levels

### Level 1: Easy (Text Only)
- Change names, titles, descriptions
- Update statistics and testimonials

### Level 2: Medium (Images & Links)
- Replace image URLs
- Update social media links
- Change button links and text

### Level 3: Advanced (Structure Changes)
- Add new service cards
- Create new sections
- Customize colors and styling

## 🖼️ Changing Images

All images use Unsplash URLs. Find and replace:
```html
<img src="https://images.unsplash.com/photo-XXXXXXXXX?w=500&h=600&fit=crop" />
```

**Free Image Sources:**
- Unsplash: https://unsplash.com
- Pexels: https://pexels.com
- Pixabay: https://pixabay.com

## 🎨 Colors

**Primary Colors:**
- Indigo-500: `#6366f1` (main accent)
- Slate-950: `#0f172a` (background)
- Slate-800: `#1e293b` (cards)

**Change colors using Tailwind classes:**
- From: `text-indigo-500` 
- To: `text-blue-500`, `text-purple-500`, `text-pink-500`, etc.

## 📁 Homepage Section Details

### 1. Hero Section
- Introduction and main CTA
- Statistics (7+, 110+, 99%)
- Profile image with badge

### 2. Skill Architecture
- 3 main skill categories
- Progress bars showing proficiency
- Sub-skills in two columns

### 3. Services
- 8 service cards in a grid
- Each with emoji, title, and description
- Hover effects for interactivity

### 4. Featured Projects
- 4 project cards with images
- Project description and tech stack
- Hover effects and links

### 5. Testimonials
- 3 client reviews with 5-star ratings
- Client names and titles
- Client profile images

### 6. Call-to-Action
- Large banner with primary message
- Two button options
- Gradient background

## 📱 Browser Support

Works on:
- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (all)

## 🔧 File Editing Tips

- **To replace text**: Use Ctrl+H (Find and Replace) in your editor
- **To find all images**: Search for "unsplash.com"
- **To find email**: Search for "sddev960@gmail.com"
- **To find phone**: Search for "+880160172103"

## 📦 Dependencies

- **Tailwind CSS**: Loaded from CDN (no installation needed)
- **Fonts**: System fonts (no additional setup needed)
- **JavaScript**: Plain JavaScript only (no frameworks)

## 🚀 Deployment Options

### Easy Deployment
1. **Netlify**: Drag and drop your folder
2. **Vercel**: Connect to Git repository
3. **GitHub Pages**: Upload to gh-pages branch
4. **Hosting Providers**: Any web hosting service

### Domain Name
Connect a custom domain through your hosting provider.

## 📚 File Descriptions

| File | Purpose |
|------|---------|
| `index.html` | Main homepage with all sections |
| `about.html` | About you and your background |
| `services.html` | List of services you offer |
| `skills.html` | Technical skills by category |
| `work.html` | Portfolio of your projects |
| `contact.html` | Contact form and information |
| `css/style.css` | Custom CSS styling |
| `js/components.js` | Reusable header/footer code |
| `CUSTOMIZE.md` | Detailed customization guide |

## ❓ FAQ

**Q: How do I add a new service?**
A: Open `services.html`, copy a service card, and modify the text and emoji.

**Q: How do I change the color scheme?**
A: Replace `indigo-500` with another color like `blue-500`, `purple-500`, etc.

**Q: Can I add more projects?**
A: Yes! Open `work.html` and copy the project card structure.

**Q: How do I add social media links?**
A: Update the links in `js/components.js` in the footer section.

## 🎯 Next Steps

1. **Read CUSTOMIZE.md** - Detailed Bengali guide for all changes
2. **Update your information** - Name, title, description
3. **Add your projects** - Show your best work
4. **Get a domain** - Make it professional
5. **Deploy** - Make it live on the internet

---

**For detailed customization instructions, see CUSTOMIZE.md (in Bengali) 📝**

**Happy building! 🎉**
