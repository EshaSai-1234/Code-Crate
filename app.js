#CodeCrate: Version-Controlled Code Snippet Manager
# Frontend: React Snippet Manager
 // src/App.js
 import React, { useState, useEffect } from 'react';
 function App() {
  const [snippets, setSnippets] = useState([]);
  const [newSnippet, setNewSnippet] = useState('');
  useEffect(() => {
    fetch('/api/snippets')
      .then(res => res.json())
      .then(data => setSnippets(data));
  }, []);
  const handleAddSnippet = async () => {
    await fetch('/api/snippets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: newSnippet }),
    });
    setNewSnippet('');
    window.location.reload();
  };
  return (
    <div>
      <h1>CodeCrate - Manage Your Code Snippets</h1>
      <input
        type="text"
        value={newSnippet}
        onChange={(e) => setNewSnippet(e.target.value)}
        placeholder="Add a new snippet"
      />
      <button onClick={handleAddSnippet}>Add Snippet</button>
      <ul>
        {snippets.map((snippet) => (
          <li key={snippet._id}>{snippet.content}</li>
        ))}
      </ul>
    </div>
  );
 }
 export default App;
