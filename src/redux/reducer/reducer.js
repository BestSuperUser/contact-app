const INITIAL_DATA = [
    {
        id: 1,
        email: "1@gmail.com",
        name: "1",
        phoneNumber: 1
    },
    {
        id: 2,
        email: "2@gmail.com",
        name: "2",
        phoneNumber: 2
    },
    {
        id: 3,
        email: "3@gmail.com",
        name: "3",
        phoneNumber: 3
    }
]

const INITIAL_STATE = {
    contactList: INITIAL_DATA
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            return {...state, contactList: [...state.contactList, action.paylaod]}
        default:
            return state;
    }
}