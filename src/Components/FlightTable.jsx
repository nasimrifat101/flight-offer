import PropTypes from 'prop-types';
import FlightRow from './FlightRow';

function FlightTable({ data }) {
  return (
    <div className="overflow-x-auto">
      {/* Render table with flight details */}
      <table className="min-w-full bg-white border">
        {/* Render table header */}
        <thead>
          <tr>
            <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Flight</th>
            <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Aircraft</th>
            <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Class</th>
            <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Fare</th>
            <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Route</th>
            <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Departure</th>
            <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Arrival</th>
            <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Duration</th>
            <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Price</th>
            <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Select Flight</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data?.map((offer, index) => (
            <FlightRow key={index} offer={offer} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

FlightTable.propTypes = {
  data: PropTypes.array.isRequired
}

export default FlightTable;
