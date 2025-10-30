import Image from "next/image";

const EventCard = ({ event }) => {
  const { title, description, date, image } = event;

  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      {image && (
        <div className="relative w-full h-48">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      )}
      <div className="p-4 text-left">
        <h3 className="text-xl font-semibold text-[#003f87]">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <p className="text-gray-500 text-xs mt-2 italic">
          📅 {new Date(date).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
