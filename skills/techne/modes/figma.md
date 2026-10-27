# Mode: figma — read from and build in Figma

Use for: any work in a Figma file: reading a design for critique/handoff, building screens, editing components, creating variables/tokens, generating libraries, FigJam diagrams.

## Rules
- Use the **Figma MCP server**. Follow its instructions: `create_session` with the fileKey first, then reuse the sessionId. Parse URLs (`figma.com/design/:fileKey/...?node-id=1-2` → nodeId `1:2`).
- If the official Figma skills are installed, load the right one before calling tools: `figma-use` (mandatory before `use_figma`), `figma-generate-design`, `figma-generate-library`, `figma-design-to-code`, `figma-generate-diagram`.
- **Reuse before you create:** `search_design_system` / `get_libraries` / `get_variable_defs` first. Use the file's components, variables and styles, and never hardcode a value that exists as a token.
- **Read:** `get_screenshot` (for visual critique), `get_design_context` (structure + code hints), `get_metadata` (tree/ids).
- **Write:** `use_figma` with auto layout everywhere, named layers, variables bound, components with variants for states. Build at real content length.
- New file → `create_new_file` → `create_session` with the new key.
- Diagrams/flows → FigJam via `generate_diagram`.
- If the Figma server isn't connected, say so and fall back to a precise spec or a code prototype.

## Steps
1. Session + inspect (screenshot + variables + components).
2. Plan the change in words (frames, components, tokens touched).
3. Execute in small, verifiable batches. Screenshot after each batch to check.
4. Run critique on the result. Report what changed and where (node links).

Load `references/build/figma-craft-and-mcp.md` for auto layout, variables and naming conventions.
