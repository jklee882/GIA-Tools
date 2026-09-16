import React, { useState } from "react";

export default function HSBBM() {
  const [fullName, setFullName] = useState<string>("");
  const [promoCode, setPromoCode] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  // Calculate date 2 weeks from today in mm/dd/yy format
  const getExpirationDate = (): string => {
    const date = new Date();
    date.setDate(date.getDate() + 14);

    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2);

    return `${month}/${day}/${year}`;
  };

  const expirationDate = getExpirationDate();

  const emailDraft: string = `Hello ${fullName || "[Name]"},  
I was forwarded a request from our system regarding digital access to the Habits of a Successful Beginner Band Musician conductor's book via code.  
  
A few years back we switched our policy from offering the digital edition of the book free with code access to offering it for sale either physically or digitally. The free code inclusion took place during the early days of the COVID lockdowns, and thus, we provided the digital solution for free.  
 
We will, however, honor what your book says. You will just need to "purchase" the book from our website with a promocode that will make the transaction free.  
 
If you visit our store product page (https://giamusic.com/resource/habits-of-a-successful-beginner-band-musician-conductors-edition-book-g10160), add the "Secure Digital Download" option to your cart, and checkout using promocode ${promoCode || "[Code]"}, you should be able to add the digital version to your account for free. That promo code is good until ${expirationDate}.
 
Please feel free to reach out and let me know if you have any further questions,

Jin Lee
GIA Publications
Technical Assistant`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(emailDraft);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", fontFamily: "sans-serif" }}>
      <h1>HSBBM Email Generator</h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "20px" }}>
        <div>
          <label style={{ display: "block", marginBottom: "4px" }}>Recipient Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="e.g. John Doe"
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "4px" }}>Promo Code</label>
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="e.g. FREEBOOK123"
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
        <h3>Generated Email</h3>
        <button
          onClick={handleCopy}
          style={{
            padding: "8px 16px",
            backgroundColor: copied ? "#2e7d32" : "#1976d2",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {copied ? "Copied!" : "Copy Email"}
        </button>
      </div>

      <pre
        style={{
          backgroundColor: "#f5f5f5",
          padding: "16px",
          borderRadius: "4px",
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
          border: "1px solid #ccc",
          fontSize: "14px",
          lineHeight: "1.5",
        }}
      >
        {emailDraft}
      </pre>
    </div>
  );
}
