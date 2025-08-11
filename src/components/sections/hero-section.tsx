import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-cover bg-center h-96" 
             style={{
               backgroundImage: "linear-gradient(rgba(25, 118, 210, 0.8), rgba(25, 118, 210, 0.8)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
             }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Modeling the Cascading Impact on Food Security
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Due to Debris Flow Induced Disruptions in Mountainous Road Network
          </p>
          <p className="text-lg mb-8 opacity-90">
            A research initiative assessing debris flow-induced road disruptions in the Eastern Himalayas and their effect on food security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/phase1">
              <Button className="bg-white text-research-blue px-8 py-3 hover:bg-gray-100">
                Explore Research
              </Button>
            </Link>
            <Link href="/phase1#contribute">
              <Button variant="outline" className="border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-research-blue">
                Contribute Data
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
