# Use Nginx Alpine as the base image
FROM nginx:alpine

# Install Node.js and npm for building the Vite project
RUN apk add --no-cache nodejs npm

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the Vite project (outputs to /app/dist by default)
RUN npm run build

# Copy the built static files to Nginx's default directory
RUN cp -r /app/dist/* /usr/share/nginx/html

# Clean up Node.js and npm to reduce image size
RUN apk del nodejs npm && rm -rf /app

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx (default command for the Nginx image)
CMD ["nginx", "-g", "daemon off;"]
