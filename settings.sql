-- settings.sql
CREATE DATABASE salessage;
CREATE USER salessageuser WITH PASSWORD 'sales';
GRANT ALL PRIVILEGES ON DATABASE salessage TO salessageuser;