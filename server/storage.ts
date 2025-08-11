import { type User, type InsertUser, type ResearchContribution, type InsertResearchContribution, type ContactMessage, type InsertContactMessage } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getResearchContributions(): Promise<ResearchContribution[]>;
  createResearchContribution(contribution: InsertResearchContribution): Promise<ResearchContribution>;
  
  getContactMessages(): Promise<ContactMessage[]>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private researchContributions: Map<string, ResearchContribution>;
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.users = new Map();
    this.researchContributions = new Map();
    this.contactMessages = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getResearchContributions(): Promise<ResearchContribution[]> {
    return Array.from(this.researchContributions.values());
  }

  async createResearchContribution(insertContribution: InsertResearchContribution): Promise<ResearchContribution> {
    const id = randomUUID();
    const contribution: ResearchContribution = {
      ...insertContribution,
      id,
      createdAt: new Date(),
    };
    this.researchContributions.set(id, contribution);
    return contribution;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = {
      ...insertMessage,
      id,
      createdAt: new Date(),
    };
    this.contactMessages.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();
