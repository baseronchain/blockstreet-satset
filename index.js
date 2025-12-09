require('dotenv').config();

const fs = require('fs');
const axios = require('axios');
const { ethers } = require('ethers');
const readline = require('readline');
const { HttpsProxyAgent } = require('https-proxy-agent');

const colors = {
  reset: '\x1b[0m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  white: '\x1b[37m',
  bold: '\x1b[1m',
};
const logger = {
  info: (msg) => console.log(`${colors.white}[➤] ${msg}${colors.reset}`),
  warn: (msg) => console.log(`${colors.yellow}[⚠] ${msg}${colors.reset}`),
  error: (msg) => console.log(`${colors.red}[✗] ${msg}${colors.reset}`),
  success: (msg) => console.log(`${colors.green}[✅] ${msg}${colors.reset}`),
  loading: (msg) => console.log(`${colors.cyan}[⟳] ${msg}${colors.reset}`),
  step: (msg) => console.log(`\n${colors.cyan}${colors.bold}[➤] ${msg}${colors.reset}`),
  banner: () => {
    console.log(`${colors.cyan}${colors.bold}`);
    console.log(`---------------------------------------------`);
    console.log(` BlockStreet Auto Bot - Airdrop Insider `);
    console.log(`---------------------------------------------${colors.reset}`);
  },
};
