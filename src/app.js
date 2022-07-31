import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { logoutB } from "./api/api.js";
import { getUserData } from './util.js';
import { loginPage } from "./views/login.js";
import { registerPage } from './views/register.js';
import { homePage } from './views/home.js';
import { createPage } from './views/create.js';
// import { myPostPage } from './views/myBooks.js';
// import { searchPage } from './views/search.js';
import { detailsPage } from './views/details.js';
import { myPostPage } from './views/myBook.js';

let root = document.getElementById('main-content')

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root)
    ctx.updateUserNav = updateUserNav()
    next()
}

export function updateUserNav() {
    let userData = getUserData()
    if (userData) {
        document.getElementById('user').style.display = 'inline'
        document.getElementById('guest').style.display = 'none'
        // document.querySelector('#user span').textContent = `Welcome, ${userData.email}`

    } else {
        document.getElementById('user').style.display = 'none'
        document.getElementById('guest').style.display = 'inline'
    }
}

document.getElementById('logoutBtn').addEventListener('click', (e) => {
    logoutB()
    updateUserNav()
    page.redirect('/')
})

page(decorateContext)
page('/login', loginPage)
page('/register', registerPage)
page('/', homePage)
page('/create', createPage)
page('/profile/', myPostPage)
// page('/search', searchPage)
page('/details/:id', detailsPage)

updateUserNav()
page.start()