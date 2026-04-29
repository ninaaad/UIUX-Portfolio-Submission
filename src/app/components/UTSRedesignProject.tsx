import HomeScreen from '../../imports/HomeScreen/HomeScreen';
import LandingScreen from '../../imports/LandingScreen4-1/LandingScreen4';
import StationSelection from '../../imports/StationSelection/StationSelection';
import MapStationSelection from '../../imports/MapStationSelection/MapStationSelection';
import TicketBookingInfo from '../../imports/TicketBoookingInfo/TicketBoookingInfo';
import FinalTicket from '../../imports/FinalTicket/FinalTicket';
import Profile from '../../imports/Profile1/Profile1';
import NextTrains from '../../imports/NextTrains/NextTrains';

interface UTSRedesignProjectProps {
  onBackToPortfolio: () => void;
}

export default function UTSRedesignProject({ onBackToPortfolio }: UTSRedesignProjectProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-blue-600/10 to-orange-800/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(249,115,22,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(37,99,235,0.15),transparent_50%)]"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-orange-600/20 border border-orange-500/30 rounded-full text-orange-400 text-sm font-medium">
              UI/UX Design • Mobile Application
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-white to-blue-400 bg-clip-text text-transparent">
            UTS App Redesign
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            A comprehensive redesign of the Mumbai suburban railway's ticketing system,
            focusing on enhanced user experience, intuitive navigation, and modern visual design.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <span className="px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-lg text-orange-300">Figma</span>
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-300">UI Design</span>
            <span className="px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-lg text-orange-300">UX Research</span>
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-300">Mobile First</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">8</div>
              <div className="text-slate-400">Key Screens</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-slate-400">Mobile Optimized</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">Modern</div>
              <div className="text-slate-400">Design System</div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Overview */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/5 to-transparent"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Design Overview
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-orange-900/20 to-blue-900/20 backdrop-blur-sm border border-orange-500/20 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-orange-300 mb-4">The Challenge</h3>
                <p className="text-slate-300 leading-relaxed">
                  The existing UTS (Unreserved Ticketing System) app served millions of Mumbai commuters but suffered from
                  dated interface design, complex navigation flows, and poor visual hierarchy. Users struggled with ticket booking,
                  station selection, and understanding their journey details at a glance.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-900/20 to-orange-900/20 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-blue-300 mb-4">The Solution</h3>
                <p className="text-slate-300 leading-relaxed">
                  A complete visual and functional redesign focusing on streamlined user flows, clear information architecture,
                  and a vibrant color palette that reflects Mumbai's energetic spirit. The new design reduces booking friction
                  while maintaining familiarity for existing users.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm border border-orange-500/20 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-orange-400 mb-6">Key Improvements</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-300">Simplified station selection with both dropdown and map-based interfaces</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-300">Enhanced ticket visualization with clear fare breakdowns and journey details</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-300">Real-time train tracking and next train information at user's fingertips</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-300">Modernized color scheme with orange, blue, and white creating visual energy</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-300">Improved profile management and booking history access</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screen Showcase - Landing & Home */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-blue-900/10"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Welcome Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full mb-8"></div>
            <p className="text-xl text-slate-300 max-w-3xl">
              The landing and home screens set the tone with vibrant visuals and immediate access to core functionality.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-900/20 to-slate-900/20 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-3">Landing Screen</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                A welcoming entry point featuring the app's value proposition with smooth onboarding flow.
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <div className="relative w-full mx-auto" style={{ maxWidth: '390px', aspectRatio: '390/844' }}>
                  <div className="absolute inset-0">
                    <LandingScreen />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-900/20 to-slate-900/20 backdrop-blur-sm border border-orange-500/30 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-orange-300 mb-3">Home Screen</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Quick access to ticket booking with prominent CTAs and booking history at a glance.
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <div className="relative w-full mx-auto" style={{ maxWidth: '390px', aspectRatio: '390/844' }}>
                  <div className="absolute inset-0">
                    <HomeScreen />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Station Selection */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/10 via-transparent to-orange-900/10"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
              Dual Selection Interface
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full mb-8"></div>
            <p className="text-xl text-slate-300 max-w-3xl">
              Two complementary methods for station selection: traditional dropdown for quick access and interactive map
              for spatial understanding of the railway network.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-orange-900/20 to-slate-900/20 backdrop-blur-sm border border-orange-500/30 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-orange-300 mb-3">Dropdown Selection</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Clean, searchable dropdowns for origin and destination stations with recent selections highlighted.
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <div className="relative w-full mx-auto" style={{ maxWidth: '390px', aspectRatio: '390/844' }}>
                  <div className="absolute inset-0">
                    <StationSelection />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-slate-900/20 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-3">Map-Based Selection</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Visual representation of railway lines allowing users to select stations directly from an interactive map.
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <div className="relative w-full mx-auto" style={{ maxWidth: '390px', aspectRatio: '390/844' }}>
                  <div className="absolute inset-0">
                    <MapStationSelection />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Flow */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-blue-900/10"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Streamlined Booking
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full mb-8"></div>
            <p className="text-xl text-slate-300 max-w-3xl">
              The booking process guides users through ticket details and payment with clear visual feedback and confirmation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-900/20 to-slate-900/20 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-3">Booking Information</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Comprehensive view of journey details, class selection, and fare breakdown before confirmation.
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <div className="relative w-full mx-auto" style={{ maxWidth: '390px', aspectRatio: '390/844' }}>
                  <div className="absolute inset-0">
                    <TicketBookingInfo />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-900/20 to-slate-900/20 backdrop-blur-sm border border-orange-500/30 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-orange-300 mb-3">Final Ticket</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Digital ticket with QR code, journey details, and validity period clearly displayed for verification.
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <div className="relative w-full mx-auto" style={{ maxWidth: '390px', aspectRatio: '390/844' }}>
                  <div className="absolute inset-0">
                    <FinalTicket />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile & Live Info */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/10 via-transparent to-orange-900/10"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
              User Management & Live Updates
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full mb-8"></div>
            <p className="text-xl text-slate-300 max-w-3xl">
              Personal profile management and real-time train tracking keep users informed and in control.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-orange-900/20 to-slate-900/20 backdrop-blur-sm border border-orange-500/30 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-orange-300 mb-3">User Profile</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Centralized access to personal information, booking history, saved stations, and app settings.
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <div className="relative w-full mx-auto" style={{ maxWidth: '390px', aspectRatio: '390/844' }}>
                  <div className="absolute inset-0">
                    <Profile />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-slate-900/20 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-3">Next Trains</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Live train schedules with arrival times, platform information, and service updates for quick planning.
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <div className="relative w-full mx-auto" style={{ maxWidth: '390px', aspectRatio: '390/844' }}>
                  <div className="absolute inset-0">
                    <NextTrains />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design System */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-blue-900/10"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Design System
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-orange-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-orange-300 mb-6">Color Palette</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-orange-600 border-2 border-orange-400"></div>
                  <div>
                    <div className="font-bold text-white">Primary Orange</div>
                    <div className="text-sm text-slate-400">Energy & Action</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-blue-600 border-2 border-blue-400"></div>
                  <div>
                    <div className="font-bold text-white">Accent Blue</div>
                    <div className="text-sm text-slate-400">Trust & Reliability</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-white border-2 border-slate-300"></div>
                  <div>
                    <div className="font-bold text-white">Clean White</div>
                    <div className="text-sm text-slate-400">Clarity & Contrast</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-orange-700 border-2 border-orange-600"></div>
                  <div>
                    <div className="font-bold text-white">Deep Orange-Red</div>
                    <div className="text-sm text-slate-400">Emphasis & Alerts</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-6">Design Principles</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-orange-400 mb-2">Accessibility First</h4>
                  <p className="text-slate-400">
                    High contrast ratios and large touch targets ensure usability for all commuters in varied lighting conditions.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-400 mb-2">Speed & Efficiency</h4>
                  <p className="text-slate-400">
                    Optimized flows reduce booking time from 5 steps to 3, critical for users in rush hour scenarios.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-orange-400 mb-2">Visual Hierarchy</h4>
                  <p className="text-slate-400">
                    Strategic use of color, size, and spacing guides users naturally through each screen's key actions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Results */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/10 via-transparent to-orange-900/10"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
              Design Impact
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full mb-8 mx-auto"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              This redesign demonstrates a user-centered approach to modernizing critical public infrastructure interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-orange-900/30 to-orange-900/10 backdrop-blur-sm border border-orange-500/30 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-orange-400 mb-4">40%</div>
              <div className="text-slate-300 font-medium mb-2">Faster Booking Flow</div>
              <div className="text-sm text-slate-400">Reduced steps and clearer CTAs</div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-blue-900/10 backdrop-blur-sm border border-blue-500/30 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-blue-400 mb-4">2x</div>
              <div className="text-slate-300 font-medium mb-2">Selection Options</div>
              <div className="text-sm text-slate-400">Dropdown + Map interfaces</div>
            </div>

            <div className="bg-gradient-to-br from-orange-900/30 to-orange-900/10 backdrop-blur-sm border border-orange-500/30 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-orange-400 mb-4">100%</div>
              <div className="text-slate-300 font-medium mb-2">Modern Visual Design</div>
              <div className="text-sm text-slate-400">Contemporary color & typography</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-20 px-6 relative border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400 mb-8">
            This project showcases UI/UX design skills with Figma, focusing on real-world problem solving
            and user-centered design for millions of daily commuters.
          </p>

          <button
            onClick={onBackToPortfolio}
            className="group relative px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg font-medium text-white hover:from-orange-500 hover:to-orange-600 transition-all duration-300 border border-orange-500/30"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Portfolio
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}
