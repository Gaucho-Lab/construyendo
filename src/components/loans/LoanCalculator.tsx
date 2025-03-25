import { useState, useEffect } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface LoanCalculatorProps {
  onSubmit: (amount: number) => void;
}

const LoanCalculator = ({ onSubmit }: LoanCalculatorProps) => {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [interestRate, setInterestRate] = useState(6.99);
  const [loanTerm, setLoanTerm] = useState(60); // 5 years in months
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  // Calculate the loan details whenever inputs change
  useEffect(() => {
    calculateLoan();
  }, [loanAmount, interestRate, loanTerm]);

  const calculateLoan = () => {
    // Convert annual interest rate to monthly
    const monthlyInterestRate = interestRate / 100 / 12;
    
    // Calculate monthly payment using loan formula
    const monthlyPaymentCalc = loanAmount * 
      (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTerm)) / 
      (Math.pow(1 + monthlyInterestRate, loanTerm) - 1);
    
    // Calculate total payment over the life of the loan
    const totalPaymentCalc = monthlyPaymentCalc * loanTerm;
    
    // Calculate total interest paid
    const totalInterestCalc = totalPaymentCalc - loanAmount;
    
    setMonthlyPayment(monthlyPaymentCalc);
    setTotalPayment(totalPaymentCalc);
    setTotalInterest(totalInterestCalc);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(loanAmount);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <Card elevated className="w-full">
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-6">Loan Calculator</h3>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Loan Amount: {formatCurrency(loanAmount)}
            </label>
            <input
              type="range"
              min="5000"
              max="250000"
              step="1000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>$5,000</span>
              <span>$250,000</span>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Interest Rate: {interestRate}%
            </label>
            <input
              type="range"
              min="3"
              max="18"
              step="0.01"
              value={interestRate}
              onChange={(e) => setInterestRate(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>3%</span>
              <span>18%</span>
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Loan Term: {loanTerm / 12} {loanTerm === 12 ? 'Year' : 'Years'}
            </label>
            <select
              value={loanTerm}
              onChange={(e) => setLoanTerm(parseInt(e.target.value))}
              className="w-full form-input"
            >
              <option value="12">1 Year</option>
              <option value="24">2 Years</option>
              <option value="36">3 Years</option>
              <option value="48">4 Years</option>
              <option value="60">5 Years</option>
              <option value="72">6 Years</option>
              <option value="84">7 Years</option>
              <option value="96">8 Years</option>
              <option value="108">9 Years</option>
              <option value="120">10 Years</option>
            </select>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-gray-600 text-sm">Monthly Payment</p>
                <p className="text-xl font-bold text-primary">{formatCurrency(monthlyPayment)}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-600 text-sm">Total Payment</p>
                <p className="text-xl font-bold">{formatCurrency(totalPayment)}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-600 text-sm">Total Interest</p>
                <p className="text-xl font-bold text-secondary">{formatCurrency(totalInterest)}</p>
              </div>
            </div>
          </div>
          
          <Button type="submit" fullWidth size="lg">
            Apply with These Terms
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default LoanCalculator;