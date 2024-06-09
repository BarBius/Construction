import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';

function Responsive({ children }) {
    const isDesktop = useMediaQuery({ query: '(min-width: 1224px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1223px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' }); // Adjusted for smaller devices

    return (
        <div>
            {/* Rendering children */}
            {children}

            {/* Returning the boolean values for each device category */}
            {isDesktop && <p>This is a desktop.</p>}
            {isTablet && <p>This is an iPad/tablet.</p>}
            {isMobile && <p>This is a smartphone.</p>}
        </div>
    );
}

// Prop validation using PropTypes
Responsive.propTypes = {
    children: PropTypes.node.isRequired // Children are required and must be of type node
};

export default Responsive;
