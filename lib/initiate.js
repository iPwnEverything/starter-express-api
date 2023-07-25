const config = require('../config.json');

async function initiateAuth(req, res) {
    const options = {
        requestType: "code",
        redirectUri: "http://localhost:3000/oauth/callback",
        clientId: config.clientId,
        scopes: [
            "conversations/message.readonly",
            "conversations/message.write",
            "businesses.readonly",
            "businesses.write",
            "calendars.readonly",
            "calendars.write",
            "calendars/events.readonly",
            "calendars/events.write",
            "campaigns.readonly",
            "conversations.readonly",
            "conversations.write",
            "contacts.readonly",
            "contacts.write",
            "forms.readonly",
            "links.readonly",
            "links.write",
            "locations.write",
            "locations.readonly",
            "locations/customValues.readonly",
            "locations/customValues.write",
            "locations/customFields.readonly",
            "locations/customFields.write",
            "locations/tasks.readonly",
            "locations/tasks.write",
            "locations/tags.readonly",
            "locations/tags.write",
            "locations/templates.readonly",
            "opportunities.readonly",
            "opportunities.write",
            "surveys.readonly",
            "users.readonly",
            "users.write",
            "workflows.readonly",
            "snapshots.readonly"
        ]
    };

    return res.redirect(`${config.baseUrl}/oauth/chooselocation?response_type=${options.requestType}&redirect_uri=http://localhost:3000/oauth/callback&client_id=${options.clientId}&scope=${options.scopes.join(' ')}`);
}

module.exports = initiateAuth;
