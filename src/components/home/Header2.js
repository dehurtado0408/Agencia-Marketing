import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

function Header() {
  return (
    <main>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
          <div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                Elige FastPay, más <span> </span>
                <Typewriter
                  //style={{ color: "#f84e44", fontWeight: "bold" }}
                  words={["rápido.", "seguro.", "cómodo."]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={120}
                  deleteSpeed={60}
                  delaySpeed={1000}
                />
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                Estacionamiento inteligente del futuro. Agiliza tu tiempo y
                dinero con el reconocimiento de placas vehiculares, pagos
                electrónicos y una experiencia sin estrés. Ideal para centros
                comerciales, hospitales, empresas y más.
              </p>
              <ul className="flex gap-8 justify-center py-32">
                <li className="inline-flex border-b-2 border-transparent hover:border-red-button transition duration-300 ease-in-out">
                  <Link
                    to="/servicios/algoAqui"
                    className="mt-1 text-lg font-medium leading-8 text-gray-700 sm:text-center"
                  >
                    Inteligencia Artificial
                  </Link>
                </li>
                <li className="inline-flex border-b-2 border-transparent hover:border-red-button transition duration-300 ease-in-out">
                  <Link
                    to="/servicios/algoAqui"
                    className="mt-1 text-lg font-medium leading-8 text-gray-700 sm:text-center"
                  >
                    Sistema Administración
                  </Link>
                </li>
                <li className="inline-flex border-b-2 border-transparent hover:border-red-button transition duration-300 ease-in-out">
                  <Link
                    to="/servicios/algoAqui"
                    className="mt-1 text-lg font-medium leading-8 text-gray-700 sm:text-center"
                  >
                    Manuales de Uso
                  </Link>
                </li>
                <li className="inline-flex border-b-2 border-transparent hover:border-red-button transition duration-300 ease-in-out">
                  <Link
                    to="/servicios/algoAqui"
                    className="mt-1 text-lg font-medium leading-8 text-gray-700 sm:text-center"
                  >
                    Manuales Tecnicos
                  </Link>
                </li>
                <li className="inline-flex border-b-2 border-transparent hover:border-red-button transition duration-300 ease-in-out">
                  <Link
                    to="/servicios/algoAqui"
                    className="mt-1 text-lg font-medium leading-8 text-gray-700 sm:text-center"
                  >
                    Plan de Pruebas
                  </Link>
                </li>
              </ul>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
              <svg
                className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                  fillOpacity=".3"
                  d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                  <linearGradient
                    id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                    x1="1155.49"
                    x2="-78.208"
                    y1=".177"
                    y2="474.645"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#ef1e13" />
                    <stop offset={1} stopColor="#ff0c00" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Header;
