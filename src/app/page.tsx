export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Header */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl">
        <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl shadow-black/10">
          <div className="px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    Cojbe
                  </h1>
                </div>
              </div>
              <nav className="hidden md:block">
                <div className="flex items-center space-x-8">
                  <a
                    href="#home"
                    className="text-slate-700 hover:text-slate-900 px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-white/20 rounded-lg"
                  >
                    Home
                  </a>
                  <a
                    href="#features"
                    className="text-slate-700 hover:text-slate-900 px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-white/20 rounded-lg"
                  >
                    Features
                  </a>
                  <a
                    href="#categories"
                    className="text-slate-700 hover:text-slate-900 px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-white/20 rounded-lg"
                  >
                    Categories
                  </a>
                  <a
                    href="#how-it-works"
                    className="text-slate-700 hover:text-slate-900 px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-white/20 rounded-lg"
                  >
                    How It Works
                  </a>
                  <a
                    href="#testimonials"
                    className="text-slate-700 hover:text-slate-900 px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-white/20 rounded-lg"
                  >
                    Testimonials
                  </a>
                </div>
              </nav>
              <div className="hidden md:block">
                <a
                  href="#cta"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                  Find Your Perfect
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {" "}
                    Side Gig
                  </span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Discover flexible side jobs that fit your schedule and skills.
                  Earn extra income on your own terms with Cojbe's diverse
                  marketplace of opportunities.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#categories"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  Find Gigs Now
                </a>
                <a
                  href="#how-it-works"
                  className="bg-white/20 backdrop-blur-sm border border-white/30 text-slate-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  How It Works
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="space-y-6">
                    <div className="h-6 bg-white/20 rounded-lg w-3/4 animate-pulse"></div>
                    <div className="h-6 bg-white/20 rounded-lg w-1/2 animate-pulse animation-delay-1000"></div>
                    <div className="h-6 bg-white/20 rounded-lg w-5/6 animate-pulse animation-delay-2000"></div>
                    <div className="h-6 bg-white/20 rounded-lg w-2/3 animate-pulse animation-delay-3000"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Why Choose Cojbe
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                The ultimate platform for flexible side gigs. Find work that
                fits your schedule, skills, and financial goals.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 text-center p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Flexible Schedule
              </h3>
              <p className="text-slate-600">
                Work when you want, where you want. Choose gigs that fit your
                lifestyle and time availability.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 text-center p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Secure Payments
              </h3>
              <p className="text-slate-600">
                Get paid safely and on time. Our secure payment system ensures
                you receive your earnings without any hassle.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 text-center p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Diverse Opportunities
              </h3>
              <p className="text-slate-600">
                From creative work to technical tasks, find gigs that match your
                skills and interests across various categories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gig Categories Section */}
      <section id="categories" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Popular Gig Categories
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Explore diverse opportunities across various fields and find the
                perfect gig for your skills.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Creative & Design
              </h3>
              <p className="text-slate-600 text-sm">
                Graphic design, writing, photography, and creative projects
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Tech & Programming
              </h3>
              <p className="text-slate-600 text-sm">
                Web development, app creation, and technical support
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Education & Tutoring
              </h3>
              <p className="text-slate-600 text-sm">
                Online tutoring, course creation, and educational content
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Business & Marketing
              </h3>
              <p className="text-slate-600 text-sm">
                Social media management, marketing, and business consulting
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                How Cojbe Works
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Get started in just a few simple steps and begin earning from
                your side gigs.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-8 shadow-xl">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Create Your Profile
                </h3>
                <p className="text-slate-600">
                  Sign up and build your profile showcasing your skills,
                  experience, and availability.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-8 shadow-xl">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Browse & Apply
                </h3>
                <p className="text-slate-600">
                  Search through thousands of gigs, filter by your preferences,
                  and apply to the ones that interest you.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-8 shadow-xl">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Work & Get Paid
                </h3>
                <p className="text-slate-600">
                  Complete your gigs, deliver quality work, and receive secure
                  payments directly to your account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                What Our Users Say
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Join thousands of satisfied users who are earning extra income
                through Cojbe.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 p-8 rounded-2xl shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">SM</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-slate-900">
                    Sarah Martinez
                  </h4>
                  <p className="text-slate-600 text-sm">Graphic Designer</p>
                </div>
              </div>
              <p className="text-slate-600 italic">
                "Cojbe has been a game-changer for my freelance career. I can
                pick up design gigs that fit perfectly with my schedule and earn
                extra income while working from home."
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 p-8 rounded-2xl shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">DJ</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-slate-900">
                    David Johnson
                  </h4>
                  <p className="text-slate-600 text-sm">Web Developer</p>
                </div>
              </div>
              <p className="text-slate-600 italic">
                "The platform is incredibly user-friendly and the payment system
                is reliable. I've been able to build a steady stream of side
                income through various tech projects."
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 p-8 rounded-2xl shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">EC</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-slate-900">Emily Chen</h4>
                  <p className="text-slate-600 text-sm">Content Writer</p>
                </div>
              </div>
              <p className="text-slate-600 italic">
                "As a student, Cojbe has been perfect for finding flexible
                writing gigs. I can work around my classes and earn money to
                support my education."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Start Earning?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of people who are already earning extra income
              through flexible side gigs on Cojbe.
            </p>
            <a
              href="#home"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Start Earning Today
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  Cojbe
                </h3>
                <p className="text-slate-600">
                  The ultimate platform for flexible side gigs. Connect with
                  opportunities that fit your schedule and skills.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-4">
                  For Workers
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#categories"
                      className="text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      Find Gigs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#categories"
                      className="text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      Categories
                    </a>
                  </li>
                  <li>
                    <a
                      href="#how-it-works"
                      className="text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      How It Works
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-4">
                  For Employers
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#how-it-works"
                      className="text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      Post a Gig
                    </a>
                  </li>
                  <li>
                    <a
                      href="#categories"
                      className="text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      Find Talent
                    </a>
                  </li>
                  <li>
                    <a
                      href="#cta"
                      className="text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      Get Started
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-4">
                  Support
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#how-it-works"
                      className="text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="#footer"
                      className="text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#features"
                      className="text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      Safety
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/20 mt-8 pt-8 text-center">
              <p className="text-slate-600">
                &copy; 2024 Cojbe. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
