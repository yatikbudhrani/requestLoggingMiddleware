# Request Logging Middleware

## Overview

In this project, I have developed a Node.js application using Express and created a middleware function for logging details about incoming requests. This middleware will capture essential information such as the request method, URL, IP address, and timestamps, providing insights into the traffic received by the application.

## Installation

1. Clone the repository:

   ```bash
   git clone `https://github.com/yatikbudhrani/requestLoggingMiddleware.git`
   ```

2. Navigate to the project directory:

   ```bash
   cd requestLoggingMiddleware
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   node index.js
   ```

5. The server will run on `http://localhost:3000`.

6. You can check log in aap.log file in the logs folder.

## Testing

You can test the API using Postman or curl:

- **Postman**: Make a GET request to `http://localhost:3000/` or `http://localhost:3000/xyz`
- **Curl**:
  ```bash
  curl http://localhost:3000/
  ```

## Challenges

### 1. Setting Up the Project

**Challenge:** The initial setup of a new Node.js project and installation of dependencies was straightforward but required attention to detail to ensure that all packages were correctly installed.

**Details:**

- Ensuring compatibility between the versions of Node.js, Express, and other dependencies.
- Proper configuration of `package.json` for managing dependencies.

### 2. Creating Custom Middleware

**Challenge:** Designing and implementing the custom middleware function, `requestLogger`, posed several challenges.

**Details:**

- Deciding the format and content of the log entries (e.g., choosing between JSON and plain text).
- Handling asynchronous aspects of middleware if needed for more complex logging.

### 3. Capturing and Formatting Request Details

**Challenge:** Extracting and formatting request details such as method, URL, IP address, and timestamps required careful attention.

**Details:**

- Correctly capturing the IP address from the request object, especially when dealing with proxies or load balancers.
- Formatting timestamps in a readable and consistent manner.

### 4. Integration of Middleware

**Challenge:** Integrating the `requestLogger` middleware globally in the Express application posed challenges in terms of ensuring it was applied to all routes and properly executed.

**Details:**

- Ensuring middleware is applied in the correct order in the middleware stack.
- Verifying that the middleware logs details for all incoming requests, including those handled by other middleware or route handlers.

### 5. Using Logging Libraries

**Challenge:** Deciding whether to use a logging library like Morgan for advanced features or stick with basic logging using `console.log`.

**Details:**

- Weighing the benefits of using Morgan, such as pre-defined formats and integration with other logging tools, versus the simplicity of custom logging.
- Configuring Morgan or other libraries to meet specific logging requirements and ensuring compatibility with the rest of the application.

### 6. Implementing Logging Levels

**Challenge:** Exploring and implementing different logging levels (e.g., info, debug) to control verbosity added complexity.

**Details:**

- Determining the appropriate logging levels and their use cases.
- Configuring middleware or libraries to handle different logging levels effectively.

### 7. Testing and Debugging

**Challenge:** Testing the middleware to ensure it functions correctly across various scenarios and debugging issues that arose during implementation.

**Details:**

- Testing the middleware with different types of requests and ensuring consistency in log output.
- Debugging issues related to missing or incorrectly formatted log entries.

## Conclusion

The process of implementing request logging middleware in Node.js with Express was an enlightening experience, highlighting both the challenges and the importance of proper logging in web applications. Understanding middleware and logging mechanisms not only enhances application development but also improves the ability to monitor and maintain web applications effectively.
