FROM arm32v7/node:18.15.0

WORKDIR /app
ENV NODE_ENV production

# Copy package.json, package-lock.json and yarn.lock
COPY package*.json ./
COPY yarn.lock ./

# .env.local 환경변수 셋팅
RUN echo "API_KEY=${API_KEY}" > .env.local

# Install dependencies
RUN yarn install

# Copy the rest of your app's source code
COPY . .

# Build your app
RUN yarn build

# Expose the port (if any)
EXPOSE 3000
ENV PORT 3000

# Define the command that should be executed
CMD ["yarn", "start"]
