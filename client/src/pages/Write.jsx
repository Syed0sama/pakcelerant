import React, { useState, useEffect } from "react";
import axios from "axios";



import "../style.scss";

const Write = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    companyUrl: "",
    demoUrl: "",
    companyDescription: "",
    companyProduct: "",
    companyLocation: "",
    foundersMeet: "",
    founderCount: 0,
    companyCategory: "",
    initialUsersLocation: "",
    progressStatus: "",
    workDuration: "",
    isProductUsed: "",
    hasRevenue: "",
    revenueDetails: "",
    revenueSources: "",
    marginsDetails: "",
    growthDetails: "",
    ideaChanges: "",
    incubatorDetails: "",
    ideaReason: "",
    uniqueUnderstanding: "",
    revenueModel: "",
    userAcquisition: "",
    userMetrics: "",
    incorporated: false,
    issuedStock: false,
    crowdfunding: false,
    equityBreakdown: "",
    takenInvestment: false,
    investmentsReceived: "",
    totalInvestmentAmount: "",
    monthlySpending: "",
    currentBankBalance: "",
    runwayDuration: "",
    fundraising: false,
    plannedEquityBreakdown: "",
    companyStructureInfo: "",
    foundersNoncompetes: "",
    technicalWork: "",
    governmentGrants: "",
    otherInfo: "",
    otherIdeas: "",
    amusingDiscovery: "",
    applyReason: "",
    hearAboutPackcelerant: "",
    founderEducation: "",
    founderEmployment: "",
    founderHackingExperience: "",
    founderImpressiveAchievement: "",
    uid: JSON.parse(localStorage.getItem("user")).id,
    userDetails: ""

  });
  const [err, setError] = useState(null);
  useEffect(() => {
    // Load form data from local storage if it exists
    const storedData = JSON.parse(localStorage.getItem("formData"));
    if (storedData) {
      setFormData(storedData);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post("/auth/write", formData);
      // Save the form data to local storage after successful submission
      localStorage.setItem("formData", JSON.stringify(formData));
    } catch (err) {
      setError(err.response?.data || "An error occurred");
    }
  };
  return (
    <div className="google-form-container">
      
      <h1 className="google-form-header">Company Profile</h1>
      <form onSubmit={handleSubmit} className="google-form">

        <div className="form-section">
          <h2 className="form-section-heading">Company</h2>
          <p className="form-question">Company name:</p>
          <input
            type="text"
            name="companyName"
            onChange={handleInputChange}
            className="form-input"
          />

          <p className="form-question">Company url, if any:</p>
          <input
            type="text"
            name="companyUrl"
            onChange={handleInputChange}
            className="form-input"
          />

          <p className="form-question">
            If you have a demo, what's the URL? Demo can be anything that shows
            us how the product works. Usually that's a video or screen
            recording.
          </p>
          <input
            type="text"
            name="demoUrl"
            onChange={handleInputChange}
            className="form-input"
          />

          <p className="form-question">
            Describe what your company does in 50 characters or less.
          </p>
          <input
            type="text"
            name="companyDescription"
            onChange={handleInputChange}
            className="form-input"
          />

          <p className="form-question">
            What is your company going to make? Please describe your product
            and what it does or will do.
          </p>
          <textarea
            rows="2"
            cols="80"
            name="companyProduct"
            onChange={handleInputChange}
            className="form-input"
          />

          <p className="form-question">
            Where do you live now, and where would the company be based?
          </p>
          <input
            type="text"
            name="companyLocation"
            onChange={handleInputChange}
            className="form-input"
          />
        </div>


        <div className="form-section">
          <h2 className="form-section-heading">Founders</h2>
          <p className="form-question">
            How long have the founders known one another and how did you meet?
            Have any of the founders not met in person?
          </p>
          <textarea
            rows="2"
            cols="80"
            name="foundersMeet"
            onChange={handleInputChange}
            className="form-input"
          />

          <p className="form-question">How many founders are on the team?</p>
          <input
            type="number"
            name="founderCount"
            onChange={handleInputChange}
            className="form-input"
          />
        </div>


        <div className="form-section">
          <h2 className="form-section-heading">Category</h2>
          <p className="form-question">
            Which category best applies to your company?
          </p>
          <select
            name="companyCategory"
            onChange={handleInputChange}
            className="form-input"
          >
            <option value="">Select Category</option>
            <option value="Technology">Technology</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>

          </select>

          <p className="form-question">
            Where will most of your initial users be located?
          </p>
          <input
            type="text"
            name="initialUsersLocation"
            onChange={handleInputChange}
            className="form-input"
          />
        </div>

        <div className="form-section">
          <h2 className="form-section-heading">Progress</h2>
          <p className="form-question">How far along are you?</p>
          <input
            type="text"
            name="progressStatus"
            onChange={handleInputChange}
            className="form-input"
          />

          <p className="form-question">
            How long have each of you been working on this? How much of that has been full-time? Please explain.
          </p>
          <textarea
            rows="2"
            cols="80"
            name="workDuration"
            onChange={handleInputChange}
            className="form-input"
          />

          <p className="form-question">Are people using your product?</p>
          <select
            name="isProductUsed"
            onChange={handleInputChange}
            className="form-input"
          >
            <option value="">Select</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>

          {formData.isProductUsed === "true" && (
            <>
              <p className="form-question">
                How many active users or customers do you have? How many are paying? Who is paying you the most, and how much do they pay you?
              </p>
              <textarea
                rows="2"
                cols="80"
                name="userDetails"
                onChange={handleInputChange}
                className="form-input"
              />
            </>
          )}

          <p className="form-question">Do you have revenue?</p>
          <select
            name="hasRevenue"
            onChange={handleInputChange}
            className="form-input"
          >
            <option value="">Select</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>

          {formData.hasRevenue === "true" && (
            <>
              <p className="form-question">
                We're interested in your revenue over the last several months. (Not cumulative and not GMV).
              </p>
              <textarea
                rows="2"
                cols="80"
                name="revenueDetails"
                onChange={handleInputChange}
                className="form-input"
              />

              <p className="form-question">
                Where does your revenue come from? If your revenue comes from multiple sources (ex. multiple products, multiple companies or a mix of consulting and this product), please break down how much is coming from each source.
              </p>
              <textarea
                rows="2"
                cols="80"
                name="revenueSources"
                onChange={handleInputChange}
                className="form-input"
              />

              <p className="form-question">Tell us more about your margins - more detail is better.</p>
              <textarea
                rows="2"
                cols="80"
                name="marginsDetails"
                onChange={handleInputChange}
                className="form-input"
              />

              <p className="form-question">Anything else you would like us to know regarding your revenue or growth rate?</p>
              <textarea
                rows="2"
                cols="80"
                name="growthDetails"
                onChange={handleInputChange}
                className="form-input"
              />
            </>
          )}

          <p className="form-question">
            If you are applying with the same idea as a previous batch, did anything change? If you applied with a different idea, why did you pivot and what did you learn from the last idea?
          </p>
          <textarea
            rows="2"
            cols="80"
            name="ideaChanges"
            onChange={handleInputChange}
            className="form-input"
          />

          <p className="form-question">
            If you have already participated or committed to participate in an incubator, "accelerator" or "pre-accelerator" program, please tell us about it.
          </p>
          <textarea
            rows="2"
            cols="80"
            name="incubatorDetails"
            onChange={handleInputChange}
            className="form-input"
          />
        </div>

        <div className="form-section">
          <h2 className="form-section-heading">Idea</h2>
          <p className="form-question">
            Why did you pick this idea to work on? Do you have domain expertise in this area? How do you know people need what you're making?
          </p>
          <textarea
            rows="2"
            cols="80"
            name="ideaReason"
            onChange={handleInputChange}
            className="form-input"
          />

          <p className="form-question">
            What do you understand about your business that other companies in it just don't get?
          </p>
          <textarea
            rows="2"
            cols="80"
            name="uniqueUnderstanding"
            onChange={handleInputChange}
            className="form-input"
          />

          <p className="form-question">
            How do or will you make money? How much could you make?
          </p>
          <textarea
            rows="2"
            cols="80"
            name="revenueModel"
            onChange={handleInputChange}
            className="form-input"
          />

          <p className="form-question">
            How are users finding out about your product? How did you get the users you have now? If you run paid ads, how much do you spend each month and what is your cost of acquisition?
          </p>
          <textarea
            rows="2"
            cols="80"
            name="userAcquisition"
            onChange={handleInputChange}
            className="form-input"
          />

          <p className="form-question">
            If you track metrics around user engagement and retention, what are they?
          </p>
          <textarea
            rows="2"
            cols="80"
            name="userMetrics"
            onChange={handleInputChange}
            className="form-input"
          />
        </div>

        <div className="form-section">
          <h2 className="form-section-heading">Equity</h2>
          <p className="form-question">Have you incorporated, or formed ANY legal entity yet?</p>
          <input
            type="checkbox"
            name="incorporated"
            onChange={handleInputChange}
            className="form-checkbox"
          />

          <p className="form-question">Have you issued stock to investors?</p>
          <input
            type="checkbox"
            name="issuedStock"
            onChange={handleInputChange}
            className="form-checkbox"
          />

          <p className="form-question">Have you raised money using crowdfunding?</p>
          <input
            type="checkbox"
            name="crowdfunding"
            onChange={handleInputChange}
            className="form-checkbox"
          />

          <p className="form-question">
            Please describe the breakdown of the equity ownership in percentages among the founders, employees, and any other stockholders. If there are multiple founders, be sure to give the equity ownership of each founder and founder title (e.g. CEO).
          </p>
          <textarea
            rows="2"
            cols="80"
            name="equityBreakdown"
            onChange={handleInputChange}
            className="form-input"
          />

          <p className="form-question">Have you taken any investment yet?</p>
          <input
            type="checkbox"
            name="takenInvestment"
            onChange={handleInputChange}
            className="form-checkbox"
          />

          <p className="form-question">
            (If yes) List any investments your company has received. Include the name of the investor, the amount invested, the premoney valuation / valuation cap, the type of security sold (convertible notes, safes, or stock), and the investment date.
          </p>
          <textarea
            rows="2"
            cols="80"
            name="investmentsReceived"
            onChange={handleInputChange}
            className="form-input"
          />

          <p className="form-question">How much money have you raised from investors in total in US Dollars?</p>
          <input
            type="text"
            name="totalInvestmentAmount"
            onChange={handleInputChange}
            className="form-input"
          />

          <p className="form-question">How much money do you spend per month?</p>
          <input
            type="text"
            name="monthlySpending"
            onChange={handleInputChange}
            className="form-input"
          />

          <p className="form-question">How much money does your company have in the bank now?</p>
          <input
            type="text"
            name="currentBankBalance"
            onChange={handleInputChange}
            className="form-input"
          />

          <p className="form-question">How long is your runway?</p>
          <input
            type="text"
            name="runwayDuration"
            onChange={handleInputChange}
            className="form-input"
          />

          <p className="form-question">Are you currently fundraising?</p>
          <input
            type="checkbox"
            name="fundraising"
            onChange={handleInputChange}
            className="form-checkbox"
          />

          <p className="form-question">
            If you have not formed the company yet, describe the planned equity ownership breakdown among the founders, employees, and any other proposed stockholders. If there are multiple founders, be sure to give the proposed equity ownership of each founder.
          </p>
          <textarea
            rows="2"
            cols="80"
            name="plannedEquityBreakdown"
            onChange={handleInputChange}
            className="form-input"
          />

          <p className="form-question">Please provide any other relevant information about the structure or formation of the company.</p>
          <textarea
            rows="2"
            cols="80"
            name="companyStructureInfo"
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-section">
          <h2 className="form-section-heading">Legal</h2>
          <p className="form-question">Are any of the founders covered by noncompetes or intellectual property agreements that overlap with your project? If so, please explain.</p>
          <textarea
            rows="2"
            cols="80"
            name="foundersNoncompetes"
            onChange={handleInputChange}
            className="form-input"
          />

          <p className="form-question">Who writes code, or does other technical work on your product? Was any of it done by a non-founder? Please explain.</p>
          <textarea
            rows="2"
            cols="80"
            name="technicalWork"
            onChange={handleInputChange}
            className="form-input"
          />

          <p className="form-question">Have you received any government grants? If so, list the grants you've received, including the terms of the grant, who it's from, what it covers, and when you received it.</p>
          <textarea
            rows="2"
            cols="80"
            name="governmentGrants"
            onChange={handleInputChange}
            className="form-input"
          />

          <p className="form-question">Is there anything else we should know about your company? (Pending lawsuits, cofounders who have left, etc.)</p>
          <textarea
            rows="2"
            cols="80"
            name="otherInfo"
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-section">
          <h2 className="form-section-heading">Other</h2>
          <p className="form-question">If you had any other ideas you considered applying with, please list them. One may be something we've been waiting for. Often when we fund people it's to do something they list here and not in the main application.</p>
          <textarea
            rows="2"
            cols="80"
            name="otherIdeas"
            onChange={handleInputChange}
            className="form-input"
          />

          <p className="form-question">Please tell us something surprising or amusing that one of you has discovered.</p>
          <textarea
            rows="2"
            cols="80"
            name="amusingDiscovery"
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-section">
          <h2 className="form-section-heading">Curious</h2>
          <p className="form-question">What convinced you to apply to Packcelerant? Did someone encourage you to apply?</p>
          <textarea
            rows="2"
            cols="80"
            name="applyReason"
            onChange={handleInputChange}
            className="form-input"
          />

          <p className="form-question">How did you hear about Packcelerant?</p>
          <textarea
            rows="2"
            cols="80"
            name="hearAboutPackcelerant"
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-section">
          <h2 className="form-section-heading">Founder(s) Profile</h2>
          <p className="form-question">Schools, Degrees (including field of study), and Years of Graduation</p>
          <textarea
            rows="2"
            cols="80"
            name="founderEducation"
            onChange={handleInputChange}
            className="form-input"
          />

          <p className="form-question">Employers, Position / Titles and Dates</p>
          <textarea
            rows="2"
            cols="80"
            name="founderEmployment"
            onChange={handleInputChange}
            className="form-input"
          />

          <p className="form-question">Please tell us about the time you most successfully hacked some (non-computer) system to your advantage.</p>
          <textarea
            rows="2"
            cols="80"
            name="founderHackingExperience"
            onChange={handleInputChange}
            className="form-input"
          />

          <p className="form-question">Please tell us in one or two sentences about the most impressive thing other than this startup that you have built or achieved.</p>
          <textarea
            rows="2"
            cols="80"
            name="founderImpressiveAchievement"
            onChange={handleInputChange}
            className="form-input"
          />
        </div>

        <button type="submit" className="google-form-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Write;
