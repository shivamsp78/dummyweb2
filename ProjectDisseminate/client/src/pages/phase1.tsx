import InteractiveMap from "@/components/maps/interactive-map";
import ROCChart from "@/components/charts/roc-chart";
import FeatureImportanceChart from "@/components/charts/feature-importance-chart";
import ResearchContributionForm from "@/components/forms/research-contribution-form";
import { Card } from "@/components/ui/card";

export default function Phase1() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Phase I: Debris Flow Hazard Modeling</h1>
            <p className="text-lg text-gray-600">Comprehensive assessment using Google Earth Engine and machine learning algorithms</p>
          </div>

          {/* Contribute Section */}
          <div id="contribute" className="bg-blue-50 rounded-xl p-8 mb-12">
            <ResearchContributionForm />
          </div>

          {/* Interactive Maps Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <InteractiveMap
              title="Debris Flow Inventory Map"
              description="Interactive visualization of historical debris flow events in the Eastern Himalayas region."
              icon="fas fa-map"
              type="debris-flow"
            />

            {/* Conditioning Factors */}
            <div>
              <h3 className="text-xl font-bold mb-6">Conditioning Factors</h3>
              <div className="space-y-4">
                {/* Topographical */}
                <Card className="p-4">
                  <h4 className="font-semibold text-research-blue mb-3">Topographical</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span className="bg-white px-3 py-1 rounded border">Elevation</span>
                    <span className="bg-white px-3 py-1 rounded border">Aspect</span>
                    <span className="bg-white px-3 py-1 rounded border">Slope</span>
                    <span className="bg-white px-3 py-1 rounded border">Curvature</span>
                    <span className="bg-white px-3 py-1 rounded border">Plan Curvature</span>
                    <span className="bg-white px-3 py-1 rounded border">Profile Curvature</span>
                  </div>
                </Card>

                {/* Hydrological */}
                <Card className="p-4">
                  <h4 className="font-semibold text-blue-600 mb-3">Hydrological</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span className="bg-white px-3 py-1 rounded border">Drainage Density</span>
                    <span className="bg-white px-3 py-1 rounded border">Distance to Drainage</span>
                    <span className="bg-white px-3 py-1 rounded border">Stream Power Index</span>
                    <span className="bg-white px-3 py-1 rounded border">Wetness Index</span>
                  </div>
                </Card>

                {/* Geological */}
                <Card className="p-4">
                  <h4 className="font-semibold text-orange-600 mb-3">Geological</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span className="bg-white px-3 py-1 rounded border">Lithology</span>
                    <span className="bg-white px-3 py-1 rounded border">Lineament</span>
                    <span className="bg-white px-3 py-1 rounded border">Soil Properties</span>
                    <span className="bg-white px-3 py-1 rounded border">Erosivity</span>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Model Performance */}
          <div id="outputs" className="bg-gray-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">Model Performance</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ROCChart />
              <FeatureImportanceChart />
            </div>
          </div>

          {/* Field Validation */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Field Validation</h3>
            <p className="text-gray-600 text-center mb-8">Ground-truth validation through field surveys and local community engagement</p>
            
            {/* Field Photos Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-lg overflow-hidden shadow">
                <img 
                  src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Field validation site" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-600">Debris flow impact assessment</p>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow">
                <img 
                  src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Research team fieldwork" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-600">Research team fieldwork</p>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow">
                <img 
                  src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Survey equipment" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-600">GPS and survey equipment</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
