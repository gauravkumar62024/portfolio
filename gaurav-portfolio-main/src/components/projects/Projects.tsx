import React from 'react';

const Projects: React.FC = () => {
    const projects = [
        {
            id: 1,
            title: "Fake News Detection And Link Prediction",
            description: "A research project focused on developing advanced algorithms to identify fake news and predict potential link connections in social media networks. Using graph neural networks and natural language processing techniques to analyze content spread patterns.",
            image: "fake.jpg",
            technologies: ["Machine Learning", "Graph Neural Networks", "NLP"]
        },
        {
            id: 2,
            title: "Entities Extraction For Adverse Drug Reaction",
            description: "Introducing Mac, a discontinuous Named Entity Recognition model based on maximal clique finding. The model constructs graphs of text segments, connecting segments with the same characteristics as edges. This approach effectively identifies complex adverse drug reactions in medical texts.",
            image: "jnu_thesis.png",
            technologies: ["NER", "Graph Theory", "Medical NLP", "Healthcare AI"]
        },
        {
            id: 3,
            title: "NLP Processing Toolkit",
            description: "A comprehensive Graphical User Interface software for Natural Language Processing tasks including Tokenization, POS Tagging, Chunking, Stop Word Removal, Stemming and Lemmatization, Named Entity Recognition, Parsing, Word Vectorization, and TF-IDF analysis.",
            image: "NLP_basicjob.png",
            technologies: ["Python", "NLTK", "spaCy", "React", "GUI Development"]
        }
    ];

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                        Recent Projects
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300">Exploring the intersection of AI, language processing, and data science</p>
                </div>
                
                <div className="space-y-12">
                    {projects.map(project => (
                        <div 
                            key={project.id} 
                            className="group flex flex-col md:flex-row gap-8 items-center bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]"
                        >
                            <div className="md:w-1/2 space-y-4">
                                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span 
                                            key={index} 
                                            className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium px-3 py-1 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.description}</p>
                            </div>
                            <div className="md:w-1/2">
                                <div className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300">
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300" 
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="text-center mt-16">
                    <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                        View More Projects
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
