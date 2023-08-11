module.exports = {
    apps: [
      {
        name: 'nuxt-app',        // Change this to your application's name
        script: 'npm',           // Use npm to start the application
        args: 'start',           // The npm script to execute (in your package.json)
        cwd: '/home/ubuntu/app/kinu_website_provider',  // Change this to the path of your Nuxt.js application
        watch: false,            // Set to true if you want PM2 to watch for changes and restart the app
        instances: 1,            // Number of instances to run (usually set to 1 for most applications)
        autorestart: true,
        max_memory_restart: '1G', // Restart the app if it exceeds 1GB of memory
      },
    ],
  };
  

  