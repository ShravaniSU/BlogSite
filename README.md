# 🌐 Static Site Deployment using Nginx

This project demonstrates how to deploy a static website using a Linux server and Nginx. The goal was to understand the fundamentals of web servers, file transfers, and deployment workflows.

This project is based on the roadmap.sh challenge:
👉 https://roadmap.sh/projects/static-site-server

---

## 🚀 Project Overview

Initially, the application was deployed on a remote Linux server using **Nginx**. The process involved building a static frontend application and serving it through a web server.

The project helped in understanding:

* How web servers like Nginx work
* How static websites are served
* How to deploy files to a remote server
* Basic DevOps concepts like automation and deployment

---

## 🛠️ Tech Stack

* React (Vite)
* Nginx
* Linux (Ubuntu)
* rsync
* SSH

---

## ⚙️ Setup & Deployment Process

### 1. Build the Application

The React app was built into static files:

```bash
npm run build
```

This generates a `dist/` folder containing HTML, CSS, and JavaScript.

---

### 2. Server Setup

* A remote Linux server was provisioned
* Nginx was installed and started
* Default web directory used:

  ```
  /var/www/html
  ```

---

### 3. File Transfer using rsync

The static files were transferred from the local machine to the server:

```bash
rsync -avz -e "ssh -i <key.pem>" dist/ ubuntu@<server-ip>:/tmp
```

---

### 4. Deploy to Nginx

Files were moved to the Nginx root directory:

```bash
sudo rm -rf /var/www/html/*
sudo cp -r /tmp/* /var/www/html/
sudo systemctl restart nginx
```

---

### 5. Access the Application

The website was accessible via the server’s public IP:

```
http://<server-ip>
```

---

## 🔄 Deployment Automation

A simple deployment script (`deploy.sh`) was created to automate:

* Building the project
* Syncing files to the server
* Updating the Nginx directory
* Restarting the server

This reduces manual effort and simulates a basic CI/CD workflow.

---

## 📚 Key Learnings

* Understanding how Nginx serves static files
* Working with Linux servers over SSH
* Using rsync for efficient file transfer
* Managing deployment workflows manually
* Building a foundation for CI/CD concepts

---

## 📌 Conclusion

This project provided hands-on experience with real-world deployment concepts. Starting with a manual Nginx-based setup helped in building a strong foundation before moving to more automated deployment solutions.

---