import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { FiShield } from "react-icons/fi";

export default function Salaries() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4 flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold text-neutral-800 mb-2">Share a Salary</h1>
        <p className="text-neutral-500">Help bring pay transparency to the Ethiopian job market.</p>
      </div>

      <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 flex gap-4 text-sm text-indigo-900">
        <FiShield size={24} className="text-primary shrink-0 mt-0.5" />
        <div>
          <p className="font-bold mb-1">Your privacy is protected</p>
          <p>
            We store your login credentials solely to verify you are a real person.
            Your account identity is cryptographically detached and never linked to your public reviews, salaries, or interview posts.
          </p>
        </div>
      </div>

      <Card>
        <CardContent className="p-6 md:p-8 flex flex-col gap-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-neutral-800 mb-1 block">Company Name *</label>
              <input type="text" placeholder="e.g. CBE" className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="text-sm font-medium text-neutral-800 mb-1 block">Job Title *</label>
              <input type="text" placeholder="e.g. Branch Manager" className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-neutral-800 mb-1 block">Years of Experience (Total) *</label>
              <input type="number" min="0" placeholder="0" className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="text-sm font-medium text-neutral-800 mb-1 block">Employment Type *</label>
              <select className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="">Select type...</option>
                <option value="full-time">Full-time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>
            </div>
          </div>

          <div className="border-t border-neutral-200 pt-6">
            <h3 className="font-bold text-neutral-800 mb-4">Core Compensation</h3>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 mb-4">
              <label className="text-sm font-medium text-neutral-800 mb-1 block">Net Monthly Salary (ETB) *</label>
              <p className="text-xs text-neutral-500 mb-3">Please provide your take-home pay after tax and pension deductions.</p>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-neutral-500 sm:text-sm">ETB</span>
                </div>
                <input type="number" min="0" placeholder="0.00" className="w-full pl-12 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-200 pt-6">
            <h3 className="font-bold text-neutral-800 mb-4 flex justify-between items-end">
              <span>Allowances & Bonuses</span>
              <span className="text-xs font-normal text-neutral-500">Optional</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Input type="number" label="Transport Allowance (Monthly)" placeholder="0.00 ETB" />
              <Input type="number" label="Mobile/Data Allowance (Monthly)" placeholder="0.00 ETB" />
              <Input type="number" label="Fuel Allowance (Monthly)" placeholder="0.00 ETB" />
              <Input type="number" label="Annual Bonus" placeholder="0.00 ETB" />
            </div>
          </div>

          <Button size="lg" className="w-full mt-4">Submit Salary Anonymously</Button>
        </CardContent>
      </Card>
    </div>
  );
}
