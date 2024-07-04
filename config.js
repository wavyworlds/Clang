const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="wavyworldsgh@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaTrh5M4tRrs3QIUab46";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaTrh5M4tRrs3QIUab46" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233204703270";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_12_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDc0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTMxLFxuICAgICAgICA1MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTksXG4gICAgICAgIDkwLFxuICAgICAgICAyOSxcbiAgICAgICAgODAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTkwLFxuICAgICAgICA1MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMyLFxuICAgICAgICA3NixcbiAgICAgICAgMjUsXG4gICAgICAgIDcyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxLFxuICAgICAgICAyOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgODAsXG4gICAgICAgIDI4LFxuICAgICAgICAzNixcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQxLFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjMyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDc1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExLFxuICAgICAgICAyOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTk1LFxuICAgICAgICA0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTE0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjEyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTksXG4gICAgICAgIDQzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDQwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY5LFxuICAgICAgICA2MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDMzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyLFxuICAgICAgICA3MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzgsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTcsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIwLFxuICAgICAgICA1OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjU1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAzMixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjIzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTg0LFxuICAgICAgICA4MCxcbiAgICAgICAgOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDYzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgODcsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIyLFxuICAgICAgICA2NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDc1LFxuICAgICAgICAxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODEsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA4NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU1LFxuICAgICAgICA0NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDcxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImpHcnFlOUt5ekRRa3lwNSthWkZ0RWpNL2M0ckxuNzZ6c1YvYmRPTklQeUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImpMNlVGTkZvVFNHNy1YUWZJWnFFTEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDhkOTVkZTctNzViZi00OTk4LTk1MGUtYzI3MzE0NGU1YWQ5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMxLFxuICAgICAgMTksXG4gICAgICA3LFxuICAgICAgMTQ0LFxuICAgICAgMTY2LFxuICAgICAgMjI5LFxuICAgICAgMTk1LFxuICAgICAgMTU3LFxuICAgICAgNjIsXG4gICAgICAxNDYsXG4gICAgICAxNyxcbiAgICAgIDI1LFxuICAgICAgMTM0LFxuICAgICAgMTMwLFxuICAgICAgMTI3LFxuICAgICAgMjAsXG4gICAgICAyMDIsXG4gICAgICAxNTQsXG4gICAgICA2OSxcbiAgICAgIDIxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OCxcbiAgICAgIDc1LFxuICAgICAgOTAsXG4gICAgICA1MSxcbiAgICAgIDEzMyxcbiAgICAgIDQxLFxuICAgICAgNDEsXG4gICAgICAxLFxuICAgICAgMjE0LFxuICAgICAgNTYsXG4gICAgICAxNjIsXG4gICAgICAxMTEsXG4gICAgICA4NCxcbiAgICAgIDEzMSxcbiAgICAgIDM4LFxuICAgICAgODgsXG4gICAgICAxNjAsXG4gICAgICAyMTUsXG4gICAgICAyNDAsXG4gICAgICA5NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3R1lRQTI3RlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzMjA0NzAzMjcwOjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiV0FWWSBXT1JEU1wiLFxuICAgIFwibGlkXCI6IFwiODQ0NDgwMzI4NTQwNDk6MTdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTE9WaHJBRUVOYThuTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpUEZzZGd3b3BVaHJqWDVKZG02TmhXTmdnd1lxTHRpMkV1eThZc1lvQml3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInI2SnJobGNOdytMZDhVekJadS8vbTVqYlg0YnNiMW1XTk9WcGREcnRGMkV4eGFoS1VHTk9mUW51Zlc2bWRpK2hqL3pYNXVneGd0ZjlZRzVwYXhJcUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjVKSTRkZTB2ekFBU1FPS0phbnVOVUU5NDI4NVFINjJyejV0UDArWGJBcjIyc2VEYzBySHF6VVI0bUNoUGNtcVRhQmI4L3R6aWJ1ZEdJdHhqcHJ6QmhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzIwNDcwMzI3MDoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNixcbiAgICAgICAgICA0NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTMxMTYyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSmhLXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKaEsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI3anRYMDYrUHpYT0tScHhyald5QmZMSzVRZ0pzTU5KUFFYSFdpWXRrb3VjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNzQ1MDYxNjIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzEyMjMxNDU3M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 Powered by WAVY WORLDS 』```", //*『sᴜʙsᴄʀɪʙᴇ • CRYPTO WAVES』*\n youtube.com/@wavyworldscrypto"),
 
  author : process.env.PACK_AUTHER|| "zay",
  packname: process.env.PACK_NAME || "clang",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
