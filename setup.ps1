# Create Next.js project with TypeScript
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-git --use-npm

# Install additional dependencies
npm install @headlessui/react @heroicons/react framer-motion clsx @tailwindcss/typography react-intersection-observer

# Create necessary directories
mkdir -p public/images
mkdir -p src/components
mkdir -p src/lib
mkdir -p src/types

# Copy existing files to their locations
# Note: This assumes the files are already created in their correct locations

# Install development dependencies
npm install -D prettier

# Build the project
npm run build 