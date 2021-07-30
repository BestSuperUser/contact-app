export const addContact = (contactInfo) => {
    return {type: "ADD_CONTACT", payload: contactInfo}
}

export const deleteContact = (id) => {
    return {type: "DELETE_CONTACT", payload: id}
}