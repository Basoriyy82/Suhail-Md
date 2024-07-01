const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_19_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA0MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA3LFxuICAgICAgICA5MyxcbiAgICAgICAgODcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTksXG4gICAgICAgIDkzLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNyxcbiAgICAgICAgNDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE2LFxuICAgICAgICA0MixcbiAgICAgICAgMTkxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTAwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDU0LFxuICAgICAgICA2MyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDU4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDgxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2MixcbiAgICAgICAgMjUyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDYwLFxuICAgICAgICA3NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM2LFxuICAgICAgICA0NSxcbiAgICAgICAgNjksXG4gICAgICAgIDU5LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzksXG4gICAgICAgIDYzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDY3LFxuICAgICAgICA5LFxuICAgICAgICAyMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk2LFxuICAgICAgICA2NixcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDcwLFxuICAgICAgICA5MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM0LFxuICAgICAgICA0OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ1LFxuICBcImFkdlNlY3JldEtleVwiOiBcInlnRU0wYkxWVUh5dC9wSG5LM09sek01N1crZWJaYTlabFZ1RkZNaWxDbms9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlJRUjYyT0hYUnItRkJ0bDdaLUNiTXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2MzODFmNmYtOGE1MC00MjllLTlkODItYjRmNTgwYzdhZDc1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NyxcbiAgICAgIDM2LFxuICAgICAgMTQ0LFxuICAgICAgMTkwLFxuICAgICAgMzMsXG4gICAgICAxODQsXG4gICAgICA2OCxcbiAgICAgIDEyNixcbiAgICAgIDEyNyxcbiAgICAgIDIzNSxcbiAgICAgIDE3LFxuICAgICAgMTgxLFxuICAgICAgMTU0LFxuICAgICAgMTQwLFxuICAgICAgODYsXG4gICAgICA4MixcbiAgICAgIDIyMCxcbiAgICAgIDE2NSxcbiAgICAgIDI4LFxuICAgICAgMTYyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MixcbiAgICAgIDUyLFxuICAgICAgNDcsXG4gICAgICA4MixcbiAgICAgIDUsXG4gICAgICAzNSxcbiAgICAgIDQ0LFxuICAgICAgNSxcbiAgICAgIDY3LFxuICAgICAgMTM0LFxuICAgICAgMjU0LFxuICAgICAgMTEyLFxuICAgICAgMSxcbiAgICAgIDE1NCxcbiAgICAgIDExMSxcbiAgICAgIDE3OCxcbiAgICAgIDE4OSxcbiAgICAgIDIyNixcbiAgICAgIDEzMixcbiAgICAgIDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTFBSTDUxNTlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzIxMjY5MDc6NDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjYwMjA3MTg3MTIwMjA3OjQ3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tHUStEMFFnTS8rc3dZWUJTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidEE0RGR3V1owVDlPV0l2OCtDSkRHYWJ3cS9TaEs4R3ZXcVhyMW0xZlVBMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0ZUZ5L2Q1cmZxd3RhdGovOUZIZnhrcmVZUm9wNE51K1c4eFhGY1ROcmhRUFdoblB2VmxrcG9WL2p0RmhmNy8vWmhSZ0VoSWxlT0NzSm9wRXJEa2RDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJrdGpqRzRzaHRFZFJtQXp6bEpPVXJGSHZSM3JaTlQ5MWNxVnRLc2ZydjlBQjRjQi9Zc1F0OUhzeGNPTzMvSzNoLzM3bXAzbU5QZWtxZEdzUWVwTFFodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTMyMTI2OTA3OjQ3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk2NDE5ODgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIRkJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhGQi5qc29uIjogIntcImtleURhdGFcIjpcImxlZWZlcGtYclM3WHZNSjRMWUQ4bWh2cW4wNDkwYUZZY25IdG9KYnFtazg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI5ODk0NDMyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE5MDM3ODI2NzIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
