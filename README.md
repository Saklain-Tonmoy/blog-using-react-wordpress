# Features
CRUD operation with WordPress REST API
Authentication with JWT ( Login Logout )
Accessing public and private routes
Handing WordPress REST API custom end points.
Creating Dashboard with React for CRUD operation.

# Installation
Clone this repo in git clone https://github.com/imranhsayed/react-with-wordpress

git checkout branchname

Run npm install

# Add REST API ENDPOINTS WordPress Plugin
Clone the REST API ENDPOINTS plugin in your WordPress plugin directory.
git clone git@github.com:imranhsayed/rest-api-endpoints.git

# Configure
Add your wordPress siteUrl in src/client-config.js

const clientConfig = {
	siteUrl: 'http://localhost:8888/wordpress'
};

export default clientConfig;
