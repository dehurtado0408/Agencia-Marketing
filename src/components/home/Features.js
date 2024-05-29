import { CheckIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "Modelo YOLO v3",
    description:
      "Implementación de un modelo pre-entrenado para el reconocimiento de objetos como vehiculos, motocicletas y bicicletas.",
  },
  {
    name: "Plate Recognizer",
    description:
      "Implementación de un modelo pre-entrenado con placas vehiculares de todo el mundo para extracción de placas vehiculares",
  },
  {
    name: "Autenticación Doble Factor",
    description:
      "Implementación de google authenticator para la autenticación de mayor seguridad en nuestro sistema.",
  },
  {
    name: "AXES",
    description:
      "Implementación de la libreria AXES para todo el monitoreo de acceso al sistema",
  },
  {
    name: "Personalización",
    description:
      "Personalización del sistema adminsitrador de Django para mayor comodidad del usuario.",
  },
  {
    name: "Pasarela de pago",
    description:
      "Implementación de una pasarela de pago como PayU para recibir los pagos electronicos",
  },
  {
    name: "Gestión de accesos",
    description:
      "Implementación de grupos de usuarios para gestionar todos los permisos del sistema para los usuarios registrados",
  },
  {
    name: "Responsive app",
    description:
      "Encuentra la comodidad de utilizar el sistema desde cualquier dispositivo con acceso a internet",
  },
];

export default function Features() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
        <div>
          <h2 className="text-lg font-semibold text-red-600">
            Todo lo que necesitas
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            En una sola plataforma
          </p>
          <p className="mt-4 text-lg text-gray-500">
            Estacionamiento inteligente del futuro. Agiliza tu tiempo y dinero
            con el reconocimiento de placas vehiculares, pagos electrónicos y
            una experiencia sin estrés. Ideal para centros comerciales,
            hospitales, empresas y más.
          </p>
        </div>
        <div className="mt-12 lg:col-span-2 lg:mt-0">
          <dl className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon
                    className="absolute h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="ml-9 text-lg font-medium leading-6 text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
