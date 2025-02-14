import {useState} from "react";
import inputs from "../Contact/Contact.js";
import ContactList from "./ContactList.jsx";


function FormContact() {
    const [contacts, setContacts] = useState([]);
    const [alert, setAlert] = useState("");
    const [contact, setContact] = useState({
        name: '',
        familyName: '',
        email: '',
        phone: '',

    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setContact((prevContact) => ({...prevContact, [name]: value}))
    }
    const handleSubmit = () => {
        if (!contact.name || !contact.familyName || !contact.familyName || !contact.familyName) {
            setAlert("Please enter a valid name");
            return;
        }
        setAlert("");
        setContacts((contacts) => ([...contacts, contact]));
        setContact({
            name: '',
            familyName: '',
            email: '',
            phone: '',

        })
    };

    return (
        <>

            <div className="flex justify-center items-center flex-col h-[250px] ">
                <div
                    className="w-[50%]  p-6  rounded-lg shadow-lg
                    bg-gradient-to-r from-blue-400 to-blue-600
                      flex justify-center items-center flex-wrap gap-4">
                    {inputs.map((item, index) => (
                        <div key={index} className="w-[48%] p-3">
                            <input
                                type={item.type}
                                name={item.name}
                                placeholder={item.placeholder}
                                value={contact[item.name]}
                                onChange={handleChange}
                                className="w-full p-3 border bg-white
                                border-gray-300 rounded-md focus:outline-none focus:ring-2 cursor-pointer"
                            />
                        </div>
                    ))}
                    <button className="w-[calc(100%-45px)] p-3 bg-white text-black rounded-md
                     hover:bg-amber-300 focus:outline-none focus:ring-2
                      focus:bg-emerald-600 cursor-pointer" onClick={handleSubmit}>Submit
                    </button>
                </div>
                <div className="pt-3">
                    {alert && (
                        <p className="bg-red-500
                         text-white p-4 rounded-lg shadow-lg text-center w-full max-w-md mx-auto animate-fade">
                            {alert}
                        </p>
                    )}
                </div>
                <ContactList contacts={contacts}/>
            </div>
        </>
    );
}

export default FormContact;
