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
      <div className="p-6 bg-secondary/10">
        <h3 className="text-2xl font-bold mb-6">Envianos un mensaje</h3>
        
        {submitSuccess ? (
          <div className="text-center py-8">
            <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-2">Mensaje Enviado!</h3>
              <p>Gracias por contactarte. Nos ponsdremos en contacto lo antes posible.</p>
            </div>
            <Button
              onClick={() => {
                setSubmitSuccess(false);
                reset();
              }}
            >
              Enviar Otro Mensaje
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Nombre*
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
                  Correo Electrónico*
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
                  Número de Teléfono
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
                  Asunto*
                </label>
                <input
                  id="subject"
                  type="text"
                  className={`form-input ${errors.subject ? 'border-red-500' : ''}`}
                  {...register('subject', { required: 'Asunto es necesario' })}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Mensaje*
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`form-input ${errors.message ? 'border-red-500' : ''}`}
                  {...register('message', { required: 'Un mensaje es necesario' })}
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
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
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