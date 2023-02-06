/**
 * 
 * passo a passo do REDUX utilizado com javaScript puro:
 * 
 * 1 - cria-se as actions e as actions type especifica
 * 2 - cria-se o estado inicial da aplicação
 * 3 - cria-se um reducer para aquele estado especifico
 * 
 * 4 - Utilizando logs para que possamos observar os disparos de ações
 * 
 */


import { legacy_createStore as createStore} from 'redux'

//actions e actions type
const CHANGE_USER = 'CHANGE_USER';
const LOGOUT = 'LOGOUT';

//actions
function changeUser(user) {
    return {
        type: CHANGE_USER,
        info: 'Change current user',
        payload: user
    }
}

function logout() {
    return {
        type: LOGOUT,
        info: 'Logout current user',
    }
}

//estado inicial
const initialState = {
    user: '',
    isLoged: false
}

//reducer
function userReducer(prevState = initialState, action) {
    switch(action.type) {
        case CHANGE_USER:
            return {
                ...prevState,
                user: action.payload,
                isLoged: true
            }

        case LOGOUT:
            return {
                ...prevState,
                user: '',
                isLoged: false
            }

        default:
            return prevState
    }  
}

// Store
const store = createStore(userReducer);
console.log("Initial state", store.getState());

store.dispatch(changeUser("Paulo Sergio"));
console.log("New state", store.getState());

store.dispatch(logout());
console.log("user Logged out", store.getState());