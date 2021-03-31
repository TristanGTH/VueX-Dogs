export const addPets = (state, param) =>{
    state.pets.push(param)
}

export const getPetsByIndex = (state, params) => {
    return state.pets[params]
}