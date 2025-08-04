import "./styles.css";
import {greeting} from "./greeting";


import odinImage from "./odin.png";
const image = document.createElement("img");
image.src = odinImage;
document.body.append(image);
console.log(greeting);