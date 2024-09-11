# Use latest Node lts version (20.16.0)
FROM node:20.16.0

# Set the working directory inside the container
WORKDIR /app

# Copy the package and package-lock JSON files
COPY package*.json ./

# Set Node environment to development to install dev dependencies (this is necessary to compile TypeScript)
ENV NODE_ENV=development

# Install dependencies
RUN npm install

# Copy rest of application code
COPY . .

# Compile TypeScript to dist
RUN npm run build

# Set Node environment to production
ENV NODE_ENV=production

# Remove development dependencies
RUN rm -rf src tsconfig.json && npm prune --production

# Define command to execute program
CMD ["node","dist/app.js"]