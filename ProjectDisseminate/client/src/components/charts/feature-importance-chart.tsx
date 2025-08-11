import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

export default function FeatureImportanceChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current && typeof window !== "undefined" && (window as any).Chart) {
      const Chart = (window as any).Chart;
      
      const ctx = chartRef.current.getContext('2d');
      
      const chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Slope', 'Elevation', 'Drainage', 'Rainfall', 'NDVI', 'Geology'],
          datasets: [{
            label: 'Feature Importance',
            data: [0.25, 0.20, 0.18, 0.15, 0.12, 0.10],
            backgroundColor: [
              '#1976D2',
              '#388E3C', 
              '#F57C00',
              '#9C27B0',
              '#607D8B',
              '#795548'
            ],
            borderRadius: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { 
              beginAtZero: true, 
              title: { 
                display: true, 
                text: 'Importance Score' 
              }
            }
          },
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });

      return () => {
        chart.destroy();
      };
    }
  }, []);

  return (
    <Card className="p-6">
      <h4 className="text-lg font-semibold mb-4">Feature Importance</h4>
      <div className="h-64">
        <canvas ref={chartRef} />
      </div>
    </Card>
  );
}
