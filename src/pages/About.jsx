function About() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">About Aseryx</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to create innovative solutions that make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded with a vision to transform the digital landscape, Aseryx has been at the
              forefront of innovation since day one. We believe in creating solutions that not
              only meet today's needs but anticipate tomorrow's challenges.
            </p>
            <p className="text-gray-600">
              Our team of passionate developers, designers, and strategists work together to
              deliver exceptional results that exceed expectations.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary-400 to-primary-600 h-96 rounded-lg shadow-xl"></div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Constantly pushing boundaries and exploring new possibilities.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-600">
                Working together to achieve extraordinary results.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                Committed to delivering the highest quality in everything we do.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">
                Building trust through transparency and ethical practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
