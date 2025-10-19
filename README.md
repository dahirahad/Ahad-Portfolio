# Abdul Ahad - MERN Stack Developer Portfolio

A modern, responsive portfolio website built with React.js and Tailwind CSS, showcasing professional experience, skills, and blog content.

## 🚀 Features

### Core Sections
- **Header/Navbar**: Responsive navigation with smooth scrolling
- **Home Section**: Profile picture, introduction, and call-to-action buttons
- **Background & Journey**: Personal story with visual elements and skills showcase
- **Experience**: Timeline-style experience and education display
- **Books**: Recommended reading with ratings and descriptions
- **Blog**: Dynamic blog system with easy content management
- **Footer**: Contact information and social media links

### Technical Features
- **Dark/Light Mode Toggle**: Theme switching with local storage persistence
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Hover effects and transitions using Framer Motion
- **Component-Based Architecture**: Reusable React components
- **Modern UI/UX**: Clean, professional design with accessibility features

## 🛠️ Technologies Used

- **Frontend**: React.js 18, Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Build Tool**: Create React App
- **Styling**: Tailwind CSS with custom components

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ahad-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation component
│   ├── Home.js            # Home section with profile
│   ├── Background.js      # Journey and background story
│   ├── Experience.js      # Timeline experience display
│   ├── Books.js           # Book recommendations
│   ├── Blog.js            # Blog system with CRUD
│   ├── Footer.js          # Footer with social links
│   └── ThemeToggle.js     # Dark/light mode toggle
├── App.js                 # Main application component
├── index.js               # Application entry point
└── index.css              # Global styles and Tailwind imports
```

## 🎨 Customization

### Personal Information
Update the following files to customize your portfolio:

- **Profile Picture**: Replace the image URL in `Home.js`
- **Personal Details**: Update name, location, and bio in `Home.js`
- **Experience**: Modify work history in `Experience.js`
- **Books**: Update book recommendations in `Books.js`
- **Social Links**: Update social media URLs in `Home.js` and `Footer.js`

### Styling
- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Typography**: Update font sizes and weights in component files
- **Layout**: Adjust spacing and grid layouts using Tailwind classes

### Content Management
- **Blog Posts**: Use the "Add New Blog" form in the Blog section
- **Experience**: Update the experiences array in `Experience.js`
- **Skills**: Modify the skills arrays in `Experience.js`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

- Toggle between light and dark themes
- Theme preference is saved in localStorage
- Automatic theme detection based on system preference

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in your project directory
3. Follow the prompts

## 📝 Adding New Content

### New Blog Post
1. Click "Add New Blog" in the Blog section
2. Fill in the form with title, excerpt, category, and tags
3. Submit to add the blog post

### New Experience
1. Edit the `experiences` array in `Experience.js`
2. Add new experience objects with required fields
3. The timeline will automatically update

### New Book
1. Edit the `books` array in `Books.js`
2. Add new book objects with required fields
3. The grid will automatically update

## 🔧 Development

### Available Scripts
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

### Code Style
- Use functional components with hooks
- Follow React best practices
- Use Tailwind CSS utility classes
- Maintain component reusability

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Name**: Abdul Ahad
- **Role**: MERN Stack Developer
- **Location**: Pakistan
- **Email**: contact@abdul-ahad.com

---

Built with ❤️ using React.js and Tailwind CSS

