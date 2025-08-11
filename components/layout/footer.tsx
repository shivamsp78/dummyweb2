import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Research Project</h3>
            <p className="text-gray-300 text-sm">
              Modeling the cascading impact on food security due to debris flow induced disruptions in mountainous road networks.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/phase1">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Phase I - Debris Flow Modeling
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/phase2">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Phase II - Road Network Analysis
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/phase3">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Phase III - Food Security Impact
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Research Team
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Partners</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Coalition for Disaster Resilient Infrastructure</li>
              <li>Central University of South Bihar</li>
              <li>CDRI Fellowship Programme</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 CDRI Research Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
