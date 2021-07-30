import {Link} from "react-router-dom"
import React, {useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import { toast } from "react-toastify"
import {addContact} from "../redux/action/action"
import {useHistory} from "react-router-dom"

const AddContact = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const history = useHistory()
    const state = useSelector(state => state)
    const dispatch = useDispatch();
    
    
    const submit = (e) => {
        e.preventDefault()
        if (state.contactList.find(contact => contact.name === name) !== undefined) {
            toast.error("Name already exists")
            return
        } else if (state.contactList.find(contact => contact.email === email) !== undefined) {
            toast.error("Email already exists")
            return
        } else if (state.contactList.find(contact => contact.phoneNumber === parseInt(phoneNumber)) !== undefined) {
            toast.error("Phone number already exists")
            return
        } else {
            const id = state.contactList[state.contactList.length-1].id + 1
            const CONTACT_INFO = {
                id: id,
                email: email.toString(),
                name: name.toString(),
                phoneNumber: parseInt(phoneNumber)
            }
            try {
                dispatch(addContact(CONTACT_INFO))
                toast.success("Added to the list")
                history.push("/")
            } catch (e) {
                toast.error("Something went wrong")
                history.push("/")
            }
        }
    }

    return (
        <div className="row p-0 m-0">
            <div className="col-4 offset-4 mt-5">
                <h1 className="text-center">Add Contact</h1>
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={submit}>
                            <div className="mb-3">
                                <label htmlFor="nameInput" className="form-label">Name</label>
                                <input required type="text" className="form-control" id="nameInput" onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="emailInput" className="form-label">Email</label>
                                <input required type="email" className="form-control" id="emailInput" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phoneInput" className="form-label">Phone Number</label>
                                <input required type="text" className="form-control" id="phoneInput" onChange={(e) => setPhoneNumber(e.target.value)} />
                            </div>
                            <Link to="/" className="btn btn-outline-danger">Cancel</Link>
                            <button type="submit" className="btn btn-outline-primary float-end">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AddContact;