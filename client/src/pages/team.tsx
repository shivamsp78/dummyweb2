import { Card } from "@/components/ui/card";

export default function Team() {
  return (
    <div className="pt-16">
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Research Team</h1>
            <p className="text-lg text-gray-600">Dedicated researchers working on disaster resilience and food security</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Team Member 1 */}
            <Card className="overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                alt="Shivam Priyadarshi" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Shivam Priyadarshi</h3>
                <p className="text-research-blue font-medium mb-2">Fellow (CDRI)</p>
                <p className="text-gray-600 mb-2">PhD Student</p>
                <p className="text-gray-600 text-sm mb-3">Central University of South Bihar, Gaya, India</p>
                <div className="flex items-center text-sm text-gray-500">
                  <i className="fas fa-envelope mr-2"></i>
                  <span>shivampriyadarshi@cusb.ac.in</span>
                </div>
              </div>
            </Card>

            {/* Team Member 2 */}
            <Card className="overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                alt="Dr. Somnath Bera" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Somnath Bera</h3>
                <p className="text-research-blue font-medium mb-2">Mentor</p>
                <p className="text-gray-600 mb-2">Assistant Professor</p>
                <p className="text-gray-600 text-sm mb-1">Department of Geography</p>
                <p className="text-gray-600 text-sm mb-3">Central University of South Bihar, Gaya, India</p>
                <div className="flex items-center text-sm text-gray-500">
                  <i className="fas fa-envelope mr-2"></i>
                  <span>somnath@cusb.ac.in</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
