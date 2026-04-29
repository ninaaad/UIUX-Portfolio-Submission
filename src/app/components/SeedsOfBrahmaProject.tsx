interface SeedsOfBrahmaProjectProps {
  onBack?: () => void;
}

export default function SeedsOfBrahmaProject({ onBack }: SeedsOfBrahmaProjectProps) {
  return (
    <div className="min-h-screen bg-stone-950 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/src/imports/Screenshot_2026-04-29_121358-1.png"
            alt="Seeds of Brahma VR Experience"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/60 to-black"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-6 tracking-wider bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent" style={{ fontFamily: 'serif', textShadow: '0 0 40px rgba(168, 85, 247, 0.5)' }}>
            Seeds of Brahma
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 tracking-wide">
            TPP/VR Shrine Interaction System
          </p>
          <button
            onClick={() => document.getElementById('tech-specs')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-lg shadow-purple-500/50 text-lg"
          >
            Explore Sacred Architecture
          </button>
        </div>
      </section>

      {/* Spiritual Evolution Section */}
      <section id="tech-specs" className="py-20 px-4 sm:px-6 bg-stone-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl mb-12 text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Spiritual & Technical Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Card */}
            <div className="bg-stone-950 rounded-lg overflow-hidden border border-green-500/20 hover:border-green-500/50 transition-all duration-300 shadow-lg shadow-green-500/10">
              <div className="relative h-80">
                <img
                  src="/src/imports/Screenshot_2026-04-29_121358-1.png"
                  alt="Traditional Shrine Elements"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/90 px-4 py-2 rounded border border-green-500/50">
                  <span className="text-green-400 tracking-wider">TRADITIONAL</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-3 text-green-400">Ancient Shrine Architecture</h3>
                <p className="text-gray-400 leading-relaxed">
                  Authentic recreation of traditional shrine elements with cultural accuracy. Stone textures, sacred geometry, and spiritual symbolism rooted in ancient traditions.
                </p>
              </div>
            </div>

            {/* Modern VR Card */}
            <div className="bg-stone-950 rounded-lg overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 shadow-lg shadow-blue-500/10">
              <div className="relative h-80">
                <img
                  src="/src/imports/Screenshot_2026-04-29_121358-1.png"
                  alt="VR Interaction System"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/90 px-4 py-2 rounded border border-blue-500/50">
                  <span className="text-blue-400 tracking-wider">IMMERSIVE VR</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-3 text-blue-400">Modern VR Integration</h3>
                <p className="text-gray-400 leading-relaxed">
                  Cutting-edge VR interaction mechanics allowing players to physically engage with sacred objects. Hand tracking, spatial audio, and presence-driven narrative systems.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 p-6 bg-black/60 rounded-lg border border-purple-500/20">
            <p className="text-gray-300 text-center leading-relaxed">
              Seeds of Brahma bridges the gap between ancient spirituality and modern technology, creating an immersive experience that respects traditional symbolism while leveraging VR capabilities for deeper engagement and presence.
            </p>
          </div>
        </div>
      </section>

      {/* Engineering - Unreal Engine Setup */}
      <section className="py-20 px-4 sm:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl mb-12 text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Engineering: Unreal Engine Architecture
          </h2>
          <div className="bg-stone-950 rounded-lg border border-purple-500/30 p-6 sm:p-8 shadow-lg shadow-purple-500/10">
            <h3 className="text-2xl text-purple-400 mb-4">ShrineInteractionController.cpp - Core Logic</h3>
            <div className="bg-black rounded-lg p-6 overflow-x-auto border border-red-500/20">
              <pre className="text-sm sm:text-base text-green-400" style={{ fontFamily: 'monospace' }}>
{`void AShrineController::OnInteractWithShrine()
{
    if (!bCanInteract || !PlayerPawn) return;

    // VR Hand Tracking
    FVector HandLocation = VRMotionController->GetComponentLocation();
    FRotator HandRotation = VRMotionController->GetComponentRotation();

    // Proximity Check
    float Distance = FVector::Dist(HandLocation, ShrineCenter);
    if (Distance <= InteractionRadius)
    {
        // Trigger Sacred Sequence
        ActivateShrineSequence();

        // Visual Scripting Event Dispatcher
        OnShrineActivated.Broadcast(CurrentShrineID);

        // Spatial Audio Feedback
        PlayShrineAudioAtLocation(HandLocation);
    }
}

void AShrineController::UpdateShrineState(float DeltaTime)
{
    // Procedural Animation
    float NewGlowIntensity = FMath::Lerp(
        CurrentGlow,
        TargetGlow,
        DeltaTime * GlowTransitionSpeed
    );

    DynamicMaterialInstance->SetScalarParameterValue(
        "EmissiveStrength",
        NewGlowIntensity
    );
}`}
              </pre>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {/* Diagram 1 */}
              <div className="bg-stone-950 rounded-lg p-6 border border-green-500/30">
                <h4 className="text-xl text-green-400 mb-4">VR Hand Tracking & Proximity</h4>
                <div className="bg-black rounded p-4 border border-green-500/20">
                  <svg viewBox="0 0 200 200" className="w-full h-48">
                    <circle cx="100" cy="100" r="60" stroke="#22c55e" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                    <text x="100" y="175" fill="#22c55e" fontSize="10" textAnchor="middle">Interaction Radius</text>

                    <rect x="80" y="90" width="40" height="20" fill="#8b5cf6" stroke="#a78bfa" strokeWidth="2" />
                    <text x="100" y="105" fill="#000" fontSize="10" textAnchor="middle">Shrine</text>

                    <circle cx="140" cy="70" r="15" fill="#ef4444" stroke="#f87171" strokeWidth="2" />
                    <text x="140" y="75" fill="#fff" fontSize="10" textAnchor="middle">Hand</text>

                    <line x1="120" y1="100" x2="140" y2="70" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3,3" />
                    <text x="130" y="80" fill="#3b82f6" fontSize="10">Track</text>
                  </svg>
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  VR motion controllers track hand position in 3D space, calculating distance to shrine interaction zones for trigger activation.
                </p>
              </div>

              {/* Diagram 2 */}
              <div className="bg-stone-950 rounded-lg p-6 border border-blue-500/30">
                <h4 className="text-xl text-blue-400 mb-4">Material Animation Pipeline</h4>
                <div className="bg-black rounded p-4 border border-blue-500/20">
                  <svg viewBox="0 0 200 200" className="w-full h-48">
                    <rect x="30" y="80" width="50" height="40" fill="#a78bfa" stroke="#8b5cf6" strokeWidth="2" />
                    <text x="55" y="105" fill="#000" fontSize="9" textAnchor="middle">Blueprint</text>

                    <rect x="120" y="80" width="50" height="40" fill="#a78bfa" stroke="#8b5cf6" strokeWidth="2" />
                    <text x="145" y="100" fill="#000" fontSize="9" textAnchor="middle">Dynamic</text>
                    <text x="145" y="110" fill="#000" fontSize="9" textAnchor="middle">Material</text>

                    <path d="M 80 100 L 120 100" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arrowgreen)" />

                    <circle cx="100" cy="140" r="8" fill="#ef4444" />
                    <text x="100" y="160" fill="#ef4444" fontSize="10" textAnchor="middle">Lerp Glow</text>

                    <defs>
                      <marker id="arrowgreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="#22c55e" />
                      </marker>
                    </defs>
                  </svg>
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  Blueprint events trigger C++ functions that update dynamic material parameters, creating smooth emissive transitions on sacred geometry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Systems */}
      <section className="py-20 px-4 sm:px-6 bg-stone-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl mb-12 text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Core Technical Systems
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-stone-950 rounded-lg p-6 border border-red-500/30 hover:border-red-500/60 transition-all duration-300 shadow-lg shadow-red-500/10">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-red-500/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h3 className="text-xl text-red-400 mb-3">VR Interaction Framework</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Custom VR interaction system built on Unreal's motion controller framework. Supports Oculus, Vive, and Index with hand presence, haptic feedback, and 6DOF tracking for intuitive object manipulation.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-stone-950 rounded-lg p-6 border border-green-500/30 hover:border-green-500/60 transition-all duration-300 shadow-lg shadow-green-500/10">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-green-500/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl text-green-400 mb-3">Visual Scripting Integration</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Hybrid architecture combining C++ core systems with Blueprint visual scripting for rapid iteration. Event-driven narrative sequences, shrine puzzles, and environmental triggers accessible to designers.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-stone-950 rounded-lg p-6 border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 shadow-lg shadow-blue-500/10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl text-blue-400 mb-3">Spatial Audio System</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                HRTF-based spatial audio creating authentic 3D soundscapes. Ambient shrine chanting, prayer bells, and environmental reverb dynamically respond to player position and shrine activation states.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Environment Showcase */}
      <section className="py-20 px-4 sm:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl mb-12 text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Sacred Environment Design
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Image 1 */}
            <div className="bg-stone-950 rounded-lg overflow-hidden border border-purple-500/30 shadow-lg shadow-purple-500/10">
              <div className="relative h-64">
                <img
                  src="/src/imports/Screenshot_2026-04-29_121358-1.png"
                  alt="Shrine Architecture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg text-purple-400 mb-2">Shrine Architecture</h3>
                <p className="text-gray-400 text-sm">
                  Detailed stone carving and sacred geometry inspired by traditional temple architecture.
                </p>
              </div>
            </div>

            {/* Image 2 */}
            <div className="bg-stone-950 rounded-lg overflow-hidden border border-green-500/30 shadow-lg shadow-green-500/10">
              <div className="relative h-64">
                <img
                  src="/src/imports/Screenshot_2026-04-29_121358-1.png"
                  alt="Interactive Elements"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg text-green-400 mb-2">Interactive Sacred Objects</h3>
                <p className="text-gray-400 text-sm">
                  VR-enabled ritual objects with physics-based interaction and ceremonial significance.
                </p>
              </div>
            </div>

            {/* Image 3 */}
            <div className="bg-stone-950 rounded-lg overflow-hidden border border-blue-500/30 shadow-lg shadow-blue-500/10">
              <div className="relative h-64">
                <img
                  src="/src/imports/Screenshot_2026-04-29_121358-1.png"
                  alt="Atmospheric Lighting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg text-blue-400 mb-2">Dynamic Lighting System</h3>
                <p className="text-gray-400 text-sm">
                  Time-of-day system with volumetric god rays and emissive shrine elements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Video */}
      <section className="py-20 px-4 sm:px-6 bg-stone-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl mb-12 text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Immersive Experience Demo
          </h2>
          <div className="bg-stone-950 rounded-lg p-4 sm:p-8 border border-purple-500/30 shadow-lg shadow-purple-500/10">
            <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-purple-500/20 border-2 border-purple-500/20">
              <img
                src="/src/imports/Screenshot_2026-04-29_121358-1.png"
                alt="Seeds of Brahma VR Experience"
                className="w-full"
              />
            </div>
            <div className="mt-8 text-center">
              <p className="text-2xl sm:text-3xl text-gray-300 leading-relaxed">
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Full VR Journey:</span> Shrine Discovery → Ritual Interaction → Spiritual Revelation
              </p>
              <p className="text-gray-400 mt-4">
                Complete walkthrough showcasing VR presence mechanics, environmental storytelling, and sacred object interaction systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Roadmap */}
      <section className="py-20 px-4 sm:px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl mb-12 text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Development Journey
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500 via-purple-500 to-blue-500"></div>

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative flex items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <div className="bg-stone-950 rounded-lg p-6 border border-red-500/30 hover:border-red-500/60 transition-all duration-300 shadow-lg shadow-red-500/10">
                    <div className="flex items-center justify-end mb-3">
                      <span className="text-red-400 text-lg mr-3">PHASE 01</span>
                      <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-lg shadow-red-500/40">
                        <span className="text-white text-sm">🕉</span>
                      </div>
                    </div>
                    <h3 className="text-2xl text-red-400 mb-2">Cultural Research & Design</h3>
                    <p className="text-gray-400">
                      Deep dive into traditional shrine architecture, sacred symbolism, and spiritual practices. Collaboration with cultural consultants to ensure authentic representation and respectful interpretation.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full border-4 border-black shadow-lg shadow-red-500/50"></div>
                <div className="md:w-1/2"></div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-center">
                <div className="md:w-1/2"></div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-4 border-black shadow-lg shadow-green-500/50"></div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-stone-950 rounded-lg p-6 border border-green-500/30 hover:border-green-500/60 transition-all duration-300 shadow-lg shadow-green-500/10">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center shadow-lg shadow-green-500/40">
                        <span className="text-white text-sm">🙏</span>
                      </div>
                      <span className="text-green-400 text-lg ml-3">PHASE 02</span>
                    </div>
                    <h3 className="text-2xl text-green-400 mb-2">Narrative Integration</h3>
                    <p className="text-gray-400">
                      Environmental storytelling through shrine placement, artifact descriptions, and audio narratives. Non-linear exploration allowing players to discover spiritual themes at their own pace.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <div className="bg-stone-950 rounded-lg p-6 border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 shadow-lg shadow-blue-500/10">
                    <div className="flex items-center justify-end mb-3">
                      <span className="text-blue-400 text-lg mr-3">PHASE 03</span>
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/40">
                        <span className="text-white text-sm">✨</span>
                      </div>
                    </div>
                    <h3 className="text-2xl text-blue-400 mb-2">Polish & Optimization</h3>
                    <p className="text-gray-400">
                      VR performance optimization for consistent 90fps, haptic feedback refinement, and atmospheric audio balancing. Cross-platform VR testing and accessibility features for broader audience reach.
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
      <section className="py-16 px-4 sm:px-6 bg-stone-900 border-t border-purple-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Seeds of Brahma demonstrates the fusion of cultural respect, technical excellence, and immersive design.
            This project showcases my ability to create meaningful VR experiences that honor traditional spirituality while pushing the boundaries of interactive technology.
            The combination of Unreal Engine's power with thoughtful interaction design creates a space for contemplation and discovery.
          </p>
          <button
            onClick={() => {
              if (onBack) {
                onBack();
                window.scrollTo(0, 0);
              }
            }}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-lg shadow-purple-500/40"
          >
            Return to Portfolio
          </button>
        </div>
      </section>
    </div>
  );
}
