const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo Section */}
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">🚀</span>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-gray-900">NASA Space Apps</h1>
                        <p className="text-sm text-gray-600">Challenge 2025</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
