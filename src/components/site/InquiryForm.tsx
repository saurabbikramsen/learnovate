import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

const FORM_ENDPOINT = "https://script.google.com/macros/s/REPLACE_WITH_YOUR_DEPLOYMENT_ID/exec";

type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "date" | "select" | "textarea";
  placeholder?: string;
  required?: boolean;
  options?: string[];
  rows?: number;
  defaultValue?: string;
};

export function InquiryForm({
  title,
  subtitle,
  formType,
  fields,
  submitLabel = "Submit",
}: {
  title: string;
  subtitle?: string;
  formType: string;
  fields: Field[];
  submitLabel?: string;
}) {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload: Record<string, string> = { formType };
    data.forEach((v, k) => (payload[k] = String(v)));
    try {
      await fetch(FORM_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      toast.success("Thanks! Our team will confirm within 24 hours.");
      form.reset();
    } catch {
      toast.error("Couldn't send right now. Please WhatsApp us instead.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-elegant space-y-5">
      <div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        {fields.map((f) => {
          const colSpan = f.type === "textarea" || f.type === "select" ? "sm:col-span-2" : "";
          return (
            <div key={f.name} className={colSpan}>
              <label className="text-sm font-semibold text-foreground mb-2 block">
                {f.label}{f.required && <span className="text-primary"> *</span>}
              </label>
              {f.type === "textarea" ? (
                <textarea
                  name={f.name}
                  placeholder={f.placeholder}
                  required={f.required}
                  rows={f.rows ?? 3}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary-glow resize-none"
                />
              ) : f.type === "select" ? (
                <select
                  name={f.name}
                  required={f.required}
                  defaultValue={f.defaultValue ?? ""}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary-glow"
                >
                  <option value="" disabled>{f.placeholder ?? "Select an option"}</option>
                  {f.options?.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              ) : (
                <input
                  type={f.type ?? "text"}
                  name={f.name}
                  placeholder={f.placeholder}
                  required={f.required}
                  defaultValue={f.defaultValue}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary-glow"
                />
              )}
            </div>
          );
        })}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-card hover:bg-primary/90 hover:-translate-y-0.5 transition-all disabled:opacity-60"
      >
        {loading ? "Sending..." : <>{submitLabel} <Send className="h-4 w-4" /></>}
      </button>
      <p className="text-xs text-muted-foreground text-center">
        By submitting, you agree to be contacted by Learnovate counsellors.
      </p>
    </form>
  );
}