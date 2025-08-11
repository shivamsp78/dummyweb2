import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

interface InteractiveMapProps {
  title: string;
  description: string;
  icon: string;
  type: "debris-flow" | "road-network" | "food-storage" | "villages" | "weak-links";
  className?: string;
}

export default function InteractiveMap({
  title,
  description,
  icon,
  type,
  className = ""
}: InteractiveMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current && typeof window !== "undefined" && (window as any).L) {
      const L = (window as any).L;
      
      // Initialize map with Eastern Himalayas center
      const map = L.map(mapRef.current).setView([27.5, 88.5], 9);
      
      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      // Add sample markers based on map type
      switch (type) {
        case "debris-flow":
          // Sample debris flow locations
          const debrisFlowLocations = [
            [27.6, 88.6],
            [27.4, 88.4],
            [27.7, 88.3],
            [27.3, 88.7]
          ];
          debrisFlowLocations.forEach(([lat, lng]) => {
            L.marker([lat, lng])
              .addTo(map)
              .bindPopup("Debris Flow Event")
              .openPopup();
          });
          break;
          
        case "road-network":
          // Sample road network markers
          const roadPoints = [
            [27.5, 88.5],
            [27.6, 88.4],
            [27.4, 88.6]
          ];
          roadPoints.forEach(([lat, lng]) => {
            L.marker([lat, lng])
              .addTo(map)
              .bindPopup("Road Network Node");
          });
          break;
          
        case "food-storage":
          // Sample food storage locations
          const storageLocations = [
            [27.55, 88.55],
            [27.45, 88.45]
          ];
          storageLocations.forEach(([lat, lng]) => {
            L.marker([lat, lng])
              .addTo(map)
              .bindPopup("Food Storage Facility");
          });
          break;
          
        case "villages":
          // Sample village locations
          const villages = [
            [27.52, 88.52],
            [27.48, 88.48],
            [27.58, 88.58],
            [27.42, 88.42]
          ];
          villages.forEach(([lat, lng]) => {
            L.marker([lat, lng])
              .addTo(map)
              .bindPopup("Village Settlement");
          });
          break;
          
        case "weak-links":
          // Sample weak link locations
          const weakLinks = [
            [27.51, 88.51],
            [27.49, 88.49]
          ];
          weakLinks.forEach(([lat, lng]) => {
            L.marker([lat, lng])
              .addTo(map)
              .bindPopup("Vulnerable Road Segment");
          });
          break;
      }

      return () => {
        map.remove();
      };
    }
  }, [type]);

  return (
    <Card className={`p-6 ${className}`}>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div 
        ref={mapRef} 
        className="h-64 bg-gray-100 rounded-lg mb-4"
        style={{ minHeight: "256px" }}
      />
      <div className="flex items-center text-sm text-gray-600">
        <i className={`${icon} mr-2`}></i>
        <span>{description}</span>
      </div>
    </Card>
  );
}
