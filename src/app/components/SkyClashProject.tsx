interface SkyClashProjectProps {
  onBack?: () => void;
}

export default function SkyClashProject({ onBack }: SkyClashProjectProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/src/imports/skyclashlogo.png"
            alt="SkyClash Jet-Bike"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-6 tracking-wider bg-gradient-to-r from-blue-400 via-red-500 to-blue-600 bg-clip-text text-transparent" style={{ fontFamily: 'monospace', textShadow: '0 0 40px rgba(59, 130, 246, 0.5)' }}>
            SKYCLASH
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 tracking-wide">
            Solo Technical Rework & Multiplayer Implementation
          </p>
          <button
            onClick={() => document.getElementById('tech-specs')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-red-600 rounded-lg hover:from-blue-700 hover:to-red-700 transition-all duration-300 shadow-lg shadow-blue-500/50 text-lg"
          >
            Explore Tech Specs
          </button>
        </div>
      </section>

      {/* Aesthetic Evolution Section */}
      <section id="tech-specs" className="py-20 px-4 sm:px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl mb-12 text-center bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
            Aesthetic Evolution
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* 2023 Card */}
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 shadow-lg shadow-blue-500/10">
              <div className="relative h-80">
                <img
                  src="/src/imports/skyclashlogo.png"
                  alt="2023 Academic Kart Concept"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/90 px-4 py-2 rounded border border-blue-500/50">
                  <span className="text-blue-400 tracking-wider">2023</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-3 text-blue-400">Academic Kart Concept</h3>
                <p className="text-gray-400 leading-relaxed">
                  Initial prototype built for academic exploration. Ground-based kart mechanics with basic physics simulation and single-player focus.
                </p>
              </div>
            </div>

            {/* 2026 Card */}
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-red-500/20 hover:border-red-500/50 transition-all duration-300 shadow-lg shadow-red-500/10">
              <div className="relative h-80">
                <img
                  src="/src/imports/skyclashlogo.png"
                  alt="2026 Aerial Jet-Bike Rework"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/90 px-4 py-2 rounded border border-red-500/50">
                  <span className="text-red-400 tracking-wider">2026</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-3 text-red-400">Aerial Jet-Bike Rework</h3>
                <p className="text-gray-400 leading-relaxed">
                  Complete architectural overhaul introducing 3D flight mechanics, aerial combat systems, and multiplayer networking. Designed for fast-paced arena dogfights.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 p-6 bg-black/60 rounded-lg border border-blue-500/20">
            <p className="text-gray-300 text-center leading-relaxed">
              The shift from ground-based karts to aerial jet-bikes required a fundamental reimagining of the physics architecture.
              The new system supports full 6-degree-of-freedom movement, vertical combat spaces, and synchronized networked state management across multiple clients.
            </p>
          </div>
        </div>
      </section>

      {/* Engineering - C# Setup */}
      <section className="py-20 px-4 sm:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl mb-12 text-center bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
            Engineering: The C# Setup
          </h2>
          <div className="bg-gray-900 rounded-lg border border-blue-500/30 p-6 sm:p-8 shadow-lg shadow-blue-500/10">
            <h3 className="text-2xl text-blue-400 mb-4">HoverKartController.cs - Core Physics Logic</h3>
            <div className="bg-black rounded-lg p-6 overflow-x-auto border border-red-500/20">
              <pre className="text-sm sm:text-base text-green-400" style={{ fontFamily: 'monospace' }}>
{`private void ApplyHoverForce()
{
    RaycastHit hit;
    for (int i = 0; i < hoverPoints.Length; i++)
    {
        if (Physics.Raycast(hoverPoints[i].position, -transform.up,
            out hit, hoverHeight, groundLayer))
        {
            float distance = hit.distance;
            float force = (hoverHeight - distance) / hoverHeight;
            rb.AddForceAtPosition(transform.up * hoverForce * force,
                hoverPoints[i].position, ForceMode.Acceleration);
        }
    }
}

private void ApplyBankRotation()
{
    float targetBankAngle = -horizontalInput * maxBankAngle;
    Quaternion targetRotation = Quaternion.Euler(
        transform.eulerAngles.x,
        transform.eulerAngles.y,
        targetBankAngle
    );
    transform.rotation = Quaternion.Slerp(
        transform.rotation,
        targetRotation,
        Time.deltaTime * bankSpeed
    );
}`}
              </pre>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {/* Diagram 1 */}
              <div className="bg-gray-900 rounded-lg p-6 border border-blue-500/30">
                <h4 className="text-xl text-blue-400 mb-4">Hover Height & Ground Layers</h4>
                <div className="bg-black rounded p-4 border border-blue-500/20">
                  <svg viewBox="0 0 200 200" className="w-full h-48">
                    <line x1="20" y1="180" x2="180" y2="180" stroke="#3b82f6" strokeWidth="2" />
                    <text x="100" y="195" fill="#60a5fa" fontSize="12" textAnchor="middle">Ground Layer</text>

                    <rect x="70" y="80" width="60" height="30" fill="#999" stroke="#60a5fa" strokeWidth="2" />
                    <text x="100" y="100" fill="#000" fontSize="10" textAnchor="middle">Jet-Bike</text>

                    <line x1="100" y1="110" x2="100" y2="180" stroke="#60a5fa" strokeWidth="2" strokeDasharray="5,5" />
                    <text x="110" y="145" fill="#60a5fa" fontSize="12">Raycast</text>

                    <line x1="70" y1="95" x2="30" y2="95" stroke="#ef4444" strokeWidth="2" />
                    <line x1="30" y1="60" x2="30" y2="130" stroke="#ef4444" strokeWidth="2" />
                    <text x="15" y="95" fill="#ef4444" fontSize="12">Force</text>
                  </svg>
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  Raycasts from multiple hover points calculate distance to ground, applying proportional upward force to maintain hover height.
                </p>
              </div>

              {/* Diagram 2 */}
              <div className="bg-gray-900 rounded-lg p-6 border border-red-500/30">
                <h4 className="text-xl text-red-400 mb-4">Bank Angle & Visual Tilt</h4>
                <div className="bg-black rounded p-4 border border-red-500/20">
                  <svg viewBox="0 0 200 200" className="w-full h-48">
                    <rect x="70" y="90" width="60" height="30" fill="#999" stroke="#60a5fa" strokeWidth="2" transform="rotate(-15 100 105)" />
                    <text x="100" y="105" fill="#000" fontSize="10" textAnchor="middle" transform="rotate(-15 100 105)">Jet-Bike</text>

                    <line x1="100" y1="40" x2="100" y2="160" stroke="#666" strokeWidth="1" strokeDasharray="3,3" />
                    <text x="105" y="35" fill="#666" fontSize="10">Vertical</text>

                    <path d="M 100 105 L 130 105 A 30 30 0 0 0 123 81" stroke="#ef4444" strokeWidth="2" fill="none" />
                    <text x="135" y="95" fill="#ef4444" fontSize="12">Bank</text>

                    <line x1="50" y1="105" x2="10" y2="105" stroke="#3b82f6" strokeWidth="2" />
                    <polygon points="10,105 20,100 20,110" fill="#3b82f6" />
                    <text x="15" y="95" fill="#60a5fa" fontSize="12">Input</text>
                  </svg>
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  Horizontal input drives banking rotation via Quaternion slerp, creating smooth visual tilt for directional control feedback.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering - Netcode Logic */}
      <section className="py-20 px-4 sm:px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl mb-12 text-center bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
            Engineering: The Netcode Logic
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-900 rounded-lg p-6 border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 shadow-lg shadow-blue-500/10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="text-xl text-blue-400 mb-3">Room Creation & Join Logic</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Photon PUN2 integration with unique 6-character alphanumeric room code generation.
                Players can host private lobbies or join via code entry, with automatic session discovery and connection handshake.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-900 rounded-lg p-6 border border-red-500/30 hover:border-red-500/60 transition-all duration-300 shadow-lg shadow-red-500/10">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-red-500/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl text-red-400 mb-3">Object Interaction Sync</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                RPCs handle lootbox pickup events and projectile instantiation across all clients.
                Transform and ownership data synchronized via PhotonView, ensuring consistent arena state and item availability.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-900 rounded-lg p-6 border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 shadow-lg shadow-blue-500/10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl text-blue-400 mb-3">Latency Management</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Flight physics state updates throttled to 20Hz tick rate. Client-side prediction for local player with server reconciliation.
                Interpolation smooths remote player movement during network fluctuations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Model Showcase Gallery */}
      <section className="py-20 px-4 sm:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl mb-12 text-center bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
            Model Showcase Gallery
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Image 1 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-blue-500/30 shadow-lg shadow-blue-500/10">
              <div className="relative h-64">
                <img
                  src="/src/imports/skyclashlogo.png"
                  alt="Unlit Texturing & Base Mesh"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg text-blue-400 mb-2">Unlit Texturing & Base Mesh</h3>
                <p className="text-gray-400 text-sm">
                  Low-poly mesh topology optimized for real-time performance with clean UV unwrapping.
                </p>
              </div>
            </div>

            {/* Image 2 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-red-500/30 shadow-lg shadow-red-500/10">
              <div className="relative h-64">
                <img
                  src="/src/imports/skyclashlogo.png"
                  alt="Wireframe & Attachment Logic"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg text-red-400 mb-2">Wireframe & Attachment Logic</h3>
                <p className="text-gray-400 text-sm">
                  Modular attachment system for weapon hardpoints and customization elements.
                </p>
              </div>
            </div>

            {/* Image 3 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-blue-500/30 shadow-lg shadow-blue-500/10">
              <div className="relative h-64">
                <img
                  src="/src/imports/skyclashlogo.png"
                  alt="Final Low-Poly Render"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg text-blue-400 mb-2">Final Low-Poly Render</h3>
                <p className="text-gray-400 text-sm">
                  In-engine lighting with material shaders showcasing the final aesthetic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof of Concept Video */}
      <section className="py-20 px-4 sm:px-6 bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl mb-12 text-center bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
            Proof of Concept
          </h2>
          <div className="bg-gray-900 rounded-lg p-4 sm:p-8 border border-blue-500/30 shadow-lg shadow-blue-500/10">
            <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-red-500/20 border-2 border-red-500/20">
              <video
                controls
                className="w-full"
                poster="/src/imports/skyclashlogo.png"
              >
                <source src="/src/imports/SkyClash_rework_v2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="mt-8 text-center">
              <p className="text-2xl sm:text-3xl text-gray-300 leading-relaxed">
                <span className="bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">The Full Loop:</span> Client Join → Arena Loot → Firing Proof
              </p>
              <p className="text-gray-400 mt-4">
                Demonstration of complete multiplayer flow from lobby creation through networked combat interactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 px-4 sm:px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl mb-12 text-center bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
            Development Roadmap
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-red-500 to-blue-600"></div>

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative flex items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <div className="bg-gray-900 rounded-lg p-6 border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 shadow-lg shadow-blue-500/10">
                    <div className="flex items-center justify-end mb-3">
                      <span className="text-blue-400 text-lg mr-3">PHASE 01</span>
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/40">
                        <span className="text-white text-sm">⚙</span>
                      </div>
                    </div>
                    <h3 className="text-2xl text-blue-400 mb-2">Weapon System Engineering</h3>
                    <p className="text-gray-400">
                      Implementation of homing missiles, EMP projectiles, and shield mechanics with networked damage calculation and visual feedback systems.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-black shadow-lg shadow-blue-500/50"></div>
                <div className="md:w-1/2"></div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-center">
                <div className="md:w-1/2"></div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full border-4 border-black shadow-lg shadow-red-500/50"></div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-gray-900 rounded-lg p-6 border border-red-500/30 hover:border-red-500/60 transition-all duration-300 shadow-lg shadow-red-500/10">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-lg shadow-red-500/40">
                        <span className="text-white text-sm">◧</span>
                      </div>
                      <span className="text-red-400 text-lg ml-3">PHASE 02</span>
                    </div>
                    <h3 className="text-2xl text-red-400 mb-2">Adaptive Combat UI</h3>
                    <p className="text-gray-400">
                      Dynamic HUD elements including health/shield bars, ammo counters, radar system, and target lock indicators with context-sensitive information display.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <div className="bg-gray-900 rounded-lg p-6 border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 shadow-lg shadow-blue-500/10">
                    <div className="flex items-center justify-end mb-3">
                      <span className="text-blue-400 text-lg mr-3">PHASE 03</span>
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/40">
                        <span className="text-white text-sm">✦</span>
                      </div>
                    </div>
                    <h3 className="text-2xl text-blue-400 mb-2">VFX Integration</h3>
                    <p className="text-gray-400">
                      Particle systems for engine trails, weapon fire, explosions, and environmental effects. Audio integration for spatial combat feedback.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-black shadow-lg shadow-blue-500/50"></div>
                <div className="md:w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-16 px-4 sm:px-6 bg-gray-950 border-t border-blue-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            SkyClash represents the intersection of technical art and multiplayer systems engineering.
            This project demonstrates my ability to architect scalable networked gameplay experiences while maintaining visual fidelity and performance optimization.
            The transition from academic prototype to polished multiplayer arena showcases iterative design thinking and technical problem-solving in game development.
          </p>
          <button
            onClick={() => {
              if (onBack) {
                onBack();
                window.scrollTo(0, 0);
              }
            }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-red-600 rounded-lg hover:from-blue-700 hover:to-red-700 transition-all duration-300 shadow-lg shadow-blue-500/40"
          >
            Return to Portfolio
          </button>
        </div>
      </section>
    </div>
  );
}
