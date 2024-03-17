# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
# Use npm start to run the application
CMD ["npm", "start"]
# Expose port 3000 for the application
EXPOSE 3000
