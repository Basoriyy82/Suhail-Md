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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348145148382";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_54_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxLFxuICAgICAgICA3NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDYsXG4gICAgICAgIDY4LFxuICAgICAgICA5LFxuICAgICAgICA0MixcbiAgICAgICAgNzMsXG4gICAgICAgIDU5LFxuICAgICAgICA0NixcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMixcbiAgICAgICAgMTgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA3NixcbiAgICAgICAgMTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNSxcbiAgICAgICAgODcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTEwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDU5LFxuICAgICAgICAzMixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAxLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNixcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMixcbiAgICAgICAgMjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc2LFxuICAgICAgICA5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTksXG4gICAgICAgIDQ5LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjA0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI1LFxuICAgICAgICA2MixcbiAgICAgICAgMTQzLFxuICAgICAgICA1MSxcbiAgICAgICAgODYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDcsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTMyLFxuICAgICAgICA3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA0LFxuICAgICAgICAxOCxcbiAgICAgICAgNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDMsXG4gICAgICAgIDkzLFxuICAgICAgICA3MixcbiAgICAgICAgMjM5LFxuICAgICAgICA4OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6U01BOStTaEN2SG9TM1RKTDFBTzRid3dCbnpWOU1qb2UzQktNSk8vRG5NPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNDUxNDgzODJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjIwRkVERkFEODkxMDg5QkZBQUZDREVDOTk4NTQ1NEU1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTg2NzI5M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFS3JqMU9OWlNtdThBbU1yeE1hTktnXCIsXG4gIFwicGhvbmVJZFwiOiBcImIzMDEyZTdkLWE2ZGMtNDE4NC1iYWI1LTg3MTUzZDIxZjY0Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDYsXG4gICAgICA3OCxcbiAgICAgIDk3LFxuICAgICAgMTEzLFxuICAgICAgMTk2LFxuICAgICAgMTc5LFxuICAgICAgNixcbiAgICAgIDE3OCxcbiAgICAgIDExLFxuICAgICAgMixcbiAgICAgIDQyLFxuICAgICAgNDMsXG4gICAgICA4NixcbiAgICAgIDI0MyxcbiAgICAgIDI5LFxuICAgICAgMjMzLFxuICAgICAgMjM2LFxuICAgICAgMTUsXG4gICAgICAxOTMsXG4gICAgICA3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OSxcbiAgICAgIDE4MSxcbiAgICAgIDkyLFxuICAgICAgMTkwLFxuICAgICAgMjEzLFxuICAgICAgMjU0LFxuICAgICAgMTc2LFxuICAgICAgNTAsXG4gICAgICAxMDEsXG4gICAgICAyMTcsXG4gICAgICAyNixcbiAgICAgIDQzLFxuICAgICAgMTA1LFxuICAgICAgMjAwLFxuICAgICAgMTM2LFxuICAgICAgMTEzLFxuICAgICAgMTc4LFxuICAgICAgMjI4LFxuICAgICAgMTgzLFxuICAgICAgMTAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktUM1E4NkFBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQ1MTQ4MzgyOjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi6Zi/5ouJ57qm6I6rXCIsXG4gICAgXCJsaWRcIjogXCIyNzY4ODQxMjY0NTc5Njc6MTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTZsdXRnQkVKZXZqTFFHR0F3Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJVeVRLS0ltMUhUMEFIbUM5S0VuV2lVbUEwd1RCUnRqT0s5ZGhkNzgydm5zPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjhhb2tNc2EvNUpwMXhoVy9keDJhd0tHemhDS3VDNkFqaDR4K1krNHNWaXcycmxQMVZ6QTZmWjZmUEVBaEdudHY0dGtUTEZydEU1SWkxSTJnMTFrY0F3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIldySi9rN3lrR3U1Q050UEpCd3lwK3BUSG0wa3I4dmtLZkg3bG1hNktaRXlKVC9Yenh4NVBpN01saHRONndKMXR1UE1ZcjFzaDJPdzRwci9zaGg2V0FRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDUxNDgzODI6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk4NjcyOTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGb1VcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZvVS5qc29uIjogIntcImtleURhdGFcIjpcInVTNXp1a21sc1VNUzNWYWlRNENVRzJCRm5DK0FxTS82WlV6YXB4aisvWDg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDUzOTM5ODUzLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwyLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
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
