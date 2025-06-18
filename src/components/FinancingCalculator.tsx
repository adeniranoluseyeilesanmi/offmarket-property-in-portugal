
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { VendorFinancing } from "@/utils/mockData";
import { formatCurrency } from "@/utils/formatters";

interface FinancingCalculatorProps {
  propertyPrice: number;
  vendorFinancing: VendorFinancing;
}

const FinancingCalculator = ({ propertyPrice, vendorFinancing }: FinancingCalculatorProps) => {
  const [downPaymentPercent, setDownPaymentPercent] = useState([vendorFinancing.downPaymentRequired]);
  const [loanTerm, setLoanTerm] = useState([vendorFinancing.termYears]);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    calculatePayment();
  }, [downPaymentPercent, loanTerm, propertyPrice, vendorFinancing.interestRate]);

  const calculatePayment = () => {
    const downPayment = (propertyPrice * downPaymentPercent[0]) / 100;
    const loanAmount = propertyPrice - downPayment;
    const monthlyRate = vendorFinancing.interestRate / 100 / 12;
    const numPayments = loanTerm[0] * 12;

    if (monthlyRate === 0) {
      setMonthlyPayment(loanAmount / numPayments);
    } else {
      const payment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                     (Math.pow(1 + monthlyRate, numPayments) - 1);
      setMonthlyPayment(payment);
    }
  };

  const downPaymentAmount = (propertyPrice * downPaymentPercent[0]) / 100;
  const loanAmount = propertyPrice - downPaymentAmount;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Calculadora de Financiamento</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium">
            Entrada: {downPaymentPercent[0]}% ({formatCurrency(downPaymentAmount)})
          </label>
          <Slider 
            value={downPaymentPercent}
            onValueChange={setDownPaymentPercent}
            max={50}
            min={vendorFinancing.downPaymentRequired}
            step={5}
            className="py-4"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">
            Prazo: {loanTerm[0]} anos
          </label>
          <Slider 
            value={loanTerm}
            onValueChange={setLoanTerm}
            max={30}
            min={10}
            step={5}
            className="py-4"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
          <div className="bg-gray-50 p-3 rounded-md">
            <div className="text-sm text-gray-500">Montante do Empréstimo</div>
            <div className="font-bold">{formatCurrency(loanAmount)}</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-md">
            <div className="text-sm text-gray-500">Taxa de Juro</div>
            <div className="font-bold">{vendorFinancing.interestRate}%</div>
          </div>
          <div className="bg-blue-50 p-3 rounded-md col-span-2">
            <div className="text-sm text-gray-500">Pagamento Mensal</div>
            <div className="font-bold text-lg text-blue-600">{formatCurrency(monthlyPayment)}</div>
          </div>
        </div>

        <div className="text-xs text-gray-500 space-y-1">
          <p>• Cálculo estimativo, sujeito a aprovação</p>
          <p>• Taxas e termos podem variar</p>
          <p>• Consulte um consultor financeiro</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FinancingCalculator;
