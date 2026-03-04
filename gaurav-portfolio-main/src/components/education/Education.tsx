import React from 'react';

const Education: React.FC = () => {
    const educationItems = [
        {
            degree: 'PhD',
            institution: 'IISER Bhopal, MP',
            period: '2022-pursuing',
            field: 'Data Science'
        },
        {
            degree: 'M.Tech',
            institution: 'Jawaharlal Nehru University, Delhi',
            period: '2020-2022',
            field: 'Computer Science and Engineering'
        },
        {
            degree: 'B.Tech',
            institution: 'Darbhanga College of Engineering, Darbhanga',
            period: '2015-2019',
            field: 'Computer Science and Engineering'
        }
    ];

    return (
        <section id="education" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                    Education
                </h2>
                
                <div className="max-w-4xl mx-auto space-y-6">
                    {educationItems.map((item, index) => (
                        <div 
                            key={index} 
                            className="group bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg border-l-4 border-blue-500 dark:border-blue-400 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {item.degree}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 font-medium mt-2">
                                        {item.institution}
                                    </p>
                                    <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
                                        {item.field}
                                    </p>
                                </div>
                                <div className="mt-4 md:mt-0">
                                    <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
                                        {item.period}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;