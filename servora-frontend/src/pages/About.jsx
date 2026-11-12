import { Link } from "react-router-dom";
import {
  FaUsers,
  FaShieldAlt,
  FaBolt,
  FaHandshake,
  FaCheckCircle,
} from "react-icons/fa";


function About() {


  const values = [
    {
      icon: <FaShieldAlt className="text-2xl text-emerald-600" />,
      title: "Trust & Safety",
      description:
        "Every provider is carefully verified to help customers connect with reliable professionals.",
    },

    {
      icon: <FaBolt className="text-2xl text-emerald-600" />,
      title: "Fast Booking",
      description:
        "Book trusted professionals quickly with a simple digital booking experience.",
    },

    {
      icon: <FaHandshake className="text-2xl text-emerald-600" />,
      title: "Quality Service",
      description:
        "We connect customers with professionals committed to excellent service.",
    },
  ];



  const stats = [
    {
      number: "500+",
      label: "Verified Providers",
    },

    {
      number: "10K+",
      label: "Happy Customers",
    },

    {
      number: "25+",
      label: "Service Categories",
    },

    {
      number: "4.9★",
      label: "Average Rating",
    },
  ];



  return (

    <main className="bg-slate-50 pt-16">



      {/* Hero */}

      <section className="
        bg-gradient-to-br
        from-emerald-600
        via-emerald-500
        to-teal-500
        py-16
        text-white
      ">


        <div className="mx-auto max-w-6xl px-5 text-center">


          <span className="
            rounded-full
            bg-white/20
            px-4
            py-2
            text-sm
            font-semibold
            backdrop-blur
          ">
            About Servora
          </span>



          <h1 className="
            mt-6
            text-4xl
            font-black
            md:text-5xl
          ">

            Connecting People

            <br />

            With Trusted Professionals

          </h1>



          <p className="
            mx-auto
            mt-5
            max-w-2xl
            text-base
            leading-7
            text-emerald-50
          ">

            Servora is a modern service marketplace that helps customers
            discover, compare and book trusted professionals across Ghana.

          </p>



        </div>


      </section>





      {/* Story */}


      <section className="py-16">


        <div className="
          mx-auto
          grid
          max-w-6xl
          gap-10
          px-5
          lg:grid-cols-2
        ">


          <div>


            <h2 className="
              text-3xl
              font-bold
              text-slate-900
            ">

              Our Story

            </h2>



            <p className="
              mt-5
              leading-7
              text-slate-600
            ">

              Finding reliable service providers should not be difficult.
              Servora was created to connect customers with skilled
              professionals on one trusted platform.

            </p>



            <p className="
              mt-5
              leading-7
              text-slate-600
            ">

              Whether you need an electrician, plumber, cleaner,
              carpenter or technician, Servora helps you book with
              confidence.

            </p>




            <div className="mt-7 space-y-4">


              <div className="flex items-center gap-3 text-sm">

                <FaCheckCircle className="text-emerald-600" />

                Verified Professionals

              </div>



              <div className="flex items-center gap-3 text-sm">

                <FaCheckCircle className="text-emerald-600" />

                Secure Booking Process

              </div>



              <div className="flex items-center gap-3 text-sm">

                <FaCheckCircle className="text-emerald-600" />

                Transparent Pricing

              </div>


            </div>


          </div>





          <div className="
            rounded-2xl
            bg-white
            p-6
            shadow-lg
            ring-1
            ring-slate-200
          ">


            <h3 className="
              text-2xl
              font-bold
              text-slate-900
            ">

              Our Mission

            </h3>



            <p className="
              mt-4
              leading-7
              text-slate-600
            ">

              To build Ghana's most trusted digital marketplace by
              connecting customers with verified professionals through
              a fast and secure platform.

            </p>



            <div className="
              mt-7
              rounded-xl
              bg-emerald-50
              p-5
            ">


              <h4 className="
                font-bold
                text-emerald-700
              ">

                Our Vision

              </h4>



              <p className="
                mt-2
                text-sm
                text-slate-600
              ">

                Empower every home and business with instant access
                to trusted professionals.

              </p>


            </div>


          </div>


        </div>


      </section>







      {/* Why Choose Servora */}


      <section className="
        bg-white
        py-16
      ">


        <div className="
          mx-auto
          max-w-6xl
          px-5
        ">


          <div className="text-center">


            <h2 className="
              text-3xl
              font-bold
              text-slate-900
            ">

              Why Choose Servora?

            </h2>



            <p className="
              mt-3
              text-slate-500
            ">

              A safer and easier way to find professionals.

            </p>


          </div>





          <div className="
            mt-10
            grid
            gap-6
            md:grid-cols-3
          ">


            {values.map((value) => (

              <div
                key={value.title}
                className="
                  rounded-2xl
                  bg-slate-50
                  p-6
                  shadow-md
                  transition
                  hover:-translate-y-1
                "
              >


                {value.icon}



                <h3 className="
                  mt-4
                  text-xl
                  font-bold
                  text-slate-900
                ">

                  {value.title}

                </h3>



                <p className="
                  mt-3
                  text-sm
                  leading-6
                  text-slate-600
                ">

                  {value.description}

                </p>


              </div>


            ))}


          </div>


        </div>


      </section>







      {/* Stats */}


      <section className="py-12">


        <div className="
          mx-auto
          grid
          max-w-6xl
          gap-5
          px-5
          md:grid-cols-2
          lg:grid-cols-4
        ">


          {stats.map((stat) => (

            <div
              key={stat.label}
              className="
                rounded-2xl
                bg-white
                p-6
                text-center
                shadow-md
                ring-1
                ring-slate-200
              "
            >


              <h2 className="
                text-4xl
                font-black
                text-emerald-600
              ">

                {stat.number}

              </h2>



              <p className="
                mt-3
                text-sm
                text-slate-500
              ">

                {stat.label}

              </p>


            </div>


          ))}


        </div>


      </section>







      {/* CTA */}


      <section className="
        bg-gradient-to-r
        from-emerald-600
        to-teal-500
        py-16
      ">


        <div className="
          mx-auto
          max-w-4xl
          px-5
          text-center
          text-white
        ">


          <FaUsers className="mx-auto text-4xl" />



          <h2 className="
            mt-5
            text-3xl
            font-bold
          ">

            Ready to Get Started?

          </h2>



          <p className="
            mx-auto
            mt-4
            max-w-2xl
            text-sm
            leading-7
            text-emerald-100
          ">

            Join customers and professionals already using
            Servora to discover trusted services.

          </p>




          <div className="
            mt-8
            flex
            flex-col
            justify-center
            gap-3
            sm:flex-row
          ">


            <Link
              to="/register"
              className="
                rounded-xl
                bg-white
                px-6
                py-3
                text-sm
                font-semibold
                text-emerald-600
              "
            >

              Join Servora

            </Link>




            <Link
              to="/providers"
              className="
                rounded-xl
                border
                border-white
                px-6
                py-3
                text-sm
                font-semibold
                text-white
              "
            >

              Explore Providers

            </Link>


          </div>


        </div>


      </section>



    </main>

  );
}


export default About;