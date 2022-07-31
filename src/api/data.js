import * as api from "./api.js"

export const login = api.login
export const register = api.register
export const logout = api.logoutB

export async function getAllToys(){
    return api.get('/data/posts?sortBy=_createdOn%20desc')
}

export async function getToyById(id){
    return api.get(`/data/posts/${id}`)
}

export async function getMyToys(userId){
    return api.get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function createToy(toy){
    return api.post('/data/posts', toy)
}

export async function editToy(id, toy){
    return api.put('/data/posts/' + id, toy)
}

export async function deleteToy(id){
    return api.del('/data/posts/' + id)
}

export async function likeToy(bookId){
    return api.post('/data/likes/', {
    bookId
    })
}

export async function searchToy(query){
    return api.get('/data/books?where=' + encodeURIComponent(`title LIKE "${query}"`))
}