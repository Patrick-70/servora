import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";


function Contact() {

  const contactInfo = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      text: "+233 20 123 4567",
    },

    {
      icon: <FaEnvelope />,
      title: "Email",
      text: "support@servora.com",
    },

    {
      icon: <FaMapMarkerAlt />,
      title: "Office",
      text: "Cape Coast, Ghana",
    },

    {
      icon: <FaClock />,
      title: "Working Hours",
      text: "Mon - Fri\n8:00 AM - 6:00 PM",
    },
  ];


  return (

    <main className="bg-slate-50 pt-16">



      {/* Hero */}


      <section className="
        bg-gradient-to-r
        from-emerald-600
        via-emerald-500
        to-teal-500
        py-16
        text-white
      ">


        <div className="
          mx-auto
          max-w-6xl
          px-5
          text-center
        ">


          <span className="
            rounded-full
            bg-white/20
            px-4
            py-2
            text-sm
            font-semibold
          ">

            Contact Servora

          </span>




          <h1 className="
            mt-6
            text-4xl
            font-black
            md:text-5xl
          ">

            We'd Love to Hear

            <br />

            From You

          </h1>



          <p className="
            mx-auto
            mt-5
            max-w-2xl
            text-base
            leading-7
            text-emerald-100
          ">

            Have questions, feedback or need assistance?
            Our team is ready to help.

          </p>



        </div>


      </section>






      {/* Contact Cards */}


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


          {contactInfo.map((item) => (

            <div
              key={item.title}
              className="
                rounded-2xl
                bg-white
                p-5
                text-center
                shadow-md
              "
            >

              <div className="
                mx-auto
                text-3xl
                text-emerald-600
              ">

                {item.icon}

              </div>



              <h3 className="
                mt-4
                font-bold
                text-slate-900
              ">

                {item.title}

              </h3>



              <p className="
                mt-2
                whitespace-pre-line
                text-sm
                text-slate-500
              ">

                {item.text}

              </p>


            </div>

          ))}


        </div>


      </section>








      {/* Contact Form */}


      <section className="pb-16">


        <div className="
          mx-auto
          grid
          max-w-6xl
          gap-8
          px-5
          lg:grid-cols-2
        ">


          {/* Form */}


          <div className="
            rounded-2xl
            bg-white
            p-6
            shadow-lg
            ring-1
            ring-slate-200
          ">


            <h2 className="
              text-2xl
              font-bold
              text-slate-900
            ">

              Send us a Message

            </h2>



            <p className="
              mt-2
              text-sm
              text-slate-500
            ">

              Fill the form and our team will respond soon.

            </p>




            <form className="mt-6 space-y-4">


              {[
                {
                  label: "Full Name",
                  placeholder: "John Doe",
                  type: "text",
                },

                {
                  label: "Email Address",
                  placeholder: "john@example.com",
                  type: "email",
                },

                {
                  label: "Subject",
                  placeholder: "How can we help?",
                  type: "text",
                },
              ].map((field) => (

                <div key={field.label}>


                  <label className="
                    mb-1.5
                    block
                    text-sm
                    font-semibold
                    text-slate-700
                  ">

                    {field.label}

                  </label>



                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-50
                      px-4
                      py-3
                      text-sm
                      outline-none
                      focus:border-emerald-500
                    "
                  />


                </div>


              ))}



              <div>

                <label className="
                  mb-1.5
                  block
                  text-sm
                  font-semibold
                  text-slate-700
                ">

                  Message

                </label>



                <textarea
                  rows={4}
                  placeholder="Write your message..."
                  className="
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    p-4
                    text-sm
                    outline-none
                    focus:border-emerald-500
                  "
                />


              </div>





              <button
                type="submit"
                className="
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
                "
              >

                <FaPaperPlane />

                Send Message

              </button>


            </form>


          </div>






          {/* Right Side */}


          <div className="space-y-6">



            <div className="
              overflow-hidden
              rounded-2xl
              bg-white
              shadow-lg
            ">


              <iframe
                title="Servora Location"
                src="https://www.google.com/maps?q=Cape+Coast,+Ghana&output=embed"
                width="100%"
                height="300"
                loading="lazy"
                className="border-0"
              />


            </div>






            <div className="
              rounded-2xl
              bg-gradient-to-r
              from-emerald-600
              to-teal-500
              p-6
              text-white
            ">


              <h3 className="
                text-2xl
                font-bold
              ">

                Need Immediate Help?

              </h3>




              <p className="
                mt-3
                text-sm
                leading-6
                text-emerald-100
              ">

                Our support team is available to help
                you find the right professional.

              </p>




              <div className="
                mt-6
                flex
                flex-col
                gap-3
                sm:flex-row
              ">


                <a
                  href="tel:+233201234567"
                  className="
                    rounded-xl
                    bg-white
                    px-5
                    py-3
                    text-center
                    text-sm
                    font-semibold
                    text-emerald-600
                  "
                >

                  Call Support

                </a>




                <Link
                  to="/providers"
                  className="
                    rounded-xl
                    border
                    border-white
                    px-5
                    py-3
                    text-center
                    text-sm
                    font-semibold
                  "
                >

                  Browse Providers

                </Link>


              </div>


            </div>


          </div>


        </div>


      </section>



    </main>

  );
}


export default Contact;