import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle, Timer, DollarSign, TrendingUp, Award } from "lucide-react";

export default function GuaranteeSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 42, hours: 15, minutes: 30 });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59 };
        }
        return prev;
      });
    }, 60000);
    return () => clearInterval(countdown);
  }, []);

  const guarantees = [
    {
      icon: Shield,
      title: "SOPORTE COMPLETO INCLUIDO",
      description: "Acompañamiento personalizado desde la configuración inicial hasta la optimización continua",
      terms: "Incluye migración de datos, capacitación y soporte técnico especializado"
    },
    {
      icon: TrendingUp,
      title: "INTEGRACIÓN DIRECTA GARANTIZADA",
      description: "Conexión automática con Airbnb, Booking.com y más de 15 plataformas principales",
      terms: "Sincronización en tiempo real de calendarios, precios y disponibilidad"
    },
    {
      icon: DollarSign,
      title: "CONFIGURACIÓN SIN COSTO",
      description: "Setup completo de tu cuenta, migración de datos existentes y capacitación para tu equipo",
      terms: "Incluye optimización de listings y configuración de precios dinámicos"
    }
  ];

  const riskReversals = [
    "✅ Configuración completa incluida - sin costos adicionales",
    "✅ Migración de todas tus propiedades existentes",
    "✅ Capacitación personalizada para tu equipo",
    "✅ Soporte técnico especializado continuo",
    "✅ Actualizaciones y nuevas integraciones automáticas"
  ];

  return (
    <section className="py-16 lg:py-24 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-golden via-transparent to-success"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Urgency Timer */}
          <div className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/20 text-destructive px-6 py-3 rounded-full mb-6">
            <Timer className="w-5 h-5" />
            <span className="font-medium" data-testid="text-guarantee-countdown">
              Oferta Especial Temporada 2025: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            <span className="text-golden">COMPROMISO</span> Real Contigo
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Te acompañamos paso a paso para que aproveches al máximo todas las funcionalidades de la plataforma
          </p>
        </div>

        {/* Main Guarantees */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {guarantees.map((guarantee, index) => (
            <Card 
              key={index} 
              className="p-8 text-center border-golden/20 bg-golden/5 hover-elevate transition-all duration-300"
              data-testid={`card-guarantee-${index}`}
            >
              <div className="inline-flex p-4 rounded-full bg-golden/20 mb-6">
                <guarantee.icon className="w-8 h-8 text-golden" />
              </div>
              
              <h3 className="font-bold text-xl mb-4 text-golden">
                {guarantee.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {guarantee.description}
              </p>
              
              <div className="p-3 bg-background/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  {guarantee.terms}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Central Commitment Statement */}
        <Card className="p-12 text-center bg-gradient-to-br from-golden/10 via-golden/5 to-transparent border-golden/30 mb-12">
          <Award className="w-16 h-16 text-golden mx-auto mb-6" />
          
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
            NUESTRO <span className="text-golden">COMPROMISO</span>
          </h3>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            Te garantizamos una <span className="font-bold text-golden">configuración perfecta</span>, 
            integración completa con todas tus plataformas existentes, y 
            <span className="font-bold text-golden"> soporte especializado continuo</span> para maximizar tu ocupación.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-success text-success-foreground px-4 py-2">
              Soporte Incluido
            </Badge>
            <Badge className="bg-primary text-primary-foreground px-4 py-2">
              Integración Completa
            </Badge>
            <Badge className="bg-accent text-accent-foreground px-4 py-2">
              Sin Costos Ocultos
            </Badge>
          </div>

          <Button
            size="lg"
            className="bg-golden hover:bg-golden/90 text-golden-foreground text-xl px-12 py-6 rounded-full shadow-2xl"
            onClick={() => console.log('Commitment CTA clicked')}
            data-testid="button-commitment-cta"
          >
            AGENDAR DEMO PERSONALIZADA
          </Button>
        </Card>

        {/* Risk Reversals */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-success">Cero Riesgo</span> Para Ti
            </h3>
            
            <div className="space-y-4">
              {riskReversals.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-success/10 border border-success/20 rounded-lg">
              <h4 className="font-bold text-success mb-2">Promesa Adicional:</h4>
              <p className="text-sm text-muted-foreground">
                Si alguna vez no estás 100% satisfecho, puedes cancelar con un simple email. 
                Sin llamadas, sin formularios, sin complicaciones.
              </p>
            </div>
          </div>

          <Card className="p-8 bg-primary/5 border-primary/20">
            <h4 className="font-bold text-xl mb-6 text-center">
              Lo Que Incluimos vs La Competencia
            </h4>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-destructive/10 rounded">
                <span className="text-sm">Otros:</span>
                <span className="font-medium text-destructive">Configuración por separado</span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-golden/10 rounded">
                <span className="text-sm">Rentals AI:</span>
                <span className="font-medium text-golden">Todo incluido + soporte</span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-success/10 rounded">
                <span className="text-sm">Integraciones:</span>
                <span className="font-bold text-success">15+ plataformas</span>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground">
                La única forma de perder es no probarlo
              </p>
            </div>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Más de 150 propietarios ya confiaron en nuestras garantías
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-success">15+</p>
              <p className="text-sm text-muted-foreground">Plataformas integradas</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-golden">24/7</p>
              <p className="text-sm text-muted-foreground">Soporte disponible</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">150+</p>
              <p className="text-sm text-muted-foreground">Propietarios activos</p>
            </div>
          </div>

          <Button
            variant="outline"
            size="lg"
            onClick={() => console.log('View guarantee details clicked')}
            data-testid="button-guarantee-details"
          >
            Ver Términos Completos de Garantía
          </Button>
        </div>
      </div>
    </section>
  );
}