const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      const stateWithGoodVote = {
        ...state,
      good: state.good + 1

}
      return stateWithGoodVote
    case 'OK':
      const stateWithOkVote = {
          good: state.good,
          ok: state.ok + 1,
          bad: state.bad
      }
      return stateWithOkVote
    case 'BAD':
      const stateWithBadVote = {
            ...state,
            bad: state.bad + 1}
        return stateWithBadVote
    case 'ZERO':
      return initialState
    default: return state
  }
  
}

export default counterReducer