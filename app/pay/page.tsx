'use client';

import { useState } from 'react';
import { CreditCard, CheckCircle2, ShieldCheck, Flame, Loader2, ArrowRight, Smartphone } from 'lucide-react';

export default function PayOnline() {
  const [invoiceNo, setInvoiceNo] = useState('');
  const [amount, setAmount] = useState('');
  const [clientName, setClientName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple' | 'google' | null>(null);

  // Card fields
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  // Processing state
  const [payState, setPayState] = useState<'idle' | 'processing' | 'success'>('idle');
  const [txRef, setTxRef] = useState('');

  const handlePaySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !clientName) return;
    
    // Trigger loading spinner
    setPayState('processing');
    
    setTimeout(() => {
      // Complete mock transaction
      const ref = 'TXN-' + Math.floor(10000000 + Math.random() * 90000000);
      setTxRef(ref);
      setPayState('success');
    }, 2500);
  };

  const selectExpressPay = (method: 'apple' | 'google') => {
    if (!amount || !clientName) {
      alert('Please fill out the client name and payment amount first.');
      return;
    }
    setPaymentMethod(method);
    setPayState('processing');
    
    setTimeout(() => {
      const ref = 'TXN-' + Math.floor(10000000 + Math.random() * 90000000);
      setTxRef(ref);
      setPayState('success');
    }, 2500);
  };

  return (
    <div className="pay-page">
      <div className="container pay-container">
        <div className="section-header">
          <span className="section-tag">Secure Portal</span>
          <h2>Quick Pay Invoice</h2>
          <p>Make a secure, instant payment on your chimney services invoice.</p>
        </div>

        {payState === 'idle' && (
          <div className="pay-card card glass animate-fade-in">
            <div className="secure-badge">
              <ShieldCheck size={18} className="shield-icon" />
              <span>256-Bit SSL Encrypted Security</span>
            </div>

            <form onSubmit={handlePaySubmit} className="pay-form">
              {/* Invoice Info */}
              <div className="form-group">
                <label htmlFor="clientName">Client Name (Billing Name)</label>
                <input
                  type="text"
                  id="clientName"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="invoiceNo">Invoice / Reference # (Optional)</label>
                  <input
                    type="text"
                    id="invoiceNo"
                    value={invoiceNo}
                    onChange={(e) => setInvoiceNo(e.target.value)}
                    placeholder="e.g. BC-482910"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="amount">Payment Amount ($ USD)</label>
                  <input
                    type="number"
                    step="0.01"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="189.00"
                    required
                  />
                </div>
              </div>

              <div className="express-payments">
                <h4>Express Click-to-Pay</h4>
                <div className="express-buttons">
                  <button
                    type="button"
                    className="express-btn apple-pay"
                    onClick={() => selectExpressPay('apple')}
                  >
                    <Smartphone size={16} /> Pay with Pay
                  </button>
                  <button
                    type="button"
                    className="express-btn google-pay"
                    onClick={() => selectExpressPay('google')}
                  >
                    <span>G</span>Pay
                  </button>
                </div>
              </div>

              <div className="divider">
                <span>Or Pay with Credit Card</span>
              </div>

              {/* Card Inputs */}
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <div className="card-input-wrapper">
                  <CreditCard size={18} className="input-card-icon" />
                  <input
                    type="text"
                    id="cardNumber"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="4111 2222 3333 4444"
                    maxLength={19}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="expiry">Expiration Date</label>
                  <input
                    type="text"
                    id="expiry"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    placeholder="MM / YY"
                    maxLength={5}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV Code</label>
                  <input
                    type="password"
                    id="cvv"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    placeholder="123"
                    maxLength={4}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary submit-pay-btn">
                Authorize Payment of ${amount ? Number(amount).toFixed(2) : '0.00'} <ArrowRight size={18} />
              </button>
            </form>
          </div>
        )}

        {/* Processing State */}
        {payState === 'processing' && (
          <div className="processing-card card text-center glass animate-fade-in">
            <Loader2 className="spinner" size={60} />
            <h3>Processing Secure Payment...</h3>
            <p className="loading-text">Contacting merchant server. Please do not close this window or refresh the page.</p>
          </div>
        )}

        {/* Success State */}
        {payState === 'success' && (
          <div className="success-receipt card glass animate-fade-in">
            <div className="receipt-brand">
              <Flame className="receipt-logo-icon" />
              <span>Beltway Chimney Receipts</span>
            </div>

            <div className="success-banner">
              <CheckCircle2 size={32} className="checkmark-icon" />
              <h3>Payment Completed Successfully</h3>
            </div>

            <div className="receipt-box">
              <div className="receipt-row">
                <span className="r-label">Transaction Status</span>
                <span className="r-value success-text font-bold">APPROVED</span>
              </div>
              <div className="receipt-row">
                <span className="r-label">Merchant Name</span>
                <span className="r-value">Beltway Chimney</span>
              </div>
              <div className="receipt-row">
                <span className="r-label">Customer Name</span>
                <span className="r-value">{clientName}</span>
              </div>
              <hr className="divider-dashed" />
              <div className="receipt-row">
                <span className="r-label">Invoice Reference #</span>
                <span className="r-value">{invoiceNo || 'N/A'}</span>
              </div>
              <div className="receipt-row">
                <span className="r-label">Payment Date</span>
                <span className="r-value">{new Date().toLocaleDateString()}</span>
              </div>
              <div className="receipt-row">
                <span className="r-label">Transaction Reference #</span>
                <span className="r-value font-bold">{txRef}</span>
              </div>
              <hr className="divider-dashed" />
              <div className="receipt-row font-lg">
                <span className="r-label">Total Amount Paid</span>
                <span className="r-value highlight-text font-bold">${Number(amount).toFixed(2)} USD</span>
              </div>
            </div>

            <p className="receipt-footer-text">
              A copy of this receipt has been emailed to you. If you have any billing disputes or inquiries, contact us at 240-241-3439.
            </p>

            <div className="receipt-actions">
              <button onClick={() => window.print()} className="btn btn-secondary">
                Print Receipt
              </button>
              <button onClick={() => setPayState('idle')} className="btn btn-primary">
                Make Another Payment
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .pay-page {
          background-color: var(--light-bg);
          padding: 85px 0;
          min-height: 80vh;
        }

        .pay-container {
          max-width: 600px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .pay-card {
          padding: 40px;
          border-radius: var(--border-radius-lg);
        }

        .secure-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid var(--success);
          color: var(--success);
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 30px;
          width: 100%;
          justify-content: center;
        }

        .shield-icon {
          color: var(--success);
        }

        .pay-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          text-align: left;
        }

        .form-group label {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-dark);
        }

        .form-group input {
          border: 1px solid var(--light-border);
          border-radius: var(--border-radius);
          padding: 14px 18px;
          outline: none;
          font-size: 0.95rem;
          color: var(--text-dark);
          transition: var(--transition);
          background-color: var(--light-surface);
        }

        .form-group input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 2px rgba(224, 106, 59, 0.15);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .card-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-card-icon {
          position: absolute;
          left: 16px;
          color: var(--text-muted);
        }

        .card-input-wrapper input {
          width: 100%;
          padding-left: 48px;
        }

        /* Express buttons */
        .express-payments {
          text-align: left;
          margin-top: 10px;
        }

        .express-payments h4 {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 12px;
          font-weight: 700;
        }

        .express-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .express-btn {
          height: 48px;
          border-radius: var(--border-radius);
          border: none;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: var(--transition);
        }

        .apple-pay {
          background-color: #000;
          color: #fff;
        }

        .apple-pay:hover {
          background-color: #222;
        }

        .google-pay {
          background-color: #fff;
          border: 1px solid var(--light-border);
          color: #3c4043;
          font-family: 'Roboto', sans-serif;
        }

        .google-pay span {
          color: #4285f4;
          font-weight: 900;
          font-size: 1.25rem;
          margin-right: 2px;
        }

        .google-pay:hover {
          background-color: #f8f9fa;
          border-color: #dadce0;
        }

        .divider {
          display: flex;
          align-items: center;
          text-align: center;
          color: var(--text-muted);
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          margin: 10px 0;
        }

        .divider::before, .divider::after {
          content: '';
          flex: 1;
          border-bottom: 1px solid var(--light-border);
        }

        .divider span {
          padding: 0 12px;
        }

        .submit-pay-btn {
          padding: 16px;
          font-size: 1rem;
          font-weight: 700;
          margin-top: 10px;
        }

        /* Spinner state */
        .processing-card {
          padding: 60px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .spinner {
          color: var(--primary);
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .loading-text {
          color: var(--text-muted);
        }

        /* Receipt Success state */
        .success-receipt {
          padding: 40px;
          border-radius: var(--border-radius-lg);
        }

        .receipt-brand {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--text-dark);
          margin-bottom: 30px;
        }

        .receipt-logo-icon {
          color: var(--primary);
          fill: var(--primary);
          width: 24px;
          height: 24px;
        }

        .success-banner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          text-align: center;
          margin-bottom: 32px;
        }

        .checkmark-icon {
          color: var(--success);
        }

        .receipt-box {
          background: var(--light-bg);
          border: 1px dashed var(--light-border);
          border-radius: var(--border-radius);
          padding: 24px;
          margin-bottom: 32px;
          text-align: left;
        }

        .receipt-row {
          display: flex;
          justify-content: space-between;
          margin: 12px 0;
          font-size: 0.95rem;
        }

        .r-label {
          color: var(--text-muted);
          font-weight: 500;
        }

        .r-value {
          color: var(--text-dark);
          font-weight: 700;
          text-align: right;
        }

        .success-text {
          color: var(--success);
        }

        .highlight-text {
          color: var(--primary);
        }

        .divider-dashed {
          border: 0;
          border-top: 1px dashed var(--light-border);
          margin: 16px 0;
        }

        .font-lg {
          font-size: 1.15rem;
        }

        .receipt-footer-text {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 32px;
          text-align: center;
        }

        .receipt-actions {
          display: flex;
          justify-content: center;
          gap: 16px;
        }

        @media (max-width: 600px) {
          .pay-card, .success-receipt { padding: 32px 20px; }
          .express-buttons { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }   /* P1 — invoice/amount + expiry/CVV stack */
        }

        @media (max-width: 480px) {
          .pay-page { padding: 56px 0; }
          .form-group input { padding: 13px 15px; }
          .receipt-actions { flex-direction: column; }   /* P7 — Print / Make Another stack */
          .receipt-actions .btn { width: 100%; }
        }
      `}</style>
    </div>
  );
}
