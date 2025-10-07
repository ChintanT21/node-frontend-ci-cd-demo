import express from 'express';
import path from 'path';
const app = express();
const PORT = process.env.PORT || 3000;
// Serve static files (if frontend build exists)
app.use(express.static(path.join(__dirname, 'dist')));
// Example API route
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from TypeScript Server!' });
});
// For SPA — send index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map