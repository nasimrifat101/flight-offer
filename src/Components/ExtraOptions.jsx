import PropTypes from 'prop-types';

const ExtraOptions = ({ handleSearchClick }) => {
  return (
    <div className="flex items-center w-full mb-6">
      <div className="flex items-center">
        <input type="checkbox" className="checkbox checkbox-info mr-2" />
        <button className="text-xl font-semibold">Extra Options</button>
      </div>
      <div className="flex mx-auto">
        <div className="flex justify-center items-center space-x-4">
          <p className="font-semibold text-xl">Environment</p>
          <label className="flex items-center">
            <input type="radio" name="radio-7" className="radio radio-info mr-2" defaultChecked />
            <p className="text-lg font-semibold"> Dummy</p>
          </label>
          <label className="flex items-center">
            <input type="radio" name="radio-7" className="radio radio-info mr-2" />
            <p className="text-lg font-semibold"> PDT</p>
          </label>
        </div>
      </div>
      <button onClick={handleSearchClick} className="btn bg-blue-600 text-white w-40">Search</button>
    </div>
  );
};

ExtraOptions.propTypes = {
  handleSearchClick: PropTypes.func.isRequired,
};

export default ExtraOptions;
