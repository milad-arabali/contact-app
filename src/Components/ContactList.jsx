import ShowContact from "./ShowContact.jsx";

function ContactList({contacts ,deleteHandler}) {
    console.log(contacts);
    return (

        <>
            <div className="flex flex-col items-center min-h-[300px]
             w-full md:w-[50%] p-6 rounded-lg shadow-lg
              bg-gray-200 ">
                <h3 className="text-lg font-bold mb-4">Contact Lists</h3>
                <div className="w-full max-h-80 overflow-y-auto">

                    {contacts.length > 0 ? (
                        contacts.map((item) => (
                            <ShowContact key={item.id} data={item} deleteHandler={deleteHandler} />
                        ))
                    ) : (
                        <p className="text-gray-700 text-center">No contacts</p>
                    )}
                </div>
            </div>



        </>
    );
}

export default ContactList;
