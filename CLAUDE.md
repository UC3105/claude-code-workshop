# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a **Claude Code Workshop repository** containing two separate learning projects designed to teach effective AI-assisted development patterns. Each project focuses on different aspects of using Claude Code effectively.

## Project Structure

```
/claude_code_project/
├── performance_detective/     # Python performance optimization exercise
├── claude-code-aws-blog/      # Next.js progressive workshop project
├── QUICK_REFERENCE.md         # Workshop command reference
└── TROUBLESHOOTING.md         # Comprehensive error resolution guide
```

## Working with Multiple Projects

**Important**: This repository contains two independent projects. Always verify which project directory you're working in before making changes:
- Python work → `cd performance_detective/`
- Next.js blog work → `cd claude-code-aws-blog/starter/`

**Project-Specific Context**: The `claude-code-aws-blog/starter/` directory has its own `CLAUDE.md` with detailed Next.js and AWS branding requirements. Read that file when working in that directory.

## Performance Detective Project

**Location**: `/claude_code_project/performance_detective/`

### Purpose
Interactive exercise for learning Claude Code's tool orchestration through performance optimization. Contains intentionally inefficient Python code with common performance bottlenecks.

### Development Commands

```bash
# Setup (recommended: use virtual environment)
cd performance_detective/
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt

# Run all tests with benchmarks
pytest src/test_performance.py

# Run benchmarks only (skip correctness tests)
pytest src/test_performance.py --benchmark-only

# Run benchmarks with comparison (requires prior .benchmarks/ data)
pytest src/test_performance.py --benchmark-compare

# Run specific test with detailed output
pytest src/test_performance.py::test_calculate_statistics_large -v

# Run with memory profiling (requires @profile decorators)
python -m memory_profiler src/data_processor.py

# Compare specific functions across dataset sizes
pytest src/test_performance.py -k "statistics" --benchmark-only
```

### Key Files
- `src/data_processor.py` - Contains implementations to optimize (find_duplicates already optimized)
- `src/test_performance.py` - Test suite with pytest-benchmark integration
- `src/__init__.py` - Package marker for pytest imports
- `requirements.txt` - Python dependencies (pytest, pytest-benchmark, memory-profiler)
- `data/sample_data.csv` - Sample CSV data for manual testing
- `.benchmarks/` - Auto-generated directory storing pytest-benchmark baseline results

### Test Fixtures
The test suite uses three dataset sizes:
- **small_dataset**: 100 items (50 unique, duplicated)
- **medium_dataset**: 1,000 items (500 unique, duplicated)
- **large_dataset**: 10,000 items (5,000 unique, duplicated)
- **numeric_data**: 1,100 items for statistics calculations

Performance improvements should be visible across all dataset sizes, with the most dramatic differences on large_dataset.

### Performance Bottlenecks (Intentional)

**Current State**: `find_duplicates()` has been optimized to O(n) using sets.

The code originally contained these common inefficiencies for learning purposes:

1. **`find_duplicates()`**: ✅ **OPTIMIZED** - Now O(n) with hash-based sets (was O(n²) nested loops)
2. **`calculate_statistics()`**: ⚠️ **NEEDS OPTIMIZATION** - O(n²) mode calculation using `.count()` in loop
3. **`filter_and_transform()`**: ⚠️ **NEEDS OPTIMIZATION** - String concatenation in loop creates new string objects

### Optimization Approach

When working on optimizations:
1. Run tests first to establish baseline performance (`pytest --benchmark-only`)
2. Identify the algorithmic complexity issue (look for nested loops, repeated operations)
3. Choose appropriate data structures:
   - Sets for O(1) membership testing (vs O(n) list membership)
   - `collections.Counter` for frequency counting (vs repeated `.count()` calls)
   - String builders like `''.join()` or list comprehensions (vs concatenation)
4. Optimize the function while **preserving the function signature and return type**
5. Verify correctness with existing tests (`pytest -v`)
6. Confirm performance improvement with pytest-benchmark
7. Compare before/after: `pytest --benchmark-compare` (requires baseline saved in `.benchmarks/`)

**Reading Benchmark Results**:
- pytest-benchmark shows Min/Max/Mean/StdDev times in microseconds or milliseconds
- Look for 10x+ improvements on large datasets when fixing O(n²) → O(n)
- All correctness tests must pass before and after optimization
- Performance gains should scale with dataset size (small vs medium vs large)

## AWS Blog Workshop Project

**Location**: `/claude_code_project/claude-code-aws-blog/starter/`

### Purpose
Progressive workshop building a Next.js blog with AWS branding. Teaches Claude Code features through hands-on exercises with checkpoint safety nets.

### Development Commands

```bash
# Setup (IMPORTANT: Use --legacy-peer-deps)
cd claude-code-aws-blog/starter/
npm install --legacy-peer-deps

# Development
npm run dev          # Starts on http://0.0.0.0:3000
npm run build        # Production build
npm run lint         # ESLint check
npm run format       # Prettier formatting

# Workshop Environment URLs
# Local: http://localhost:3000
# AWS Workshop: https://{cloudfront-url}/proxy/3000/
```

### Architecture Overview

