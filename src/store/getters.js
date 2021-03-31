export const pets = (state) => {
    return state.pets;
};

export const getDog1 = (state) => (id) =>{
    return state.pets[id]
}