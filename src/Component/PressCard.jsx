const PressCard = ({ title, description, link, image, icon, date, bsns }) => (
    <div className="bg-white border border-primary-100 shadow-sm rounded overflow-hidden w-full">
        <img src={image} className="w-full  object-cover " />

        <div className="p-4">
            <h2 className="text-xl ">{title}</h2>
            <div className="icn flex gap-2 mt-2">
                <img src={icon} className="w-5" />
                <p className="text-sm ">
                    {bsns} | <span className="text-primary-600">{date}</span>
                </p>
            </div>
        </div>
        <p className="text-sm p-4 text-primary-800">{description}</p>
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
        >
        </a>
    </div>
);

export default PressCard;