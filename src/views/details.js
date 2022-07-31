// // import { html } from "../../node_modules/lit-html/lit-html.js";
// // import { deleteToy, getToyById } from "../api/data.js";
// // import { getUserData } from "../util.js";

// // let detailsTemplate = (toy, isOwner, onDelete) => html`

// // <section id="details-page">
// //     <h1 class="title">Post Details</h1>
// //     <div id="container">
// //         <div id="details">
// //             <div class="image-wrapper">
// //                 <img src=${toy.imageUrl} alt="Material Image" class="post-image">
// //             </div>
// //             <div class="info">
// //                 <h2 class="title post-title">${toy.title}</h2>
// //                 <p class="post-description">Description: ${toy.description}</p>
// //                 <p class="post-address">Address: ${toy.address}</p>
// //                 <p class="post-number">Phone number: ${toy.phone}</p>
// //                 <p class="donate-Item">Donate Materials: 0</p>
// //                 <!--Edit and Delete are only for creator-->
// //                 <div class="btns">
// //                     ${isOwner ? html`<a href="/edit/${toy._id}" class="edit-btn btn">Edit</a>
// //                     <a href="javascript:void(0)" @click=${onDelete} class="delete-btn btn">Delete</a>` : ''}
// //                     <!--Bonus - Only for logged-in users ( not authors )-->
// //                     <!-- <a href="#" class="donate-btn btn">Donate</a> -->
// //                 </div>
// //             </div>
// //         </div>
// //     </div>
// // </section>
// // `


// // export async function detailsPage(ctx) {
// //     const postId = ctx.params.id;
// //     const toy = await getToyById(postId);
// //     const user = ctx.user;

// //     let userId;

// //     if (user != null) {
// //         userId = user._id        
// //     }
// //   console.log(user )
// // //   console.log(user._id)
// //   console.log(toy._id)

// //     const isOwner = user && postId == toy._id;
// //     // const isLoggedIn = user !== undefined;

// //     // totalDonationCount = await getTotalDonationCount(postId);
// //     ctx.render(detailsTemplate(toy, isOwner, onDelete));

// //     async function onDelete() {
// //         const confirmed = confirm('Are you sure?');
// //         if (confirmed) {
// //             await deleteToy(postId);
// //             ctx.page.redirect('/');
// //         }
// //     }
// //   }

// // // export async function detailsPage(ctx) {
// // //     const postId = ctx.params.id;
// // //     const post = await getToyById(postId);
// // //     const user = ctx.user;

// // //     let userId;

// // //     if (user != null) {
// // //         userId = user._id
// // //     }


// // //     export async function detailsPage(ctx) {
// // //         let userData = getUserData()
// // //         let toy = await Promise.all([
// // //             getToyById(ctx.params.id),
// // //             // getLikesBytoyId(ctx.params.id),
// // //             // userData ? getMyLikesBytoyId(ctx.params.id, userData.id) : 0
// // //         ])
// // //         let isOwner = userData && userData.id == toy._ownerId
// // //         // let showLikeButton = isowner == false && hasLike == false && userData != null

// // //         ctx.render(detailsTemplate(toy, isOwner, onDelete))


// // //         async function onDelete() {
// // //             const confirmed = confirm('Are you sure?');
// // //             if (confirmed) {
// // //                 await deleteToy(ctx.params.id)
// // //                 ctx.page.redirect('/')
// // //             }
// // //         }

// // //     }\









// import { html } from '../../node_modules/lit-html/lit-html.js';
// import { deleteToy, getToyById} from '../api/data.js';

// const detailsTemplate = (post, isOwner, onDelete) => html`
//     <!-- Details Page -->
//     <section id="details-page">
//       <h1 class="title">Post Details</h1>

//       <div id="container">
//         <div id="details">
//           <div class="image-wrapper">
//             <img src="${post.imageUrl}" alt="Material Image" class="post-image">
//           </div>
//           <div class="info">
//             <h2 class="title post-title">${post.title}</h2>
//             <p class="post-description">Description: ${post.description}</p>
//             <p class="post-address">Address: ${post.address}</p>
//             <p class="post-number">Phone number: ${post.phone}</p>
//             <p class="donate-Item">Donate Materials: 0</p>
//             <div class="btns">

//               <a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
//               <a href="javascript:void(0)" @click=${onDelete} class="delete-btn btn">Delete</a>

//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
// `;

// export async function detailsPage(ctx) {
//   const postId = ctx.params.id;
//   const post = await getToyById(postId);
//   const user = ctx.user;

// //   let userData = getUserData()

// // console.log(userData.id)
//   let userId;
//   if (user != null) {
//       userId = user._id

//   }

//   const isOwner = user && post._ownerId == user._id;

// //   totalDonationCount = await getTotalDonationCount(postId);
//   ctx.render(detailsTemplate(post, isOwner, onDelete));


//   async function onDelete() {
//       const confirmed = confirm('Are you sure?');
//       if (confirmed) {
//           await deleteToy(postId);
//           ctx.page.redirect('/');
//       }
//   }
// }






import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteToy, getToyById } from "../api/data.js";
import { getUserData } from "../util.js";

let detailsTemplate = (toy, isOwner, onDelete) => html`
<section id="details-page">
    <h1 class="title">Post Details</h1>
    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src="./images/clothes.jpeg" alt="Material Image" class="post-image">
            </div>
            <div class="info">
                <h2 class="title post-title">${toy.title}</h2>
                <p class="post-description">Description: ${toy.description}</p>
                <p class="post-address">Address: ${toy.address}</p>
                <p class="post-number">Phone number: ${toy.phone}</p>
                <p class="donate-Item">Donate Materials: 0</p>

                <!--Edit and Delete are only for creator-->
                <div class="btns">
                    ${toyControlsTemplates(toy, isOwner, onDelete)}

                    <!-- <a href="#" class="edit-btn btn">Edit</a>
                            <a href="#" class="delete-btn btn">Delete</a> -->

                    <!--Bonus - Only for logged-in users ( not authors )-->
                    <!-- <a href="#" class="donate-btn btn">Donate</a> -->
                </div>
            </div>
        </div>
    </div>
</section>
`

let toyControlsTemplates = (toy, isOwner, onDelete) => {
    if (isOwner) {
        return html`
        <a href="/edit/${toy._id}" class="edit-btn btn">Edit</a> -->
        <a @click=${onDelete} href="javascript:void(0)" class="delete-btn btn">Delete</a> -->
        `
    } else {
        return null
    }
}



export async function detailsPage(ctx) {
    let userData = getUserData()
    let toy = await Promise.all([
        getToyById(ctx.params.id),

    ])

    let isOwner = userData && userData.id == toy._ownerId
console.log(userData.id )
console.log(toy._id)

    ctx.render(detailsTemplate(toy, isOwner, onDelete))


    async function onDelete() {
        await deleteToy(ctx.params.id)
        ctx.page.redirect('/')
    }
}