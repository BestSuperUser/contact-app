import {useSelector} from "react-redux"
import {Link} from "react-router-dom"

const Contacts = () => {
    const contactList = useSelector(state => state.contactList)
    return (
        <div className="row p-0 m-0">
            <div className="col-8 offset-2 mt-4">
                <div className="control float-start">
                    <Link to="/addcontact" className="btn btn-outline-primary">Add new contact</Link>
                </div>
                <table className="table mt-5">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {contactList.map(contact => 
                            <tr key={contact.id}>
                            <th scope="row">{contact.id}</th>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phoneNumber}</td>
                            <td>
                                <button className="btn btn-outline-primary">Edit</button>
                                <button className="btn btn-outline-danger ms-3">Delete</button>
                            </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
 
export default Contacts;