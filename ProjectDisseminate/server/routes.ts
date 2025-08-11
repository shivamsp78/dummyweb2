import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertResearchContributionSchema, insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Research Contributions API
  app.get("/api/research-contributions", async (req, res) => {
    try {
      const contributions = await storage.getResearchContributions();
      res.json(contributions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch research contributions" });
    }
  });

  app.post("/api/research-contributions", async (req, res) => {
    try {
      const validatedData = insertResearchContributionSchema.parse(req.body);
      const contribution = await storage.createResearchContribution(validatedData);
      res.status(201).json(contribution);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create research contribution" });
      }
    }
  });

  // Contact Messages API
  app.get("/api/contact-messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contact messages" });
    }
  });

  app.post("/api/contact-messages", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.status(201).json(message);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create contact message" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
