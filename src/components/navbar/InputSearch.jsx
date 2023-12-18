import { FaMagnifyingGlass } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        const keyword = searchRef.current.value

        if(!keyword || keyword.trim() == "") return

        if(event.key === "Enter" || event.type === "click") {
            event.preventDefault()    
            router.push(`/search/${keyword}`)
        }
    }

    return (
        <div className="relative">
            <input 
                placeholder="cari anime..." 
                className="w-full p-2 rounded text-black" 
                ref={searchRef}
                onKeyDown={handleSearch}
            />
            <button className="absolute top-2 end-2" onClick={handleSearch}>
                <FaMagnifyingGlass size={24} color="15141F"/>
            </button>
        </div>
    )
}

export default InputSearch;