"use client";

import { useState } from "react";
import { CodeBlock } from "@/components/code-block";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const jsExample = `// JavaScript Example with Enhanced Syntax Highlighting
import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';

const EnhancedComponent = ({ data }) => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  
  // This is a comment explaining the functionality
  useEffect(() => {
    if (data?.length > 0) {
      setCount(data.length);
      toast.success('Data loaded successfully!');
    }
  }, [data]);

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/data');
      const result = await response.json();
      console.log('API Response:', result);
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto">
      <h1>Enhanced Code Block Demo</h1>
      <button 
        onClick={handleClick}
        disabled={loading}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {loading ? 'Loading...' : \`Click me (\${count})\`}
      </button>
    </div>
  );
};

export default EnhancedComponent;`;

  const pythonExample = `# Python Example with Beautiful Syntax Highlighting
import asyncio
import json
from typing import List, Dict, Optional
from dataclasses import dataclass

@dataclass
class User:
    """Enhanced user model with validation"""
    id: int
    name: str
    email: str
    is_active: bool = True
    
    def __post_init__(self):
        if not self.email or '@' not in self.email:
            raise ValueError("Invalid email address")

class UserService:
    """Service class for user operations"""
    
    def __init__(self, database_url: str):
        self.db_url = database_url
        self.users: List[User] = []
    
    async def fetch_users(self) -> List[Dict]:
        """Fetch all users from the database"""
        # This is a comment explaining the async operation
        try:
            async with aiohttp.ClientSession() as session:
                async with session.get(f"{self.db_url}/users") as response:
                    data = await response.json()
                    return [User(**user_data) for user_data in data]
        except Exception as e:
            print(f"Error fetching users: {e}")
            return []
    
    def create_user(self, name: str, email: str) -> Optional[User]:
        """Create a new user with validation"""
        try:
            new_user = User(
                id=len(self.users) + 1,
                name=name.strip(),
                email=email.lower().strip()
            )
            self.users.append(new_user)
            return new_user
        except ValueError as e:
            print(f"Validation error: {e}")
            return None

# Usage example
if __name__ == "__main__":
    service = UserService("https://api.example.com")
    user = service.create_user("John Doe", "john@example.com")
    print(f"Created user: {user}")`;

  const htmlExample = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enhanced Code Block Demo</title>
    <style>
        /* Enhanced CSS with modern styling */
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0;
            padding: 2rem;
            min-height: 100vh;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.95);
            border-radius: 16px;
            padding: 2rem;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .code-block {
            background: #1a1a1a;
            border-radius: 12px;
            padding: 1.5rem;
            overflow-x: auto;
            border: 1px solid #333;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 Enhanced Code Blocks</h1>
        <p>This demonstrates high-quality syntax highlighting with:</p>
        <ul>
            <li>✨ Vibrant colors</li>
            <li>📋 Copy to clipboard</li>
            <li>🔄 Text wrapping toggle</li>
            <li>📏 Line counting</li>
            <li>🌓 Dark/light theme support</li>
        </ul>
        
        <div class="code-block">
            <pre><code>console.log('Hello, enhanced world!');</code></pre>
        </div>
    </div>
    
    <script>
        // Enhanced JavaScript functionality
        document.addEventListener('DOMContentLoaded', () => {
            console.log('🎉 Enhanced code blocks loaded!');
            
            const buttons = document.querySelectorAll('.copy-btn');
            buttons.forEach(btn => {
                btn.addEventListener('click', async () => {
                    try {
                        await navigator.clipboard.writeText(btn.dataset.code);
                        btn.textContent = '✅ Copied!';
                        setTimeout(() => {
                            btn.textContent = '📋 Copy';
                        }, 2000);
                    } catch (err) {
                        console.error('Failed to copy:', err);
                    }
                });
            });
        });
    </script>
</body>
</html>`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">🚀 Enhanced Code Blocks</h1>
          <p className="text-muted-foreground text-lg mb-6">
            High-quality, interactive code blocks with syntax highlighting, copy functionality, and more.
          </p>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">✨ Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="p-4 bg-card border border-border rounded-lg">
                <h3 className="font-medium mb-2">📋 Copy to Clipboard</h3>
                <p className="text-sm text-muted-foreground">One-click code copying with toast notifications</p>
              </div>
              <div className="p-4 bg-card border border-border rounded-lg">
                <h3 className="font-medium mb-2">🔄 Text Wrapping</h3>
                <p className="text-sm text-muted-foreground">Toggle between wrapped and scrollable code</p>
              </div>
              <div className="p-4 bg-card border border-border rounded-lg">
                <h3 className="font-medium mb-2">🎨 Syntax Highlighting</h3>
                <p className="text-sm text-muted-foreground">Vibrant colors powered by sugar-high</p>
              </div>
              <div className="p-4 bg-card border border-border rounded-lg">
                <h3 className="font-medium mb-2">⚡ Performance</h3>
                <p className="text-sm text-muted-foreground">Lazy loading for large code blocks</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Code Examples</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">JavaScript/TypeScript</h3>
                <CodeBlock code={jsExample} language="javascript" />
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Python</h3>
                <CodeBlock code={pythonExample} language="python" />
              </div>
              
              <div className="lg:col-span-2">
                <h3 className="text-lg font-medium mb-3">HTML</h3>
                <CodeBlock code={htmlExample} language="html" />
              </div>
            </div>
          </section>

          <section className="text-center mt-12 p-8 bg-card border border-border rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">🎯 Ready to Use</h2>
            <p className="text-muted-foreground mb-4">
              This project is ready to be deployed and used in your applications. 
              Simply copy the components and styling to get these enhanced code blocks anywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                📦 Copy Components
              </button>
              <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
                📚 View Documentation
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
