// components/Pricing.js
import React, { useState } from 'react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Basic',
      description: 'For individual practitioners and small firms',
      monthlyPrice: '₹2,999',
      yearlyPrice: '₹29,999',
      features: [
        '100 document analyses per month',
        'Basic legal research',
        'Email support',
        '5 user accounts'
      ]
    },
    {
      name: 'Professional',
      description: 'For medium-sized law firms',
      monthlyPrice: '₹5,999',
      yearlyPrice: '₹59,999',
      features: [
        'Unlimited document analyses',
        'Advanced legal research',
        'Priority support',
        '20 user accounts',
        'API access'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      description: 'For large firms and corporations',
      monthlyPrice: '₹9,999',
      yearlyPrice: '₹99,999',
      features: [
        'Unlimited everything',
        'AI-powered predictions',
        '24/7 dedicated support',
        'Unlimited user accounts',
        'White-label options',
        'Custom integrations'
      ]
    }
  ];

  return (
    <section id="pricing" className="section">
      <div className="container">
        <h2 className="section-title">Simple, Transparent Pricing</h2>
        <p className="section-subtitle">
          Choose the plan that works best for your practice. All plans include full access to our AI legal research platform.
        </p>
        
        <div className="billing-toggle">
          <span className={billingCycle === 'monthly' ? 'active' : ''} onClick={() => setBillingCycle('monthly')}>Monthly</span>
          <div className="toggle-switch" onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}>
            <div className={`switch ${billingCycle === 'yearly' ? 'yearly' : ''}`}></div>
          </div>
          <span className={billingCycle === 'yearly' ? 'active' : ''} onClick={() => setBillingCycle('yearly')}>Yearly (Save 15%)</span>
        </div>
        
        <div className="pricing-plans">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}>
              {plan.highlighted && <div className="popular-badge">Most Popular</div>}
              <h3>{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              <div className="price">
                {billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                <span>/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
              </div>
              <ul className="features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className={`btn ${plan.highlighted ? 'btn-primary' : 'btn-outline'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
        
        <div className="custom-plan">
          <h3>Need a custom plan?</h3>
          <p>Contact us for enterprise solutions with custom features and volume pricing.</p>
          <button className="btn btn-outline">Contact Sales</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;