import request from 'superagent'


export function getAllCharacters(){
    return request.get('/api/v1/allCharacters')
    .then(res => res.body)
}

export function getCardsByCharacter(id){
    return request.get(`/api/v1/characterCards/${id}`)
    .then(res => res.body)
}