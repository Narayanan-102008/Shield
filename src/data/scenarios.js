
export const scenarios = [
  {
    id: "internship-fee-001",
    title: "The Internship Offer",
    category: "Job Scams",
    difficulty: "Easy",
    message:
      "Congratulations! You have been shortlisted for a remote internship. To confirm your position, pay a refundable registration and training fee today. Your offer letter will be issued after payment.",
    evidence: [
      "The recruiter asks for money before providing a formal offer.",
      "The message creates urgency by asking for payment today.",
      "The promised offer letter is withheld until payment is made.",
      "The internship details have not been independently verified."
    ],
    question:
      "What is the safest action to take before proceeding with this internship offer?",
    options: [
      {
        id: "intern-a",
        text: "Pay the refundable fee because the internship may be competitive.",
        points: 0
      },
      {
        id: "intern-b",
        text: "Ask for the recruiter's personal identification and pay after receiving it.",
        points: 2
      },
      {
        id: "intern-c",
        text: "Verify the internship through the organization's official careers channel and refuse suspicious upfront payment requests.",
        points: 10
      },
      {
        id: "intern-d",
        text: "Share the offer with friends and pay if they think it looks genuine.",
        points: 1
      }
    ],
    correctOptionId: "intern-c",
    explanation:
      "A request for an upfront fee combined with urgency and an unverified offer is a warning sign. Independently locate the organization's official website or contact channel, confirm the role with its recruitment team, and do not pay until the opportunity has been verified. Report suspected recruitment fraud through the relevant official channel.",
    redFlags: [
      "Upfront registration or training fee",
      "Pressure to pay immediately",
      "Offer letter withheld until payment",
      "Recruiter and opportunity not independently verified"
    ]
  },
  {
    id: "bank-otp-002",
    title: "The Bank Security Call",
    category: "Banking Scams",
    difficulty: "Easy",
    message:
      "A caller claims to be from your bank's security team. They say unusual activity has been detected and your account will be blocked unless you share the one-time password sent to your phone.",
    evidence: [
      "The caller requests a one-time password.",
      "The caller threatens account blocking to create panic.",
      "The caller's identity has not been independently verified.",
      "A one-time password can authorize sensitive account activity."
    ],
    question:
      "What should you do when someone claiming to be a bank employee asks for your OTP?",
    options: [
      {
        id: "bank-a",
        text: "Share the OTP because the caller knows about a possible security issue.",
        points: 0
      },
      {
        id: "bank-b",
        text: "End the call and contact the bank using the official app, card, or independently verified website.",
        points: 10
      },
      {
        id: "bank-c",
        text: "Share only the first few digits of the OTP to verify the caller.",
        points: 0
      },
      {
        id: "bank-d",
        text: "Ask the caller to send a text message proving they work for the bank, then share it.",
        points: 2
      }
    ],
    correctOptionId: "bank-b",
    explanation:
      "Never disclose an OTP, PIN, password, or banking credentials to an unsolicited caller. End the conversation and independently contact the bank through a trusted official channel. If you have already shared a code or suspect unauthorized activity, contact the bank immediately, secure your account, and report the incident through official channels.",
    redFlags: [
      "Unsolicited call claiming to be from the bank",
      "Request for an OTP or other secret credential",
      "Threat of immediate account blocking",
      "Pressure that discourages independent verification"
    ]
  },
  {
    id: "qr-payment-003",
    title: "The Payment Reversal",
    category: "Payment Scams",
    difficulty: "Medium",
    message:
      "A buyer says they accidentally sent you too much money and asks you to scan a QR code to receive a refund. They insist that the refund must be completed immediately or the transaction will be cancelled.",
    evidence: [
      "The buyer asks you to scan a QR code to receive money.",
      "The buyer claims an overpayment without independently verified transaction evidence.",
      "The request is urgent and discourages careful checking.",
      "A QR code or payment request may initiate a payment from your account."
    ],
    question:
      "How should you handle the alleged overpayment and refund?",
    options: [
      {
        id: "qr-a",
        text: "Scan the QR code because receiving a refund requires confirming the payment.",
        points: 0
      },
      {
        id: "qr-b",
        text: "Enter your UPI PIN if the payment app requests it to complete the refund.",
        points: 0
      },
      {
        id: "qr-c",
        text: "Ignore the request and keep any extra money without checking the transaction.",
        points: 3
      },
      {
        id: "qr-d",
        text: "Check the transaction in your official payment app, never enter a PIN to receive money, and resolve any genuine overpayment through the app or bank's verified process.",
        points: 10
      }
    ],
    correctOptionId: "qr-d",
    explanation:
      "A QR code can initiate a payment rather than receive one. Never enter your UPI PIN simply to receive money or follow a stranger's instructions to approve a payment. Verify the transaction in your own official payment app and handle any genuine overpayment through a verified bank or payment-provider process. Report suspicious payment requests.",
    redFlags: [
      "QR code presented as a way to receive a refund",
      "Unverified claim of an accidental overpayment",
      "Pressure to act immediately",
      "Possible request to authorize an outgoing payment"
    ]
  },
  {
    id: "delivery-fee-004",
    title: "The Unexpected Customs Fee",
    category: "Delivery Scams",
    difficulty: "Medium",
    message:
      "A message claims that a parcel addressed to you is being held because of an unpaid customs fee. It demands a small payment immediately and warns that the parcel will be returned if you do not act.",
    evidence: [
      "The message does not identify a shipment you can independently confirm.",
      "It demands an unexpected fee with a short deadline.",
      "The sender's identity and payment request are unverified.",
      "The message threatens parcel return to encourage a quick decision."
    ],
    question:
      "What is the safest way to check whether the customs fee is genuine?",
    options: [
      {
        id: "delivery-a",
        text: "Pay immediately because a small fee is not worth risking the parcel.",
        points: 0
      },
      {
        id: "delivery-b",
        text: "Reply with your full address and identity documents to confirm the parcel.",
        points: 0
      },
      {
        id: "delivery-c",
        text: "Check the shipment using the courier's independently accessed official tracking channel and verify any fee directly before paying.",
        points: 10
      },
      {
        id: "delivery-d",
        text: "Forward the message to a group chat and pay if several people think it looks legitimate.",
        points: 1
      }
    ],
    correctOptionId: "delivery-c",
    explanation:
      "Scammers may use small fees and delivery deadlines to make fraudulent requests seem harmless. Check whether you are expecting a parcel, then independently open the courier's official website or app and verify the tracking details and any charges. Do not use unverified payment links or disclose sensitive information. Report suspicious messages to the courier through its official reporting process.",
    redFlags: [
      "Unexpected customs or delivery fee",
      "Unverified shipment details",
      "Urgent payment deadline",
      "Threat that the parcel will be returned"
    ]
  },
  {
    id: "tech-support-005",
    title: "The Fake Tech Support Alert",
    category: "Technical Support Scams",
    difficulty: "Hard",
    message:
      "A pop-up claims that your device has a serious security problem. A person claiming to be a support technician asks you to install a remote-access application and reveal a recovery code so they can repair your account.",
    evidence: [
      "The security warning appeared unexpectedly.",
      "The technician's identity has not been independently confirmed.",
      "The request involves remote access to your device.",
      "The technician asks for a recovery code that could grant access to your account."
    ],
    question:
      "What should you do when an unexpected security alert leads to a request for remote access and a recovery code?",
    options: [
      {
        id: "tech-a",
        text: "Install the application and share the recovery code because technical staff need access to fix problems.",
        points: 0
      },
      {
        id: "tech-b",
        text: "Close the suspicious pop-up without calling any number it displays, then contact the device or service provider through an independently verified official channel.",
        points: 10
      },
      {
        id: "tech-c",
        text: "Share the recovery code but remain beside the device to watch what the technician does.",
        points: 0
      },
      {
        id: "tech-d",
        text: "Allow remote access but change your password after the repair is complete.",
        points: 2
      }
    ],
    correctOptionId: "tech-b",
    explanation:
      "Unexpected security pop-ups can be used to frighten people into granting remote access or revealing account recovery information. Do not call numbers shown in suspicious alerts, install requested software, or disclose recovery codes. Close the alert safely and verify the issue through the provider's official support channel. If you already granted access, disconnect the device from the network if appropriate, contact official support from a trusted device, secure affected accounts, and report the incident.",
    redFlags: [
      "Unexpected and alarming security pop-up",
      "Unverified technical support identity",
      "Request to install remote-access software",
      "Request for a recovery code or account secret",
      "Pressure to trust the technician without independent verification"
    ]
  }
];
