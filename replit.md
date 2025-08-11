# Debris Flow Impact on Food Security Research

## Overview

This is a research web application that models the cascading impact on food security due to debris flow-induced disruptions in mountainous road networks. The project is conducted as part of a CDRI Fellowship Programme by researchers from Central University of South Bihar, focusing on the Eastern Himalayas region. The application presents a comprehensive three-phase research framework through interactive maps, data visualization, and contribution tools for community engagement.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a modern React-based frontend with TypeScript, built on Vite for optimal development experience. The UI is constructed using shadcn/ui components with Tailwind CSS for styling. The frontend follows a component-based architecture with clear separation between pages, reusable components, and utility functions. Navigation is handled through Wouter for client-side routing.

### Backend Architecture
The server runs on Express.js with TypeScript, providing a RESTful API architecture. The application uses a modular approach with separate route handlers and storage abstraction layers. Currently implements in-memory storage with interfaces designed for easy migration to database persistence. The server includes middleware for logging, JSON parsing, and error handling.

### Data Management
The application uses Drizzle ORM configured for PostgreSQL with a schema-first approach. Database schemas are defined in TypeScript with Zod validation for runtime type checking. The storage layer is abstracted through interfaces to support both in-memory development storage and production database implementations.

### State Management
Client-side state is managed through TanStack Query (React Query) for server state synchronization, with React Hook Form for form state management. The application uses a QueryClient configuration optimized for development with infinite stale time and disabled refetching.

### UI/UX Design System
The application implements a comprehensive design system using shadcn/ui components with Radix UI primitives. Custom CSS variables define a cohesive color palette with research-blue, earth-green, and warning-orange as primary brand colors. Typography uses Inter and JetBrains Mono fonts with consistent spacing and component styling.

### Development Tooling
The project is configured with TypeScript for type safety, ESLint and Prettier for code quality, and Vite for build optimization. The development environment supports hot module replacement and includes specialized plugins for Replit integration.

## External Dependencies

### Database Services
- **PostgreSQL**: Primary database configured through Drizzle ORM with connection via DATABASE_URL environment variable
- **Neon Database**: Serverless PostgreSQL integration (@neondatabase/serverless)

### UI Component Libraries
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives for dialogs, forms, navigation, and interactive elements
- **shadcn/ui**: Pre-built component library built on Radix UI with consistent styling
- **Lucide React**: Icon library for consistent iconography throughout the application

### Mapping and Visualization
- **Leaflet**: Interactive mapping library loaded via CDN for displaying geographical data and research locations
- **Chart.js**: Data visualization library for rendering research charts, ROC curves, and feature importance graphs

### Form Management and Validation
- **React Hook Form**: Form state management with performance optimization
- **Zod**: Schema validation library integrated with Drizzle for runtime type safety
- **@hookform/resolvers**: Integration layer between React Hook Form and Zod validation

### External APIs and Services
- **OpenStreetMap**: Tile service for base map layers in interactive map components
- **Google Fonts**: Web font delivery for Inter and JetBrains Mono typography
- **Font Awesome**: Icon font library for research-themed iconography

### Development and Build Tools
- **Vite**: Build tool and development server with React plugin support
- **TypeScript**: Static type checking across the entire application
- **Tailwind CSS**: Utility-first CSS framework for consistent styling
- **PostCSS**: CSS processing for Tailwind integration and browser compatibility