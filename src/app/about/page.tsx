export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* About Me Section */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-dark-green mb-6">About Me.</h1>
        <p className="text-dark-green leading-relaxed">
          This is your About section. Every website has a story and users want to hear yours. This is a great opportunity to give a full background on who you are and what your site has to offer. Double click on the text box to start editing your content and make sure to add all the relevant details you want to share with site visitors.
        </p>
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
