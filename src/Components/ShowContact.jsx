function ShowContact({data, deleteHandler}) {
    return (
        <li key={data.id} className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-md m-3">

            <div className="flex items-center gap-6 w-full ">
                <p className="text-sm text-gray-900 font-medium truncate w-1/5">
                    {data.name} {data.familyName}
                </p>
                <p className="text-sm text-gray-900 flex items-center gap-1 w-1/5 truncate">
                    <span>📞</span> {data.phone}
                </p>
                <p className="text-sm text-gray-900 flex items-center gap-1 w-1/4 truncate">
                    <span>📧</span> {data.email}
                </p>
            </div>


            <button
                className="bg-red-500 text-white p-1.5 text-sm rounded-md hover:bg-red-600 transition-all flex items-center gap-1"
                onClick={() => deleteHandler(data.id)}
            >
                🗑️ Delete
            </button>
        </li>


    );
}

export default ShowContact;
