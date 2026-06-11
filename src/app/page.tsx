import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const programs = [
    "Strategic Stability",
    "South Asian Security",
    "Artificial Intelligence",
    "Arms Control & Non-Proliferation",
    "Cyber Security",
    "Maritime Security",
    "Space Security",
    "Climate & Security",
  ];

  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}

      <section className="bg-[radial-gradient(circle_at_top_right,#3A236B_0%,#0e0524_40%,#080312_100%)] text-white">

        <div className="max-w-7xl mx-auto px-6 py-48">

          <div className="grid lg:grid-cols-2 gap-32 items-center">

            {/* LEFT SIDE */}

            <div>

              <p className="uppercase tracking-[5px] text-[#C4B5FD] text-sm mb-8">
                Peace • Security • Strategic Stability
              </p>

              <h1 className="text-5xl lg:text-6xl font-bold leading-[1.05] max-w-[700px]">
                Researching Security Challenges in an Era of Strategic Competition
              </h1>

              <p className="mt-8 text-xl text-[#DCD6F7] leading-8 max-w-2xl">
                International Student Young Pugwash Pakistan advances
                research, dialogue and policy engagement on peace,
                strategic stability and emerging security challenges.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <button className="bg-white text-[#0e0524] px-8 py-3 rounded-lg font-semibold hover:scale-105 transition">
                  Explore Research
                </button>

                <button className="border border-[#C4B5FD] px-8 py-3 rounded-lg hover:bg-white hover:text-[#0e0524] transition">
                  Publications
                </button>

              </div>

              {/* STATS */}

              <div className="mt-16 flex flex-wrap gap-14">

                <div>
                  <div className="text-4xl font-bold">
                    8
                  </div>

                  <div className="text-[#C4B5FD]">
                    Research Programs
                  </div>
                </div>

                <div>
                  <div className="text-4xl font-bold">
                    20+
                  </div>

                  <div className="text-[#C4B5FD]">
                    Publications
                  </div>
                </div>

                <div>
                  <div className="text-4xl font-bold">
                    10+
                  </div>

                  <div className="text-[#C4B5FD]">
                    Events
                  </div>
                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}

            <div>

              <div className="bg-white/[0.08] backdrop-blur-md border border-[#3A236B] rounded-[32px] p-12">

                <p className="uppercase text-xs tracking-widest text-[#C4B5FD] mb-5">
                  Featured Research
                </p>

                <h2 className="text-4xl font-bold mb-6">
                  Artificial Intelligence and Strategic Stability in South Asia
                </h2>

                <p className="text-[#DCD6F7] leading-8">
                  Examining the implications of AI-enabled military systems,
                  autonomous weapons and emerging technologies for deterrence,
                  escalation dynamics and strategic stability.
                </p>

                <div className="mt-10 pt-6 border-t border-[#3A236B]">

                  <span className="text-[#C4B5FD]">
                    Research Paper • June 2026
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section className="py-28 bg-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold text-[#0e0524] mb-8">
            About ISYP Pakistan
          </h2>

          <p className="text-lg leading-9 text-gray-700">
            International Student Young Pugwash (ISYP) Pakistan is an
            independent student-led research platform dedicated to advancing
            scholarship on peace, strategic stability, emerging technologies,
            arms control and regional security through research, dialogue,
            publications and policy engagement.
          </p>

        </div>

      </section>

      {/* RESEARCH PROGRAMS */}

      <section className="py-28 bg-[#F8F7FC]">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-[#0e0524] mb-14 text-center">
            Research Programs
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {programs.map((program) => (
              <div
                key={program}
                className="bg-white border border-gray-200 p-8 rounded-xl hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <h3 className="font-semibold text-lg text-[#0e0524]">
                  {program}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* PUBLICATIONS */}

      <section className="py-28 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-[#0e0524] mb-14 text-center">
            Latest Publications
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">

            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-xl transition">

              <p className="text-sm font-semibold text-purple-700">
                Research Paper
              </p>

              <h3 className="text-2xl font-bold mt-4">
                AI and Nuclear Deterrence
              </h3>

            </div>

            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-xl transition">

              <p className="text-sm font-semibold text-purple-700">
                Policy Brief
              </p>

              <h3 className="text-2xl font-bold mt-4">
                Maritime Competition in the Indian Ocean
              </h3>

            </div>

            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-xl transition">

              <p className="text-sm font-semibold text-purple-700">
                Strategic Assessment
              </p>

              <h3 className="text-2xl font-bold mt-4">
                Emerging Technologies and Security
              </h3>

            </div>

          </div>

        </div>

      </section>



    </main>
  );
}