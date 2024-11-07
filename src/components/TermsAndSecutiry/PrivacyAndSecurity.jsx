import React from 'react';

export default function PrivacyAndSecurity() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 mt-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6 md:p-10">
        <h1 className="text-4xl font-bold text-center mb-6" style={{ color: '#106EB5' }}>
          Privacy and Security Policy
        </h1>
        <div className="space-y-8 text-center">
          <section className="space-y-2">
            <h2 className="text-2xl font-semibold" style={{ color: '#106EB5' }}>1. Data Collection</h2>
            <p className="text-gray-700">
              We collect certain information from users to provide and improve our services. This includes personal details such as name, contact information, and usage data.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold" style={{ color: '#106EB5' }}>2. Data Usage</h2>
            <p className="text-gray-700">
              Your data is used to enhance user experience, provide customer support, and improve site functionality. We prioritize privacy and never share data without consent.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold" style={{ color: '#106EB5' }}>3. Data Protection</h2>
            <p className="text-gray-700">
              We implement security measures to protect your data from unauthorized access, including encryption and access controls.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold" style={{ color: '#106EB5' }}>4. User Rights</h2>
            <p className="text-gray-700">
              You have the right to access, correct, or delete your personal data. Contact us to exercise these rights or for questions about our data practices.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold" style={{ color: '#106EB5' }}>5. Cookies and Tracking</h2>
            <p className="text-gray-700">
              We use cookies and similar technologies to enhance site functionality. You can control your cookie settings in your browser.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold" style={{ color: '#106EB5' }}>6. Policy Changes</h2>
            <p className="text-gray-700">
              We may update this policy to reflect changes in our practices. Check this page regularly for updates.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold" style={{ color: '#106EB5' }}>7. Contact Us</h2>
            <p className="text-gray-700">
              For questions or concerns regarding our Privacy and Security Policy, please contact us at:
              <br />
              <strong>Education.Code4Bharat Support Team</strong>
              <br />
              Email: <a href="mailto:support@education.code4bharat.com" className="text-blue-500 underline">support@education.code4bharat.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
