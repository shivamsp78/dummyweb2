export default function KeyTakeaways() {
  return (
    <section className="py-16 bg-research-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Final Outcomes and Key Takeaways</h2>
          <p className="text-lg text-blue-100">Practical insights for enhancing community resilience in mountainous regions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-white bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-brain text-2xl"></i>
            </div>
            <h3 className="font-semibold mb-2">AI-Powered Modeling</h3>
            <p className="text-blue-100 text-sm">Machine learning algorithms for debris flow prediction and risk assessment</p>
          </div>

          <div className="text-center">
            <div className="bg-white bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-network-wired text-2xl"></i>
            </div>
            <h3 className="font-semibold mb-2">Network Resilience</h3>
            <p className="text-blue-100 text-sm">Critical infrastructure identification and vulnerability assessment tools</p>
          </div>

          <div className="text-center">
            <div className="bg-white bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-shield-alt text-2xl"></i>
            </div>
            <h3 className="font-semibold mb-2">Food Security Planning</h3>
            <p className="text-blue-100 text-sm">Strategic placement and management of food storage systems</p>
          </div>

          <div className="text-center">
            <div className="bg-white bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-globe text-2xl"></i>
            </div>
            <h3 className="font-semibold mb-2">Web-GIS Solution</h3>
            <p className="text-blue-100 text-sm">Dynamic platform for emergency response and risk-informed development</p>
          </div>
        </div>
      </div>
    </section>
  );
}
