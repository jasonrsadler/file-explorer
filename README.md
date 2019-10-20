# Kraken File Explorer Assessment

## Summary

This is a solution for uploading and managing documents for Kraken Assessment. Use cases implement uploading documents, viewing previously uploaded documents, and deleting previously uploaded documents.

## Quick Start

To start:

```
cd server
composer install
php artisan serve

cd ../client
npm install
npm start
```

By default, Laravel server will run at [http://localhost:8000](http://localhost:8000) and React app will run at [http://localhost:3000](http://localhost:3000).

## Laravel Disclaimer

This is the first time I've done anything with Laravel, so much research was placed on fundamentals and best practices. No expertise in Laravel should be assumed on my part but would hope to allow it to show versatility and ease in learning new languages/frameworks quickly.

## API Keys

'Dummy' API keys have been set in `server/.env` and also in `client/.env`. Under normal security practices, these files would never be checked in, but are provided here for convenience in running the application.

## Implementations

### Requirements From Description

I have used a PHP framework, Laravel for back end implementation. React has been used for the front end. Common security practices (escaping user input, API Authorization) have been implemented. 

### 'Nice To Haves' From Description

In addition to the requirements. Implemented Redux state management. Documents are searchable by name and type. Finally and obviously, Git was used for version control.
