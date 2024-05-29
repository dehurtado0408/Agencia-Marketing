import centro_comercial from "../../assets/img/centro_comercial.jpg";
import university from "../../assets/img/university.jpg";
import hospital from "../../assets/img/hospital.jpg";
import doctora from "../../assets/img/doctora.jpg";

const posts = [
  {
    title: "Centros Comerciales de Bogotá",
    href: "#",
    category: { name: "Blog", href: "#" },
    description:
      "Implementado en centros comerciales de Bogotá, FastPay mejora la eficiencia y la experiencia del usuario, reduciendo tiempos de espera y ofreciendo un pago rápido y seguro.",
    date: "Mar 16, 2024",
    datetime: "2024-03-16",
    imageUrl: centro_comercial,
    readingTime: "6 min",
    author: {
      name: "Carlos Andres Perez",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Hospitales de Bogotá",
    href: "#",
    category: { name: "Blog", href: "#" },
    description:
      "La posibilidad de realizar el pago del parqueadero de manera rápida y sencilla a través de cualquier dispositivo con acceso a internet, sin necesidad de efectivo o tarjetas físicas, ofrece una mayor comodidad a los visitantes.",
    date: "Mar 10, 2024",
    datetime: "2024-03-10",
    imageUrl: hospital,
    readingTime: "4 min",
    author: {
      name: "Dra. María Fernanda Rodríguez",
      href: "#",
      imageUrl: doctora,
    },
  },
  {
    title: "Universidades de Bogotá",
    href: "#",
    category: { name: "Case Study", href: "#" },
    description:
      "La experiencia general del estudiante en la universidad se verá mejorada al reducirse el tiempo de espera y al agilizarse el proceso de estacionamiento. Esto puede contribuir a una mayor satisfacción del estudiante y a una mejor percepción de la universidad.",
    date: "Feb 12, 2024",
    datetime: "2024-02-12",
    imageUrl: university,
    readingTime: "11 min",
    author: {
      name: "Diana Mendoza",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function UseCases() {
  return (
    <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Algunos de nuestros casos de estudio
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-red-500 underline">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={post.author.imageUrl}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href} className="hover:underline">
                        {post.author.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
