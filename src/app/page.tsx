import Image from 'next/image'

export default function Home() {
  const workExperience = [
    {
      company: "Apple",
      logo: "/logos/apple-logo.svg",
      title: "Camera Hardware Design Intern",
      dates: "Sep 2024 - Dec 2024 | May 2025 - Aug 2025"
    },
    {
      company: "Tesla",
      logo: "/logos/tesla-logo.svg",
      title: "Mechanical Engineering Intern",
      dates: "Jan 2024 - Apr 2024"
    },
    {
      company: "Meta",
      logo: "/logos/meta-logo.svg",
      title: "VR Hardware Intern",
      dates: "May 2023 - Aug 2023"
    },
    {
      company: "Pornhub",
      logo: "/logos/pornhub-logo.svg",
      title: "Senior Software Engineer",
      dates: "Sep 2022 - Dec 2022"
    }
  ]

  return (
    <div>
      {/* Hero Section - Full Screen Height */}
      <div className="h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto flex items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0 h-full">
            <a 
              href="https://www.linkedin.com/in/mirza-mughal/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Image
                src="/logos/mirza.jpg"
                alt="Mirza Mughal"
                width={300}
                height={400}
                className="rounded-lg shadow-lg object-cover h-full w-auto hover:scale-105 transition-transform duration-200"
                unoptimized
              />
            </a>
          </div>
          
          {/* Text Content */}
          <div className="flex-1 text-left">
            <h1 className="text-5xl font-bold text-dark-green mb-4">
              Mirza Mughal
            </h1>
            <h2 className="text-5xl font-bold text-dark-green mb-4">
              Mechanical Engineering
            </h2>
            <h3 className="text-5xl font-bold text-dark-green mb-8">
              Portfolio
            </h3>
            
            <div className="space-y-6 text-dark-green leading-relaxed">
              <p className="text-lg">
                Hello! I&apos;m Mirza, currently a 3rd year Mechanical Engineering student at the University of Waterloo.
              </p>
              <p className="text-lg">
                I&apos;m very passionate about mechanical design and it&apos;s integration with electronics and software. As demonstrated throughout my previous internship experiences, personal projects, and student design team projects, I am well-versed in key mechanical design skills and look forward to bringing them and gaining more skills at any organizations I work!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <section id="experience" className="mb-16 pt-24">
          <h2 className="text-4xl font-bold text-dark-green mb-8 text-center">Work Experience</h2>
          
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
              {workExperience.map((job, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20 hover:bg-white/90 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-100/50 rounded-lg flex items-center justify-center mr-4 overflow-hidden">
                      <Image
                        src={job.logo}
                        alt={`${job.company} logo`}
                        width={32}
                        height={32}
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-dark-green">{job.company}</h3>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-dark-green font-medium">{job.title}</h4>
                    <p className="text-dark-green/70 text-sm">{job.dates}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-4xl font-bold text-dark-green mb-8">Education</h2>
          
          <div className="space-y-8">
            {/* Education Entry 1 */}
            <div className="flex gap-8">
              <div className="w-48 flex-shrink-0">
                <div className="text-dark-green font-medium mb-1">2015-2017</div>
                <div className="text-dark-green font-medium mb-1">Degree</div>
                <div className="text-dark-green font-medium">University Name</div>
              </div>
              <div className="flex-1">
                <p className="text-dark-green leading-relaxed">
                  Briefly describe your degree and any other highlights about your studies you want to share. Be sure to include relevant skills you gained, accomplishments you achieved or milestones you reached during your education.
                </p>
              </div>
            </div>

            {/* Education Entry 2 */}
            <div className="flex gap-8">
              <div className="w-48 flex-shrink-0">
                <div className="text-dark-green font-medium mb-1">2011-2014</div>
                <div className="text-dark-green font-medium mb-1">Degree</div>
                <div className="text-dark-green font-medium">University Name</div>
              </div>
              <div className="flex-1">
                <p className="text-dark-green leading-relaxed">
                  Briefly describe your degree and any other highlights about your studies you want to share. Be sure to include relevant skills you gained, accomplishments you achieved or milestones you reached during your education.
                </p>
              </div>
            </div>

            {/* Education Entry 3 */}
            <div className="flex gap-8">
              <div className="w-48 flex-shrink-0">
                <div className="text-dark-green font-medium mb-1">2007-2010</div>
                <div className="text-dark-green font-medium mb-1">Degree</div>
                <div className="text-dark-green font-medium">University Name</div>
              </div>
              <div className="flex-1">
                <p className="text-dark-green leading-relaxed">
                  Briefly describe your degree and any other highlights about your studies you want to share. Be sure to include relevant skills you gained, accomplishments you achieved or milestones you reached during your education.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Project Section - Taller than Screen Height */}
      <div id="projects" className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-4xl font-bold text-dark-green mb-12 text-center">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-white/20 hover:bg-white/90 transition-all duration-300">
              <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Project Image</span>
              </div>
              <h3 className="text-lg font-semibold text-dark-green mb-2">Power Bank Inverter</h3>
              <p className="text-dark-green/70 text-sm">
                A custom power bank inverter project showcasing mechanical design and electronics integration.
              </p>
            </div>

            {/* Project 2 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-white/20 hover:bg-white/90 transition-all duration-300">
              <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Project Image</span>
              </div>
              <h3 className="text-lg font-semibold text-dark-green mb-2">Project 2</h3>
              <p className="text-dark-green/70 text-sm">
                Description for project 2
              </p>
            </div>

            {/* Project 3 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-white/20 hover:bg-white/90 transition-all duration-300">
              <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Project Image</span>
              </div>
              <h3 className="text-lg font-semibold text-dark-green mb-2">Project 3</h3>
              <p className="text-dark-green/70 text-sm">
                Description for project 3
              </p>
            </div>

            {/* Project 4 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-white/20 hover:bg-white/90 transition-all duration-300">
              <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Project Image</span>
              </div>
              <h3 className="text-lg font-semibold text-dark-green mb-2">Project 4</h3>
              <p className="text-dark-green/70 text-sm">
                Description for project 4
              </p>
            </div>

            {/* Project 5 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-white/20 hover:bg-white/90 transition-all duration-300">
              <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Project Image</span>
              </div>
              <h3 className="text-lg font-semibold text-dark-green mb-2">Project 5</h3>
              <p className="text-dark-green/70 text-sm">
                Description for project 5
              </p>
            </div>

            {/* Project 6 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-white/20 hover:bg-white/90 transition-all duration-300">
              <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Project Image</span>
              </div>
              <h3 className="text-lg font-semibold text-dark-green mb-2">Project 6</h3>
              <p className="text-dark-green/70 text-sm">
                Description for project 6
              </p>
            </div>

            {/* Project 7 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-white/20 hover:bg-white/90 transition-all duration-300">
              <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Project Image</span>
              </div>
              <h3 className="text-lg font-semibold text-dark-green mb-2">Project 7</h3>
              <p className="text-dark-green/70 text-sm">
                Description for project 7
              </p>
            </div>

            {/* Project 8 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-white/20 hover:bg-white/90 transition-all duration-300">
              <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Project Image</span>
              </div>
              <h3 className="text-lg font-semibold text-dark-green mb-2">Project 8</h3>
              <p className="text-dark-green/70 text-sm">
                Description for project 8
              </p>
            </div>

            {/* Project 9 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-white/20 hover:bg-white/90 transition-all duration-300">
              <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Project Image</span>
              </div>
              <h3 className="text-lg font-semibold text-dark-green mb-2">Project 9</h3>
              <p className="text-dark-green/70 text-sm">
                Description for project 9
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}