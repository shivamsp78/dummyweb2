import InteractiveMap from "@/components/maps/interactive-map";
import { Card } from "@/components/ui/card";

export default function Phase2() {
  return (
    <div className="pt-16">
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Phase II: Road Network Disruption Modeling</h1>
            <p className="text-lg text-gray-600">Transportation network vulnerability analysis and critical link identification</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Road Network Map */}
            <InteractiveMap
              title="Road Network Inventory"
              description="Comprehensive mapping of road infrastructure in Sikkim and surrounding regions."
              icon="fas fa-route"
              type="road-network"
              className="bg-white"
            />

            {/* Disruption Map */}
            <InteractiveMap
              title="Historical Disruptions"
              description="Documentation of historical road disruptions and their impacts on connectivity."
              icon="fas fa-exclamation-triangle"
              type="road-network"
              className="bg-white"
            />
          </div>

          {/* Weak Links Analysis */}
          <Card className="p-8 mb-12 bg-white">
            <h3 className="text-2xl font-bold text-center mb-8">Critical Infrastructure Analysis</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Weak Links Map 1 */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Vulnerable Road Segments - Primary</h4>
                <InteractiveMap
                  title=""
                  description="High-priority vulnerable road segments identified through network analysis."
                  icon="fas fa-exclamation-circle"
                  type="weak-links"
                  className="bg-gray-50 border-0 shadow-none p-0"
                />
              </div>

              {/* Weak Links Map 2 */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Vulnerable Road Segments - Secondary</h4>
                <InteractiveMap
                  title=""
                  description="Secondary priority road segments requiring attention for network resilience."
                  icon="fas fa-route"
                  type="weak-links"
                  className="bg-gray-50 border-0 shadow-none p-0"
                />
              </div>
            </div>
          </Card>

          {/* Villages in Sikkim */}
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-center mb-6">Villages in Sikkim</h3>
            <InteractiveMap
              title=""
              description="Settlement connectivity analysis"
              icon="fas fa-map-marker-alt"
              type="villages"
              className="bg-white border-0 shadow-none"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
