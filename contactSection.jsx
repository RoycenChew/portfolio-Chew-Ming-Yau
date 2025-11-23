import { useState } from 'react';
import Shuffle from './Shuffle';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace these with your EmailJS credentials
    const serviceId = 'service_of6xd7p';
    const templateId = 'template_ddf1m3n';
    const publicKey = 'zS6cAQHTY0zJISXM6';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'mingyauchew@gmail.com' // Your email
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        alert(`Thank you ${formData.name}! Your message has been sent.`);
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      })
      .catch((error) => {
        alert('Failed to send message. Please try again.');
        console.error('EmailJS error:', error);
        setIsSubmitting(false);
      });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Thank you! You've been subscribed with ${subscribeEmail}`);
    setSubscribeEmail('');
  };

  return (
    <section id="contact" className="min-h-screen px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Shuffle
            text="GET IN TOUCH"
            className="text-5xl md:text-6xl font-black mb-4"
            shuffleDirection="right"
            duration={0.4}
            shuffleTimes={3}
            colorFrom="#6366f1"
            colorTo="#a78bfa"
            stagger={0.05}
            scrambleCharset="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              letterSpacing: '0.05em'
            }}
          />
          <p className="text-center text-gray-400 text-lg max-w-2xl mx-auto">
            Let's work together! Feel free to reach out.
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Main Contact Form with CTA Style */}
        <div className="mb-16">
          <div className="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 px-6 py-16 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-16 border border-gray-700">
            {/* Background SVG */}
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
              aria-hidden="true"
            >
              <circle
                cx="512"
                cy="512"
                r="512"
                fill="url(#contact-gradient)"
                fillOpacity="0.4"
              />
              <defs>
                <radialGradient
                  id="contact-gradient"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stopColor="#3b82f6" />
                  <stop offset="1" stopColor="#1e40af" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>

            <h3 className="text-3xl font-bold text-center text-white mb-8">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 text-white rounded-lg border border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 text-white rounded-lg border border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white/5 text-white rounded-lg border border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mb-16">
          <div className="relative isolate overflow-hidden bg-gradient-to-br from-purple-900 to-gray-900 px-6 py-20 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-20">
            {/* Background SVG */}
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
              aria-hidden="true"
            >
              <circle
                cx="512"
                cy="512"
                r="512"
                fill="url(#newsletter-gradient)"
                fillOpacity="0.5"
              />
              <defs>
                <radialGradient
                  id="newsletter-gradient"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stopColor="#8b5cf6" />
                  <stop offset="1" stopColor="#6366f1" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>

            <h3 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Stay Connected
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-center text-lg leading-8 text-gray-300">
              Connect with me if you want to work with me on new project!
            </p>

          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <a
            href="mailto:mingyauchew@gmail.com"
            className="group relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-xl shadow-xl hover:shadow-2xl transition transform hover:scale-105"
          >
            <div className="relative z-10">
              <div className="text-4xl mb-3">📧</div>
              <h4 className="text-lg font-bold text-white mb-1">Email</h4>
              <p className="text-blue-100 text-sm">mingyauchew@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+601111429180"
            className="group relative overflow-hidden bg-gradient-to-br from-green-600 to-green-800 p-6 rounded-xl shadow-xl hover:shadow-2xl transition transform hover:scale-105"
          >
            <div className="relative z-10">
              <div className="text-4xl mb-3">📱</div>
              <h4 className="text-lg font-bold text-white mb-1">Phone</h4>
              <p className="text-green-100 text-sm">+6011-1142 9180</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/ming-yau-chew-06675b354"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-xl shadow-xl hover:shadow-2xl transition transform hover:scale-105"
          >
            <div className="relative z-10">
              <div className="text-4xl mb-3">💼</div>
              <h4 className="text-lg font-bold text-white mb-1">LinkedIn</h4>
              <p className="text-purple-100 text-sm">Connect with me</p>
            </div>
          </a>

          <a
            href="https://github.com/RoycenChew"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900 p-6 rounded-xl shadow-xl hover:shadow-2xl transition transform hover:scale-105"
          >
            <div className="relative z-10">
              <div className="text-4xl mb-3">💻</div>
              <h4 className="text-lg font-bold text-white mb-1">GitHub</h4>
              <p className="text-gray-100 text-sm">View my code</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}