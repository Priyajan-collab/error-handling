# Learning Log - June 2, 2025

## 📚 What I Worked On Today
- **Project:** Error handling practice with APIs
- **Time spent:** 2-3 hours  
- **Main task:** Handle errors while fetching from external APIs

## 🐛 Problems I Encountered

### 1. Unsafe TypeScript Assignment
- **Root cause:** Did not create interface type for response JSON object
- **Solution:** Created `JsonPlaceHolder` interface to type the API response
- **Learning:** TypeScript requires explicit typing for external data - don't assume response structure

### 2. Response Object vs JSON Object Confusion  
- **Root cause:** Tried to access data properties on Response object instead of parsed JSON
- **Solution:** Added `await response.json()` step before accessing user data
- **Learning:** fetch() returns Response wrapper, must extract JSON separately. Order matters: check response.ok, then parse JSON

### 3. Dead Code in Status Checks
- **Root cause:** Generic `if (!response.ok)` executed before specific status checks  
- **Solution:** Moved specific status checks (404, 401, etc.) before generic check
- **Learning:** Code execution flows top-to-bottom - specific conditions must come first

## 💡 Key Takeaways
- Always dry run code execution on paper before writing
- Understand the complete request/response flow, not just individual lines
- TypeScript strictness prevents runtime errors - embrace it, don't fight it
- Error handling order matters: specific errors first, generic errors last

## 🎯 Tomorrow's Goal
- Add validation error handling method to practice different error types
- Test timeout scenarios with HTTPBin delay endpoints
