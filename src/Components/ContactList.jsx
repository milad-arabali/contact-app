import ShowContact from "./ShowContact.jsx";

function ContactList({contacts ,deleteHandler}) {
    console.log(contacts);
    return (

        <>
            <div className="flex justify-center flex-col min-h-2  w-[50%]  p-6  rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-gray-900">Contact Lists</h3>
                {contacts.length > 0 ? (
                    contacts.map((item) => (
                        <ShowContact key={item.id} data={item} deleteHandler={deleteHandler}/>
                    ))
                ) : (
                    <p>No contacts</p>
                )}


            </div>

        </>
    );
}

export default ContactList;
