import { Link } from "wouter";
import { Card } from "@/components/ui/card";

export default function ProjectOverview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Overview</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Mountainous regions like the Eastern Himalayas face recurring threats from debris flows—rapid movements of water, soil, and rock—that often damage critical road networks and disrupt food supply chains. This project aims to assess and model the cascading impacts of such disruptions on food security.
          </p>
        </div>

        {/* Research Flow Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-mountain text-red-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Debris Flow</h3>
            <p className="text-gray-600">Rapid movements of water, soil, and rock threatening mountainous regions</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-road text-blue-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Road Network Disruption</h3>
            <p className="text-gray-600">Critical infrastructure damage affecting transportation networks</p>
          </div>
          <div className="text-center">
            <div className="bg-earth-green w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-apple-alt text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Impact on Food Security</h3>
            <p className="text-gray-600">Cascading effects on food supply chains and community resilience</p>
          </div>
        </div>

        {/* Quick Dashboard */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Research Dashboard - Quick Links</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/phase1">
              <Card className="p-4 hover:shadow-md transition-shadow text-center cursor-pointer">
                <i className="fas fa-map-marked-alt text-research-blue text-2xl mb-2"></i>
                <p className="font-medium">Interactive Maps</p>
              </Card>
            </Link>
            <Link href="/phase1#contribute">
              <Card className="p-4 hover:shadow-md transition-shadow text-center cursor-pointer">
                <i className="fas fa-plus-circle text-earth-green text-2xl mb-2"></i>
                <p className="font-medium">Contribute Data</p>
              </Card>
            </Link>
            <Link href="/team">
              <Card className="p-4 hover:shadow-md transition-shadow text-center cursor-pointer">
                <i className="fas fa-users text-warning-orange text-2xl mb-2"></i>
                <p className="font-medium">Research Team</p>
              </Card>
            </Link>
            <Link href="/phase1#outputs">
              <Card className="p-4 hover:shadow-md transition-shadow text-center cursor-pointer">
                <i className="fas fa-chart-line text-purple-600 text-2xl mb-2"></i>
                <p className="font-medium">Research Outputs</p>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
