import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

export default function ROCChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current && typeof window !== "undefined" && (window as any).Chart) {
      const Chart = (window as any).Chart;
      
      const ctx = chartRef.current.getContext('2d');
      
      const chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['0', '0.2', '0.4', '0.6', '0.8', '1.0'],
          datasets: [{
            label: 'ROC Curve (AUC = 0.89)',
            data: [0, 0.4, 0.7, 0.85, 0.95, 1.0],
            borderColor: '#1976D2',
            backgroundColor: 'rgba(25, 118, 210, 0.1)',
            tension: 0.2,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: { 
              title: { 
                display: true, 
                text: 'False Positive Rate' 
              }
            },
            y: { 
              title: { 
                display: true, 
                text: 'True Positive Rate' 
              }
            }
          },
          plugins: {
            legend: {
              display: true,
              position: 'top'
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
      <h4 className="text-lg font-semibold mb-4">ROC & AUC Curve</h4>
      <div className="h-64">
        <canvas ref={chartRef} />
      </div>
    </Card>
  );
}
