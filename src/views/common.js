import { html } from "../../node_modules/lit-html/lit-html.js";

export const toyPreview = (toy) => html`
    <div class="post">
                    <h2 class="post-title">${toy.title}</h2>
                    <img class="post-image" src=${toy.imageUrl} alt="Kids clothes">
                    <div class="btn-wrapper">
                        <a href="/details/${toy._id}" class="details-btn btn">Details</a>
                    </div>
                </div>
`
