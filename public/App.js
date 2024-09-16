import { useState } from 'react';

const PropertyListing = () => {
  const [expandedPropertyId, setExpandedPropertyId] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePropertyClick = (propertyId) => {
    setExpandedPropertyId((prevId) => (prevId === propertyId ? null : propertyId));
    setCurrentImageIndex(0);  
  };

  const handleNextImage = (property) => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % property.images.length);
  };

  const handlePrevImage = (property) => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + property.images.length) % property.images.length);
  };

  const properties = [
    {
        id: 3,
        images: ['https://images.big.dk//wp-content/uploads/2024/04/21_210100_N114_hero1.jpg?tr=h-700','https://media.inmobalia.com/imgV1/B98Le8~d7M9k3DegigsNUPSTJTVpHDjNIUWnFEcMEa6XFdbEBfCXtjZrv1kKflFQkZcHpe7bdSH7WUNilacqzQj7TcEaZ4KZ2ziY0qkG4RMmCFwQOmwmznNo9frzy65_Y4RADCjVxMsI6TAA4fjnR~9gcew5QiAaVyGfti7v4z88Bze041Y2P_wJgb9G9YFcBLS9IDP6GfG_y3e08fIKc3MB9CcgTnogHv_cjh7V5HIbE2lPeLjcZS_j3Q0cJ~gQULfiz5lnw3ng0UmkY_T56ioXy_i7uH9NjxpQ4gRSq5bJ3wd88TvWgGe145G~VnDgieRGOmef.jpg', 'https://media.inmobalia.com/imgV1/B8vEv5Xh_VThvnEqMx4G0ZxU~~H0Ar_8Bn_AfAx~4dnt796zQ9QIPwzdr9PkzIdRpbeOYktBAPFfTt23HPhndt5b7cRr2vg76pwDjdUVJPRRNfWG6KAQOyQW6xaXnmsAQZuz5VjXZsFlD51W~7i3hzLSe2n_1rufkIJV7_pxcfloeOiKeUZleXaCh63dBSJCwNNsU3fXEo__h590mzibbd2X5n9yr9THE9Eyp5x~u~g9FR_m4XADfTh8I_1wgYpDVsjRgpEsYwjz0qTtjx1x0zeKTabJ4CjAUBZ0T7ff0wNvVIbo0DgZQPXwQzRNAPDSQQ_qCDqSDaRvi_U1YxEBd3EtHmQQwaOn_3v_Jpy~dClJpJ7BjH9xUfhUrezyZMX5KQ--.jpg', 'https://via.placeholder.com/400x300?text=2'],
        title: 'Cozy Cottage in the Countryside',
        location: 'Austin, TX',
        description: 'A quaint cottage surrounded by greenery and offering peace and tranquility.',
        price: '$450,000',
        amenities: ['Garden', 'Fireplace', 'Parking', 'Pet-friendly'],
      },
    
    {
      id: 2,
      images: ['https://images.big.dk//wp-content/uploads/2024/05/22545_N142_hero1-e1715717818747.jpg?tr=h-700','https://t4.ftcdn.net/jpg/05/68/06/11/360_F_568061114_vxGcVBOQVVKoehZ8mjNdXtlr38UYUAYq.jpg', 'https://via.placeholder.com/400x300?text=2'],
      title: 'Modern Apartment in New York',
      location: 'New York, NY',
      description: 'A stylish apartment in the heart of the city with modern interiors and rooftop access.',
      price: '$850,000',
      amenities: ['Rooftop', 'Gym', '24/7 Security', 'Parking'],
    },
    {
        id: 1,
        images: ['https://images.big.dk//wp-content/uploads/2022/06/19_ARC_N943_webproject.jpg?tr=h-700','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgII2NdC5JQYGRySrda0FQym-wqwo25XRQ-g&s', 'https://via.placeholder.com/400x300?text=2'],
        title: 'Luxury Villa in California',
        location: 'Los Angeles, CA',
        description: 'A beautiful luxury villa with an ocean view, private pool, and modern amenities.',
        price: '$1,200,000',
        amenities: ['Pool', 'Gym', 'Garage', 'Garden'],
      },
    {
      id: 4,
      images: ['https://images.big.dk//wp-content/uploads/2024/04/ARCD_CONCEPT-REFINEMENT_INTERIOR-STAIR-VIEW_by-Kilograph-2288.jpg?tr=h-700','https://s3.us-east-2.amazonaws.com/emerald-kite-photos/1007425/larger/1788073/vacation-rental.jpg', 'https://via.placeholder.com/400x300?text=2'],
      title: 'Penthouse with Skyline View',
      location: 'Chicago, IL',
      description: 'An elegant penthouse apartment with breathtaking city skyline views.',
      price: '$2,000,000',
      amenities: ['Skyline View', 'Private Elevator', 'Gym', 'Concierge'],
    },
  ];

  return (<div className="grid grid-cols-1 gap-8 justify-items-center mt-7">
    {properties.map((property) => (
      <div key={property.id} className="relative group">
        <div onClick={() => handlePropertyClick(property.id)} className="cursor-pointer flex flex-col-reverse md:flex-row  items-center md:items-start space-x-4">
          <div className="flex flex-col items-start w-[330px] md:w-[200px] text-sm ml-6 md:ml-0">
            <h3 className="font-semibold text-left">{property.title}</h3>
            <p className="text-gray-500 text-left">{property.location}</p>
          </div>
          <img
            src={property.images[0]}
            alt={property.title}
            className="object-cover w-80 h-52 transition-transform duration-300 transform"
          />
        </div>
  
        {expandedPropertyId === property.id && (
          <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
            <div className="bg-white p-9 shadow-lg w-11/12 md:w-3/4 lg:w-[1/2]">
              <button
                className="absolute top-4 right-4 text-2xl font-bold"
                onClick={() => setExpandedPropertyId(null)}
              >
                &times;
              </button>
              <div className="relative">
                <img
                  src={property.images[currentImageIndex]}
                  alt={property.title}
                  className="object-cover w-full h-[19rem] md:h-[28rem]"
                />
                <button
                  onClick={() => handlePrevImage(property)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2"
                >
                  &#10094;
                </button>
                <button
                  onClick={() => handleNextImage(property)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2"
                >
                  &#10095;
                </button>
              </div>
              <div className="mt-4">
                <h1 className="text-xl md:text-2xl font-bold">{property.title}</h1>
                <p className="mt-2 text-gray-600">{property.description}</p>
                <p className="mt-2 text-lg font-semibold">Price: {property.price}</p>
                <p className="mt-2">Location: {property.location}</p>
                <p className="mt-2">Amenities: {property.amenities.join(', ')}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
  
  );
};

export default PropertyListing;
