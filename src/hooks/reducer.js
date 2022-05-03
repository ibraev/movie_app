const initialState = {
    array: [],
    loading: false
}

localStorage.setItem("favorites", JSON.stringify(initialState))

export function reducer(state, action) {
    switch (action.type) {
        case "ADD_TO_FAVORITES":
            return {
                ...state,
                array: action.payload
            }
        default:
            throw new Error()
    }

}