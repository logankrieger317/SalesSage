-- settings.sql
CREATE DATABASE SalesSage;
CREATE USER SalesSageUser WITH PASSWORD 'sales';
GRANT ALL PRIVILEGES ON DATABASE SalesSage TO SalesSageUser;