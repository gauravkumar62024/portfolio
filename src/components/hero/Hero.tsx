import React from "react";

const Hero: React.FC = () => {
    return (
        <section className="py-20 text-center min-h-screen items-center align-center justify-center flex flex-col px-4">
            <div className="max-w-4xl mx-auto">
                <div className="relative inline-block mb-8">
                    <img
                        src="gaurav.jpg"
                        alt="Gaurav Kumar"
                        className="mx-auto w-48 h-48 rounded-full object-cover shadow-2xl ring-4 ring-blue-500 dark:ring-blue-400"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20"></div>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                    Gaurav Kumar
                </h1>
                <p className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-4">
                    PhD Scholar in Data Science
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 mx-auto max-w-3xl leading-relaxed">
                    I am a CSE graduate from Darbhanga College of Engineering. After completing my B.Tech, I pursued my M.Tech from Jawaharlal Nehru University. Currently, I&aposm a research scholar at IISER Bhopal, specializing in Data Science. I&aposm a sports enthusiast who loves playing badminton and enjoys being a good listener.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="resume.pdf"
                        className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download Resume
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:border-blue-500 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
