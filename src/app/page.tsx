import AboutSection from '@/components/AboutSection'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="mb-16">
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
            Hello! I'm Mirza, currently a 3rd year Mechanical Engineering student at the University of Waterloo.
          </p>
          <p className="text-lg">
            I'm very passionate about mechanical design and it's integration with electronics and software. As demonstrated throughout my previous internship experiences, personal projects, and student design team projects, I am well-versed in key mechanical design skills and look forward to bringing them and gaining more skills at any organizations I work!
          </p>
        </div>
      </div>

      {/* About Me Section */}
      <AboutSection />
    </div>
  )
}