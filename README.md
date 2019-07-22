A node.js application can be used to generate static websites.

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)


Site generated is deployed on Heroku(https://node-site-generator.herokuapp.com/)

##

#### Description 
* Generates HTML files from EJS templates
* layout file, so all pages have the same header, footer, navigation, etc.
* Partials (blocks of reusable interface components)uses to ensure DRY Principle.
* Data can be read through Read data from ``site.config.js`` file.


##

#### Folder Structure

``
  public/
``

``
src/
  assets/
  pages/
  partials/
  layout.ejs
``

``
index.js
site.config.js
``

#### Installation Instructions

* Clone or download the repo. into any fresh temporary folder.

* Cd into that root folder you just cloned locally.

* Open terminal in the current folder and to install all dependencies by typing `` npm install ``

* The generator code is inside a single file, index.js, that we can run with `` npm start ``, every time we want to       
  rebuild the site.

* Now typing 

```javascript
   npm run serve
```

* will start a server !

##

#### Package Manager Used (NPM)

* NPM is the default package manager for the JavaScript runtime environment Node.js.

##

#### Package.json (dependencies)
  
* For dependencies refer Package.json.


### Contributing

1. Create your **_branch_**: `git checkout -b my-new-feature`

2. **_Commit_** your changes: `git commit -m 'Add some feature'`

3. **_Push_** to the branch: `git push origin my-new-feature`

4. Send a **Pull Request**

5. **_Enjoy!_**

##


