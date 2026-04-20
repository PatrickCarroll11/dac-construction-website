import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    county: "",
    serviceRequired: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "353871144460";
    const firstName = "Declan";
    const text = `Hi ${firstName}, I'm looking for a quote.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*County:* ${formData.county}\n*Service Required:* ${formData.serviceRequired}\n*Message:* ${formData.message}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    toast({ title: "Opening WhatsApp", description: "Complete sending your message in WhatsApp." });
    setFormData({ name: "", phone: "", county: "", serviceRequired: "", message: "" });
  };

  return (
    <>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Get in touch for a free, no-obligation quote.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get a Free Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Name</label>
                  <Input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Phone</label>
                  <Input required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="Your phone number" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">County</label>
                  <Input value={formData.county} onChange={(e) => setFormData({ ...formData, county: e.target.value })} placeholder="Your county" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Service Required</label>
                  <Input value={formData.serviceRequired} onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })} placeholder="What can we help you with?" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Message</label>
                  <Textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your project..." rows={5} />
                </div>
                <Button type="submit" className="w-full">Send Enquiry</Button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
              <div className="space-y-6 mb-10">
                <a href="tel:0871144460" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-brand-green-light flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Phone className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-semibold">087 1144460</p>
                  </div>
                </a>
                <a href="mailto:dacconstructionandroofing@gmail.com" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-brand-green-light flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold">dacconstructionandroofing@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-green-light flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold">Wexford, Ireland</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-heading font-bold text-lg mb-2">Free Quote Available</h3>
                <p className="text-sm text-muted-foreground">
                  We offer free, no-obligation quotes on all work. Fill in the form or give us a call and we'll get back to you promptly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
