## **1. Project Overview**

**Objective**

Build a system that helps the office team reply to emails faster by automatically creating **draft replies** for common and repetitive requests in the shared inbox.

The system **does not send emails on its own**.

It only prepares drafts that a person reviews and sends.

To avoid wrong or risky replies, the system first checks whether an email is **relevant and suitable** for an automated draft. This check is only used to decide _whether a draft should be created or not_. It does not change how the inbox works.

---

## **2. Scope of Work**

### **2.1 Discovery & Alignment**

A short call (30–45 minutes) to agree on:

- Which types of emails should get an automatic draft
- Which emails should always be handled manually
- Tone and wording (German / English)
- What information must **never** be guessed or invented

**Outcome**

- Clear list of email types that can receive automated drafts
- Clear rules for when the system must not create a draft

---

### **2.2 Relevance Check (Internal)**

Before creating a draft, the system does a simple internal check:

- Does this email match one of the agreed types?
- Is the request clear enough?
- Is this email sensitive or risky (for example complaints or legal topics)?

If the answer is **yes**, a draft is created.

If the answer is **no**, the email is left untouched.

This check:

- Does **not** move emails
- Does **not** assign ownership
- Does **not** change inbox order
- Exists only to prevent wrong automated replies

---

### **2.3 Draft Reply Generation**

For emails that pass the relevance check, the system creates a **draft reply**.

**How it works**

- The draft appears in the shared inbox
- A person reviews and sends it
- The system never sends emails automatically

**Draft rules**

- Short and clear responses
- Correct tone and language (DE / EN)
- If important information is missing, the draft asks a question instead of guessing
- No invented dates, prices, numbers, or tracking details

### **2.4 Context Layers & Tooling Scope**

The email draft assistance feature is built using **contextual layers**.

Each layer adds specific information or logic that can be used when generating a draft reply.

Not every email uses every layer.

Only the layers required for a given email are applied.

This keeps the solution focused, safe, and extensible.

---

### **Layer 1 – Email Content Only**

**Description**

Draft replies are generated using only the content of the incoming email.

**Typical usage**

- Acknowledging receipt
- Asking clarifying questions
- Responding when the request is unclear or incomplete

**Example**

Customer writes: “Can you update me?”

Draft:

“Thanks for your message. Could you let us know which order or topic you are referring to?”

**Characteristics**

- No customer history
- No pricing or calculations
- No external systems involved

---

### **Layer 2 – Historical Email Context**

**Description**

Draft replies may reference previous email conversations with the same customer, where available.

**Typical usage**

- Avoiding repeated questions
- Referencing previous answers or updates
- Continuing an existing conversation coherently

**Example**

Customer follows up on a shipping question discussed earlier.

Draft may reference the last known ETA mentioned in the thread.

**Characteristics**

- Uses email history from the shared inbox
- No external databases or tools

---

### **Layer 3 – Customer & Order Data (ERP / Lexware)**

**Description**

Draft replies may include structured customer data, such as previous orders or known preferences.

**Data examples**

- Customer profile and contact details
- Previous orders and engagements with Strict
- Known preferences (language, products, formats)

**Typical usage**

- Personalised replies
- Referencing previous orders or support history
- Avoiding unnecessary clarification questions

**Example**

Customer asks: “When can I get more of X?”

Draft may reference the last order of X, typical lead times, and preferred delivery setup.

**Characteristics**

- Requires integration with a customer data source (ERP / CRM / database)
- Read access only, no data modification

---

### **Layer 4 – Pricing & Calculation Logic**

**Description**

Draft replies may include calculated pricing or quotations using the existing pricing tool.

**Typical usage**

- Quote requests
- Price estimates
- Option comparisons

**Example**

Customer asks: “What would it cost for 5 units with service Y?”

Draft calculates pricing using the pricing logic and includes the result clearly.

**Characteristics**

- Requires access to a pricing calculation tool
- Pricing logic must be executed reliably (not guessed)
- Special care for discounts, minimum quantities, and rules

---

### **How the Layers Are Applied in Practice**

For each incoming email, the system will:

1. Determine whether the email is eligible for a draft reply
2. Identify which **context layers** are required based on the request
3. Retrieve only the necessary information from the relevant sources
4. Generate a draft reply using the combined context
5. Place the draft in the shared inbox for review and manual sending

**Important:**

If a required layer or tool is not available, the system will fall back to a simpler draft (e.g. asking a clarifying question instead of guessing).

---

### **Why This Layered Approach Matters**

Different emails require different effort:

- Some only need a polite clarification
- Others benefit from email history
- Repeat customers expect context awareness
- Quote requests require real calculations

By structuring the solution in layers:

- Automation stays safe
- Complexity is added only where it creates value
- Future ERP integration remains possible without redesign

---

### **2.5 Safety Rules**

- Drafts are created only when the system is confident
- Emails with legal, financial, or escalation risk are excluded
- These emails remain fully manual

---

## **3. Deliverables**

- Discovery call and short written summary
- Configuration of which emails get draft replies
- Automated draft creation for agreed email types
- Safety rules and basic logging
- Short documentation for handover

---

## **4. Roadmap**

This roadmap describes how the automated email reply feature is rolled out and completed.

The goal is to reach a stable, usable solution without ongoing optimisation beyond the agreed scope.

---

### **4.1 Preparation**

A small set of existing emails is used to align expectations.

- Review which emails should receive draft replies
- Validate tone, wording, and safety rules
- Confirm that only relevant emails are handled automatically

This step ensures the system behaves as intended before being used on live emails.

---

### **4.2 Live Trial**

The feature is enabled in the shared inbox for a limited period.

- Draft replies are created only for clearly suitable emails
- Office staff review and send drafts manually
- Feedback is used to make small wording adjustments

The focus is on correctness and usefulness, not perfection.

---

### **4.3 Completion**

The project is considered complete once:

- Draft replies are created only for the agreed email types
- Sensitive or unclear emails remain fully manual
- Drafts are usable in daily operations
- All agreed deliverables have been provided

At this point, the solution is handed over and the roadmap is complete.

Any further changes or extensions are handled as separate follow-up work.

## **5. Timeline**

- Estimated delivery: **7–10 working days**
- Final timing confirmed after the discovery call

---

## **6. Pricing**

**Fixed project price: 5,000 €**

Includes discovery, implementation, testing, and handover.
