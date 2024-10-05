# Personal Website

This is my personal website built with Next.js and TypeScript. It showcases my projects, resume, skills, bio, games, and blog posts.
You can clone this repo and use it as a template for your own personal website.

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Ant Design](https://ant.design/) - UI component library
- [Framer Motion](https://www.framer.com/motion/) - Animation library for React
- [Three.js](https://threejs.org/) - 3D graphics library for JavaScript
- [Konva](https://konvajs.org/) - HTML5 Canvas JavaScript framework
- [next-seo](https://github.com/garmeeh/next-seo) - SEO management for Next.js

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (v14.0.0 or later)
- [pnpm](https://pnpm.io/) (v6.0.0 or later)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. Install the dependencies:
   ```bash
   pnpm install
   ```

## Getting Started

To run the development server:

```bash
pnpm dev
```

Open [http://localhost:420](http://localhost:420) with your browser to see the result.

## Available Scripts

In the project directory, you can run:

- `pnpm dev` - Runs the app in development mode on port 420
- `pnpm build` - Builds the app for production
- `pnpm start` - Runs the built app in production mode on port 420
- `pnpm lint` - Runs the linter to check for code style issues

## Project Structure

- `app/` - Contains the main application code (Next.js App Router)
  - `components/` - Reusable React components
  - `layout.tsx` - Root layout component
  - `page.tsx` - Home page component
- `public/` - Static assets

## Deployment to GitHub Pages

This project is set up for automatic deployment to GitHub Pages using GitHub Actions. Here's how it works:

1. Push your changes to the `main` branch.
2. GitHub Actions will automatically build and deploy your site.
3. Your site will be available at `https://ithihasmadala.github.io/`

To set this up for your own repository:

1. Go to your repository settings on GitHub.
2. Navigate to the "Pages" section.
3. Ensure that the "Source" is set to "Deploy from a branch" and the branch is set to `main`.
4. Save your changes.

Now, every time you push to `main`, your site will be automatically deployed.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Ant Design Documentation](https://ant.design/docs/react/introduce)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Three.js Documentation](https://threejs.org/docs/)
- [Konva Documentation](https://konvajs.org/docs/)
- [next-seo Documentation](https://github.com/garmeeh/next-seo#readme)

## Contact

If you have any questions or feedback, please reach out to [helloithihas@gmail.com](mailto:helloithihas@gmail.com).
