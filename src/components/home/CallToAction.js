export default function CTA() {
    return (
      <div className="bg-white">
        <div className="mx-auto lg:mx-12 max-w-full py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">¿Listo para iniciar?</span>
            <span className="block text-red-button">Empiza con tu plan gratuito.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-button px-5 py-3 text-base font-medium text-white hover:bg-red-700"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-gray-250 bg-white px-5 py-3 text-base font-medium text-red-button hover:bg-red-100 "
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }