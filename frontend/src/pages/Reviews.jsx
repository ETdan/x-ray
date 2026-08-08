import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { FiShield, FiAlertTriangle } from "react-icons/fi";

export default function Reviews() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4 flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-text mb-2">Write a Review</h1>
        <p className="text-text-muted">Help the community by sharing your genuine workplace experience.</p>
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
          <div className="bg-accent-warning/10 text-accent-warning p-4 rounded-lg text-sm flex gap-3 items-start">
             <FiAlertTriangle size={18} className="shrink-0 mt-0.5" />
             <p className="text-text-muted"><strong className="text-text">Guideline Reminder:</strong> Do not include names of specific non-executive individuals, profanity, or unsubstantiated claims. Reviews violating these terms will be removed.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-text mb-1.5 block">Company Name *</label>
              <input type="text" placeholder="e.g. Safaricom" className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-text-muted" />
            </div>
            <div>
              <label className="text-sm font-medium text-text mb-1.5 block">Job Title *</label>
              <input type="text" placeholder="e.g. Software Engineer" className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-text-muted" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-text mb-1.5 block">Employment Status *</label>
              <select className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-text">
                <option value="">Select status...</option>
                <option value="current">Current Employee</option>
                <option value="former">Former Employee</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-text mb-1.5 block">Department</label>
              <input type="text" placeholder="e.g. Engineering" className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-text-muted" />
            </div>
          </div>

          <div className="border-t border-border pt-6 mt-2">
            <h3 className="font-semibold text-text mb-4">Ratings</h3>
            <div className="grid gap-4 max-w-sm">
              {['Overall Rating', 'Work-Life Balance', 'Compensation', 'Management', 'Culture'].map(rating => (
                <div key={rating} className="flex justify-between items-center">
                  <span className="text-sm text-text-muted">{rating}</span>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(star => (
                      <button key={star} className="text-border hover:text-accent-warning text-xl transition-colors">★</button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-6 mt-2">
            <h3 className="font-semibold text-text mb-4">Written Review</h3>
            <div className="flex flex-col gap-4">
              <Input label="Review Title *" placeholder="Summarize your experience in a few words" />
              <div>
                <label className="text-sm font-medium text-text mb-1.5 block">Pros *</label>
                <textarea rows={3} placeholder="What is good about working here?" className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-text-muted"></textarea>
              </div>
              <div>
                <label className="text-sm font-medium text-text mb-1.5 block">Cons *</label>
                <textarea rows={3} placeholder="What needs improvement?" className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-text-muted"></textarea>
              </div>
            </div>
          </div>

          <Button size="lg" className="w-full mt-4">Submit Review Anonymously</Button>
        </CardContent>
      </Card>
    </div>
  );
}
