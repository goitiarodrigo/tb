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

## Language / Idioma

- [English](#english)
- [Español](#español)

## English

### Table of Contents

1. [Project Structure](#project-structure)
2. [Getting Started](#getting-started)
    1. [Prerequisites](#prerequisites)
    2. [Installation](#installation)
3. [Scripts](#scripts)
    1. [Linting and Formatting](#linting-and-formatting)
    2. [Running the Backend](#running-the-backend)
    3. [Running the Frontend](#running-the-frontend)
4. [Docker](#docker)

### Project Structure
- **api**: Contains the backend code (Node.js with Express).
- **client**: Contains the frontend code (React).

### Getting Started

#### Prerequisites

Make sure you have the following installed on your machine:

##### Backend
- Node.js (v14)
  
##### Frontend
- Node.js (v16)

#### Installation

1. Clone the repository:

    ```
    git clone https://github.com/goitiarodrigo/tb.git
    cd tb
    ```

2. Install dependencies for both frontend and backend:

    ```
    npm install
    cd api && npm install
    cd ../client && npm install
    ```

### Scripts

#### Linting and Formatting

Run linting and formatting scripts to ensure code quality and consistency.

- **Run all linting scripts**:

    ```
    npm run lint
    ```

- **Run all lint fixing scripts**:

    ```
    npm run lint:fix
    ```

- **Run all formatting scripts**:

    ```
    npm run format
    ```

#### Running the Backend

Start the backend server:

- **Development mode**:

    ```
    cd api
    npm run start:dev
    ```

- **Production mode**:

    ```
    cd api
    npm start
    ```

- **Run tests**:

    ```
    cd api
    npm test
    ```

#### Running the Frontend

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

### Docker

#### Building and Running with Docker

##### Backend

1. Build the Docker image for the backend:

    ```
    cd api
    docker build -t toolbox-backend .
    ```

2. Run the Docker container for the backend:

    ```
    docker run -p 8080:8080 toolbox-backend
    ```

##### Frontend

1. Build the Docker image for the frontend:

    ```
    cd client
    docker build -t toolbox-frontend .
    ```

2. Run the Docker container for the frontend:

    ```
    docker run -p 3000:3000 toolbox-frontend
    ```

This section assumes that you have Docker installed on your machine. If you don't have Docker, you can download and install it from [here](https://www.docker.com/products/docker-desktop).

## Español

### Tabla de Contenidos

1. [Estructura del Proyecto](#estructura-del-proyecto)
2. [Comenzando](#comenzando)
    1. [Prerrequisitos](#prerrequisitos)
    2. [Instalación](#instalación)
3. [Scripts](#scripts)
    1. [Linting y Formateo](#linting-y-formateo)
    2. [Ejecutando el Backend](#ejecutando-el-backend)
    3. [Ejecutando el Frontend](#ejecutando-el-frontend)
4. [Docker](#docker-1)

### Estructura del Proyecto
- **api**: Contiene el código del backend (Node.js con Express).
- **client**: Contiene el código del frontend (React).

### Comenzando

#### Prerrequisitos

Asegúrate de tener lo siguiente instalado en tu máquina:

##### Backend
- Node.js (v14)
  
##### Frontend
- Node.js (v16)

#### Instalación

1. Clona el repositorio:

    ```
    git clone https://github.com/goitiarodrigo/tb.git
    cd tb
    ```

2. Instala las dependencias para el frontend y el backend:

    ```
    npm install
    cd api && npm install
    cd ../client && npm install
    ```

### Scripts

#### Linting y Formateo

Ejecuta scripts de linting y formateo para asegurar la calidad y consistencia del código.

- **Ejecutar todos los scripts de linting**:

    ```
    npm run lint
    ```

- **Ejecutar todos los scripts de corrección de linting**:

    ```
    npm run lint:fix
    ```

- **Ejecutar todos los scripts de formateo**:

    ```
    npm run format
    ```

#### Ejecutando el Backend

Inicia el servidor del backend:

- **Modo desarrollo**:

    ```
    cd api
    npm run start:dev
    ```

- **Modo producción**:

    ```
    cd api
    npm start
    ```

- **Ejecutar pruebas**:

    ```
    cd api
    npm test
    ```

#### Ejecutando el Frontend

Inicia el servidor de desarrollo del frontend:

- **Modo desarrollo**:

    ```
    cd client
    npm start
    ```

- **Construir para producción**:

    ```
    cd client
    npm run build
    ```

### Docker

#### Construyendo y Ejecutando con Docker

##### Backend

1. Construir la imagen de Docker para el backend:

    ```
    cd api
    docker build -t toolbox-backend .
    ```

2. Ejecutar el contenedor de Docker para el backend:

    ```
    docker run -p 8080:8080 toolbox-backend
    ```

##### Frontend

1. Construir la imagen de Docker para el frontend:

    ```
    cd client
    docker build -t toolbox-frontend .
    ```

2. Ejecutar el contenedor de Docker para el frontend:

    ```
    docker run -p 3000:3000 toolbox-frontend
    ```

Esta sección asume que tienes Docker instalado en tu máquina. Si no tienes Docker, puedes descargarlo e instalarlo desde [aquí](https://www.docker.com/products/docker-desktop).
