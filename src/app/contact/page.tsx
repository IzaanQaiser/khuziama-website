export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-dark-green mb-8">Mirza Mughal</h1>
        </div>
        
        <div className="text-right">
          <div className="text-dark-green mb-2">mmughal@uwaterloo.ca</div>
          <div className="text-dark-green mb-2">Calgary, Alberta | Waterloo, Ontario</div>
          <div className="text-dark-green mb-4">Willing to relocate for internships</div>
          
          <a 
            href="https://linkedin.com/in/mirza-mughal" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-8 h-8 bg-black rounded-full hover:bg-gray-800 transition-colors"
          >
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
