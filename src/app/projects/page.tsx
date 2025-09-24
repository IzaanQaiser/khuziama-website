import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Power Bank Inverter + Personal Project',
      image: '/api/placeholder/400/300',
      description: 'A custom power bank inverter project showcasing mechanical design and electronics integration.'
    },
    {
      id: 2,
      title: 'Project 2',
      image: '/api/placeholder/400/300',
      description: 'Description for project 2'
    },
    {
      id: 3,
      title: 'Project 3',
      image: '/api/placeholder/400/300',
      description: 'Description for project 3'
    },
    {
      id: 4,
      title: 'Project 4',
      image: '/api/placeholder/400/300',
      description: 'Description for project 4'
    },
    {
      id: 5,
      title: 'Project 5',
      image: '/api/placeholder/400/300',
      description: 'Description for project 5'
    },
    {
      id: 6,
      title: 'Project 6',
      image: '/api/placeholder/400/300',
      description: 'Description for project 6'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-dark-green text-center mb-12">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-video bg-gray-200 relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-dark-green mb-2">
                {project.title}
              </h3>
              <p className="text-dark-green/80 text-sm">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
