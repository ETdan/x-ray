import { useState } from "react";
import { FiX, FiShield, FiStar, FiLock } from "react-icons/fi";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select } from "../ui/select";

export default function WriteReviewModal({ isOpen, onClose, company }) {
  const [rating, setRating] = useState(5);
  const [jobTitle, setJobTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("Current Employee");
  const [title, setTitle] = useState("");
  const [pros, setPros] = useState("");
  const [cons, setCons] = useState("");
  const [advice, setAdvice] = useState("");
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
          <DialogTitle>Write Anonymous Review</DialogTitle>
          <DialogDescription>Posting for <span className="font-extrabold text-text">{company?.name}</span></DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="p-12 text-center flex flex-col items-center gap-4">
            <div className="h-16 w-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-3xl font-black">
              ✓
            </div>
            <h4 className="text-2xl font-black text-text">Review Submitted Anonymously</h4>
            <p className="text-sm text-text-muted max-w-md">
              Thank you for contributing! Your input stays 100% detached from your user identity to maintain complete privacy.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="overflow-y-auto p-6 sm:p-8 space-y-6">
            
            {/* Cryptographic Anonymity Banner */}
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-2xl flex items-start gap-3 text-xs text-text-muted">
              <FiLock className="text-primary text-base shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-text block mb-0.5">100% Cryptographic Anonymity Guarantee</span>
                Your user credentials are used solely to prevent spam. Your public review is never linked to your user account, name, or email.
              </div>
            </div>

            {/* Overall Rating */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-text-muted mb-2">Overall Rating *</label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-1 hover:scale-110 transition-transform cursor-pointer"
                  >
                    <FiStar 
                      size={28} 
                      className={star <= rating ? "fill-amber-400 text-amber-400" : "text-border"} 
                    />
                  </button>
                ))}
                <span className="ml-2 font-black text-text text-base">{rating}.0 / 5.0</span>
              </div>
            </div>

            {/* Role & Status */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-text-muted mb-1">Job Title *</label>
                <Input
                  required
                  placeholder="e.g. Senior Software Engineer"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-text-muted mb-1">Department</label>
                <Input
                  placeholder="e.g. Technology & Digital"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-text-muted mb-1">Employment Status</label>
              <Select
                value={employmentStatus}
                onChange={(e) => setEmploymentStatus(e.target.value)}
              >
                <option>Current Employee</option>
                <option>Former Employee</option>
              </Select>
            </div>

            {/* Headline */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-text-muted mb-1">Review Headline *</label>
              <Input
                required
                placeholder="Summarize your experience in one sentence"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Pros */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-text-muted mb-1">Pros *</label>
              <textarea
                required
                rows={3}
                placeholder="What do you enjoy about working here? (Workplace culture, benefits, team, tech stack)"
                value={pros}
                onChange={(e) => setPros(e.target.value)}
                className="flex w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-medium text-text placeholder:text-text-light outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Cons */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-text-muted mb-1">Cons *</label>
              <textarea
                required
                rows={3}
                placeholder="What could be improved? (Avoid naming non-executive individuals)"
                value={cons}
                onChange={(e) => setCons(e.target.value)}
                className="flex w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-medium text-text placeholder:text-text-light outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Advice to Management */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-text-muted mb-1">Advice to Management</label>
              <textarea
                rows={2}
                placeholder="Constructive advice for executive leadership"
                value={advice}
                onChange={(e) => setAdvice(e.target.value)}
                className="flex w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-medium text-text placeholder:text-text-light outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="default"
              >
                Submit Anonymous Review
              </Button>
            </DialogFooter>

          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
