import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.DATABASE_URL) {
  console.error('FATAL: DATABASE_URL is not set in environment variables.');
  process.exit(1);
}

export const sql = neon(process.env.DATABASE_URL);

export async function initDb() {
  try {
    console.log('Connecting to Neon PostgreSQL database and initializing tables...');
    
    // Team Registrations table
    await sql`
      CREATE TABLE IF NOT EXISTS team_registrations (
        id SERIAL PRIMARY KEY,
        application_id VARCHAR(64) UNIQUE NOT NULL,
        team_name VARCHAR(255) NOT NULL,
        track VARCHAR(100) NOT NULL,
        team_lead_name VARCHAR(255) NOT NULL,
        team_lead_email VARCHAR(255) NOT NULL,
        team_lead_phone VARCHAR(100) NOT NULL,
        matric_number VARCHAR(100),
        department_level VARCHAR(255),
        members JSONB DEFAULT '[]'::jsonb,
        github_portfolio TEXT,
        problem_statement TEXT,
        status VARCHAR(50) DEFAULT 'under_review',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Sponsor Applications table
    await sql`
      CREATE TABLE IF NOT EXISTS sponsor_applications (
        id SERIAL PRIMARY KEY,
        proposal_id VARCHAR(64) UNIQUE NOT NULL,
        company_name VARCHAR(255) NOT NULL,
        tier VARCHAR(100) NOT NULL,
        contact_name VARCHAR(255) NOT NULL,
        contact_email VARCHAR(255) NOT NULL,
        contact_phone VARCHAR(100) NOT NULL,
        company_website TEXT,
        industry VARCHAR(100),
        sponsorship_goals TEXT,
        participation_types JSONB DEFAULT '[]'::jsonb,
        custom_requests TEXT,
        status VARCHAR(50) DEFAULT 'under_review',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    console.log('Database tables verified and ready.');
  } catch (err) {
    console.error('Failed to initialize database tables:', err);
    throw err;
  }
}
