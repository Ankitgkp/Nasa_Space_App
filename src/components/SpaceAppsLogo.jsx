import spaceAppsLogo from '../assets/LARGE- SpaceApps-Logo-2ColorBlack-Default.png';

const SpaceAppsLogo = ({ className = "w-24 h-24 lg:w-28 lg:h-28" }) => {
    return (
        <div className={`${className} bg-white rounded-full flex items-center justify-center shadow-xl p-3`}>
            <img
                src={spaceAppsLogo}
                alt="NASA Space Apps Challenge Logo"
                className="w-full h-full object-contain"
            />
        </div>
    );
};

export default SpaceAppsLogo;
