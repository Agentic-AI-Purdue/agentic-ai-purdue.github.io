-- Create applications table for Agentic AI Club
CREATE TABLE IF NOT EXISTS applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  purdue_id TEXT,
  year_major TEXT NOT NULL,
  programming_level TEXT NOT NULL CHECK (programming_level IN ('beginner', 'intermediate', 'advanced')),
  ai_level TEXT NOT NULL CHECK (ai_level IN ('beginner', 'intermediate', 'advanced')),
  why_join TEXT NOT NULL,
  portfolio_url TEXT,
  resume_url TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'accepted', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for quick lookups
CREATE INDEX IF NOT EXISTS idx_applications_email ON applications(email);

-- Create index on status for filtering
CREATE INDEX IF NOT EXISTS idx_applications_status ON applications(status);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_applications_created_at ON applications(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- Create policy to allow authenticated users to insert applications
CREATE POLICY "Allow public to insert applications" ON applications
  FOR INSERT WITH CHECK (true);

-- Create policy to allow authenticated users to view their own applications (if needed later)
-- CREATE POLICY "Allow users to view own applications" ON applications
--   FOR SELECT USING (auth.email() = email);

-- Create policy to allow admins to view all applications (you'll need to set up admin roles)
-- CREATE POLICY "Allow admins to view all applications" ON applications
--   FOR ALL USING (auth.role() = 'admin');

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_applications_updated_at 
    BEFORE UPDATE ON applications 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data (optional - remove in production)
-- INSERT INTO applications (name, email, purdue_id, year_major, programming_level, ai_level, why_join, portfolio_url) VALUES
--   ('John Doe', 'john@purdue.edu', 'P12345678', 'Sophomore - CS', 'intermediate', 'beginner', 'I am passionate about AI and want to learn more about building intelligent agents. I have experience with Python and basic machine learning concepts.', 'https://github.com/johndoe'),
--   ('Jane Smith', 'jane@purdue.edu', 'P87654321', 'Junior - Other', 'beginner', 'beginner', 'I am interested in learning AI and programming. I want to work on real projects and contribute to the community.', NULL); 