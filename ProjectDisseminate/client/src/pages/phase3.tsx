import InteractiveMap from "@/components/maps/interactive-map";
import { Card } from "@/components/ui/card";

export default function Phase3() {
  return (
    <div className="pt-16">
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Phase III: Cascading Impact on Food Security</h1>
            <p className="text-lg text-gray-600">Assessment of food supply chain vulnerabilities and resilience planning</p>
          </div>

          {/* Food Storage Infrastructure */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <InteractiveMap
              title="Central Food Storage"
              description="Distribution and capacity analysis of centrally controlled food storage facilities."
              icon="fas fa-warehouse"
              type="food-storage"
              className="bg-gray-50"
            />

            <InteractiveMap
              title="State Food Storage"
              description="State-level food storage infrastructure and distribution network analysis."
              icon="fas fa-building"
              type="food-storage"
              className="bg-gray-50"
            />
          </div>

          {/* Impact Assessment Outcomes */}
          <div className="bg-earth-green rounded-xl text-white p-8 mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">Impact Assessment Outcomes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <i className="fas fa-chart-area text-4xl mb-4 opacity-80"></i>
                <h4 className="text-lg font-semibold mb-2">Disruption Scenarios</h4>
                <p className="text-green-100">Analysis of various disruption scenarios and their cascading effects</p>
              </div>
              <div className="text-center">
                <i className="fas fa-map-pin text-4xl mb-4 opacity-80"></i>
                <h4 className="text-lg font-semibold mb-2">Storage Pre-positioning</h4>
                <p className="text-green-100">Optimal positioning of food storage facilities for maximum coverage</p>
              </div>
              <div className="text-center">
                <i className="fas fa-calendar-alt text-4xl mb-4 opacity-80"></i>
                <h4 className="text-lg font-semibold mb-2">3-Month Resilience</h4>
                <p className="text-green-100">Planning for sustained food security during extended disruptions</p>
              </div>
            </div>
          </div>

          {/* Scenario Visualization */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="p-6 bg-gray-50">
              <h4 className="font-semibold mb-4">Current State</h4>
              <div className="bg-white h-32 rounded flex items-center justify-center mb-3">
                <span className="text-gray-500">Baseline Map</span>
              </div>
              <p className="text-sm text-gray-600">Current food security status and infrastructure</p>
            </Card>

            <Card className="p-6 bg-red-50">
              <h4 className="font-semibold mb-4">Disruption Impact</h4>
              <div className="bg-white h-32 rounded flex items-center justify-center mb-3">
                <span className="text-gray-500">Impact Map</span>
              </div>
              <p className="text-sm text-gray-600">Effects of road network disruptions on food access</p>
            </Card>

            <Card className="p-6 bg-green-50">
              <h4 className="font-semibold mb-4">Mitigation Strategy</h4>
              <div className="bg-white h-32 rounded flex items-center justify-center mb-3">
                <span className="text-gray-500">Solution Map</span>
              </div>
              <p className="text-sm text-gray-600">Recommended interventions and preparedness measures</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
