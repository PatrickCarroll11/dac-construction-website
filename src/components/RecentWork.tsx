import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    "id": "project-1",
    "title": "Residential Construction",
    "image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "project-2",
    "title": "Commercial Construction",
    "image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "project-3",
    "title": "Roofing Services",
    "image": "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=800&q=80&auto=format&fit=crop"
  }
];

const RecentWork = () => (
  <section className="py-20 section-alt">
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Work</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A sample of recent construction & roofing projects completed across Wexford and surrounding areas.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        {projects.map((project) => (
          <Link key={project.id} to="/projects" className="group block rounded-lg overflow-hidden border bg-card hover:shadow-lg transition-all duration-300">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-heading font-bold text-base">{project.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">Construction & Roofing</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center">
        <Button asChild variant="outline">
          <Link to="/projects">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default RecentWork;
