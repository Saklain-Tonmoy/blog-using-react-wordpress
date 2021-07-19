# Features
* CRUD operation with WordPress REST API
* Authentication with JWT ( Login Logout )
* Accessing public and private routes
* Handing WordPress REST API custom end points.
* Creating Dashboard with React for CRUD operation.

# Installation
Clone this repo in git clone https://github.com/Saklain-Tonmoy/blog-using-react-wordpress.git

git checkout branchname

Run npm install


# Configure
Add your wordPress siteUrl in src/client-config.js

const clientConfig = {
	siteUrl: 'http://localhost:8888/wordpress'
};

export default clientConfig;
