import { useState } from "react";
import { FiX, FiLock, FiDollarSign } from "react-icons/fi";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select } from "../ui/select";

export default function ShareSalaryModal({ isOpen, onClose, company }) {
  const [role, setRole] = useState("");
  const [experience, setExperience] = useState("1 - 2 years");
  const [netMonthlySalary, setNetMonthlySalary] = useState("");
  const [bonus, setBonus] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogContent onClose={onClose}>
        <DialogHeader>
          <DialogTitle>Share Salary Anonymously</DialogTitle>
          <DialogDescription>Posting for <span className="font-extrabold text-text">{company?.name}</span></DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="p-12 text-center flex flex-col items-center gap-4">
            <div className="h-16 w-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-3xl font-black">
              ✓
            </div>
            <h4 className="text-2xl font-black text-text">Salary Data Contributed</h4>
            <p className="text-sm text-text-muted max-w-md">
              Thank you! Your salary report helps build transparent compensation benchmarks across Ethiopian workplaces.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            <div className="p-3.5 bg-primary/5 border border-primary/20 rounded-2xl flex items-center gap-3 text-xs text-text-muted">
              <FiLock className="text-primary text-base shrink-0" />
              <span>Net monthly figures are aggregated to protect employee identity.</span>
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-text-muted mb-1">Job Role *</label>
              <Input
                required
                placeholder="e.g. Senior Backend Engineer"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-text-muted mb-1">Experience Level</label>
              <Select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              >
                <option>0 - 1 years</option>
                <option>1 - 2 years</option>
                <option>3 - 5 years</option>
                <option>5+ years</option>
              </Select>
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-text-muted mb-1">Net Monthly Take-Home Pay (ETB) *</label>
              <div className="relative">
                <span className="absolute left-3.5 top-3 font-black text-text-muted text-sm">ETB</span>
                <Input
                  required
                  placeholder="e.g. 75,000"
                  value={netMonthlySalary}
                  onChange={(e) => setNetMonthlySalary(e.target.value)}
                  className="pl-14 font-black text-emerald-800"
                />
              </div>
              <p className="text-xs text-text-light mt-1">Please enter your net monthly take-home salary in ETB (after tax).</p>
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-text-muted mb-1">Annual Bonus or Allowances (Optional)</label>
              <Input
                placeholder="e.g. ETB 100,000 annual bonus + transport allowance"
                value={bonus}
                onChange={(e) => setBonus(e.target.value)}
              />
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" variant="emerald">
                Submit Salary
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
