import logo_ueb from "../../assets/img/logo-ueb.png"
import logo_centromayor from "../../assets/img/logo_centromayor.webp"
import logo_compensar from "../../assets/img/logo_compensar.png"
import logo_mallplaza from "../../assets/img/logo_mallplaza.png"
import logo_plazacentral from "../../assets/img/logo_plazacentral.webp"
import logo_ucentral from "../../assets/img/logo_ucentral.png"
import logo_sanitas from "../../assets/img/logo_sanitas.png"

export default function LogoCloud() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-20"
              src={logo_ueb}
              alt="Tuple"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-20"
              src={logo_centromayor}
              alt="Mirage"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-20"
              src={logo_compensar}
              alt="StaticKit"
            />
          </div>
          <div className="mt-4 col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
            <img
              className="h-12"
              src={logo_mallplaza}
              alt="Transistor"
            />
          </div>
          <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
            <img
              className="h-20"
              src={logo_ucentral}
              alt="Workcation"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
