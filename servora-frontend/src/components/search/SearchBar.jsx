import { useState } from "react";
import { FaSearch } from "react-icons/fa";


function SearchBar() {


  const [search,setSearch] = useState("");



  const suggestions = [

    "Electrician",
    "Cleaner",
    "Plumber",
    "Mechanic",
    "Computer Repair",

  ];




  return (

    <div className="w-full">





      {/* Search Box */}


      <div className="
        flex
        items-center
        rounded-2xl
        bg-white
        p-2
        shadow-lg
        ring-1
        ring-slate-200
      ">



        <FaSearch className="
          ml-3
          text-slate-400
        "/>





        <input

          value={search}

          onChange={(e)=>setSearch(e.target.value)}

          placeholder="What service do you need?"

          className="
            flex-1
            px-3
            py-3
            text-sm
            text-slate-700
            outline-none
          "

        />





        <button

          className="
            rounded-xl
            bg-emerald-600
            px-5
            py-3
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-emerald-700
          "

        >

          Search

        </button>



      </div>







      {/* Quick Categories */}



      <div className="
        mt-3
        flex
        flex-wrap
        gap-2
      ">



        {
          suggestions.map((item)=>(


            <button

              key={item}

              onClick={()=>setSearch(item)}

              className="
                rounded-full
                bg-white
                px-3
                py-1.5
                text-xs
                font-medium
                text-slate-600
                shadow-sm
                ring-1
                ring-slate-200
                transition
                hover:border-emerald-500
                hover:text-emerald-600
              "

            >

              {item}


            </button>


          ))
        }



      </div>





    </div>


  );

}


export default SearchBar;