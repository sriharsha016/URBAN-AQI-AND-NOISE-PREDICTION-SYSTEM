import { AreaPrediction } from "@/components/area-prediction"

export default function PredictPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-cyan-300 mb-8">Area-wise AQI Prediction</h1>
      <p className="text-muted-foreground mb-8">
        View machine learning predictions for air quality across different areas of Chennai for the next 12 months.
      </p>
      
      <AreaPrediction />
    </div>
  )
}