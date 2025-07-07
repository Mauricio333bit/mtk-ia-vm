
import { Activity, Zap, Shield, BarChart, Clock, Database, Cpu } from 'lucide-react'

// Mapeo de íconos
const iconMap = {
  Activity,
  Zap,
  Shield,
  BarChart,
  Clock,
  Database,
  Cpu
}

const FeatureBadge = ({ feature }) => {
  const IconComponent = iconMap[feature.icon]

  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center">
      <IconComponent className={`${feature.color} w-8 h-8 mx-auto mb-2`} />
      <h3 className="text-white font-semibold mb-1">{feature.label}</h3>
      <p className="text-gray-400 text-sm">{feature.description}</p>
    </div>
  )
}

export default FeatureBadge