import { motion } from "framer-motion";
import {
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

import Button from "../ui/Button";
import Stats from "./Stats";
import SearchBar from "../search/SearchBar";


function Hero() {


  return (

    <section className="
      relative
      overflow-hidden
      bg-gradient-to-br
      from-slate-50
      via-white
      to-emerald-50
    ">



      {/* Background */}


      <div className="
        absolute
        -left-32
        -top-32
        h-72
        w-72
        rounded-full
        bg-emerald-300/20
        blur-3xl
      "/>




      <div className="
        absolute
        right-0
        top-20
        h-64
        w-64
        rounded-full
        bg-teal-200/30
        blur-3xl
      "/>







      <div className="
        relative
        mx-auto
        grid
        max-w-6xl
        items-center
        gap-10
        px-5
        pb-16
        pt-28
        lg:grid-cols-2
      ">





        {/* LEFT */}



        <motion.div

          initial={{
            opacity:0,
            x:-30
          }}

          animate={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:.7
          }}

        >



          <span className="
            inline-flex
            rounded-full
            bg-emerald-100
            px-4
            py-2
            text-xs
            font-semibold
            text-emerald-700
          ">

            ⭐ Ghana's Trusted Service Marketplace

          </span>







          <h1 className="
            mt-6
            text-4xl
            font-black
            leading-tight
            text-slate-900
            md:text-5xl
          ">


            Book trusted professionals


            <span className="
              block
              text-emerald-600
            ">

              in a few clicks.

            </span>


          </h1>








          <p className="
            mt-4
            max-w-lg
            text-base
            leading-7
            text-slate-600
          ">

            Find verified electricians, plumbers,
            cleaners, mechanics and technicians
            around Ghana.

          </p>








          <div className="mt-6">

            <SearchBar />

          </div>







          <div className="
            mt-6
            flex
            flex-wrap
            gap-3
          ">


            <Button size="lg">

              Find Service

            </Button>



            <Button
              variant="secondary"
              size="lg"
            >

              Become Provider

            </Button>


          </div>






          <div className="mt-8">

            <Stats />

          </div>





        </motion.div>









        {/* RIGHT CARD */}



        <motion.div

          initial={{
            opacity:0,
            x:30
          }}

          animate={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:.8
          }}

          className="
            flex
            justify-center
          "

        >





          <div className="
            w-full
            max-w-sm
            rounded-2xl
            bg-white
            p-5
            shadow-xl
            ring-1
            ring-slate-200
          ">





            <div className="
              flex
              items-center
              justify-between
            ">


              <div>


                <h2 className="
                  text-lg
                  font-bold
                ">

                  Featured Provider

                </h2>



                <p className="
                  text-sm
                  text-slate-500
                ">

                  Available Today

                </p>


              </div>





              <span className="
                rounded-full
                bg-green-100
                px-3
                py-1
                text-xs
                font-semibold
                text-green-700
              ">

                Online

              </span>



            </div>







            <div className="
              mt-5
              flex
              items-center
              gap-3
            ">



              <img

                src="https://i.pravatar.cc/100?img=12"

                alt="Provider"

                className="
                  h-14
                  w-14
                  rounded-xl
                  object-cover
                "

              />




              <div>


                <h3 className="
                  text-base
                  font-bold
                ">

                  Michael Mensah

                </h3>



                <p className="
                  text-sm
                  text-emerald-600
                ">

                  Certified Electrician

                </p>




                <div className="
                  mt-1
                  flex
                  items-center
                  gap-1
                  text-sm
                ">


                  <FaStar className="text-yellow-500"/>

                  4.9


                </div>


              </div>


            </div>









            <div className="
              mt-5
              space-y-3
            ">



              {
                [
                  ["Emergency Repair","GH₵150"],
                  ["Installation","GH₵250"],
                  ["Inspection","GH₵80"],
                ].map((item)=>(


                  <div

                    key={item[0]}

                    className="
                      flex
                      justify-between
                      rounded-xl
                      bg-slate-50
                      px-4
                      py-3
                      text-sm
                    "

                  >

                    <span>

                      {item[0]}

                    </span>


                    <b>

                      {item[1]}

                    </b>


                  </div>


                ))
              }



            </div>








            <button className="
              mt-5
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-emerald-600
              py-3
              text-sm
              font-semibold
              text-white
              hover:bg-emerald-700
            ">


              Book Now

              <FaArrowRight/>


            </button>





          </div>



        </motion.div>





      </div>




    </section>


  );

}


export default Hero;