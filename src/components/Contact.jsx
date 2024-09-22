import { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      emailjs.sendForm('service_cc38isk', 'template_qa12rwb', e.target, 'OeSGIBt5MwDMUFzqp')
        .then((result) => {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
          setErrors({});
        }, (error) => {
          setStatus('Failed to send message.');
        });
    } else {
      setStatus('Please fill in all fields.');
    }
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center p-8 bg-darkBg">
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="p-7 rounded-lg shadow-lg max-w-md w-full text-darkText"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>

        {/* Name Input */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full mb-4 p-2 border rounded-lg bg-gray-900 text-darkText ${errors.name ? 'border-red-500' : 'border-gray-600'}`}
        />
        {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name}</p>}

        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full mb-4 p-2 border rounded-lg bg-gray-900 text-darkText ${errors.email ? 'border-red-500' : 'border-gray-600'}`}
        />
        {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}

        {/* Message Input */}
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className={`w-full mb-4 p-2 border rounded-lg bg-gray-900 text-darkText ${errors.message ? 'border-red-500' : 'border-gray-600'}`}
          rows="4"
        />
        {errors.message && <p className="text-red-500 text-sm mb-2">{errors.message}</p>}

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          className="bg-slate-500 text-darkText px-4 py-2 rounded-lg w-full"
        >
          Send Message
        </motion.button>

        {/* Status Message */}
        {status && <p className="mt-4 text-center text-white">{status}</p>}
      </motion.form>
    </section>
  );
};

export default Contact;
