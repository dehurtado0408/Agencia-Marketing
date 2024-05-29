function CaseCard({ data, index }) {
  return (
    <div
      onMouseEnter={() => {
        const title_element = document.getElementById(index);
        title_element.classList.add("text-red-button");
      }}
      onMouseLeave={() => {
        const title_element = document.getElementById(index);
        title_element.classList.remove("text-red-button");
      }}
      className="flex flex-col overflow-hidden rounded-lg shadow-lg"
    >
      <div className="flex-shrink-0">
        <img className="h-96 w-full object-cover" src={data.imageUrl} alt="" />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <p className="text-lg font-medium text-red-600">
            <a href={data.category.href} className="hover:underline">
              {data.category.name}
            </a>
          </p>
          <a href={data.href} className="mt-2 block">
            <p
              id={data.id}
              className="lg:text-4xl text-2xl font-medium text-gray-900 transition duration-500 ease-in-out"
            >
              {data.title}
            </p>
            <p className="mt-6 text-lg text-gray-500 leading-7">{data.description}</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CaseCard;
