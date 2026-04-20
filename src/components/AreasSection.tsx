import { MapPin } from "lucide-react";

const areas = [
  "Wexford",
  "Waterford",
  "Kilkenny",
  "Carlow",
  "Wicklow",
  "Kildare",
  "Dublin",
  "Laois",
  "Offaly",
  "Tipperary",
  "Cork",
  "Kerry"
];

const AreasSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas We Cover</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide Construction & Roofing services across Wexford and surrounding counties. If your area isn't listed, get in touch — we likely cover you.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {areas.map((area) => (
            <div key={area} className="flex items-center gap-2 p-3 rounded-lg bg-brand-green-light">
              <MapPin className="h-4 w-4 text-primary shrink-0" />
              <span className="text-sm font-medium">Co. {area}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          We travel daily across surrounding areas. Contact us for availability in your county.
        </p>
      </div>
    </section>
  );
};

export default AreasSection;
