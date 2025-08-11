export default function PartnerInstitutions() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Partner Institutions</h2>
          <p className="text-lg text-gray-600">Collaborative research partnerships driving innovation in disaster resilience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* CDRI */}
          <div className="text-center bg-gray-50 rounded-xl p-8">
            <div className="bg-research-blue w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-building text-white text-2xl"></i>
            </div>
            <h3 className="text-lg font-bold mb-2">Supported and Funded by:</h3>
            <p className="text-research-blue font-semibold">Coalition for Disaster Resilient Infrastructure (CDRI)</p>
            <p className="text-gray-600 text-sm">New Delhi</p>
          </div>

          {/* CUSB */}
          <div className="text-center bg-gray-50 rounded-xl p-8">
            <div className="bg-earth-green w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-university text-white text-2xl"></i>
            </div>
            <h3 className="text-lg font-bold mb-2">Endorsed by:</h3>
            <p className="text-earth-green font-semibold">Central University of South Bihar (CUSB)</p>
            <p className="text-gray-600 text-sm">India</p>
          </div>

          {/* Fellowship */}
          <div className="text-center bg-gray-50 rounded-xl p-8">
            <div className="bg-warning-orange w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-award text-white text-2xl"></i>
            </div>
            <h3 className="text-lg font-bold mb-2">Supported under:</h3>
            <p className="text-warning-orange font-semibold">CDRI Fellowship Programme</p>
            <p className="text-gray-600 text-sm">Research Initiative</p>
          </div>
        </div>
      </div>
    </section>
  );
}
