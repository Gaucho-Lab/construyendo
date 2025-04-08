import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { LoanFormData } from '../../types';

interface LoanFormProps {
  initialLoanAmount: number | null;
}

const LoanForm = ({ initialLoanAmount }: LoanFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<LoanFormData>();

  // Set the initial loan amount when it changes
  useEffect(() => {
    if (initialLoanAmount !== null) {
      setValue('loanAmount', initialLoanAmount);
    }
  }, [initialLoanAmount, setValue]);

  const onSubmit = async (data: LoanFormData) => {
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
        {submitSuccess ? (
          <div className="text-center py-8">
            <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-2">Aplicación enviada!</h3>
              <p>Gracias port tu aplicación. Nuestro equipo revisará la información y se contactará con usted dentro de 24-48 horas.</p>
            </div>
            <Button
              onClick={() => {
                setSubmitSuccess(false);
                reset();
              }}
            >
              Enviar Otra Aplicación
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold mb-6">Información Personal</h3>
              </div>
              
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Nombre*
                </label>
                <input
                  id="name"
                  type="text"
                  className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                  {...register('name', { required: 'Nombre es requerido' })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                  Apellido*
                </label>
                <input
                  id="lastName"
                  type="text"
                  className={`form-input ${errors.lastName ? 'border-red-500' : ''}`}
                  {...register('lastName', { required: 'Apellido es requerido' })}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                )}
              </div>
              
              <div className="md:col-span-2">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Correo Electrónico*
                </label>
                <input
                  id="email"
                  type="email"
                  className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                  {...register('email', {
                    required: 'Correo Electrónico es requerido',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Correo Electrónico Invalido',
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label htmlFor="cuit" className="block text-gray-700 font-medium mb-2">
                  CUIT/DNI*
                </label>
                <input
                  id="cuit"
                  type="number"
                  className={`form-input ${errors.cuit ? 'border-red-500' : ''}`}
                  {...register('cuit', {
                    required: 'El CUIT o DNI es requerido',
                  })}
                />
                {errors.cuit && (
                  <p className="text-red-500 text-sm mt-1">{errors.cuit.message}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label htmlFor="dob" className="block text-gray-700 font-medium mb-2">
                  Fecha de Nacimiento*
                </label>
                <input
                  id="dob"
                  type="date"
                  className={`form-input ${errors.dob ? 'border-red-500' : ''}`}
                  {...register('dob', {
                    required: 'El CUIT o DNI es requerido',
                  })}
                />
                {errors.dob && (
                  <p className="text-red-500 text-sm mt-1">{errors.dob.message}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Teléfono Celular*
                </label>
                <input
                  id="phone"
                  type="tel"
                  className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
                  {...register('phone', { required: 'El Número de Teléfono es requerido' })}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              
              <div className="md:col-span-2">
                <label htmlFor="loanAmount" className="block text-gray-700 font-medium mb-2">
                  Monto a solicitar ($)*
                </label>
                <input
                  id="loanAmount"
                  type="number"
                  className={`form-input ${errors.loanAmount ? 'border-red-500' : ''}`}
                  {...register('loanAmount', {
                    required: 'El Monto es requerido',
                    min: {
                      value: 5000,
                      message: 'El Monto Mínimo es de $5,000',
                    },
                    max: {
                      value: 250000,
                      message: 'El Monto Máximo es de $250,000',
                    },
                  })}
                />
                {errors.loanAmount && (
                  <p className="text-red-500 text-sm mt-1">{errors.loanAmount.message}</p>
                )}
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Otra Información
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="form-input"
                  placeholder=""
                  {...register('message')}
                ></textarea>
              </div>
              
              <div className="md:col-span-2">
                <Button
                  type="submit"
                  size="lg"
                  fullWidth
                  className="mt-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Aplicación'}
                </Button>
              </div>
            </div>
          </form>
        )}
      </div>
    </Card>
  );
};

export default LoanForm;