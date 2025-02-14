function ShowContact({data, deleteHandler}) {
    return (
        <li key={data.id} className="mb-3 flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-md">
            <div>
                <p className="text-sm text-gray-900 font-medium">
                    {data.name} {data.familyName}
                </p>
                <p className="text-sm text-gray-900 flex items-center gap-1">
                    <span>📞</span> {data.phone}
                </p>
                <p className="text-sm text-gray-900 flex items-center gap-1">
                    <span>📧</span> {data.email}
                </p>
            </div>
            <button
                className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-all flex items-center gap-1"
                onClick={() => deleteHandler(data.id)}
            >
                🗑️ Delete
            </button>
        </li>
    );
}

export default ShowContact;
