import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import logo_fastpay from "assets/img/FastPay/png/logo-no-background.png";
import gif_loading from "assets/img/gif_loading.gif";
import { useState } from "react";
import { HashLoader } from "react-spinners";

function Navbar() {
  const [loading, setLoading] = useState(true);

  window.onscroll = function() {scrollFunction()}

  function scrollFunction() {
    if(document.getElementById('navbar')){
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById('navbar').classList.add('shadow-navbar');
            document.getElementById('navbar').classList.add('bg-white');
        }else{
            document.getElementById('navbar').classList.remove('shadow-navbar');
            document.getElementById('navbar').classList.remove('bg-white');
        }
    }
}

  return (
    <nav id="navbar" className="w-full py-4 top-0 transition duration-300 z-40 fixed">
      <div className="px-4 sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
          <Link to="/" className="ml-4 mt-2">
            <img src={logo_fastpay} width={130} height={120} />
          </Link>
          <div className="ml-4 mt-2 flex-shrink-0">
            <NavLink
              to="/casos"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-red-button transition duration-300 ease-in-out mx-4"
            >
              Casos
            </NavLink>
            <NavLink
              to="/servicios"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-red-button transition duration-300 ease-in-out mx-4"
            >
              Servicios
            </NavLink>
            <NavLink
              to="/nosotros"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-red-button transition duration-300 ease-in-out mx-4"
            >
              Nosotros
            </NavLink>
            <NavLink
              to="/carreras"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-red-button transition duration-300 ease-in-out mx-4"
            >
              Carreras
            </NavLink>
            <NavLink
              to="/blog"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-red-button transition duration-300 ease-in-out mx-4"
            >
              Blog
            </NavLink>
            <NavLink
              to="/contacto"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-red-button transition duration-300 ease-in-out mx-4"
            >
              Contacto
            </NavLink>
            <Link
              to="/contacto"
              className="inline-flex items-center rounded-md border border-transparent bg-red-button ml-12 px-6 py-2 text-lg font-bold text-white shadow-sm transition hover:duration-300 ease-in-out hover:bg-black focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2"
            >
              Hire Us
              <HashLoader
                className="ml-3 -mr-1 h-5 w-5"
                loading={loading}
                size={20}
                color="#ffffff"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Navbar);
