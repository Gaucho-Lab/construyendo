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
              <h3 className="text-xl font-bold mb-2">Application Submitted!</h3>
              <p>Thank you for your loan application. Our team will review your information and contact you within 24-48 hours.</p>
            </div>
            <Button
              onClick={() => {
                setSubmitSuccess(false);
                reset();
              }}
            >
              Submit Another Application
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold mb-6">Personal Information</h3>
              </div>
              
              <div>
                <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                  Full Name*
                </label>
                <input
                  id="fullName"
                  type="text"
                  className={`form-input ${errors.fullName ? 'border-red-500' : ''}`}
                  {...register('fullName', { required: 'Full name is required' })}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
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
                  Phone Number*
                </label>
                <input
                  id="phone"
                  type="tel"
                  className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
                  {...register('phone', { required: 'Phone number is required' })}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="employmentStatus" className="block text-gray-700 font-medium mb-2">
                  Employment Status*
                </label>
                <select
                  id="employmentStatus"
                  className={`form-input ${errors.employmentStatus ? 'border-red-500' : ''}`}
                  {...register('employmentStatus', { required: 'Please select your employment status' })}
                >
                  <option value="">Select</option>
                  <option value="Employed Full-Time">Employed Full-Time</option>
                  <option value="Employed Part-Time">Employed Part-Time</option>
                  <option value="Self-Employed">Self-Employed</option>
                  <option value="Retired">Retired</option>
                  <option value="Other">Other</option>
                </select>
                {errors.employmentStatus && (
                  <p className="text-red-500 text-sm mt-1">{errors.employmentStatus.message}</p>
                )}
              </div>
              
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold mb-6 mt-4">Loan Details</h3>
              </div>
              
              <div>
                <label htmlFor="loanAmount" className="block text-gray-700 font-medium mb-2">
                  Loan Amount ($)*
                </label>
                <input
                  id="loanAmount"
                  type="number"
                  className={`form-input ${errors.loanAmount ? 'border-red-500' : ''}`}
                  {...register('loanAmount', {
                    required: 'Loan amount is required',
                    min: {
                      value: 5000,
                      message: 'Minimum loan amount is $5,000',
                    },
                    max: {
                      value: 250000,
                      message: 'Maximum loan amount is $250,000',
                    },
                  })}
                />
                {errors.loanAmount && (
                  <p className="text-red-500 text-sm mt-1">{errors.loanAmount.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="purpose" className="block text-gray-700 font-medium mb-2">
                  Loan Purpose*
                </label>
                <select
                  id="purpose"
                  className={`form-input ${errors.purpose ? 'border-red-500' : ''}`}
                  {...register('purpose', { required: 'Please select a loan purpose' })}
                >
                  <option value="">Select</option>
                  <option value="Home Renovation">Home Renovation</option>
                  <option value="New Construction">New Construction</option>
                  <option value="Emergency Repairs">Emergency Repairs</option>
                  <option value="Commercial Project">Commercial Project</option>
                  <option value="Other">Other</option>
                </select>
                {errors.purpose && (
                  <p className="text-red-500 text-sm mt-1">{errors.purpose.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="annualIncome" className="block text-gray-700 font-medium mb-2">
                  Annual Income ($)*
                </label>
                <input
                  id="annualIncome"
                  type="number"
                  className={`form-input ${errors.annualIncome ? 'border-red-500' : ''}`}
                  {...register('annualIncome', {
                    required: 'Annual income is required',
                    min: {
                      value: 0,
                      message: 'Please enter a valid amount',
                    },
                  })}
                />
                {errors.annualIncome && (
                  <p className="text-red-500 text-sm mt-1">{errors.annualIncome.message}</p>
                )}
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="form-input"
                  placeholder="Please provide any additional information that may help us process your application."
                  {...register('message')}
                ></textarea>
              </div>
              
              <div className="md:col-span-2">
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-sm text-gray-600">
                    By submitting this form, you authorize us to perform a soft credit check, which will not affect your credit score. We will contact you to discuss your loan options and next steps.
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
                  {isSubmitting ? 'Submitting...' : 'Submit Loan Application'}
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