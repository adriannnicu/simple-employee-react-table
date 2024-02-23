export default function SearchBar({ onSearch }) {
    const handleChange = (event) => {
        const searchTerm = event.target.value;
        onSearch(searchTerm);
    };

    return (
        <input onChange={handleChange} className="border-2 border-green-600 w-full mt-1 p-2" placeholder="Search Employee"/>
    )
}