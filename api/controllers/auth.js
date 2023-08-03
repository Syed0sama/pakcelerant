import { pool } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const register = (req, res) => {
  // CHECK EXISTING USER
  const q = "SELECT * FROM users WHERE email = $1 OR username = $2";

  pool.query(q, [req.body.email, req.body.username], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.rows.length) return res.status(409).json("User already exists! Please go to login Page");

    // Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const insertQuery =
      "INSERT INTO users(username, email, password) VALUES ($1, $2, $3)";

    pool.query(
      insertQuery,
      [req.body.username, req.body.email, hash],
      (err, result) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("User has been created.");
      }
    );
  });
};

export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username = $1";

  pool.query(q, [req.body.username], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }

    // Check if any user was found
    if (data.rows.length === 0) {
      return res.status(404).json("User not found");
    }

    // Get the first user from the data (assuming only one user should match)
    const user = data.rows[0];

    // CHECK password
    const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);

    if (!isPasswordCorrect)
      return res.status(400).json("Wrong username or password!");

    const token = jwt.sign({ id: user.id }, "jwtkey");
    const { password, ...other } = user;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200).json(other);
  });
};

export const logout = (req, res) => {
  res.clearCookie("access_token", {
    sameSite: "none",
    secure: true
  }).status(200).json("User has been logged out.")
};

export const write = async (req, res) => {
 
try{
  const insertQuery =
  "INSERT INTO form(uid,companyName,companyUrl,demoUrl,companyDescription,companyProduct,companyLocation,foundersMeet,founderCount,companyCategory,initialUsersLocation,progressStatus,workDuration,isProductUsed,userDetails,hasRevenue,revenueDetails,revenueSources,marginsDetails,growthDetails,ideaChanges,incubatorDetails,ideaReason,uniqueUnderstanding,revenueModel,userAcquisition,userMetrics,incorporated,issuedStock,crowdfunding,equityBreakdown,takenInvestment,investmentsReceived,totalInvestmentAmount,monthlySpending,currentBankBalance,runwayDuration,fundraising,plannedEquityBreakdown,companyStructureInfo,foundersNoncompetes,technicalWork,governmentGrants,otherInfo,otherIdeas,amusingDiscovery,applyReason,hearAboutPackcelerant,founderEducation,founderEmployment,founderHackingExperience,founderImpressiveAchievement) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44, $45, $46, $47, $48, $49, $50 , $51, $52)";


  const queryParams = [req.body.uid,
    req.body.companyName,
    req.body.companyUrl,
    req.body.demoUrl,
    req.body.companyDescription,
    req.body.companyProduct,
    req.body.companyLocation,
    req.body.foundersMeet,
    parseInt(req.body.founderCount,10),
    req.body.companyCategory,
    req.body.initialUsersLocation,
    req.body.progressStatus,
    req.body.workDuration,
    req.body.isProductUsed,
    req.body.userDetails,
    req.body.hasRevenue,
    req.body.revenueDetails,
    req.body.revenueSources,
    req.body.marginsDetails,
    req.body.growthDetails,
    req.body.ideaChanges,
    req.body.incubatorDetails,
    req.body.ideaReason,
    req.body.uniqueUnderstanding,
    req.body.revenueModel,
    req.body.userAcquisition,
    req.body.userMetrics,
    req.body.incorporated,
    req.body.issuedStock,
    req.body.crowdfunding,
    req.body.equityBreakdown,
    req.body.takenInvestment,
    req.body.investmentsReceived,
    req.body.totalInvestmentAmount,
    req.body.monthlySpending,
    req.body.currentBankBalance,
    req.body.runwayDuration,
    req.body.fundraising,
    req.body.plannedEquityBreakdown,
    req.body.companyStructureInfo,
    req.body.foundersNoncompetes,
    req.body.technicalWork,
    req.body.governmentGrants,
    req.body.otherInfo,
    req.body.otherIdeas,
    req.body.amusingDiscovery,
    req.body.applyReason,
    req.body.hearAboutPackcelerant,
    req.body.founderEducation,
    req.body.founderEmployment,
    req.body.founderHackingExperience,
    req.body.founderImpressiveAchievement
    ];

  const result = await pool.query(
    insertQuery,
    queryParams);
    return res.status(200).json("User has been created.");
  } catch (err) {
    console.error("Error while inserting data:", err);
    return res.status(500).json("An error occurred while processing your request.");
  }
};


