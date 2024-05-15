import PropTypes from 'prop-types';

function FlightRow({ offer }) {
  // Destructuring props
  const { price, class: flightClass, itineraries, fareBasis } = offer;
  const { segments, duration } = itineraries[0];

  // Rendering table row with flight details
  return (
    <tr className="hover:bg-gray-100 even:bg-gray-50">
      {/* Render carrier code and flight number for each segment */}
      <td className="py-3 px-6 border-b">
        {segments.map((segment, index) => (
          <div key={index}>
            {segment.carrierCode} {segment.flightNumber}
          </div>
        ))}
      </td>
      {/* Render aircraft for each segment */}
      <td className="py-3 px-6 border-b">
        {segments.map((segment, index) => (
          <div key={index}>
            {segment.aircraft}
          </div>
        ))}
      </td>
      {/* Render flight class for the first itinerary */}
      <td className="py-3 px-6 border-b list-none">
        {flightClass[0]?.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </td>
      {/* Render fare basis for the first itinerary */}
      <td className="py-3 px-6 border-b list-none">
        {fareBasis[0]?.map((f, index) => (
          <li key={index}>{f}</li>
        ))}
      </td>
      {/* Render departure and arrival airports for each segment */}
      <td className="py-3 px-6 border-b">
        {segments.map((segment, index) => (
          <div key={index}>
            {segment.departure.iataCode} - {segment.arrival.iataCode}
          </div>
        ))}
      </td>
      {/* Render formatted departure times for each segment */}
      <td className="py-3 px-6 border-b">
        {segments.map((segment, index) => (
          <div key={index}>
            {new Date(segment.departure.at).toLocaleString()}
          </div>
        ))}
      </td>
      {/* Render formatted arrival times for each segment */}
      <td className="py-3 px-6 border-b">
        {segments.map((segment, index) => (
          <div key={index}>
            {new Date(segment.arrival.at).toLocaleString()}
          </div>
        ))}
      </td>
      {/* Render duration of the first itinerary */}
      <td className="py-3 px-6 border-b">{duration}</td>
      {/* Render price of the offer */}
      <td className="py-3 px-6 border-b">${price}</td>
      {/* Render select button */}
      <td className="py-3 px-6 border-b">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Select</button>
      </td>
    </tr>
  );
}

// PropTypes validation for the FlightRow component
FlightRow.propTypes = {
  offer: PropTypes.shape({
    price: PropTypes.string.isRequired, // Price of the flight offer
    class: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired, // Flight classes
    itineraries: PropTypes.arrayOf(
      PropTypes.shape({
        segments: PropTypes.arrayOf(
          PropTypes.shape({
            carrierCode: PropTypes.string.isRequired, // Carrier code
            flightNumber: PropTypes.string.isRequired, // Flight number
            aircraft: PropTypes.string.isRequired, // Aircraft type
            departure: PropTypes.shape({
              iataCode: PropTypes.string.isRequired, // Departure airport code
              at: PropTypes.string.isRequired, // Departure time
            }).isRequired,
            arrival: PropTypes.shape({
              iataCode: PropTypes.string.isRequired, // Arrival airport code
              at: PropTypes.string.isRequired, // Arrival time
            }).isRequired,
          })
        ).isRequired,
        duration: PropTypes.string.isRequired, // Duration of the itinerary
      })
    ).isRequired,
    fareBasis: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired, // Fare basis
  }).isRequired,
};

export default FlightRow;
