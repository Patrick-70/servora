import { FaCheckCircle } from "react-icons/fa";


function ProviderBadge() {

  return (

    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">

      <FaCheckCircle />

      Verified

    </span>

  );
}


export default ProviderBadge;