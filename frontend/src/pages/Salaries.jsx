import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { FiShield } from "react-icons/fi";

export default function Salaries() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4 flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-text mb-2">Share a Salary</h1>
        <p className="text-text-muted">Help bring pay transparency to the Ethiopian job market.</p>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex gap-4 text-sm text-primary">
        <FiShield size={24} className="shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold mb-1 text-text">Your privacy is protected</p>
          <p className="text-text-muted">
            We store your login credentials solely to verify you are a real person.
            Your account identity is cryptographically detached and never linked to your public reviews, salaries, or interview posts.
          </p>
        </div>
      </div>

      <Card>
        <CardContent className="flex flex-col gap-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-text mb-1.5 block">Company Name *</label>
              <input type="text" placeholder="e.g. CBE" className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-text-muted" />
            </div>
            <div>
              <label className="text-sm font-medium text-text mb-1.5 block">Job Title *</label>
              <input type="text" placeholder="e.g. Branch Manager" className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-text-muted" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-text mb-1.5 block">Years of Experience (Total) *</label>
              <input type="number" min="0" placeholder="0" className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-text-muted" />
            </div>
            <div>
              <label className="text-sm font-medium text-text mb-1.5 block">Employment Type *</label>
              <select className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-text">
                <option value="">Select type...</option>
                <option value="full-time">Full-time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>
            </div>
          </div>

          <div className="border-t border-border pt-6 mt-2">
            <h3 className="font-semibold text-text mb-4">Core Compensation</h3>
            <div className="bg-surface-secondary p-4 rounded-lg border border-border mb-4">
              <label className="text-sm font-medium text-text mb-1.5 block">Net Monthly Salary (ETB) *</label>
              <p className="text-xs text-text-muted mb-3">Please provide your take-home pay after tax and pension deductions.</p>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-text-muted sm:text-sm">ETB</span>
                </div>
                <input type="number" min="0" placeholder="0.00" className="w-full pl-12 rounded-lg border border-border bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-text-muted" />
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-6 mt-2">
            <h3 className="font-semibold text-text mb-4 flex justify-between items-end">
              <span>Allowances & Bonuses</span>
              <span className="text-xs font-normal text-text-muted">Optional</span>
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
