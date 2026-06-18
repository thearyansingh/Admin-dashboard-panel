FROM node:20-alpine

WORKDIR /app

# Copy package configurations
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source code
COPY . .

# Expose backend port
EXPOSE 5000

# Set Node environment to production
ENV NODE_ENV=production

# Start the application
CMD ["node", "index.js"]
