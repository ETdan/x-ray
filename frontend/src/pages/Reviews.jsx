import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { FiShield, FiAlertTriangle } from "react-icons/fi";

export default function Reviews() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4 flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold text-neutral-800 mb-2">Write a Review</h1>
        <p className="text-neutral-500">Help the community by sharing your genuine workplace experience.</p>
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
          <div className="bg-amber-50 text-amber-900 p-3 rounded-md text-sm flex gap-3 items-start border border-amber-200">
             <FiAlertTriangle size={18} className="text-warning shrink-0 mt-0.5" />
             <p><strong>Guideline Reminder:</strong> Do not include names of specific non-executive individuals, profanity, or unsubstantiated claims. Reviews violating these terms will be removed.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-neutral-800 mb-1 block">Company Name *</label>
              <input type="text" placeholder="e.g. Safaricom" className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="text-sm font-medium text-neutral-800 mb-1 block">Job Title *</label>
              <input type="text" placeholder="e.g. Software Engineer" className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-neutral-800 mb-1 block">Employment Status *</label>
              <select className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="">Select status...</option>
                <option value="current">Current Employee</option>
                <option value="former">Former Employee</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-neutral-800 mb-1 block">Department</label>
              <input type="text" placeholder="e.g. Engineering" className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
          </div>

          <div className="border-t border-neutral-200 pt-6">
            <h3 className="font-bold text-neutral-800 mb-4">Ratings</h3>
            <div className="grid gap-4 max-w-sm">
              {['Overall Rating', 'Work-Life Balance', 'Compensation', 'Management', 'Culture'].map(rating => (
                <div key={rating} className="flex justify-between items-center">
                  <span className="text-sm text-neutral-600">{rating}</span>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(star => (
                      <button key={star} className="text-neutral-300 hover:text-warning text-xl transition-colors">★</button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-neutral-200 pt-6">
            <h3 className="font-bold text-neutral-800 mb-4">Written Review</h3>
            <div className="flex flex-col gap-4">
              <Input label="Review Title *" placeholder="Summarize your experience in a few words" />
              <div>
                <label className="text-sm font-medium text-neutral-800 mb-1 block">Pros *</label>
                <textarea rows={3} placeholder="What is good about working here?" className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
              </div>
              <div>
                <label className="text-sm font-medium text-neutral-800 mb-1 block">Cons *</label>
                <textarea rows={3} placeholder="What needs improvement?" className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
              </div>
            </div>
          </div>

          <Button size="lg" className="w-full mt-4">Submit Review Anonymously</Button>
        </CardContent>
      </Card>
    </div>
  );
}
