import {useState} from "react";
import inputs from "../Contact/Contact.js";

function FormContact() {
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
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(contact)
    }

    return (
        <>

            <div className="flex justify-center items-center h-[250px] ">
                <div className="w-[50%]  p-6  rounded-lg shadow-lg bg-gradient-to-r from-blue-400 to-blue-600  flex justify-center items-center flex-wrap gap-4">
                    {inputs.map((item, index) => (
                        <div key={index} className="w-[48%] p-3">
                            <input
                                type={item.type}
                                name={item.name}
                                placeholder={item.placeholder}
                                value={contact[item.name]}
                                onChange={handleChange}
                                className="w-full p-3 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 cursor-pointer"
                            />
                        </div>
                    ))}
                    <button  className="w-[calc(100%-45px)] p-3 bg-white text-black rounded-md
                     hover:bg-amber-300 focus:outline-none focus:ring-2
                      focus:bg-emerald-600 cursor-pointer" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </>
    );
}

export default FormContact;
