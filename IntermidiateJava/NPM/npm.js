// Bunddle: we provide bunddler with an entry point and the it build a dependency grpah from that file! combine all the relevant files together and then outputs  a single file with all the necessary  code included!

const { plugins } = require("./webpack-practice/webpack.config");

// We'll create bundle!;
// mkdir webpack-practice
// cd webpack-practice
// npm init -y;

// After this it will create package.json  that contain all information project with name depancence and version number 

// inside that file we have remove type="commonjs" or type="module";
// cuz we're using bundller here!

// after this it will also create file
// 1. node_modules and package-lock.json files
// 1. node_modules: contain all the actual code 
// 2. package-lock.json: keep track of the specific package information;


// More infor about SRC and DIST;
// 1.SRC(sourc);
// 2. DIST(distribution);

// 1.SRC: where we keep our websites source code! where our work will done!
// When we run webpack to bundle our code! it will output the bunddle files into the dist directory!!;
// Dist : is like our output direactory!;


// Bundling Javascript!

// we to crate a folder called SRC where we put all the code!;
// mkdir src -> cd src - > code index.js -.> code greeting.js
// indx.js;
// import {greeting}  from "./greeting";
// greeting.js
// export const greeting = "Hello odin";

// After all this we need to crate a file outside SRC folder but in  root!;
// file called webpack.config.js;

// with these code:
// const path = require("path");
// module.exports ={
// mode :"development",
// entry:"./src/index.js",
// output:{
// filename: "main.js",
// path: path.resolve(__dirname, "dist"),
// Clearn:true

// }

// }

// In this all thigs 
// Mode: for now we leave this at development;
// entry: which file will be our entry point for this prject;
// ouput: an object contain the information about the output bundle;

// Now After this we have use command called npx webpack;

// Handeling HTML:

// npm install --save.dev html-webpack-plugin;

// inside the config fiiel
// cosnt HtmlWebpackPlugin = reqauire("html-webpack-plugin");

// inside the module export

// module.exports = {
//     plugins:[
//         new HtmlWebpackPlugin({
//             template : "./src/template.html"
//         })
//     ]
// }

// for the CSS
//  module:{
//         rules:[
//             {
//                 test:/\.css$/i,
//                 use:["style-loader", "css-loader"],
//             }
//         ]
//     }