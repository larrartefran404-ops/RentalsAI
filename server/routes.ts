import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { getClaude, analyzeProperty } from "./claude";

export async function registerRoutes(app: Express): Promise<Server> {
  // Claude AI chat endpoint
  app.post("/api/claude/chat", async (req, res) => {
    try {
      const { message, context } = req.body;
      
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      const response = await getClaude(message, context);
      res.json(response);
    } catch (error) {
      console.error("Error in Claude chat:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Property analysis endpoint
  app.post("/api/claude/analyze-property", async (req, res) => {
    try {
      const propertyData = req.body;
      
      if (!propertyData) {
        return res.status(400).json({ error: "Property data is required" });
      }

      const analysis = await analyzeProperty(propertyData);
      res.json(analysis);
    } catch (error) {
      console.error("Error in property analysis:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Income optimization suggestions
  app.post("/api/claude/optimize-income", async (req, res) => {
    try {
      const { currentIncome, propertyType, location, amenities } = req.body;
      
      const prompt = `
        Ayuda a optimizar los ingresos de esta propiedad:
        - Ingresos actuales: $${currentIncome} USD anuales
        - Tipo: ${propertyType}
        - Ubicación: ${location}
        - Amenities: ${amenities?.join(', ') || 'No especificados'}
        
        Proporciona estrategias específicas para aumentar los ingresos.
      `;

      const response = await getClaude(prompt, "Eres un consultor experto en maximización de ingresos por alquiler temporal.");
      res.json(response);
    } catch (error) {
      console.error("Error in income optimization:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
