import React, { useState } from 'react';

const Privacy= () => (
  <div className="container mt-5" style={{fontWeight:"bolder",fontSize:"2.5vh"}}>
    <h1 className="display-4" style={{fontWeight:"bolder"}}>Privacy Policy</h1>
    <p>
      This AI Resume Builder is an open-source project developed under the guidance of UpToSkills, a platform dedicated to providing internships and
      skill-building opportunities. The tool is for educational purposes, and no data safety is guaranteed. By using this tool, you consent to the collection
      and use of information as described in this Privacy Policy.
    </p>

    <h2 className='display-6' style={{fontWeight:"bolder"}}>Data Collection</h2>
    <p>
      This tool collects data provided by users during the signup process. This includes your name, email, skills, and experience. It is important to note
      that you should not use your regular email address or password when signing up, as this tool may expose your data to multiple individuals within
      the UpToSkills community or even to individuals outside the community. By submitting your information, you acknowledge that the data may be accessible
      to other users, and the exposure risk is entirely on you. 
    </p>
    <p>
      Additionally, the tool may automatically collect certain information related to your device, such as browser type, operating system, and IP address, for the purpose of improving the tool's functionality and performance.
    </p>

    <h2 className="display-6" style={{fontWeight:"bolder"}}>Data Security</h2>
    <p>
      While we take reasonable steps to protect the security of the tool and its users, please note that no system is completely secure. We use industry-standard
      encryption and security protocols to protect sensitive data; however, no method of transmission over the internet or electronic storage is 100% secure.
      By using this tool, you acknowledge that there are inherent risks involved in entering any data online.
    </p>
    <p>
      You agree to notify us immediately if you suspect any unauthorized access to your data or any potential security breaches.
    </p>

    <h2 className="display-6" style={{fontWeight:"bolder"}}>Third-Party Services</h2>
    <p>
      The tool may contain links or references to third-party websites and services. We are not responsible for the privacy practices or content of these external sites,
      and we encourage you to review the privacy policies of those sites. Please be aware that any data shared with third-party services will be subject to their respective privacy policies.
    </p>

    <h2 className="display-6" style={{fontWeight:"bolder"}}>User Responsibility</h2>
    <p>
      You are solely responsible for the data you enter into this tool. We recommend that you do not input sensitive personal information, such as your Social Security number, financial information, or any confidential data. Additionally, you should avoid sharing personal details with other users or any third-party services.
    </p>
    <p>
      If you choose to integrate the AI Resume Builder tool with external services (such as LinkedIn, GitHub, etc.), you agree to ensure that your personal data shared through such integrations complies with the terms of service and privacy policies of those platforms.
    </p>

    <h2 className="display-6" style={{fontWeight:"bolder"}}>Changes to the Privacy Policy</h2>
    <p>
      UpToSkills reserves the right to update or modify this privacy policy at any time. Changes will be posted on this page, and we encourage you to review it periodically.
      By continuing to use the tool after any changes are made, you signify your acceptance of the revised privacy policy.
    </p>
  </div>
);


export default Privacy;
// export default TermsOfService;
