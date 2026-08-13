import { useState } from "react";
import { FiX, FiLock, FiHelpCircle } from "react-icons/fi";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select } from "../ui/select";

export default function ShareInterviewModal({ isOpen, onClose, company }) {
  const [role, setRole] = useState("");
  const [difficulty, setDifficulty] = useState("Medium");
  const [outcome, setOutcome] = useState("Accepted Offer");
  const [questions, setQuestions] = useState("");
  const [tips, setTips] = useState("");
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
          <DialogTitle>Share Interview Experience</DialogTitle>
          <DialogDescription>Posting for <span className="font-extrabold text-text">{company?.name}</span></DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="p-12 text-center flex flex-col items-center gap-4">
            <div className="h-16 w-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-3xl font-black">
              ✓
            </div>
            <h4 className="text-2xl font-black text-text">Interview Experience Shared</h4>
            <p className="text-sm text-text-muted max-w-md">
              Thank you! Your interview feedback prepares fellow job seekers for their technical and managerial evaluations.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            <div className="p-3.5 bg-primary/5 border border-primary/20 rounded-2xl flex items-center gap-3 text-xs text-text-muted">
              <FiLock className="text-primary text-base shrink-0" />
              <span>All candidate reports are published anonymously.</span>
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-text-muted mb-1">Position Interviewed For *</label>
              <Input
                required
                placeholder="e.g. Senior Software Engineer"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-text-muted mb-1">Interview Difficulty</label>
                <Select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                >
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </Select>
              </div>
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-text-muted mb-1">Outcome</label>
                <Select
                  value={outcome}
                  onChange={(e) => setOutcome(e.target.value)}
                >
                  <option>Accepted Offer</option>
                  <option>Declined Offer</option>
                  <option>No Offer</option>
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-text-muted mb-1">Interview Questions Asked *</label>
              <textarea
                required
                rows={3}
                placeholder="Describe key questions, coding tasks, or case studies."
                value={questions}
                onChange={(e) => setQuestions(e.target.value)}
                className="flex w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-medium text-text placeholder:text-text-light outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-text-muted mb-1">Tips for Candidates</label>
              <textarea
                rows={2}
                placeholder="Advice on how to prepare for this employer's interview process"
                value={tips}
                onChange={(e) => setTips(e.target.value)}
                className="flex w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-medium text-text placeholder:text-text-light outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" variant="default">
                Submit Interview Experience
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
