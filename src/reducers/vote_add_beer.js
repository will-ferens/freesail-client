const initialState = {
    voteBeers: []
}
export default function (state = initialState, action) {
    switch(action.type) {
        case 'VOTE_ADD':
            return {voteBeers: [...state.voteBeers, action.payload]}
        default: 
            return state
    }
}