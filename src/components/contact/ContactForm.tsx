import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { ContactFormData } from '../../types';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call with a delay
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', data);
      setSubmitSuccess(true);
      reset();
      // Reset form state after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card elevated>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
        
        {submitSuccess ? (
          <div className="text-center py-8">
            <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
              <p>Thank you for contacting us. We will get back to you as soon as possible.</p>
            </div>
            <Button
              onClick={() => {
                setSubmitSuccess(false);
                reset();
              }}
            >
              Send Another Message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name*
                </label>
                <input
                  id="name"
                  type="text"
                  className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address*
                </label>
                <input
                  id="email"
                  type="email"
                  className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="form-input"
                  {...register('phone')}
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject*
                </label>
                <input
                  id="subject"
                  type="text"
                  className={`form-input ${errors.subject ? 'border-red-500' : ''}`}
                  {...register('subject', { required: 'Subject is required' })}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message*
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`form-input ${errors.message ? 'border-red-500' : ''}`}
                  {...register('message', { required: 'Message is required' })}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
              
              <div className="md:col-span-2">
                <Button
                  type="submit"
                  size="lg"
                  fullWidth
                  className="mt-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </div>
          </form>
        )}
      </div>
    </Card>
  );
};

export default ContactForm;