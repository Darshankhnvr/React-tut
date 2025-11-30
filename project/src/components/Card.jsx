
function Card(props) {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
      {/* Image */}
      <img 
        src="https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=800" 
        alt="Nature" 
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800">
          {props.name}
        </h2>
        <p className="text-gray-600 mt-2">
          Step into a world of endless possibilities. Discover new places, ideas, and experiences.
        </p>

        {/* Button */}
        <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
          Learn More
        </button>
      </div>
    </div>
  )
}

export default Card

