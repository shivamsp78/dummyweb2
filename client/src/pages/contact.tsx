import ContactForm from "@/components/forms/contact-form";
import { Card } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="pt-16">
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact and Feedback</h1>
            <p className="text-lg text-gray-600">Get in touch with our research team or provide feedback on our work</p>
          </div>

          <Card className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <i className="fas fa-envelope text-research-blue mt-1 mr-3"></i>
                    <div>
                      <p className="font-medium">Primary Contact</p>
                      <p className="text-gray-600">shivampriyadarshi@cusb.ac.in</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-university text-research-blue mt-1 mr-3"></i>
                    <div>
                      <p className="font-medium">Institution</p>
                      <p className="text-gray-600">Central University of South Bihar, Gaya, India</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-handshake text-research-blue mt-1 mr-3"></i>
                    <div>
                      <p className="font-medium">Partnership</p>
                      <p className="text-gray-600">Coalition for Disaster Resilient Infrastructure (CDRI)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <ContactForm />
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
