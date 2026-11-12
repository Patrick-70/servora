import { useEffect, useState } from "react";
import {
  FaUsers,
  FaTools,
  FaStar,
} from "react-icons/fa";

function AnimatedNumber({ value, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += Math.ceil(value / 50);

      if (current >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}


function Stats() {
  const stats = [
    {
      icon: FaUsers,
      value: 500,
      suffix: "+",
      title: "Verified Providers",
    },
    {
      icon: FaTools,
      value: 30,
      suffix: "+",
      title: "Service Categories",
    },
    {
      icon: FaStar,
      value: 5000,
      suffix: "+",
      title: "Happy Customers",
    },
  ];


  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-2xl bg-white/70 p-5 shadow-sm backdrop-blur-md ring-1 ring-slate-200"
          >

            <div className="flex items-center gap-3">

              <div className="text-xl text-emerald-600">
                <Icon />
              </div>


              <h3 className="text-3xl font-bold text-slate-900">

                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                />

              </h3>

            </div>


            <p className="mt-3 text-sm text-slate-500">
              {stat.title}
            </p>


          </div>
        );
      })}
    </div>
  );
}


export default Stats;