# Stage 1: Build frontend (if you have one)
FROM node:18 AS frontend-build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the app (optional if frontend needs build)
RUN npm run build || echo "No build script, skipping"

# Stage 2: Run the app
FROM node:18

WORKDIR /app

# Copy only what’s needed from previous stage
COPY --from=frontend-build /app ./

# Expose the port your Node.js app listens on
EXPOSE 3000

# Default command
CMD ["npm", "start"]
