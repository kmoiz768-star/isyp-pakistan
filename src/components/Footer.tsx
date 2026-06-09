import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0e0524] text-white py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          <div>

            <Image
              src="/images/isyp-logo.png"
              alt="ISYP Pakistan"
              width={220}
              height={60}
            />

            <p className="mt-6 text-[#DCD6F7]">
              Advancing Peace, Strategic Stability and Emerging Security Research.
            </p>

          </div>

          <div>
            <h4 className="font-semibold mb-4">Research</h4>

            <ul className="space-y-2 text-[#DCD6F7]">
              <li>Strategic Stability</li>
              <li>AI & Security</li>
              <li>Maritime Security</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Publications</h4>

            <ul className="space-y-2 text-[#DCD6F7]">
              <li>Research Papers</li>
              <li>Policy Briefs</li>
              <li>Commentaries</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>

            <p className="text-[#DCD6F7]">
              contact@isyppakistan.org
            </p>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-[#2A1859] text-center text-[#C4B5FD]">
          © 2026 International Student Young Pugwash Pakistan
        </div>

      </div>

    </footer>
  );
}