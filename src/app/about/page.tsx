export default function About() {
  const workExperience = [
    {
      company: "Apple",
      logo: "🍎",
      title: "Camera Hardware Design Intern",
      dates: "Sep 2024 - Dec 2024 | May 2025 - Aug 2025"
    },
    {
      company: "Tesla",
      logo: "⚡",
      title: "Mechanical Engineering Intern",
      dates: "Jan 2024 - Apr 2024"
    },
    {
      company: "Meta",
      logo: "📘",
      title: "VR Hardware Intern",
      dates: "May 2023 - Aug 2023"
    },
    {
      company: "Pornhub",
      logo: "🔞",
      title: "Senior Software Engineer",
      dates: "Sep 2022 - Dec 2022"
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* About Me Section */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-dark-green mb-6">About Me.</h1>
        <p className="text-dark-green leading-relaxed">
          This is your About section. Every website has a story and users want to hear yours. This is a great opportunity to give a full background on who you are and what your site has to offer. Double click on the text box to start editing your content and make sure to add all the relevant details you want to share with site visitors.
        </p>
      </section>

      {/* Work Experience Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-dark-green mb-8">Work Experience</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workExperience.map((job, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl mr-4">
                  {job.logo}
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
  )
}
