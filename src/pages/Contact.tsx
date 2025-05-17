
import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-elecon-blue py-16 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Have questions about our services? Ready to start a project? Our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-lg mb-8">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                We're eager to hear from you and discuss how Elecon Group can meet your needs. Fill out the form, and one of our representatives will contact you shortly.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-elecon-lightgray p-3 rounded-full">
                    <Mail className="text-elecon-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">info@elecongroup.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-elecon-lightgray p-3 rounded-full">
                    <Phone className="text-elecon-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-elecon-lightgray p-3 rounded-full">
                    <MapPin className="text-elecon-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Visit Us</h3>
                    <p className="text-gray-600">
                      Elecon Industries<br />
                      KHASRA NO. 89, 8/1, 9/2, 10/1<br />
                      Mouli - Ambala Road, Barwala, Haryana<br />
                      Tehsil - Barwala, VPO. Mouli
                    </p>

                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-elecon-lightgray p-3 rounded-full">
                    <Clock className="text-elecon-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="heading-lg mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Divisions Contact */}
      <section className="section-padding bg-elecon-lightgray">
        <div className="container-custom">
          <h2 className="heading-xl text-center mb-12">Our Divisions</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="heading-md mb-4">Elecon Industries</h3>
              <p className="text-gray-600 mb-6">
                For inquiries related to plastic injection molding and manufacturing services.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="text-elecon-blue" size={20} />
                  <span className="text-gray-700">manish@elecongroup.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-elecon-blue" size={20} />
                  <span className="text-gray-700">+91 92185 25850</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="heading-md mb-4">Elecon Aerotech</h3>
              <p className="text-gray-600 mb-6">
                For inquiries related to drone services and drone parts.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="text-elecon-blue" size={20} />
                  <span className="text-gray-700">shashank@elecongroup.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-elecon-blue" size={20} />
                  <span className="text-gray-700">+91 85808 25850</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
