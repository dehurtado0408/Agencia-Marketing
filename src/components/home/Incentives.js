import icon_cola from "../../assets/img/cola.png";
import icon_ia from "../../assets/img/automatizacion.png";
import icon_security from "../../assets/img/proteger.png";

const incentives = [
  {
    name: "Alto nivel de seguridad",
    imageSrc: icon_security,
    description:
      "Ofrecemos robustas ventajas de seguridad para tu sitio de administración como la protección contra ataques, validación de datos robusta, gestión de usuarios y autenticación.",
  },
  {
    name: "Libre de filas para pagar",
    imageSrc: icon_cola,
    description:
      "Elimina las filas de estacionamiento y ahorra tiempo con nuestro sistema de pago basado en pagos virtuales.",
  },
  {
    name: "Implementación de inteligencia artificial",
    imageSrc: icon_ia,
    description:
      "Utiliza la potencia de la IA para el reconocimiento automático de placas.",
  },
];

export default function Incentives() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Construimos nuestro negocio en base a la satisfacción del cliente
            </h2>
            <p className="mt-4 text-gray-500">
              En el corazón de nuestro negocio se encuentra un profundo
              compromiso de brindar un servicio al cliente excepcional.
              Reconocemos que nuestros clientes son la base de nuestro éxito y
              su satisfacción es primordial para nuestro crecimiento continuo.
              Desde el principio, hemos construido nuestra empresa sobre una
              base centrada en el cliente, asegurando que cada interacción se
              caracterice por la empatía, el profesionalismo y un genuino deseo
              de superar las expectativas.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                  <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-medium text-gray-900">
                    {incentive.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
