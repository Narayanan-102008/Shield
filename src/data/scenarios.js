
export const scenarios = [
  {
    id: 1,
    title: "The Urgent Bank Alert",
    category: "Banking Scams",
    difficulty: "Easy",
    message:
      "SECURITY ALERT: Your bank account will be restricted today. Verify your details immediately using the link provided to prevent suspension.",
    evidence: [
      "The message creates urgency and fear.",
      "It asks you to verify sensitive information through a link.",
      "The sender's identity has not been independently verified.",
    ],
    question: "What is the safest action?",
    options: [
      { id: "a", text: "Open the link and enter your banking details.", points: 0 },
      { id: "b", text: "Check your account through the official banking app or a verified phone number.", points: 10 },
      { id: "c", text: "Reply with your account number to confirm your identity.", points: 0 },
      { id: "d", text: "Forward the link to friends to see if it works.", points: 0 },
    ],
    correctOptionId: "b",
    explanation:
      "Do not use an unverified link to resolve an account warning. Open your bank's official app independently or contact the bank using a verified number.",
    redFlags: [
      "Urgent account restriction",
      "Unverified link",
      "Request to verify sensitive details",
    ],
  },

  {
    id: 2,
    title: "The Unexpected Prize",
    category: "Prize Scams",
    difficulty: "Easy",
    message:
      "Congratulations! You have been selected to receive a new smartphone. Pay a processing fee today to unlock your prize.",
    evidence: [
      "The prize was not expected.",
      "Payment is demanded before the prize is delivered.",
      "The competition and organizer are not identified clearly.",
    ],
    question: "How should you respond?",
    options: [
      { id: "a", text: "Pay because the fee is small.", points: 0 },
      { id: "b", text: "Share your card details to reserve the prize.", points: 0 },
      { id: "c", text: "Verify the competition through the organizer's independently confirmed official channels.", points: 10 },
      { id: "d", text: "Send your identity documents to claim the prize.", points: 0 },
    ],
    correctOptionId: "c",
    explanation:
      "Unexpected prizes that require advance payments deserve careful scrutiny. Verify the organizer independently before paying or sharing personal information.",
    redFlags: [
      "Unexpected prize",
      "Advance payment request",
      "Unverified organizer",
    ],
  },

  {
    id: 3,
    title: "The Too-Good-to-Be-True Internship",
    category: "Job Scams",
    difficulty: "Medium",
    message:
      "You are selected for a high-paying remote internship without an interview. Pay a refundable registration fee within one hour to reserve your position.",
    evidence: [
      "The offer promises attractive benefits without a normal selection process.",
      "The recruiter demands payment to secure employment.",
      "The short deadline discourages careful verification.",
    ],
    question: "What should you do before proceeding?",
    options: [
      { id: "a", text: "Pay immediately so you do not lose the opportunity.", points: 0 },
      { id: "b", text: "Verify the company, vacancy, and recruiter through independent official sources.", points: 10 },
      { id: "c", text: "Send your identity documents and banking information immediately.", points: 0 },
      { id: "d", text: "Trust the offer because it promises a refundable fee.", points: 0 },
    ],
    correctOptionId: "b",
    explanation:
      "An upfront recruitment fee is a major warning sign. Check the employer's official careers page and independently verify the recruiter before sharing documents.",
    redFlags: [
      "Upfront recruitment fee",
      "Unusually attractive offer",
      "Pressure to act quickly",
    ],
  },

  {
    id: 4,
    title: "The Fake Delivery Fee",
    category: "Delivery Scams",
    difficulty: "Medium",
    message:
      "Delivery failed! Your parcel is on hold due to an address issue. Pay a small redelivery fee within 30 minutes using the link in this message.",
    evidence: [
      "The message imposes an unusually short deadline.",
      "It requests payment through an unverified link.",
      "The parcel and delivery status have not been confirmed independently.",
    ],
    question: "What is the safest next step?",
    options: [
      { id: "a", text: "Pay immediately before the deadline.", points: 0 },
      { id: "b", text: "Reply with your full address and card details.", points: 0 },
      { id: "c", text: "Check the tracking status through the courier's official app or website.", points: 10 },
      { id: "d", text: "Install an application linked in the message.", points: 0 },
    ],
    correctOptionId: "c",
    explanation:
      "Fake delivery notifications may use small fees to obtain payment details. Check your tracking information independently instead of following the supplied link.",
    redFlags: [
      "Unverified delivery notification",
      "Short payment deadline",
      "Payment link",
    ],
  },

  {
    id: 5,
    title: "The Friend in an Emergency",
    category: "Social Engineering",
    difficulty: "Medium",
    message:
      "Hey, I lost access to my account and urgently need money. Please transfer it now. Don't call me because I cannot talk.",
    evidence: [
      "The sender claims to be someone you know.",
      "The message creates pressure around a financial request.",
      "The sender discourages independent verification.",
    ],
    question: "What should you do?",
    options: [
      { id: "a", text: "Transfer the money because the message sounds personal.", points: 0 },
      { id: "b", text: "Ask the sender for their password to verify their identity.", points: 0 },
      { id: "c", text: "Contact your friend through a known phone number or another trusted channel.", points: 10 },
      { id: "d", text: "Forward the request to friends and ask them to pay.", points: 0 },
    ],
    correctOptionId: "c",
    explanation:
      "Compromised accounts can be used to impersonate friends. Confirm urgent financial requests through a separate, trusted communication channel before acting.",
    redFlags: [
      "Urgent request for money",
      "Possible account impersonation",
      "Discourages verification",
    ],
  },

  {
    id: 6,
    title: "The OTP Verification Trap",
    category: "Account Security",
    difficulty: "Hard",
    message:
      "Customer support here. To stop an unauthorised transaction, tell us the six-digit OTP you just received. We will secure your account immediately.",
    evidence: [
      "The sender asks for a one-time password.",
      "The sender claims that sharing the code will protect the account.",
      "The support representative's identity has not been verified.",
    ],
    question: "Which action protects your account?",
    options: [
      { id: "a", text: "Share the OTP because the request sounds urgent.", points: 0 },
      { id: "b", text: "Share only the first three digits.", points: 0 },
      { id: "c", text: "Never disclose the OTP; contact the provider through its official support channel.", points: 10 },
      { id: "d", text: "Send a screenshot of the OTP message.", points: 0 },
    ],
    correctOptionId: "c",
    explanation:
      "An OTP can authorize a login or transaction. Never disclose it to someone contacting you unexpectedly. Use the provider's official app or verified support channel.",
    redFlags: [
      "Request for an OTP",
      "Unverified support identity",
      "Urgent security claim",
    ],
  },

  {
    id: 7,
    title: "The Suspicious QR Code",
    category: "QR Code Scams",
    difficulty: "Medium",
    message:
      "Scan this QR code to claim your exclusive discount. Enter your email password and payment details on the page to activate your offer.",
    evidence: [
      "The QR code leads to an unverified destination.",
      "The page requests a password unrelated to claiming a discount.",
      "Payment information is requested before the offer is verified.",
    ],
    question: "What is the safest decision?",
    options: [
      { id: "a", text: "Enter your email password to unlock the discount.", points: 0 },
      { id: "b", text: "Verify the offer through the retailer's official website and avoid entering unrelated credentials.", points: 10 },
      { id: "c", text: "Use the same password you use for your bank.", points: 0 },
      { id: "d", text: "Share the QR code with others and ask them to test it.", points: 0 },
    ],
    correctOptionId: "b",
    explanation:
      "A QR code can conceal a destination that is difficult to assess at a glance. Verify the offer independently and never enter unrelated account credentials.",
    redFlags: [
      "Unverified QR destination",
      "Unrelated password request",
      "Unexpected request for payment details",
    ],
  },

  {
    id: 8,
    title: "The Fake Account Recovery",
    category: "Social Media Security",
    difficulty: "Hard",
    message:
      "Your social media account will be permanently deleted in 15 minutes. Submit your password and recovery code through this form to appeal the decision.",
    evidence: [
      "The threat of deletion creates panic.",
      "The message requests both a password and a recovery code.",
      "The appeal form has not been independently verified.",
    ],
    question: "What should you do?",
    options: [
      { id: "a", text: "Submit your password and recovery code immediately.", points: 0 },
      { id: "b", text: "Reply asking the sender to keep your account open.", points: 0 },
      { id: "c", text: "Open the platform independently and check account notifications or official support.", points: 10 },
      { id: "d", text: "Give the recovery code to a friend to submit for you.", points: 0 },
    ],
    correctOptionId: "c",
    explanation:
      "Account recovery codes are sensitive credentials. Do not submit them through an unsolicited form; check the platform directly using its official app or website.",
    redFlags: [
      "Threat of account deletion",
      "Password and recovery-code request",
      "Unverified appeal form",
    ],
  },

  {
    id: 9,
    title: "The Fake Technical Support Call",
    category: "Tech Support Scams",
    difficulty: "Hard",
    message:
      "This is technical support. Your computer has a serious security problem. Install this remote-access application and give us access so we can fix it now.",
    evidence: [
      "The support contact was unexpected.",
      "The caller requests remote access to the device.",
      "The claim has not been confirmed by a trusted support provider.",
    ],
    question: "What is the safest response?",
    options: [
      { id: "a", text: "Install the application and grant access immediately.", points: 0 },
      { id: "b", text: "End the unexpected contact and verify any issue through the device maker's official support.", points: 10 },
      { id: "c", text: "Share your computer login password with the caller.", points: 0 },
      { id: "d", text: "Disable your security software as requested.", points: 0 },
    ],
    correctOptionId: "b",
    explanation:
      "Unexpected technical-support contacts may be attempts to gain control of your device. Do not grant remote access unless you initiated and verified the support session.",
    redFlags: [
      "Unexpected technical support",
      "Remote-access request",
      "Pressure to act immediately",
    ],
  },

  {
    id: 10,
    title: "The Suspicious Attachment",
    category: "Email Security",
    difficulty: "Medium",
    message:
      "Please review the attached invoice immediately. Enable additional content if prompted, then sign in to view the complete document.",
    evidence: [
      "The attachment is unexpected or its source is unclear.",
      "The message asks you to enable additional content.",
      "The request to sign in may lead to credential theft.",
    ],
    question: "What should you do first?",
    options: [
      { id: "a", text: "Enable all content so the invoice opens correctly.", points: 0 },
      { id: "b", text: "Enter your work or school password into any page that opens.", points: 0 },
      { id: "c", text: "Verify the sender through a trusted channel and follow your organisation's safe attachment procedures.", points: 10 },
      { id: "d", text: "Forward the attachment to your contacts to see if it opens.", points: 0 },
    ],
    correctOptionId: "c",
    explanation:
      "Unexpected attachments can contain harmful content or links to fake sign-in pages. Verify the sender independently and do not enable active content just to view a document.",
    redFlags: [
      "Unexpected attachment",
      "Request to enable additional content",
      "Potential credential-harvesting page",
    ],
  },
];
