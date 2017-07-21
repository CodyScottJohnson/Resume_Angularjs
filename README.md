# JFS Agent Portal

This is the management portal for the Johnson Financial Service Website
## Built With
<p>
<img style="height:50px;width:50px; display:inline-block" src='http://devicon.fr/devicon.git/icons/nodejs/nodejs-original.svg'>
<img style="height:50px;width:50px; display:inline-block" src='http://devicon.fr/devicon.git/icons/bower/bower-line.svg'>
<img style="height:50px;width:50px" src='http://devicon.fr/devicon.git/icons/grunt/grunt-line.svg'>
<img style="height:50px;width:50px" src='http://devicon.fr/devicon.git/icons/html5/html5-plain.svg'>
<img style="height:50px;width:50px" src='http://devicon.fr/devicon.git/icons/css3/css3-plain.svg'>
<img style="height:50px;width:50px" src='http://devicon.fr/devicon.git/icons/bootstrap/bootstrap-plain.svg'>
<img style="height:50px;width:50px" src='http://devicon.fr/devicon.git/icons/angularjs/angularjs-plain.svg'>
<img style="height:50px;width:50px" src='http://devicon.fr/devicon.git/icons/less/less-plain-wordmark.svg'>
<img style="height:50px" src='https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/Yeoman.svg/543px-Yeoman.svg.png'>
</p>
## Build & development
#### requirements

#### Initial Setup
Download the repository and from the main directory run

```
npm install
bower install
```
#### using yeoman

If you have [`yeoman`](https://yeoman.io/) installed, you can use yeoman to generate new templates, the projector is set up using [yo angular generator](https://github.com/yeoman/generator-angular)
so to add a new controller you could simply call

```
yo angular:controller myController

```

which will create the controller, set up test and inject the controller into you index.html

#### LESS

The Project is set up to use <img style="height:30px;width:30px" src='http://devicon.fr/devicon.git/icons/less/less-plain-wordmark.svg'/>. The main less file is `/app/style/app.less` which is compiled to `/app/style/app.css` as part of the grunt process.

#### Building and Testing

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## Also

This is a test

ssh -i /Users/Cody/devApps/Keys/JFS.pem cody@jfsapp.com -p 4969
