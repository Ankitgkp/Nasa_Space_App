import spaceAppsLogo from '../assets/LARGE- SpaceApps-Logo-2ColorBlack-Default.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Logo and Description */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 p-1">
                                <img
                                    src={spaceAppsLogo}
                                    alt="NASA Space Apps Challenge Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold drop-shadow-md">NASA Space Apps</span>
                        </div>
                        <p className="text-white/80 text-sm drop-shadow-sm">
                            Building the future through space innovation and collaboration with NASA.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold drop-shadow-md">Quick Links</h3>
                        <div className="space-y-2 text-sm">
                            <a href="#" className="block text-white/70 hover:text-white transition-colors drop-shadow-sm">About Challenge</a>
                            <a href="#" className="block text-white/70 hover:text-white transition-colors drop-shadow-sm">Registration</a>
                            <a href="#" className="block text-white/70 hover:text-white transition-colors drop-shadow-sm">Guidelines</a>
                            <a href="#" className="block text-white/70 hover:text-white transition-colors drop-shadow-sm">Resources</a>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold drop-shadow-md">Connect</h3>
                        <div className="space-y-2 text-sm text-white/80">
                            <p className="drop-shadow-sm">📍 Sonipat, Delhi NCR</p>
                            <p className="drop-shadow-sm">📅 October 4-5, 2025</p>
                            <p className="drop-shadow-sm">📧 support@spaceapps.nasa.gov</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/80">
                    <p className="drop-shadow-sm">&copy; {currentYear} NASA Space Apps Challenge. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
