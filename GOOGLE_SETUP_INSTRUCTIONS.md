# Google Sheets Backend Setup Guide

## Phase 1: Database Initialization
1.  **Create Spreadsheet**
    - Open [Google Sheets](https://sheets.google.com).
    - Create a **Blank Spreadsheet**.
    - Name it: `Mega Trade Fair Database`.

2.  **Define Schema (Columns)**
    - In **Row 1**, add these exact headers:
        - `A1`: **timestamp**
        - `B1`: **name**
        - `C1`: **phone**
        - `D1`: **email**
        - `E1`: **city**
        - `F1`: **gender**
        - `G1`: **age**
        - `H1`: **id**

## Phase 2: API Creation (Apps Script)
3.  **Open Script Editor**
    - Click **Extensions** > **Apps Script** in the menu.
    - Rename the project to `Registration Backend`.

4.  **Implement Code**
    - Delete all code in `Code.gs`.
    - Copy the code from `google_script_code.js` (in this folder) and paste it there.
    - Save the file (Ctrl+S).

## Phase 3: Deployment (Critical)
5.  **Deploy as Web App**
    - Click blue **Deploy** button > **New deployment**.
    - Click the **Gear Icon** (Select type) -> **Web app**.
    - Description: `v1`.
    - Execute as: **Me**.
    - **Who has access**: **Anyone** (Critical!).
    - Click **Deploy**.

6.  **Authorize**
    - Click **Review permissions**.
    - Select your account.
    - (If warned) Click **Advanced** > **Go to Registration Backend (unsafe)**.
    - Click **Allow**.

## Phase 4: Integration
7.  **Get URL**
    - Copy the **Web App URL** (starts with `https://script.google.com/...`).
    - Provide this URL to the developer to update `Register.jsx`.
