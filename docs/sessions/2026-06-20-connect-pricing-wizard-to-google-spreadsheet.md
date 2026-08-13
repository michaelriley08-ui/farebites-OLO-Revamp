# Connect Pricing Wizard to Google Spreadsheet

---


**Date:** 2026-06-20  
**Conversation ID:** `443e43f8-885b-4f81-b8d2-bd068653b68f`


---

## Implementation Plan

This plan outlines how to modify the provided Facility Use Pricing Wizard so that all the dropdown options and pricing data are dynamically loaded from a Google Spreadsheet instead of being hardcoded in the JavaScript.

## Open Questions

> [!IMPORTANT]
> **Please review these questions before we proceed:**
> 1. **Data Public Access:** The simplest and most robust way to read Google Sheets from a webpage without requiring users to log in is to set the spreadsheet sharing settings to **"Anyone with the link can view"**. Are you comfortable making the spreadsheet public in this way?
> 2. **Spreadsheet ID:** Do you already have a Google Spreadsheet set up for this? If so, what is the Spreadsheet ID? (It's the long string of letters and numbers in the URL: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`). If not, I will use a placeholder ID and you can swap it in later.
> 3. **File Structure:** Do you want to keep the HTML, CSS, and JavaScript all in one file (as provided), or should I split them into separate `index.html`, `styles.css`, and `app.js` files for better maintainability?

## Proposed Google Sheet Structure

You will need to organize your Google Spreadsheet into 5 separate tabs (sheets) with the following exact names and column headers. *Note: The exact column headers don't strictly matter as much as the column order, but following this is recommended.*

1. **Tab Name: `Classes`**
   - Columns: `ClassID`, `Label`, `HelpText`
2. **Tab Name: `DistrictOffice`**
   - Columns: `Name`, `Class2`, `Class3`, `Class4`, `Note`
3. **Tab Name: `CampusFacilities`**
   - Columns: `Name`, `Class2`, `Class3`, `Class4`, `Note`
4. **Tab Name: `Personnel`**
   - Columns: `Name`, `Rate`
5. **Tab Name: `Equipment`**
   - Columns: `Name`, `Rate`, `Unit`

## Proposed Changes

We will create a new workspace directory for this project at:
`/Users/michael-riley/.gemini/antigravity-ide/scratch/facility-pricing-wizard/`

### 1. Dynamic Data Fetching
We will replace the hardcoded `classes`, `districtOffice`, `campusFacilities`, `personnelRates`, and `equipmentRates` variables with a loading function. 

We will use the Google Visualization API endpoint (`gviz/tq`) to fetch the sheet data as JSON. This is a standard approach that doesn't require complex API keys or OAuth setup, provided the sheet is publicly viewable.

### 2. Loading State
Since the data will be fetched asynchronously over the network, we will add a brief loading state (e.g., disabling the form or showing a spinner) to the wizard so the user cannot interact with it until the dropdowns are fully populated.

### 3. Application Logic Updates
We will update the `populateClasses`, `populatePersonnel`, `populateEquipment`, and `renderFacilityOptions` functions to run *after* the data has been successfully fetched and parsed from the Google Sheet.

## Verification Plan

### Manual Verification
- We will insert a placeholder Google Sheet ID with matching dummy data to verify that the fetch logic successfully populates the dropdowns.
- Test the calculator logic to ensure the rates from the spreadsheet are correctly multiplying with the user inputs (hours, quantity) to produce the right total estimate.

---

## Task Checklist

- [x] Plan implementation details
- [x] Create workspace directory `scratch/facility-pricing-wizard`
- [x] Implement `index.html` with Google Sheets data fetching logic
- [x] Add loading state and configuration UI
- [x] Create `walkthrough.md` to document the changes and provide Google Sheets setup instructions

---

## Walkthrough

I have successfully updated the Pricing Wizard to dynamically load its data from a Google Spreadsheet instead of relying on hardcoded JavaScript values.

The new file is located here: 
[index.html](file:///Users/michael-riley/.gemini/antigravity-ide/scratch/facility-pricing-wizard/index.html)

## How It Works
1. **Setup State:** When you open the page for the first time without a hardcoded Spreadsheet ID, you'll see a configuration box prompting you to enter the Google Sheet ID.
2. **Fetching Data:** Once the ID is provided, the wizard securely fetches the data from the Google Visualization API (`gviz/tq`) for each of your 5 sheets concurrently.
3. **Parsing Data:** The JSON response is automatically parsed and populates your dropdown menus and internal rate logic.
4. **Hardcoding for Production:** Inside `index.html`, around line `218`, there is a `let SPREADSHEET_ID = "";` variable. Once you set up your Google Sheet, you can paste your ID in there, and the configuration box will disappear—the wizard will just load automatically!

> [!TIP]
> **Google Sheet Privacy Setting**
> The spreadsheet must be set to **"Anyone with the link can view"**. The data won't load if it's restricted to specific people.

## Setting Up Your Google Sheet

You need exactly **5 tabs (sheets)** in your Spreadsheet. The spelling of the tab names must match exactly what is shown below (case-sensitive, no spaces).

### 1. `Classes`
- Column A: Class ID (e.g., `class1`, `class2`)
- Column B: Label (e.g., `Class I - District mission-related use`)
- Column C: Help Text (e.g., `No charge for district mission-related use.`)

### 2. `DistrictOffice`
- Column A: Facility Name
- Column B: Class 2 Rate (e.g., `6.50`)
- Column C: Class 3 Rate (e.g., `16.50`)
- Column D: Class 4 Rate (e.g., `33.00`)
- Column E: Notes (Optional, e.g., `TBA`)

### 3. `CampusFacilities`
- Column A: Facility Name
- Column B: Class 2 Rate (e.g., `5.50`)
- Column C: Class 3 Rate
- Column D: Class 4 Rate
- Column E: Notes (Optional)

### 4. `Personnel`
- Column A: Role (e.g., `Electrician`, `Lighting/Sound Technician (Student)`)
- Column B: Rate (e.g., `25.00` or the word `student`)

### 5. `Equipment`
- Column A: Name (e.g., `LCD Projector`)
- Column B: Rate (e.g., `5.00`)
- Column C: Unit (e.g., `hour`, `day`, `performance`)

> [!NOTE]
> If a cell is completely empty or "TBA", the wizard will automatically handle it and disable it in the dropdown. If you type the word `student` for a personnel rate, it will dynamically hook up to the student worker rate input field in the UI.
