export function fetchPopRepo(language) {
    const url = `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
    return fetch(url)
        .then((res)=>res.json()
        .then((data)=> data.items))     
}

export function fetchUser(username){
    const url = `https://api.github.com/users/${username}`
    return fetch(url)
    .then((res)=>res.json()
    .then((data)=> data))
}