**Checkpoint System**: The workshop uses progressive checkpoints as safety nets:
- `checkpoints/lesson-005/` - Hero section complete
- `checkpoints/lesson-008/` - Navigation + posts + reading time + MCP
- `checkpoints/lesson-010/` - GitHub + format hooks
- `checkpoints/lesson-014/` - Complete with all features

**CloudFront Proxy Architecture** (Critical for Navigation):
- User requests go to: `https://{cloudfront-url}/proxy/3000/posts/slug`
- CloudFront strips prefix, forwards to Next.js as: `/posts/slug`
- Next.js routes handle requests WITHOUT the proxy prefix
- Client-side `<Link>` components MUST include full path using `withBasePath()` helper
- **Never use** `basePath` in `next.config.js` (incompatible with path stripping)

**AWS Design System** (See starter/CLAUDE.md for full details):
- AWS Orange (#FF9900), AWS Dark (#232F3E), AWS Blue (#146EB4)
- Custom Tailwind classes: `bg-aws-orange`, `text-aws-dark`, etc.
- Responsive breakpoints: mobile < 768px, tablet 768-1024px, desktop > 1024px

### Detailed Documentation

**Read `claude-code-aws-blog/starter/CLAUDE.md` for**:
- Complete AWS color palette and typography requirements
- CloudFront proxy implementation details
- Hook configuration patterns and examples
- Blog post frontmatter structure
- Component architecture guidelines

### Workshop Features by Checkpoint

- **Lesson 005**: AWS hero section with gradient, CTA button
- **Lesson 008**: Navigation, post cards, reading time calculation, Playwright MCP
- **Lesson 010**: GitHub integration, automated formatting hooks
- **Lesson 014**: Complete feature set including SDK integration

## Workshop Support Documentation

### QUICK_REFERENCE.md
Emergency commands, checkpoint usage, common fixes, MCP troubleshooting, and workshop progress checklist.

**Key Sections**:
- Port 3000 conflicts: `pkill -f next-dev`
- npm issues: Always use `--legacy-peer-deps`
- Hook debugging: Check executable permissions, restart Claude Code
- CloudFront URL format: `https://{cloudfront-url}/proxy/3000/`

### TROUBLESHOOTING.md
Comprehensive error resolution guide with symptoms, causes, fixes, and verification steps.

**Common Issues**:
- npm install failures (peer dependencies)
- MCP server permissions (`mcp__playwright`)
- Hook scripts not triggering (executable permissions, restart required)
- Reading time feature missing (check component imports, content field)
- Build type errors (missing props, incorrect paths)

## Common Workshop Patterns

### Emergency Recovery Pattern
```bash
# If something breaks, use checkpoint:
cd /claude_code_project/claude-code-aws-blog/
cp -r checkpoints/lesson-XXX/* starter/
cd starter/
npm install --legacy-peer-deps
npm run dev
```

### Hook Configuration Pattern
Hooks only load at Claude Code startup. After modifying `.claude/settings.json`:
1. Save the configuration file
2. Exit Claude Code
3. Restart Claude Code

### MCP Permission Pattern
For Playwright visual testing:
```json
// .claude/settings.local.json
{
  "permissions": {
    "allow": ["mcp__playwright"],
    "deny": []
  }
}
```

## Development Notes

### Python Project (performance_detective)
- Original functions were intentionally inefficient for learning purposes
- `find_duplicates()` has been optimized as a reference implementation
- `calculate_statistics()` and `filter_and_transform()` still need optimization
- Students should optimize without changing function signatures or return types
- Test suite must pass before and after optimization (correctness is non-negotiable)
- Use pytest-benchmark to quantify improvements (saves baselines to `.benchmarks/`)
- Virtual environment recommended to avoid dependency conflicts

### Next.js Project (claude-code-aws-blog)
- Dev server binds to `0.0.0.0` for AWS Workshop network access
- Always restart Claude Code after hook or settings changes
- Checkpoints are read-only references - copy to starter/ if needed
- Blog posts use frontmatter with `title`, `date`, `author`, `excerpt`, `category`, `tags`, `published`

### Workshop Environment Specifics
- CloudFront domain available in `$CLOUDFRONT_DOMAIN` environment variable
- Must use CloudFront URLs for testing in workshop (not localhost)
- Hooks require executable permissions: `chmod +x .claude/hooks/*.sh`
- MCP servers require restart to become available

## Testing Strategy

### Performance Detective
```bash
# Establish baseline (saves to .benchmarks/ for comparison)
pytest src/test_performance.py --benchmark-only

# After optimization, compare against baseline
pytest src/test_performance.py --benchmark-compare

# Verify correctness (must pass before and after)
pytest src/test_performance.py -v

# Test single function across all dataset sizes
pytest src/test_performance.py -k "calculate_statistics" -v

# Memory profiling (requires @profile decorator in code)
python -m memory_profiler src/data_processor.py
```

### AWS Blog
```bash
# Type checking
npm run build

# Linting
npm run lint

# Visual verification (requires MCP)
# Ask Claude to screenshot the running app using Playwright
```

## Git Workflow Notes

This is a workshop repository with:
- Clean initial commit (fbfd8ea)
- Main branch for stable checkpoints
- Students work in `starter/` directory
- Checkpoints are versioned snapshots for recovery

When working on either project, commit frequently with descriptive messages that indicate which project is being modified.
