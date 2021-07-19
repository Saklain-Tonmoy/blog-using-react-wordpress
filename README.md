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
	siteUrl: 'http://blog.global-marketing.ca'
};

export default clientConfig;

# login-with-jwt-wordpress-plugin
A React App where you can login using the endpoint provided by JWT Authentication for WP-API WordPress Plugin. So you need to have this plugin installed on WordPress. The plugin's endpoint returns the user object and a jwt-token on success, which we can then store in localstorage and login the user on front React Application

# Steps
You need to install and activate JWT Authentication for WP REST API plugin on you WordPress site
Then you need to configure it by adding these:
i. Add the last three lines in your WordPress .htaccess file as shown:

```
# BEGIN WordPress
   <IfModule mod_rewrite.c>
   RewriteEngine On
   RewriteBase /wordpress/
   RewriteRule ^index\.php$ - [L]
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /wordpress/index.php [L]
   
   
   RewriteCond %{HTTP:Authorization} ^(.*)
   RewriteRule ^(.*) - [E=HTTP_AUTHORIZATION:%1]
   SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1
   
   </IfModule>
```
   
ii. Add the following in your wp-config.php Wordpress file. You can choose your own secret key.

define('JWT_AUTH_SECRET_KEY', '&BZd]N-ghz|hbH`=%~a5z(`mR=n%7#8-Iz@KoqtDhQ6(8h$og%-IbI#>N*T`s9Dg');
define('JWT_AUTH_CORS_ENABLE', true);

iii. Now you can make a request to /wp-json/jwt-auth/v1/token REST API provided by the plugin. You need to pass username and password and it returns a user object and token . You can save the token in localstorage and send it in the headers of your protected route requests ( e.g. Create Post /wp-json/wp/v2/posts )

iv. So whenever you send a request to WordPress REST API for your protected routes, you send the token received in the headers of your request

{
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	'Authorization': `Bearer putTokenReceivedHere`
}
