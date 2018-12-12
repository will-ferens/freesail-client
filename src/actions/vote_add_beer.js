export const voteAddBeer = (beer) => {
    console.log(beer)
    return {
        type: 'VOTE_ADD',
        payload: beer
    }
}