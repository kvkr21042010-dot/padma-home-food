import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Clock, MapPin, MessageSquare, Phone } from "lucide-react";
import { useState } from "react";

export function SupportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section
        className="bg-card border-b border-border py-10"
        data-ocid="support.header_section"
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
            Get in Touch
          </p>
          <h1 className="font-display text-4xl font-bold text-foreground mb-2">
            We're Here to Help
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto text-base">
            Have a question about our menu or want to place an order? Reach out
            to us anytime.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact info */}
        <div className="space-y-6">
          <h2 className="font-display text-2xl font-bold text-foreground">
            Contact Details
          </h2>

          <div className="bg-card rounded-2xl border border-border p-6 space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Phone</p>
                <a
                  href="tel:9666817773"
                  className="text-primary font-bold text-lg hover:underline"
                >
                  9666817773
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Clock size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">
                  Opening Hours
                </p>
                <p className="text-foreground font-bold">8:00 AM – 10:00 PM</p>
                <p className="text-muted-foreground text-sm">Open every day</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">
                  Location
                </p>
                <p className="text-foreground font-bold">Hyderabad, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MessageSquare size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">
                  Quick Reply
                </p>
                <p className="text-muted-foreground text-sm">
                  We respond within a few minutes during opening hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Message form */}
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            Send a Message
          </h2>
          {submitted ? (
            <div
              className="bg-card border border-border rounded-2xl p-8 flex flex-col items-center gap-4 text-center"
              data-ocid="support.success_state"
            >
              <CheckCircle size={48} className="text-accent" />
              <h3 className="font-display text-xl font-bold text-foreground">
                Message Sent!
              </h3>
              <p className="text-muted-foreground text-sm">
                Thank you, {form.name}! We'll get back to you shortly on{" "}
                {form.phone}.
              </p>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", phone: "", message: "" });
                }}
                data-ocid="support.send_another_button"
              >
                Send Another
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-2xl p-6 space-y-5"
              data-ocid="support.contact_form"
            >
              <div className="space-y-1.5">
                <Label htmlFor="support-name" className="text-sm font-semibold">
                  Your Name
                </Label>
                <Input
                  id="support-name"
                  placeholder="e.g. Priya Sharma"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  data-ocid="support.name_input"
                />
              </div>
              <div className="space-y-1.5">
                <Label
                  htmlFor="support-phone"
                  className="text-sm font-semibold"
                >
                  Phone Number
                </Label>
                <Input
                  id="support-phone"
                  type="tel"
                  placeholder="e.g. 9876543210"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                  data-ocid="support.phone_input"
                />
              </div>
              <div className="space-y-1.5">
                <Label
                  htmlFor="support-message"
                  className="text-sm font-semibold"
                >
                  Message
                </Label>
                <Textarea
                  id="support-message"
                  placeholder="Ask about our menu, timings, or place a custom order..."
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  required
                  data-ocid="support.message_textarea"
                />
              </div>
              <Button
                type="submit"
                className="w-full font-semibold"
                data-ocid="support.submit_button"
              >
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
