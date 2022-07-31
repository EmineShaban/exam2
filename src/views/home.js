import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllToys } from "../api/data.js";
import { toyPreview } from './common.js'

let homeTemplate = (toy) => html`
    <section id="dashboard-page">
        <h1 class="title">All Posts</h1>
        <div class="all-posts">
            ${toy.length == 0 ?
                html`<h1 class="title no-posts-title">No posts yet!</h1>` :
                html`${toy.map(toyPreview)}`} 
                </div> </section>`

export async function homePage(ctx) {
    let books = await getAllToys()
    ctx.render(homeTemplate(books))
}