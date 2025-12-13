/**
 * Google Apps Script Code for Mega Trade Fair Registration
 * 
 * INSTRUCTIONS:
 * 1. Go to https://docs.google.com/spreadsheets
 * 2. Create a new sheet. Headers (Row 1): timestamp, name, phone, email, city, id
 * 3. Extensions > Apps Script
 * 4. Paste this code into Code.gs
 * 5. Deploy > New Deployment > Web App > Who has access: Anyone > Deploy
 * 6. Copy URL and use in frontend.
 */

function doPost(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // 1. Save Data to Sheet
    sheet.appendRow([
        new Date(),
        data.name,
        data.phone,
        data.email,
        data.city,
        data.gender || 'N/A',
        data.age || 'N/A',
        data.id || 'N/A'
    ]);

    // 2. Send Confirmation Email
    // This requires you to approve "Send email as you" permission when deploying
    if (data.email) {
        try {
            MailApp.sendEmail({
                to: data.email,
                subject: "Your Visitor Pass - Mega Trade Fair 2025",
                body: "Hello " + (data.name || 'Visitor') + ",\n\n" +
                    "Thank you for registering for the Mega Trade Fair 2025 in Vizianagaram!\n\n" +
                    "--- VISITOR PASS DETAILS ---\n" +
                    "Visitor Name: " + (data.name || 'N/A') + "\n" +
                    "Gender:       " + (data.gender || 'N/A') + "\n" +
                    "Age:          " + (data.age || 'N/A') + "\n" +
                    "Visitor ID:   " + (data.id || 'N/A') + "\n" +
                    "----------------------------\n\n" +
                    "Your registration is confirmed.\n" +
                    "Please show this email at the entrance.\n\n" +
                    "Regards,\nOrganizing Team"
            });
        } catch (error) {
            // Log error but don't fail the registration
            console.log("Email failed: " + error);
        }
    }

    return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' }))
        .setMimeType(ContentService.MimeType.JSON);
}
