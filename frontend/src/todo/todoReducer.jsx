const INITIAL_STATE = {
    description: 'Ler Livro',
    list: [{
        _id: '1',
        description: 'Paga fatura do cartão',
        done: true
    }, {
        _id: '2',
        description: 'Reunião com a equipe às 10:00',
        done: false
    }, {
        _id: '3',
        description: 'Consulta médica na terça depois do almoço',
        done: false
    }]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case 'DESCRIPTION_CHANGE':
            return {
                ...state,
                description: action.payload
            }
        break;
        default:
            return state;

    }
}