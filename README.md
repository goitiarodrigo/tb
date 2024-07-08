# Toolbox

Challenge toolbox.

## Technologies Used / Tecnologías Usadas

- ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
- ![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
- ![Mocha](https://img.shields.io/badge/Mocha-8D6748?logo=mocha&logoColor=white)
- ![Chai](https://img.shields.io/badge/Chai-A30701?logo=chai&logoColor=white)
- ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)
- ![Redux](https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=white)
- ![React-Bootstrap](https://img.shields.io/badge/React--Bootstrap-7952B3?logo=bootstrap&logoColor=white)
- ![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)

### Table of Contents

1. [Project Structure](#project-structure)
2. [Getting Started](#getting-started)
3. [Backend](#backend)
   1. [Installation Backend](#installation-b)
   2. [Running backend](#running-backend)
4. [Frontend](#frontend)
    1. [Installation Frontend](#installation-f)
    2. [Running frontend](#running-frontend)
3. [Scripts](#scripts)
    1. [Linting and Formatting](#linting-and-formatting)
    2. [Run Linting Backend](#run-linting-backend)
    3. [Run Linting Frontend](#run-linting-frontend)
4. [Docker](#docker)
   1. [Docker backend](#docker-backend)
   2. [Docker frontend](#docker-frontend)
5. [Swagger](#swagger)

## Project Structure
- **api**: Contains the backend code (Node.js with Express).
- **client**: Contains the frontend code (React).

## Getting Started

1. Clone the repository:

    ```
    git clone https://github.com/goitiarodrigo/tb.git
    cd tb
    ```

## Backend

Make sure you have the following installed on your machine:

- Node.js (v14)

#### Installation B

-. Install dependencies for backend ``FROM TB FOLDER``:
     
- **Run install**:
    ```
    cd api && npm install
    ```
    
#### Running backend

Start the backend server ``FROM API FOLDER``:

- **Development mode**:

    ```
    npm run start:dev
    ```

- **Production mode**:

    ```
    npm start
    ```

- **Run tests**:

    ```
    npm test
    ```

## Frontend

Make sure you have the following installed on your machine:

- Node.js (v16)

#### Installation F

-. Install dependencies for frontend ``FROM TB FOLDER``:
     
- **Run install**:
    ```
    cd client && npm install
    ```

#### Running Frontend

Start the frontend development server:

- **Development mode**:

    ```
    cd client
    npm start
    ```

- **Build for production**:

    ```
    cd client
    npm run build
    ```

## Scripts

##### Linting and Formatting

Run linting and formatting scripts to ensure code quality and consistency:

- **Run linting and formatting**:

##### Run Linting Backend

```
cd api
npm run lint
npm run lint:fix
npm run format
```

##### Run Linting Frontend

```
cd client
npm run lint
npm run lint:fix
npm run format
```

## Swagger

- To see the documentation in Swagger you can go to http://localhost:8080/api-docs/#/

## Docker

#### Building and Running with Docker

##### Docker Backend

1. Build the Docker image for the backend ``FROM TB FOLDER``:

    ```
    cd api
    docker build -t toolbox-backend .
    ```

2. Run the Docker container for the backend:

    ```
    docker run -p 8080:8080 toolbox-backend
    ```

##### Docker Frontend

1. Build the Docker image for the frontend ``FROM TB FOLDER``:

    ```
    cd client
    docker build -t toolbox-frontend .
    ```

2. Run the Docker container for the frontend:

    ```
    docker run -p 3000:3000 toolbox-frontend
    ```

This section assumes that you have Docker installed on your machine. If you don't have Docker, you can download and install it from [here](https://www.docker.com/products/docker-desktop).

