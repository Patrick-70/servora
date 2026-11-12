function SearchSuggestions({
  suggestions,
  onSelect,
}) {

  if (!suggestions.length) {
    return null;
  }


  return (

    <div className="absolute left-0 top-full z-50 mt-3 max-h-72 w-full overflow-y-auto rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200">


      {suggestions.map((service) => (

        <button

          key={service.name}

          onClick={() => onSelect(service)}

          className="flex w-full items-center gap-4 px-6 py-4 text-left transition hover:bg-emerald-50"

        >

          <span className="text-2xl">
            {service.icon}
          </span>


          <div>

            <p className="font-semibold text-slate-900">
              {service.name}
            </p>


            <p className="text-sm text-slate-500">
              {service.category}
            </p>

          </div>


        </button>

      ))}


    </div>

  );
}


export default SearchSuggestions;