# ALBUM COVERS

A brief description of what this project does and who it's for
it takes in input from a form and displays it on the landing page, its for people looking for album covers to use


## Deployment

To deploy this application, you can follow these steps:

1. **Host the Frontend**:
   - You can use platforms like [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/) to host the `index.html`, `styles.css`, and `index.js` files.
   - Simply drag and drop your project folder to the hosting service, or follow their instructions for GitHub integration.

2. **Host the JSON Server**:
   - For production, consider using a hosted solution for your JSON data, like [Heroku](https://www.heroku.com/) or [Render](https://render.com/), to set up a JSON server.
   - Alternatively, you can use [Mockoon](https://mockoon.com/) for local development or deploy a simple Node.js server to serve your JSON data.

3. **Update the API Endpoint**:
   - Make sure to update the API endpoint in `index.js` to point to your hosted JSON server.



## Author

- [@BrianGacheru8](https://github.com/BrianGacheru8)


## Run Locally
To run the project locally:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/BrianGacheru8/Single-Page-Application-SPA-.git
    cd Single-Page-Application-SPA-
    ```

2. **Set up JSON Server**:
   - Install JSON Server globally if you haven't already:
     ```bash
     npm install -g json-server
     ```
   - Start the JSON Server:
     ```bash
     json-server --watch db.json --port 3000
     ```

3. **Open `index.html`** in a web browser. 
   - You may use a local server (like Live Server in VSCode) for testing.

