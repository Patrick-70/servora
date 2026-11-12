import ProviderCard from "./ProviderCard";


function FeaturedProviders() {


  const providers = [

    {
      name: "Michael Mensah",
      profession: "Electrician",
      location: "Cape Coast",
      rating: "4.9",
      price: 120,
      image: "https://i.pravatar.cc/150?img=12",
      verified: true,
    },


    {
      name: "Akosua Owusu",
      profession: "Professional Cleaner",
      location: "Takoradi",
      rating: "4.8",
      price: 90,
      image: "https://i.pravatar.cc/150?img=32",
      verified: true,
    },


    {
      name: "Daniel Asare",
      profession: "Phone Repair Technician",
      location: "Accra",
      rating: "5.0",
      price: 150,
      image: "https://i.pravatar.cc/150?img=15",
      verified: false,
    },

  ];





  return (

    <section className="
      bg-slate-50
      py-16
    ">



      <div className="
        mx-auto
        max-w-6xl
        px-5
      ">




        {/* Heading */}



        <div className="
          text-center
        ">



          <span className="
            rounded-full
            bg-emerald-100
            px-4
            py-2
            text-sm
            font-semibold
            text-emerald-700
          ">

            Featured Professionals

          </span>





          <h2 className="
            mt-5
            text-3xl
            font-black
            text-slate-900
            md:text-4xl
          ">

            Hire Trusted Professionals

          </h2>





          <p className="
            mx-auto
            mt-3
            max-w-xl
            text-sm
            leading-6
            text-slate-500
          ">

            Discover verified experts ready to help
            with your next project.

          </p>




        </div>








        {/* Cards */}



        <div className="
          mt-10
          grid
          gap-6
          md:grid-cols-2
          lg:grid-cols-3
        ">



          {providers.map((provider)=>(


            <ProviderCard

              key={provider.name}

              provider={provider}

            />


          ))}



        </div>







        {/* Bottom CTA */}



        <div className="
          mt-10
          text-center
        ">


          <a

            href="/providers"

            className="
              inline-flex
              rounded-xl
              bg-emerald-600
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-emerald-700
            "

          >

            View All Providers

          </a>



        </div>




      </div>



    </section>

  );

}


export default FeaturedProviders;