import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { PhoneOff, Clock, Calendar, DollarSign, Bot, Zap, BarChart3, TrendingUp } from "lucide-react";

export default function ProblemSolutionSplit() {
  const [lostBookings, setLostBookings] = useState(1247);

  useEffect(() => {
    const interval = setInterval(() => {
      setLostBookings(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const problemItems = [
    {
      icon: PhoneOff,
      title: "Llamadas perdidas después de las 18hs",
      description: "Los clientes llaman fuera del horario y nadie responde",
      color: "text-destructive"
    },
    {
      icon: Clock,
      title: "Respuestas tardías (clientes se van)",
      description: "Demoras de horas en responder = reservas perdidas",
      color: "text-destructive"
    },
    {
      icon: Calendar,
      title: "Calendarios desactualizados",
      description: "Información incorrecta genera confusión y cancelaciones",
      color: "text-destructive"
    },
    {
      icon: DollarSign,
      title: "Temporada perdida = $50,000 USD menos",
      description: "Cada oportunidad perdida cuesta miles de dólares",
      color: "text-destructive"
    }
  ];

  const solutionItems = [
    {
      icon: Bot,
      title: "IA atiende 24/7/365",
      description: "Nunca más pierdas una consulta, sin importar la hora",
      color: "text-success"
    },
    {
      icon: Zap,
      title: "Respuesta en menos de 30 segundos",
      description: "Respuestas instantáneas que convierten consultas en reservas",
      color: "text-success"
    },
    {
      icon: BarChart3,
      title: "Sincronización automática total",
      description: "Calendarios, pagos y facturas siempre actualizados",
      color: "text-success"
    },
    {
      icon: TrendingUp,
      title: "300% más reservas garantizadas",
      description: "Resultados comprobados con garantía de satisfacción",
      color: "text-success"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            <span className="text-destructive">EL PROBLEMA</span> vs{" "}
            <span className="text-success">LA SOLUCIÓN</span>
          </h2>
          
          {/* Real-time Counter */}
          <Card className="inline-block p-6 bg-destructive/10 border-destructive/20">
            <p className="text-sm text-muted-foreground mb-2">Reservas perdidas en tiempo real</p>
            <p className="text-4xl font-bold text-destructive" data-testid="text-lost-bookings">
              {lostBookings.toLocaleString()}
            </p>
            <p className="text-sm text-destructive/80">Solo en Monte Hermoso este año</p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Problem Column */}
          <div className="space-y-6">
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-destructive mb-4">
                LO QUE PASA HOY
              </h3>
              <p className="text-lg text-muted-foreground">
                Propietarios perdiendo oportunidades todos los días
              </p>
            </div>

            {problemItems.map((item, index) => (
              <Card
                key={index}
                className="p-6 border-destructive/20 bg-destructive/5 hover-elevate transition-all duration-300"
                data-testid={`card-problem-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-destructive/10">
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}

            <div className="text-center p-6 bg-destructive/10 rounded-lg">
              <p className="text-xl font-bold text-destructive">
                RESULTADO: 70% menos ocupación promedio
              </p>
            </div>
          </div>

          {/* Solution Column */}
          <div className="space-y-6">
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-success mb-4">
                CON RENTALS AI
              </h3>
              <p className="text-lg text-muted-foreground">
                Automatización inteligente que nunca duerme
              </p>
            </div>

            {solutionItems.map((item, index) => (
              <Card
                key={index}
                className="p-6 border-success/20 bg-success/5 hover-elevate transition-all duration-300"
                data-testid={`card-solution-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-success/10">
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}

            <div className="text-center p-6 bg-success/10 rounded-lg">
              <p className="text-xl font-bold text-success">
                RESULTADO: 95%+ ocupación garantizada
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}