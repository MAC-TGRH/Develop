# TGRH Full MVP (Frontend + Backend)

This package contains a ready-to-deploy frontend (React + Vite) and backend (Node + Express + Sequelize) for the TGRH MVP.
Fill in your secrets in Render environment variables before deploying:

Backend env vars (Render):
  - DATABASE_URL
  - JWT_SECRET
  - CLOUDINARY_CLOUD_NAME
  - CLOUDINARY_API_KEY
  - CLOUDINARY_API_SECRET
  - STRIPE_SECRET_KEY
  - NODE_VERSION=20.10.0

Frontend env vars (Render):
  - VITE_API_URL=https://<your-backend>/api
  - NODE_VERSION=20.10.0

Deploy instructions are in the README.md
