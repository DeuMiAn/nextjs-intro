FROM arm32v7/node:18.15.0

WORKDIR /app
ENV NODE_ENV production

# Copy package.json and package-lock.json
COPY package*.json ./



# Copy the rest of your app's source code
COPY . .

# Build your app
RUN yarn build

# Expose the port (if any)
EXPOSE 3000
ENV PORT 3000

# Define the command that should be executed
CMD ["yarn", "start"]