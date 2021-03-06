Frontend Bootstrap
===============

Kickoff for web applications written in VueJS.

## Main Tools

+ [VueJS](https://vuejs.org/)
+ [Babel](https://babeljs.io/)
+ [Pug](https://pugjs.org)
+ [Sass](http://sass-lang.com)
+ [Webpack](https://webpack.js.org/)
+ [ESLint](http://eslint.org/)

## First steps
#### Installing node
Get the latest version of node from the [official website](https://nodejs.org/) or using [nvm](https://github.com/creationix/nvm)
Nvm approach is preferred. Also, you may find this [tool](https://github.com/wbyoung/avn) useful to automate version changing between projects.

#### Getting the dev dependencies
Run `npm install` from rootpath of the project.

#### Gulp. The right way
During the project development you will probably use gulp every day, so let's use it in the right way.
A very popular way of getting these kind of packages is simply tell npm to install them globally using the `-g` flag.
That's needless as gulp is already included in this project dependencies. A big problem can have place if the version of the packages that were installed globally do not match the versions that each project require.
The right way to execute these tools is using the binaries in the node_modules folder, that is `node_modules/.bin/`.
To execute gulp just use the following in your terminal: `./node_modules/.bin/gulp`. The same applies for other dependencies that have command line tools.
Adding an alias in your .bashrc/.bash_profile for these tools is highly recommended:
```bash
alias gulp='node_modules/.bin/gulp'
```

## Development

#### Environments
By default, the environment will be **development**, but you can easily change it using the **env** param in your gulp tasks: ```gulp --env production```

#### SCSS
When creating SCSS files you don't need to import other files inside yours to use properties from them. There's a specific file called `application.scss` where every SCSS file should be imported in the desired priority order. This works just like the stylesheet elements in the head of an html, when repeated rules are present the rule that was imported last will override the other.

#### Vendors
To add a vendor simply install and save it using npm. Then add the path of the source files relative to the **node_modules** folder, to **vendorJs.js** or **vendorCss.js** depending on what you are adding.
i.e: Adding jquery
```bash
npm install --save jquery
```
This will generate the **jquery** folder inside **node_modules** and add the register the dependency in the `package.json` file. Then, add the source file of jquery to **vendorJs.js**. It should look like this:
```
module.exports = [
  'jquery/dist/jquery.js',
];
```

## Deploy

#### S3
In order to deploy you must first create **config/aws.js** file with the credentials of the Amazon S3 bucket for each environment. The file needs to have to follow the format specified in *config/aws.js.example*

Then just run `gulp s3 --env <environment name>` with your desired env as parameter.

## Further reading
Check the docs folder for extra help on usual tasks or issues:
  - [Adding new vendors](docs/ADDING_NEW_VENDORS.md)
  - [Adding google analytics](docs/ADDING_GOOGLE_ANALYTICS.md)
  - [Troubleshooting](docs/TROUBLESHOOTING.md)
  - [Maintenance mode](docs/MAINTENANCE_MODE.md)
  - [Webp assets](docs/WEBP.md)
  - [Css regression testing](docs/CSS_REGRESSION_TESTING.md)


## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## About

This project is maintained by [Sebastian Balay](https://github.com/sbalay) and it was written by [Wolox](http://www.wolox.com.ar).

![Wolox](https://raw.githubusercontent.com/Wolox/press-kit/master/logos/logo_banner.png)
