# IMAGE RESIZER

## Introduction

##### Image Resizer is a simple API used to resize image and store the resized image to a new folder, developed with NodeJS (Express framework) and Sharp library.

## Getting Started

##### To run this project, you need to have an code editor (VSCode is suggested) and install some prequesites and dependencies, Node.js is required. If your machine has not install Node.js, you can download it at the official website: [Download Node.js](https://nodejs.org/en)

### Installation

1. Create a directory
   `mkdir your-repo-name`
   `cd your-repo-name`
2. Clone the repo from GitHub
   `git clone https://github.com/quangthanh1995/image-resizer.git`
3. Go to image-resizer project and open VSCode
   `cd image-resizer`
   `code .`
4. Install node_modules
   `npm install`
5. Run project with development environment
   `npm run start`
6. Run project with production environment
   `npm run build`
   `node dist/.`
7. Run test
   `npm run test`
8. Run lint
   `npm run lint`
9. Run prettier
   `npm run prettier`

### Quick Start

1. After run the command `npm run start`, let's open the browser and type this URL [http://localhost:3000/api/images?filename=fjord&width=400&height=400](http://localhost:3000/api/images?filename=fjord&width=400&height=400) to resize the image named **fjord** to **width** 400 and **height** 400.

2. You can resize the image to different sizes by edit the query of **width** and **height**, for example, if you want the image have the **height** 800, just edit the query like this [http://localhost:3000/api/images?filename=fjord&width=400&height=800](http://localhost:3000/api/images?filename=fjord&width=400&height=800).

3. You can resize other images by edit the query of **filename**, for example, if you want to resize the image named **icelandwaterfall**, just edit the query like this [http://localhost:3000/api/images?filename=icelandwaterfall&width=400&height=400](http://localhost:3000/api/images?filename=icelandwaterfall&width=400&height=400).

4. There are already 5 photos in the folder named **source-images** that you can choose to resize: **encenadaport**, **fjord**, **icelandwaterfall**, **palmtunnel**, **santamonica**.

5. The resized images will be stored in the folder named **resized-images**.

6. If you enter the **wrong query**, the page will show **error message**. You need to check the query and correct it.
