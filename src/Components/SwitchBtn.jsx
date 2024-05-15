import PropTypes from 'prop-types';

// SwitchBtn component for rendering a set of buttons to switch between different flight options
const SwitchBtn = ({ handleButtonClick, activeButton }) => {
  
    return (
        <div className="flex justify-center items-center space-x-4 mb-6">
            {/* Mapping through flight options and rendering buttons */}
            {['Round Trip', 'One Way', 'Multi-city'].map(buttonName => ( 
                <button
                    key={buttonName}
                    className={`px-4 py-2 rounded ${activeButton === buttonName ? 'bg-blue-600 text-white' : 'bg-blue-300 text-white'}`}
                    onClick={() => handleButtonClick(buttonName)}
                >
                    {buttonName}
                </button>
            ))}
        </div>
    );
};

// PropTypes validation for the SwitchBtn component
SwitchBtn.propTypes = {
    handleButtonClick: PropTypes.func.isRequired, 
    activeButton: PropTypes.string.isRequired 
};

export default SwitchBtn;
