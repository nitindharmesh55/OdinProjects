import "./styles.css"
import { greetings } from "./greetings";
import { container } from "./greetings";

// Crreating two section inside the content;

const about = document.createElement("div");
about.classList.add("about");
about.innerHTML = `
<h1> Odin Resturant With good Food</h1>
<p> odin resturant is great resturant in asgrad run by Loki himslef we serve best disheh and beverages here </p>

<div class="btn">
<button>Order</button>
<button>Book now</button>
</div>


`;

const images = document.createElement("img");
images.src = "../src/odin.jpeg";

container.append(about);
container.append(images);