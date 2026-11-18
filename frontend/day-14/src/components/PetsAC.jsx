export default function PetsAC({ image, name, type, age, location }) {
  return (
    <div className="flex justify-center border border-text/30">
      <div className="flex flex-col justify-center items-center object-cover hover:bg-blue-50">
        {/* Image */}
        <img className="w-100 h-100 object-cover" src={image} alt={name} />
        {/* Name */}
        <div className="flex flex-col items-center justify-center gap-2 p-6">
          <p className="text-text text-4xl font-bold">{name}</p>
          <span className="text-sm text-gray-500">Name</span>

          <div className="flex justify-center gap-8">
            {/* Type */}
            <div>
              <p className="flex text-text text-xl font-semibold font-gray-500">
                {type}
              </p>
              <span className="text-sm text-gray-500">Type</span>
            </div>

            {/* Age */}
            <div>
              <p className="flex text-text text-xl font-semibold font-gray-500">
                {age}
              </p>
              <span className="text-sm text-gray-500">Age</span>
            </div>

            {/* Location */}
            <div>
              <p className="flex text-text text-xl font-semibold font-gray-500">
                {location}
              </p>
              <span className="text-sm text-gray-500">Location</span>
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
            ADOPT ME
          </button>
        </div>
      </div>
    </div>
  );
}
