'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar as CalendarIcon, Clock, User, Phone, Mail, MapPin, CheckCircle2, ChevronRight, ChevronLeft, ShieldCheck } from 'lucide-react';

const services = [
  { id: 'sweep-inspect', name: 'Standard Sweep & Inspection', duration: '1.5 Hours', price: '$189' },
  { id: 'gas-flue-check', name: 'Gas Flue Safety Sweep', duration: '1 Hour', price: '$149' },
  { id: 'oil-flue-check', name: 'Oil Flue Soot Removal', duration: '1.5 Hours', price: '$179' },
  { id: 'creosote-rotary', name: 'Rotary Creosote Glaze Removal', duration: '2 Hours', price: '$349' },
  { id: 'repair-estimate', name: 'Masonry & Liner Repair Estimate', duration: '45 Mins', price: 'Free' }
];

const timeSlots = [
  '08:30 AM', '10:30 AM', '01:00 PM', '03:00 PM', '05:00 PM'
];

export default function Appointments() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(services[0]);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  // Client info
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    notes: ''
  });

  const [bookingRef, setBookingRef] = useState('');

  // Calendar dates generation (Current Month: July 2026)
  // July 2026 starts on a Wednesday (3). July has 31 days.
  const daysInJuly = 31;
  const startDayOffset = 3; // Wednesday offset

  const daysArray = Array.from({ length: daysInJuly }, (_, i) => i + 1);
  const emptyPrefixes = Array.from({ length: startDayOffset }, (_, i) => null);
  const calendarDays = [...emptyPrefixes, ...daysArray];

  const handleDayClick = (day: number) => {
    // Avoid clicking empty days
    if (day === null) return;
    // Don't book Sundays (Sundays correspond to index % 7 === 4, e.g. July 5, 12, 19, 26)
    const dayOfWeek = (day + startDayOffset - 1) % 7;
    if (dayOfWeek === 0) return; // Sunday
    setSelectedDate(day);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate mock booking ref
    const ref = 'BC-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setStep(4);
  };

  const handleNextStep = () => {
    if (step === 1 && selectedService) setStep(2);
    else if (step === 2 && selectedDate && selectedTime) setStep(3);
  };

  const handlePrevStep = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <div className="appointment-page">
      <div className="container booking-container">
        {/* Step Indicator Header */}
        <div className="booking-progress-header">
          <div className="section-header">
            <span className="section-tag">Direct Scheduling</span>
            <h2>Book Your Service Appointment</h2>
            <p>Schedule your professional inspection or sweeping online in just a few clicks.</p>
          </div>

          <div className="progress-bar-steps">
            <div className={`step-node ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
              <div className="node-number">{step > 1 ? <CheckCircle2 size={16} /> : '1'}</div>
              <span>Select Service</span>
            </div>
            <div className="progress-connector"></div>
            <div className={`step-node ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
              <div className="node-number">{step > 2 ? <CheckCircle2 size={16} /> : '2'}</div>
              <span>Date & Time</span>
            </div>
            <div className="progress-connector"></div>
            <div className={`step-node ${step >= 3 ? 'active' : ''} ${step > 3 ? 'completed' : ''}`}>
              <div className="node-number">3</div>
              <span>Your Details</span>
            </div>
          </div>
        </div>

        {/* STEP 1: Select Service */}
        {step === 1 && (
          <div className="step-content animate-fade-in">
            <div className="services-list-container">
              <h3>Choose a Chimney Service</h3>
              <div className="services-list">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className={`service-option-card ${selectedService.id === service.id ? 'selected' : ''}`}
                    onClick={() => setSelectedService(service)}
                  >
                    <div className="service-main-info">
                      <h4>{service.name}</h4>
                      <span className="service-duration">
                        <Clock size={14} /> {service.duration}
                      </span>
                    </div>
                    <div className="service-price-info">
                      <span className="price-tag">{service.price}</span>
                      <div className="radio-dot"></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="step-actions">
                <button className="btn btn-primary" onClick={handleNextStep}>
                  Continue to Calendar <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Select Date & Time */}
        {step === 2 && (
          <div className="step-content animate-fade-in">
            <div className="calendar-time-grid">
              {/* Custom Mini Calendar */}
              <div className="calendar-card card">
                <div className="calendar-header">
                  <span className="month-year">July 2026</span>
                  <span className="cal-navigation">
                    <ChevronLeft size={18} className="nav-arrow disabled" />
                    <ChevronRight size={18} className="nav-arrow disabled" />
                  </span>
                </div>
                
                <div className="weekdays-row">
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
                
                <div className="days-grid">
                  {calendarDays.map((day, i) => {
                    if (day === null) {
                      return <div key={`empty-${i}`} className="cal-day empty"></div>;
                    }
                    const dayOfWeek = (day + startDayOffset - 1) % 7;
                    const isSunday = dayOfWeek === 0;
                    const isSelected = selectedDate === day;
                    
                    return (
                      <button
                        key={`day-${day}`}
                        disabled={isSunday}
                        onClick={() => handleDayClick(day)}
                        className={`cal-day ${isSunday ? 'sunday' : ''} ${isSelected ? 'selected' : ''}`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
                <div className="calendar-legend">
                  <span className="legend-item"><span className="dot sun-dot"></span> Closed (Sundays)</span>
                </div>
              </div>

              {/* Time Slots */}
              <div className="time-slots-card card">
                <h3>Select Time Slot</h3>
                {selectedDate ? (
                  <p className="selected-date-preview">
                    Slots for <span className="highlight-text">July {selectedDate}, 2026</span>:
                  </p>
                ) : (
                  <p className="select-date-alert">Please select a date on the calendar first.</p>
                )}

                <div className="time-grid">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      disabled={!selectedDate}
                      className={`time-slot-btn ${selectedTime === time ? 'selected' : ''}`}
                      onClick={() => setSelectedTime(time)}
                    >
                      <Clock size={16} />
                      <span>{time}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="step-actions">
              <button className="btn btn-secondary" onClick={handlePrevStep}>
                Back
              </button>
              <button 
                className="btn btn-primary" 
                disabled={!selectedDate || !selectedTime}
                onClick={handleNextStep}
              >
                Enter Contact Info <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Contact & Address details */}
        {step === 3 && (
          <div className="step-content animate-fade-in">
            <div className="contact-details-container card">
              <h3>Service Location & Contact Information</h3>
              <p className="summary-banner">
                You are booking: <span className="highlight-text">{selectedService.name}</span> on <span className="highlight-text">July {selectedDate}, 2026 at {selectedTime}</span>.
              </p>

              <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-group">
                  <label htmlFor="name"><User size={16} /> Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone"><Phone size={16} /> Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      placeholder="(240) 241-3439"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email"><Mail size={16} /> Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="address"><MapPin size={16} /> Service Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleFormChange}
                    placeholder="123 Main St, Clinton, MD 20735"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="notes">Special notes / Chimney Issues</label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleFormChange}
                    placeholder="Provide details (e.g. fireplace smells bad, rain leaking in, gas logs won't stay lit)"
                    rows={4}
                  />
                </div>

                <div className="step-actions form-actions">
                  <button type="button" className="btn btn-secondary" onClick={handlePrevStep}>
                    Back
                  </button>
                  <button type="submit" className="btn btn-primary submit-booking">
                    Confirm Appointment <ShieldCheck size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* STEP 4: Success confirmation screen */}
        {step === 4 && (
          <div className="step-content success-animation animate-fade-in">
            <div className="success-card card glass">
              <div className="success-header-icon">
                <CheckCircle2 size={64} className="checkmark" />
              </div>
              <h2>Appointment Confirmed!</h2>
              <p className="success-sub">Thank you, {formData.name}. Your booking request has been locked in.</p>
              
              <div className="receipt-box">
                <div className="receipt-row">
                  <span className="r-label">Booking Reference</span>
                  <span className="r-value highlight-text font-bold">{bookingRef}</span>
                </div>
                <hr className="receipt-divider" />
                <div className="receipt-row">
                  <span className="r-label">Service</span>
                  <span className="r-value">{selectedService.name}</span>
                </div>
                <div className="receipt-row">
                  <span className="r-label">Scheduled Date</span>
                  <span className="r-value">Wednesday, July {selectedDate}, 2026</span>
                </div>
                <div className="receipt-row">
                  <span className="r-label">Arrival Window</span>
                  <span className="r-value">{selectedTime}</span>
                </div>
                <div className="receipt-row">
                  <span className="r-label">Service Price</span>
                  <span className="r-value font-bold">{selectedService.price}</span>
                </div>
                <hr className="receipt-divider" />
                <div className="receipt-row">
                  <span className="r-label">Address</span>
                  <span className="r-value r-address">{formData.address}</span>
                </div>
              </div>

              <div className="success-actions">
                <Link href="/" className="btn btn-primary">
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .appointment-page {
          background-color: var(--light-bg);
          padding: 80px 0;
          min-height: 80vh;
        }

        .booking-progress-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .progress-bar-steps {
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 600px;
          margin: 40px auto 0;
        }

        .step-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 600;
          width: 100px;
        }

        .node-number {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 2px solid var(--light-border);
          background: var(--light-surface);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: var(--text-muted);
          transition: var(--transition);
        }

        .step-node.active .node-number {
          border-color: var(--primary);
          color: var(--primary);
          background: var(--primary-light);
        }

        .step-node.completed .node-number {
          background: var(--success);
          border-color: var(--success);
          color: #fff;
        }

        .step-node.active span {
          color: var(--text-dark);
        }

        .progress-connector {
          flex-grow: 1;
          height: 2px;
          background: var(--light-border);
          margin-bottom: 24px;
        }

        /* Step 1 */
        .services-list-container {
          max-width: 700px;
          margin: 0 auto;
        }

        .services-list-container h3 {
          margin-bottom: 20px;
          font-size: 1.3rem;
        }

        .services-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 32px;
        }

        .service-option-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--light-surface);
          border: 1px solid var(--light-border);
          border-radius: var(--border-radius);
          padding: 24px;
          cursor: pointer;
          transition: var(--transition);
        }

        .service-option-card:hover {
          border-color: var(--primary);
          transform: translateY(-2px);
        }

        .service-option-card.selected {
          border-color: var(--primary);
          background: var(--primary-light);
        }

        .service-main-info h4 {
          font-size: 1.15rem;
          margin-bottom: 6px;
          color: var(--text-dark);
        }

        .service-duration {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .service-price-info {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .price-tag {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-dark);
        }

        .radio-dot {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 2px solid var(--light-border);
          position: relative;
        }

        .service-option-card.selected .radio-dot {
          border-color: var(--primary);
        }

        .service-option-card.selected .radio-dot::after {
          content: '';
          position: absolute;
          inset: 4px;
          background-color: var(--primary);
          border-radius: 50%;
        }

        .step-actions {
          display: flex;
          justify-content: flex-end;
          gap: 16px;
          margin-top: 32px;
        }

        .form-actions {
          justify-content: space-between;
        }

        /* Step 2 */
        .calendar-time-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 32px;
          max-width: 900px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .calendar-time-grid {
            grid-template-columns: 1fr;
          }
        }

        .calendar-card {
          padding: 32px;
        }

        .calendar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .month-year {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
        }

        .nav-arrow {
          color: var(--text-muted);
        }

        .nav-arrow.disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .weekdays-row {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          text-align: center;
          font-weight: 700;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 12px;
          text-transform: uppercase;
        }

        .days-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 8px;
        }

        .cal-day {
          background: transparent;
          border: none;
          height: 40px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          color: var(--text-dark);
          cursor: pointer;
          transition: var(--transition);
        }

        .cal-day:hover:not(.empty):not(.sunday) {
          background: var(--primary-light);
          color: var(--primary);
        }

        .cal-day.selected {
          background: var(--primary) !important;
          color: #fff !important;
        }

        .cal-day.sunday {
          color: #d1d1d6;
          cursor: not-allowed;
        }

        .calendar-legend {
          margin-top: 24px;
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-right: 6px;
        }

        .sun-dot {
          background: #d1d1d6;
        }

        .time-slots-card {
          padding: 32px;
          display: flex;
          flex-direction: column;
        }

        .time-slots-card h3 {
          margin-bottom: 8px;
        }

        .selected-date-preview {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 24px;
        }

        .highlight-text {
          color: var(--primary);
          font-weight: 700;
        }

        .select-date-alert {
          background: rgba(224, 106, 59, 0.05);
          color: var(--primary);
          padding: 12px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .time-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .time-slot-btn {
          background: var(--light-surface);
          border: 1px solid var(--light-border);
          border-radius: var(--border-radius);
          padding: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-weight: 600;
          color: var(--text-dark);
          cursor: pointer;
          transition: var(--transition);
        }

        .time-slot-btn:hover:not(:disabled) {
          border-color: var(--primary);
          background-color: var(--primary-light);
        }

        .time-slot-btn.selected {
          background: var(--primary) !important;
          color: #fff !important;
          border-color: var(--primary) !important;
        }

        .time-slot-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        /* Step 3 Form */
        .contact-details-container {
          max-width: 650px;
          margin: 0 auto;
        }

        .contact-details-container h3 {
          margin-bottom: 8px;
        }

        .summary-banner {
          background: var(--primary-light);
          padding: 16px 20px;
          border-radius: var(--border-radius);
          font-size: 0.95rem;
          margin-bottom: 32px;
          font-weight: 500;
        }

        .booking-form {
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
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-dark);
        }

        .form-group input, .form-group textarea {
          border: 1px solid var(--light-border);
          border-radius: var(--border-radius);
          padding: 14px 18px;
          outline: none;
          font-size: 0.95rem;
          color: var(--text-dark);
          transition: var(--transition);
          background-color: var(--light-surface);
        }

        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 2px rgba(224, 106, 59, 0.15);
        }

        .booking-form .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        @media (max-width: 600px) {
          .booking-form .form-row {
            grid-template-columns: 1fr;
          }
        }

        .submit-booking {
          padding: 16px 32px;
          font-size: 1rem;
        }

        /* Success Step */
        .success-card {
          max-width: 580px;
          margin: 0 auto;
          text-align: center;
          padding: 50px 40px;
        }

        .success-header-icon {
          color: var(--success);
          display: flex;
          justify-content: center;
          margin-bottom: 24px;
        }

        .success-sub {
          font-size: 1.05rem;
          color: var(--text-muted);
          margin-bottom: 32px;
        }

        .receipt-box {
          background: var(--light-bg);
          border: 1px dashed var(--light-border);
          border-radius: var(--border-radius);
          padding: 24px;
          margin-bottom: 40px;
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

        .r-address {
          max-width: 250px;
        }

        .receipt-divider {
          border: 0;
          border-top: 1px solid var(--light-border);
          margin: 16px 0;
        }
      `}</style>
    </div>
  );
}
