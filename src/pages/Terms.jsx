import { useState } from 'react';

function Terms() {
  const [activeSection, setActiveSection] = useState('terms');

  const sections = [
    { id: 'terms', title: 'Terms of Service' },
    { id: 'privacy', title: 'Privacy Policy' }
  ];

  return (
    <div className="relative w-full site-bg min-h-screen">
      {/* Header */}
      <div className="relative w-full px-6 md:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
              Legal
            </h1>
            <div className="w-24 h-1 bg-[#f7861e] mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to transparency and your data rights
            </p>
          </div>

          {/* Section Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-[#fc5f2b] text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>

          {/* Content Container */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="p-8 md:p-12">
              {activeSection === 'terms' && (
                <div className="space-y-8">
                  {/* Terms Header */}
                  <div className="border-b border-gray-200 pb-6">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-2">
                      Terms of Service
                    </h2>
                    <p className="text-gray-600">
                      Last Updated: {new Date().toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>

                  {/* Terms Content */}
                  <div className="prose prose-lg max-w-none">
                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Aseryx, Inc. ("Aseryx," "we," "our," or "us") provides a platform for health data ownership and control. 
                        By accessing or using our services, you agree to be bound by these Terms of Service.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Important:</strong> We are in early development. Our services are provided "as is" and may change significantly as we build toward our full vision.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Our Mission</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Aseryx is building infrastructure for health data ownership. We believe you should:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li>Own and control your complete health data</li>
                        <li>Choose who accesses your data and for what purpose</li>
                        <li>Receive fair compensation when your data contributes to research</li>
                        <li>Have full transparency into how your data is used</li>
                      </ul>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Early Stage Services</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Currently, we offer:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li>Beta access to our data marketplace</li>
                        <li>Health data aggregation and storage</li>
                        <li>Research partnership opportunities</li>
                        <li>Data licensing and compensation programs</li>
                      </ul>
                      <p className="text-gray-700 leading-relaxed mt-4">
                        <strong>Note:</strong> Features and functionality may change as we develop our platform.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Your Data Rights</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        You maintain full ownership and control of your health data. You can:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li>Access, download, or delete your data at any time</li>
                        <li>Control who can access your data and for what purposes</li>
                        <li>Revoke access permissions at any time</li>
                        <li>Receive compensation when your data is licensed for research</li>
                      </ul>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">5. Data Security</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        We implement industry-standard security measures including:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li>End-to-end encryption for all health data</li>
                        <li>HIPAA-compliant infrastructure</li>
                        <li>Blockchain verification for data integrity</li>
                        <li>Regular security audits and updates</li>
                      </ul>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">6. Research Partnerships</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        When you choose to share data for research:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li>You receive fair compensation based on data value and usage</li>
                        <li>Research partners are vetted and approved by Aseryx</li>
                        <li>You maintain control over what data is shared</li>
                        <li>All research must have clear scientific and medical benefit</li>
                      </ul>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h3>
                      <p className="text-gray-700 leading-relaxed">
                        As an early-stage platform, our services are provided "as is." We are not liable for any 
                        indirect, incidental, or consequential damages. Our total liability is limited to the amount 
                        you paid for our services in the 12 months preceding the claim.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">8. Changes to Terms</h3>
                      <p className="text-gray-700 leading-relaxed">
                        We may update these terms as we develop our platform. We'll notify you of material changes 
                        via email or through our platform. Continued use constitutes acceptance of updated terms.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">9. Contact Us</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Questions about these terms? Contact us at{' '}
                        <a href="mailto:legal@aseryx.com" className="text-[#fc5f2b] hover:underline">
                          legal@aseryx.com
                        </a>
                      </p>
                    </section>
                  </div>
                </div>
              )}

              {activeSection === 'privacy' && (
                <div className="space-y-8">
                  {/* Privacy Header */}
                  <div className="border-b border-gray-200 pb-6">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-2">
                      Privacy Policy
                    </h2>
                    <p className="text-gray-600">
                      Effective Date: {new Date().toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>

                  {/* Privacy Content */}
                  <div className="prose prose-lg max-w-none">
                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Our Privacy Commitment</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        At Aseryx, privacy isn't just a policy—it's our core mission. We believe you should have 
                        complete control over your health data and full transparency about how it's used.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Your data, your control, your choice.</strong>
                      </p>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Information We Collect</h3>
                      
                      <div className="bg-gray-50 rounded-xl p-6 mb-4">
                        <h4 className="font-semibold text-gray-900 mb-3">Health Data (Your Property)</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          <li>Medical records and test results</li>
                          <li>Wearable device data</li>
                          <li>Genetic information</li>
                          <li>Lab results and prescriptions</li>
                          <li>Health insurance information</li>
                        </ul>
                        <p className="text-sm text-gray-600 mt-3">
                          <strong>Important:</strong> You own this data. We never access it without your explicit permission.
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Account Information</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          <li>Name, email, and contact information</li>
                          <li>Account preferences and settings</li>
                          <li>Payment information (encrypted)</li>
                          <li>Usage analytics (anonymized)</li>
                        </ul>
                      </div>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        We use your information only for the purposes you've explicitly authorized:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li><strong>Data Aggregation:</strong> Unify your health data from multiple sources</li>
                        <li><strong>Research Licensing:</strong> Share data with approved research partners (only with your consent)</li>
                        <li><strong>Compensation:</strong> Calculate and distribute fair payments for data usage</li>
                        <li><strong>Platform Improvement:</strong> Enhance our services based on anonymized usage data</li>
                        <li><strong>Communication:</strong> Send important updates about your account and our services</li>
                      </ul>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Data Sharing and Control</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        <strong>You control every aspect of data sharing:</strong>
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li>Choose which data to share and with whom</li>
                        <li>Set specific purposes for data usage</li>
                        <li>Revoke access at any time</li>
                        <li>See exactly who accessed your data and when</li>
                        <li>Receive detailed reports on data usage</li>
                      </ul>
                      <p className="text-gray-700 leading-relaxed mt-4">
                        We never sell your health data to third parties without your explicit consent.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">5. Data Security</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        We protect your data with military-grade security:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li><strong>Encryption:</strong> All data encrypted in transit and at rest</li>
                        <li><strong>Access Controls:</strong> Multi-factor authentication and role-based access</li>
                        <li><strong>Infrastructure:</strong> HIPAA-compliant cloud infrastructure</li>
                        <li><strong>Monitoring:</strong> 24/7 security monitoring and threat detection</li>
                        <li><strong>Audits:</strong> Regular third-party security audits</li>
                      </ul>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">6. Your Rights</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        You have complete control over your data:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li><strong>Access:</strong> Download all your data at any time</li>
                        <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                        <li><strong>Deletion:</strong> Delete your account and all associated data</li>
                        <li><strong>Portability:</strong> Export your data in standard formats</li>
                        <li><strong>Restriction:</strong> Limit how your data is processed</li>
                        <li><strong>Objection:</strong> Opt out of certain data processing activities</li>
                      </ul>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">7. Research Partners</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        When you choose to share data for research, we ensure:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li>Partners are vetted for scientific credibility and ethical standards</li>
                        <li>Research has clear potential for medical advancement</li>
                        <li>Data is anonymized and aggregated when possible</li>
                        <li>You receive fair compensation based on data value</li>
                        <li>All research results are shared back with the community</li>
                      </ul>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">8. Data Retention</h3>
                      <p className="text-gray-700 leading-relaxed">
                        We retain your data only as long as necessary to provide our services or as required by law. 
                        You can request deletion of your data at any time, and we'll remove it within 30 days.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">9. Children's Privacy</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Our services are not intended for children under 18. We do not knowingly collect 
                        health data from minors without parental consent.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">10. Changes to This Policy</h3>
                      <p className="text-gray-700 leading-relaxed">
                        We'll notify you of any material changes to this privacy policy. We'll never reduce 
                        your rights without your explicit consent.
                      </p>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">11. Contact Us</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Questions about your privacy or data rights? We're here to help:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Email: <a href="mailto:privacy@aseryx.com" className="text-[#fc5f2b] hover:underline">privacy@aseryx.com</a></li>
                        <li>Data Rights: <a href="mailto:rights@aseryx.com" className="text-[#fc5f2b] hover:underline">rights@aseryx.com</a></li>
                        <li>General Support: <a href="mailto:support@aseryx.com" className="text-[#fc5f2b] hover:underline">support@aseryx.com</a></li>
                      </ul>
                    </section>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">
              Aseryx is committed to putting you in control of your health data. 
              Questions? We're always here to help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;
