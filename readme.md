# Portofolio V2 (monthly update)
## Table of Contents

1. [General Info](#general-info)
2. [Stacks](#stacks)
3. [Installation](#installation)
4. [Pages](#pages)
5. [Database](#database)
6. [Use](#use)
7. [TODO](#todo)
8. [FAQs](#faqs)

<br/>

### General Info

---

My personal CV to promote myself.

<br/>

### Stacks

---
- [Node.js](https://nodejs.org/en/): Version 18.2.0
- [Express](https://expressjs.com/): Version 4.16.1
- [JavaScript]()
- [CSS]()
- [MySQL](https://www.mysql.com/)

Modules/librairies :
- [mysql](https://www.npmjs.com/package/mysql): Version 2.18.1
- [nodemon](https://www.npmjs.com/package/nodemon): Version 2.0.18 
- [dotenv](https://www.npmjs.com/package/dotenv): Version 16.0.1
- [body-parser](https://www.npmjs.com/package/body-parser): Version 1.20.0 
- [cors](https://www.npmjs.com/package/cors): Version 2.8.5
- [ejs](https://www.npmjs.com/package/ejs): Version 3.1.8






<br/>

### Installation

---
- Need Node.js

If not install, check : https://nodejs.org/en/

Clone :
```
$ git clone https://github.com/FlavF/MyBooks
```

or

installation without clone :

```
$ cd ../path/to/the/file
$ npm init
$ npm install express --save
$ npm i mysql
$ npm install --save-dev nodemon //to not restart your node.js src/index.js everytime your changing your code
$ npm i dotenv  //For .env
//Create and Update your .env => look at ##Pages 
$ npm i body-parser //for req.body
$ npm i cors  // 
$ npm install ejs // view engine

```

To start the app and check it(don't forget to start MySql if you use a localhost mysql)

``` 
$ nodemon src/app.js
```


<br/>

### Pages

---
    - header : logo and darkmode button
    - footer : to contact and follow
    - aside : menu


- homepage : aside with menu, photo, menu
- about : CV details and CV.pdf
- link : links useful
- photography : my photographies
- project : project done
- opinion : rate the portfolio
- message : send a message

<br/>

#### Folders to update

- .env :

-- Database

DB_HOST =

DB_NAME =

DB_USERNAME =

DB_PASSWORD =


### Database
---

![Image text](DatabasePortfolio.png)
- certifications
- cloud
- IT
- languages IT
- language
- Link
- Photography
- Project
- Rating
- RH
- User
<br/>

### Use

---
- My portfolio website : [Porfolio on line - About](https://flavproject.000webhostapp.com/CVPortfolio)

- to get to know me better : [Porfolio on line - About](https://flavproject.000webhostapp.com/CVPortfolio/about)

- to run my projects : - to see my photographies : [Porfolio on line - Project](https://flavproject.000webhostapp.com/CVPortfolio/project)

- to see my photographies : [Porfolio on line - Photos](https://flavproject.000webhostapp.com/CVPortfolio/photography)

- to add links on the page : [Porfolio on line - Links](https://flavproject.000webhostapp.com/CVPortfolio/link)

- to send your opinion about my website : [Porfolio on line - Opinion](https://flavproject.000webhostapp.com/CVPortfolio/opinion)

- to send me a message : [Porfolio on line - Message](https://flavproject.000webhostapp.com/CVPortfolio/index.php?page=message)


<br/>

### TODO

---
- [ ] Go from V1 PHP to V2 Node.js (keeps : CSS, JS, Views, database datas)
- [ ] % language
- [ ] alert email when somebody add a link
- [ ] not showing the tag when no links inside the box
- [ ] add links I know of
- [ ] get faster (see how to improve it ; Photographies size, code shorter, ...)
- [ ] English and French Version ?
- [ ] In header : Possibility to do the menu via database + loop AND datas to collect : href; class ; id ; title; icon

<br/>

### FAQs

---




