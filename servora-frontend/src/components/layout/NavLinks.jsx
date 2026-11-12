import { NavLink } from "react-router-dom";


const links = [

  {
    name:"Home",
    path:"/"
  },

  {
    name:"Services",
    path:"/services"
  },

  {
    name:"Providers",
    path:"/providers"
  },

  {
    name:"About",
    path:"/about"
  },

  {
    name:"Contact",
    path:"/contact"
  },

];



function NavLinks(){


return (

<div className="
hidden
items-center
gap-6
lg:flex
">


{
links.map((link)=>(


<NavLink

key={link.path}

to={link.path}

className={({isActive})=>

`
text-sm
font-medium
transition

${
isActive

?

"text-emerald-600"

:

"text-slate-700 hover:text-emerald-600"

}

`

}

>


{link.name}


</NavLink>


))

}


</div>

);


}


export default NavLinks;