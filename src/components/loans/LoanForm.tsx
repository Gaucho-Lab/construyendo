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
                <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                  Nombre Completo*
                </label>
                <input
                  id="fullName"
                  type="text"
                  className={`form-input ${errors.fullName ? 'border-red-500' : ''}`}
                  {...register('fullName', { required: 'Nombre Completo es requerido' })}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
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
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Número de Teléfono*
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
              
              <div>
                <label htmlFor="employmentStatus" className="block text-gray-700 font-medium mb-2">
                  Estado de Empleo*
                </label>
                <select
                  id="employmentStatus"
                  className={`form-input ${errors.employmentStatus ? 'border-red-500' : ''}`}
                  {...register('employmentStatus', { required: 'Please select your employment status' })}
                >
                  <option value="">Select</option>
                  <option value="Employed Full-Time">Full-Time</option>
                  <option value="Employed Part-Time">Part-Time</option>
                  <option value="Self-Employed">Monotributista</option>
                  <option value="Self-Employed">Responsable Inscripto</option>
                  <option value="Retired">Retirado</option>
                  <option value="Other">Otro</option>
                </select>
                {errors.employmentStatus && (
                  <p className="text-red-500 text-sm mt-1">{errors.employmentStatus.message}</p>
                )}
              </div>
              
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold mb-6 mt-4">Detalles del Préstamo</h3>
              </div>
              
              <div>
                <label htmlFor="loanAmount" className="block text-gray-700 font-medium mb-2">
                  Monto ($)*
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
              
              <div>
                <label htmlFor="purpose" className="block text-gray-700 font-medium mb-2">
                  Finalidad del Dinero*
                </label>
                <select
                  id="purpose"
                  className={`form-input ${errors.purpose ? 'border-red-500' : ''}`}
                  {...register('purpose', { required: 'Please select a loan purpose' })}
                >
                  <option value="">Select</option>
                  <option value="Home Renovation">Renovación de hogar</option>
                  <option value="New Construction">Nueva Construcción</option>
                  <option value="Emergency Repairs">Reparaciones de Emergencia</option>
                  <option value="Commercial Project">Proyecto Comercial</option>
                  <option value="Other">Otro</option>
                </select>
                {errors.purpose && (
                  <p className="text-red-500 text-sm mt-1">{errors.purpose.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="annualIncome" className="block text-gray-700 font-medium mb-2">
                  Sueldo Anual ($)*
                </label>
                <input
                  id="annualIncome"
                  type="number"
                  className={`form-input ${errors.annualIncome ? 'border-red-500' : ''}`}
                  {...register('annualIncome', {
                    required: 'El Sueldo Anual es requerido',
                    min: {
                      value: 0,
                      message: 'Ingresar un monto válido',
                    },
                  })}
                />
                {errors.annualIncome && (
                  <p className="text-red-500 text-sm mt-1">{errors.annualIncome.message}</p>
                )}
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Información Adicional
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="form-input"
                  placeholder="Por favor llenar con cualquier información adicional que nos pueda servir para procesar esta operación."
                  {...register('message')}
                ></textarea>
              </div>
              
              <div className="md:col-span-2">
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-sm text-gray-600">
                    Al completar este formulariom autorizo a realizar un analisis crediticio. 
                  </p>
                </div>
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