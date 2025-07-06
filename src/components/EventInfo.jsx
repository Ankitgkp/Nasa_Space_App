const EventInfo = () => {
    return (
        <section className="py-8 lg:py-12 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500">
            <div className="container mx-auto px-4 text-center max-w-4xl">
                <div className="space-y-3 mb-6">
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white drop-shadow-md">
                        Hackathon: Oct 4-5 2025
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-white/90 font-medium drop-shadow-md">
                        Sonipat (Delhi NCR)
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <button
                        onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfyrJnsBn_qe9yCFZWyG8S7_BRjFcVrQlR3VKdJR0rsIcK4uw/viewform', '_blank')}
                        className="px-6 py-3 bg-white/95 backdrop-blur-sm text-gray-800 rounded-full font-medium hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-lg border border-white/30 cursor-pointer"
                    >
                        Volunteer Form
                    </button>
                    <button
                        onClick={() => window.open('https://forms.gle/TB5paSnGEYBT5k6K7', '_blank')}
                        className="px-6 py-3 bg-white/95 backdrop-blur-sm text-gray-800 rounded-full font-medium hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-lg border border-white/30 cursor-pointer"
                    >
                        Participate Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default EventInfo;
