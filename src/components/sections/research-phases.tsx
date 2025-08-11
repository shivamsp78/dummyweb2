import { Link } from "wouter";
import { Card } from "@/components/ui/card";

export default function ResearchPhases() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Phases</h2>
          <p className="text-lg text-gray-600">Our comprehensive three-stage framework for resilient infrastructure planning</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Phase I */}
          <Card className="overflow-hidden">
            <div className="bg-red-600 text-white p-6">
              <h3 className="text-xl font-bold">Phase I</h3>
              <p className="text-red-100">Debris Flow Hazard Modeling</p>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">Assessment and modeling of debris flow hazards using advanced algorithms and satellite imagery.</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li><i className="fas fa-check-circle text-earth-green mr-2"></i>Topographical Analysis</li>
                <li><i className="fas fa-check-circle text-earth-green mr-2"></i>Hydrological Modeling</li>
                <li><i className="fas fa-check-circle text-earth-green mr-2"></i>Geological Assessment</li>
                <li><i className="fas fa-check-circle text-earth-green mr-2"></i>Machine Learning Models</li>
              </ul>
              <Link href="/phase1">
                <span className="text-red-600 hover:text-red-700 font-medium cursor-pointer">Learn More →</span>
              </Link>
            </div>
          </Card>

          {/* Phase II */}
          <Card className="overflow-hidden">
            <div className="bg-blue-600 text-white p-6">
              <h3 className="text-xl font-bold">Phase II</h3>
              <p className="text-blue-100">Road Network Disruption Modeling</p>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">Analysis of transportation network vulnerabilities and identification of weak links.</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li><i className="fas fa-check-circle text-earth-green mr-2"></i>Network Analysis</li>
                <li><i className="fas fa-check-circle text-earth-green mr-2"></i>Vulnerability Assessment</li>
                <li><i className="fas fa-check-circle text-earth-green mr-2"></i>Disruption Scenarios</li>
                <li><i className="fas fa-check-circle text-earth-green mr-2"></i>Critical Link Identification</li>
              </ul>
              <Link href="/phase2">
                <span className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer">Learn More →</span>
              </Link>
            </div>
          </Card>

          {/* Phase III */}
          <Card className="overflow-hidden">
            <div className="bg-earth-green text-white p-6">
              <h3 className="text-xl font-bold">Phase III</h3>
              <p className="text-green-100">Assessing Impact on Food Security</p>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">Evaluation of cascading effects on food supply chains and community resilience.</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li><i className="fas fa-check-circle text-earth-green mr-2"></i>Supply Chain Mapping</li>
                <li><i className="fas fa-check-circle text-earth-green mr-2"></i>Food Storage Analysis</li>
                <li><i className="fas fa-check-circle text-earth-green mr-2"></i>Impact Assessment</li>
                <li><i className="fas fa-check-circle text-earth-green mr-2"></i>Resilience Planning</li>
              </ul>
              <Link href="/phase3">
                <span className="text-earth-green hover:text-green-700 font-medium cursor-pointer">Learn More →</span>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
