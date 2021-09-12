function Story({ name, image }) {
  return (
    <div className="relative mt-6 md:w-28 md:h-40 h-28 w-28 overflow-hidden cursor-pointer hover:shadow-lg">
      <img
        className="h-40 w-max object-cover rounded-md shadow-md"
        src={image}
      />
      <p className="absolute bottom-2 left-1 font-bold text-white">{name}</p>
    </div>
  );
}

export default Story;
