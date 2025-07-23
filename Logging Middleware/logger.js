const axios = require("axios");

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJnbWFuaWthbnRhcmVkZHkyMkBpZmhlaW5kaWEub3JnIiwiZXhwIjoxNzUzMjUxOTg2LCJpYXQiOjE3NTMyNTEwODYsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJjZmRkZjNjMS1lZDE5LTQ1MDEtYTdmYi1lMTYzOWE1NDIwMTkiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJndW50dWthIG1hbmlrYW50YSByZWRkeSIsInN1YiI6ImIwOGNhY2U4LWFiNzAtNDlhMC04ZjQ5LTEzNDUzNzlhZWQxZiJ9LCJlbWFpbCI6ImdtYW5pa2FudGFyZWRkeTIyQGlmaGVpbmRpYS5vcmciLCJuYW1lIjoiZ3VudHVrYSBtYW5pa2FudGEgcmVkZHkiLCJyb2xsTm8iOiIyMnN0dWNoaDAxMDQ2NyIsImFjY2Vzc0NvZGUiOiJiQ3VDRlQiLCJjbGllbnRJRCI6ImIwOGNhY2U4LWFiNzAtNDlhMC04ZjQ5LTEzNDUzNzlhZWQxZiIsImNsaWVudFNlY3JldCI6InlZdkZGc2NuUWJXVEJQeGMifQ.R04wMvo4ND-GetyB13kQLkPOdGyHTnw7zUDmbhISQQM";

const VALID_STACKS = ["backend", "frontend"];
const VALID_LEVELS = ["debug", "info", "warn", "error", "fatal"];
const VALID_PACKAGES = ["logging", "shortening", "redirect"];

const log = async ({ stack, level, message, packageName }) => {
    if (!VALID_STACKS.includes(stack)) {
        // Corrected: Use backticks
        console.error(`Invalid stack: ${stack}`);
        return;
    }
    if (!VALID_LEVELS.includes(level)) {
        // Corrected: Use backticks
        console.error(`Invalid level: ${level}`);
        return;
    }
    if (!VALID_PACKAGES.includes(packageName)) {
        // Corrected: Use backticks
        console.error(`Invalid package: ${packageName}`);
        return;
    }

    try {
        const res = await axios.post(
            "http://20.244.56.144/evaluation-service/logs",
            {
                stack,
                level,
                message,
                package: packageName
            },
            {
                headers: {
                    // Corrected: Use backticks
                    Authorization: `Bearer ${ACCESS_TOKEN}`,
                    "Content-Type": "application/json"
                }
            }
        );
        console.log("Log sent successfully:", res.status);
    } catch (err) {
        console.error("Failed to send log:", err.response?.status || err.message);
    }
};

module.exports = log;