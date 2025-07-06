import SpaceAppsLogo from "./SpaceAppsLogo";

const Hero = () => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 flex items-center justify-center px-4 py-8">
            <div className="container mx-auto max-w-6xl">
                <div className="bg-gradient-to-br from-orange-500/90 via-orange-600/85 to-red-500/90 backdrop-blur-lg rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="text-left space-y-6">
                            <div className="flex justify-start mb-6">
                                <SpaceAppsLogo />
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                                    NASA SPACE <br /> APPS <br /> CHALLENGE <br />
                                    <span className="text-white">2025</span>
                                </h1>
                            </div>
                            <div className="space-y-3 text-sm sm:text-base lg:text-lg text-white/95 max-w-md drop-shadow-md">
                                <p className="font-medium">
                                    Build. Code. Create. Solve <br /> space & Earth challenges
                                    <br /> with NASA !
                                </p>
                                <p className="font-medium">
                                    Register now and connect <br /> with innovators like you.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <ActionButton text="Volunteer Form" link="https://docs.google.com/forms/d/e/1FAIpQLSfyrJnsBn_qe9yCFZWyG8S7_BRjFcVrQlR3VKdJR0rsIcK4uw/viewform" />
                            <ActionButton text="Participant Registration" link="https://forms.gle/NsHJ5n35AzY6eJHi6" />
                            <ActionButton text="Instagram" link="https://www.instagram.com/spaceappssonipat/" />
                            <ActionButton text="Whatsapp" link="https://chat.whatsapp.com/HSe8IdL1ux2J5UzxzGxIyk?mode=ac_t" />
                            <ActionButton text="X" link="https://x.com/NSACSonipat" />
                            <ActionButton text="Facebook" link="https://www.facebook.com/people/NSAC-Sonipat/61577727977646/" />
                            <ActionButton text="LinkedIn" link="https://www.linkedin.com/company/nasa-space-apps-sonipat/" />
                            <ActionButton text="Support Email" link="mailto:support.spaceappschallenge2025@gmail.com" />
                            <ActionButton text="NASA Official Site" link="https://www.spaceappschallenge.org/" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ActionButton = ({ text, link }) => {
    const handleClick = () => {
        if (link) {
            if (link.startsWith('mailto:')) {
                window.location.href = link;
            } else {
                window.open(link, '_blank');
            }
        }
    };

    return (
        <button
            onClick={handleClick}
            className="w-full max-w-sm px-6 py-4 bg-white/95 backdrop-blur-sm text-gray-700 rounded-full font-medium text-left flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-white shadow-lg border border-white/30 group cursor-pointer"
        >
            <span className="text-sm sm:text-base group-hover:font-semibold transition-all">
                {text}
            </span>
        </button>
    );
};
export default Hero;
