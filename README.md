# Go Fullstack Project with Docker

This is a full-stack project built with a Go backend and Dockerized for easy setup and deployment.

## Getting Started

Follow the instructions below to clone the repository, set it up, and run the project using Docker.

### Prerequisites

Ensure you have Docker installed on your machine. You can download and install Docker from [here](https://www.docker.com/get-started).

### Installation

1. Clone the repository to your local machine by running the following command in your terminal:

   ```bash
   git clone https://github.com/Kaustubhhub/go-fullstack_docker
   ```

2. Navigate to the project directory:

   ```bash
   cd go-fullstack_docker
   ```

3. Start the application using Docker Compose:

   ```bash
   docker compose up -d nextapp
   ```

   This command will build and run the Docker containers for the project.

### Access the Application

Once the containers are up and running, you can access the application by opening your browser and navigating to:

```
http://localhost:3000
```

### Stopping the Application

To stop the application, run:

```bash
docker compose down
```

### Contributing

Feel free to fork the repository and make contributions via pull requests.

### License

This project is licensed under the MIT License.

---

Enjoy coding! 😎
