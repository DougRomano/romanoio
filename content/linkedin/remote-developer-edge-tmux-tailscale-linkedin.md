# LinkedIn Post — Claude Remote Agents Blog

---

Your AI agents don't need you watching them.

I built a 10-agent system to convert legacy VB.NET WinForms into modern ASP.NET Core MVC. Each run chews through thousands of lines of code — forms, business logic, stored procedures, security patterns — sequentially, automatically.

The problem? I kept feeling like I had to sit there and babysit it.

So I stopped.

Here's the stack I use to monitor Claude Remote Agents from anywhere:

→ **Tailscale** — private mesh VPN, no port forwarding, no config. Your dev machine gets a stable IP reachable from your phone, tablet, or laptop anywhere in the world.

→ **SSH** — key-based auth, clean alias in ~/.ssh/config. One command: `ssh devbox`

→ **tmux** — the real unlock. Your session stays alive when you disconnect. Agent keeps running. You reconnect and pick up exactly where you left off.

The workflow — and where tokens are actually being spent:

Kick off the orchestrator, detach *(you: 2 min · tokens: starting)*
1 hour later → in a meeting *(you: unavailable · tokens: running hard)*
2 hours later → 2-minute check from my phone *(you: 2 min · tokens: still running)*
4 hours later → agents 1-9 done, review output at lunch *(you: reviewing · tokens: done)*
6 hours later → Agent 10 interactive template generator *(you: collaborating · tokens: finishing)*

That's hours of token utilization running through meetings, hallway conversations, and lunch — without a single keystroke after kickoff.

Your token spend isn't gated by how long you can sit at a desk.

The agents worked all day. I showed up for the parts that needed me.

For a project like BargeOps — converting hundreds of legacy screens to a modern .NET architecture — this isn't a convenience. It's a force multiplier.

Full writeup + setup checklist 👇
🔗 Link in comments

---

#ClaudeCode #AgenticDevelopment #DotNet #RemoteDev #tmux #Tailscale #AIEngineering #LegacyModernization
