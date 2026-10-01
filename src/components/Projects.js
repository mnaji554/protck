import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useServicesStore } from '../store/servicesStore';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const projects = useServicesStore((state) => state.projects);
  const { ref, inView } = useInView({ threshold: 0.1 });
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${isArabic ? 'text-right' : 'text-left'}`}>
            {t('projects.title')}
          </h2>
          <p className={`text-gray-600 max-w-2xl mx-auto ${isArabic ? 'text-right' : 'text-left'}`}>
            {t('projects.description')}
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">{t('projects.empty')}</div>
          ) : null}

          {projects.map((project, index) => (
            <motion.article
              key={project.id || index}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              {project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
              ) : (
                <div className="w-full h-56 bg-gradient-to-br from-indigo-100 to-pink-100 flex items-center justify-center text-indigo-600 font-bold text-xl">
                  {project.title}
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  {project.status ? (
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-indigo-100 text-indigo-700">
                      {project.status}
                    </span>
                  ) : null}
                </div>

                <p className="text-gray-600 mb-4">{project.description}</p>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-sm font-medium text-indigo-600 hover:underline"
                  >
                    {t('projects.viewProject')}
                  </a>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
