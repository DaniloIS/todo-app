import axios from 'axios';

const URL = 'http://localhost:3003/api/todos';

export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGE',
    payload: event.target.value
})

export const search = () => {
    const req = axios.get(`${URL}?sort=-createdAt`)
    return {
        type: 'TODO_SEARCHED',
        payload: req
    }
}

export const add = (description) => {
    return dispatch => {
      axios.post(URL, {description})
        .then(res => dispatch({ type: 'TODO_ADDED', payload: res.data }))
        .then(res => dispatch(search()))
    }
}