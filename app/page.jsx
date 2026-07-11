'use client';
import { useEffect } from 'react';
const WEB3FORMS_KEY = '8934ee71-1c5c-4898-89ce-d7ef181933be';
const SITE_NAME = 'Nestable';
export default function Page() {
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    const b = document.getElementById('burger'), m = document.getElementById('menu');
    if (b) b.addEventListener('click', () => m.classList.toggle('open'));
    if (m) m.querySelectorAll('a').forEach(a => a.addEventListener('click', () => m.classList.remove('open')));
    document.querySelectorAll('form[data-lead]').forEach(f => f.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = f.querySelector('button'); if (btn) { btn.disabled = true; }
      let ok = false;
      if (WEB3FORMS_KEY && !WEB3FORMS_KEY.startsWith('YOUR_')) {
        try {
          const fd = new FormData(f); fd.append('access_key', WEB3FORMS_KEY);
          fd.append('subject', 'New website lead — ' + SITE_NAME);
          const r = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd });
          ok = (await r.json()).success;
        } catch (err) { ok = false; }
      } else { ok = true; }
      f.innerHTML = '<p style="text-align:center;color:var(--blue);font-weight:600;padding:1rem 0">' + (ok ? '\u2713 Thank you! We received your message and will reply within one business day.' : 'Something went wrong. Please email us directly.') + '</p>';
    }));
  }, []);
  return (<>
    
    
    <header className="nav"><div className="container">
      <a href="#" className="logo"><span className="mk"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-8 9 8M5 10v10h14V10"/></svg></span>Nestable</a>
      <nav className="menu" id="menu"><a href="#product">Buy</a><a href="#a">Rent</a><a href="#b">Sell</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a></nav>
      <div className="nav-r"><a href="#book" className="login">Log in</a><a href="#book" className="btn btn-blue">List a property</a>
      <button className="burger" id="burger">☰</button></div>
    </div></header>
    
    <section className="hero"><div className="container hero-in">
      <span className="badge"><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.9 5.8L20 10l-5.1 2L13 18l-1.9-5.8L6 10l5.1-1.2z"/></svg><b>Property Listings, Simplified</b></span>
      <h1>Find your next<br />home, <em>faster</em></h1>
      <p className="sub">Nestable brings every listing into one clean, searchable place. Filter by what matters, book viewings instantly, and move in sooner.</p>
      <form className="prompt" data-lead="1"><input name="query" placeholder="Search a city, neighborhood, or ZIP..." required /><button type="submit" aria-label="Go"><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M6 17V9a4 4 0 0 1 4-4h4"/></svg></button></form>
      <p className="trust">Thousands of homes for sale and rent across the country</p>
    </div></section>
    
    <section><div className="container">
      <div className="sec-head reveal"><span className="eyebrow">Why Nestable</span><h2>Property search that does real work</h2></div>
      <div className="bento"><div className="bcard wide feat reveal"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg><h3>Smart search</h3><p>Filter by price, beds, commute, schools, and the details that matter to you.</p></div><div className="bcard reveal"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg><h3>Instant viewings</h3><p>Book a tour in two taps and get confirmed on the spot.</p></div><div className="bcard reveal"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20.6 13.4L12 22l-9-9V4h9l8.6 8.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg><h3>Real prices</h3><p>Transparent pricing and price history, no surprises at the door.</p></div><div className="bcard wide reveal"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-8 9 8M5 10v10h14V10"/></svg><h3>Verified listings</h3><p>Every home checked so you never chase a place that&#x27;s already gone.</p></div><div className="bcard reveal"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/></svg><h3>Market insights</h3><p>See how a neighborhood is trending before you commit.</p></div><div className="bcard reveal"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="15" r="5"/><path d="M11.5 11.5L21 2M17 6l3 3M15 8l2 2"/></svg><h3>For renters &amp; buyers</h3><p>One account for browsing, saving, applying, and closing.</p></div><div className="bcard reveal"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg><h3>Trusted agents</h3><p>Connect with vetted local agents when you want a hand.</p></div><div className="bcard reveal"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><h3>Secure applications</h3><p>Apply and share documents safely, all in one place.</p></div></div>
    </div></section>
    
    <section><div className="container"><div className="split">
            <div className="col-copy reveal"><span className="eyebrow">For renters</span><h2 style={{fontSize:'clamp(1.7rem,3.2vw,2.3rem)'}}>Rent without the runaround</h2>
            <p style={{color:'var(--slate)',marginTop:'.8rem'}}>Search verified rentals, book viewings instantly, and apply online. No endless calls, no ghost listings, no wasted weekends.</p>
            <span className="check-lbl">What you get</span><ul className="checks"><li><span className="tk"><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg></span>Verified, up-to-date rentals</li><li><span className="tk"><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg></span>Instant viewing bookings</li><li><span className="tk"><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg></span>Online applications</li><li><span className="tk"><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg></span>Saved searches &amp; alerts</li><li><span className="tk"><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg></span>Direct message the agent</li></ul></div>
            <div className="col-viz reveal"><div className="bubbles"><div className="bub them"><div className="who">Renter</div>Any 2-beds near downtown under $2k?</div><div className="bub us"><div className="who">Nestable</div>6 matches, 2 open for viewing today. Want me to book one?</div><div className="bub tag">Viewing booked · confirmed</div></div></div></div></div></section>
    <section><div className="container"><div className="split rev">
            <div className="col-copy reveal"><span className="eyebrow">For sellers</span><h2 style={{fontSize:'clamp(1.7rem,3.2vw,2.3rem)'}}>List once, reach everyone</h2>
            <p style={{color:'var(--slate)',marginTop:'.8rem'}}>Put your property in front of serious, pre-qualified buyers with professional photos, market pricing guidance, and viewing scheduling built in.</p>
            <span className="check-lbl">Selling made simple</span><ul className="checks"><li><span className="tk"><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg></span>Professional listing page</li><li><span className="tk"><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg></span>Pricing guidance</li><li><span className="tk"><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg></span>Qualified buyer leads</li><li><span className="tk"><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg></span>Viewing scheduler</li><li><span className="tk"><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg></span>Offer management</li></ul></div>
            <div className="col-viz reveal"><div className="bubbles"><div className="bub us"><div className="who">Nestable</div>Your listing is live and already has 3 saved buyers.</div><div className="bub them"><div className="who">Seller</div>How do we handle viewings?</div><div className="bub us"><div className="who">Nestable</div>They book directly on your calendar. First one&#x27;s Saturday at noon.</div><div className="bub tag">Listing live · 3 interested buyers</div></div></div></div></div></section>
    
    <section style={{background:'var(--bg2)'}}><div className="container">
      <div className="sec-head center reveal"><span className="eyebrow">Connected</span><h2>Everything you need in one place</h2><p>Nestable works with the services that make moving easier.</p></div>
      <div className="logos"><div className="lg reveal">MLS</div><div className="lg reveal">Zillow feed</div><div className="lg reveal">Google Maps</div><div className="lg reveal">Stripe</div><div className="lg reveal">DocuSign</div><div className="lg reveal">Plaid</div><div className="lg reveal">Mortgage APIs</div><div className="lg reveal">Calendly</div><div className="lg reveal">Twilio</div><div className="lg reveal">Mailchimp</div><div className="lg reveal">QuickBooks</div><div className="lg reveal">Webhooks</div></div>
    </div></section>
    
    <section><div className="container">
      <div className="sec-head reveal"><span className="eyebrow">Built right</span><h2>A property platform you can trust</h2></div>
      <div className="grid3"><div className="pcell reveal"><span className="ic"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span><h3>Verified listings</h3><p>Every property confirmed active so you never chase a dead lead.</p></div><div className="pcell reveal"><span className="ic"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/></svg></span><h3>Price transparency</h3><p>Full price history and local market data on every home.</p></div><div className="pcell reveal"><span className="ic"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></span><h3>Real-time updates</h3><p>New listings and price drops the moment they happen.</p></div><div className="pcell reveal"><span className="ic"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/></svg></span><h3>Nationwide coverage</h3><p>Homes for sale and rent in every major metro.</p></div><div className="pcell reveal"><span className="ic"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="15" r="5"/><path d="M11.5 11.5L21 2M17 6l3 3M15 8l2 2"/></svg></span><h3>Secure documents</h3><p>Bank-grade encryption for applications and contracts.</p></div><div className="pcell reveal"><span className="ic"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg></span><h3>Vetted agents</h3><p>Optional help from local agents rated by real clients.</p></div></div>
    </div></section>
    
    <section style={{background:'var(--bg2)'}}><div className="container">
      <div className="sec-head center reveal"><span className="eyebrow">Pricing</span><h2>Simple pricing for buyers and sellers</h2><p>Browsing is always free. Only pay when you list.</p></div>
      <div className="price-wrap"><div className="plan reveal"><h3>Browse &amp; Rent</h3>
            <div className="amt">$0</div><div className="per">free forever</div>
            <ul><li><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>Unlimited search</li><li><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>Saved searches &amp; alerts</li><li><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>Book viewings</li><li><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>Apply online</li><li><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>Message agents</li></ul><a href="#book" className="btn btn-blue">Start searching</a></div><div className="plan hot reveal"><h3>List Your Property</h3>
            <div className="amt">$99</div><div className="per">per listing, or 1% at close</div>
            <ul><li><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>Professional listing page</li><li><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>Pro photo guidance</li><li><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>Qualified buyer leads</li><li><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>Viewing scheduler</li><li><svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>Offer management</li></ul><a href="#book" className="btn btn-ghost">List a property</a></div></div>
    </div></section>
    
    <section><div className="container">
      <div className="sec-head center reveal"><span className="eyebrow">Loved by teams</span><h2>Movers who found home with us</h2></div>
      <div className="tgrid"><div className="tcard reveal"><div className="stars">★★★★★</div><p>Booked three viewings in one afternoon and signed a lease that week. So easy.</p><div className="who"><span className="av">HM</span><span><b>Hannah Miles</b><small>Renter, Austin</small></span></div></div><div className="tcard reveal"><div className="stars">★★★★★</div><p>Listed my condo Friday, had two offers by Monday. The buyer leads were real.</p><div className="who"><span className="av">MR</span><span><b>Marcus Reed</b><small>Seller, Denver</small></span></div></div><div className="tcard reveal"><div className="stars">★★★★★</div><p>The price history saved me from overpaying. Loved the transparency.</p><div className="who"><span className="av">SN</span><span><b>Sofia Nguyen</b><small>Buyer, Seattle</small></span></div></div><div className="tcard reveal"><div className="stars">★★★★★</div><p>Verified listings meant no wasted trips to places already gone.</p><div className="who"><span className="av">TR</span><span><b>Tyler Ross</b><small>Renter, Chicago</small></span></div></div><div className="tcard reveal"><div className="stars">★★★★★</div><p>My agent match was perfect. Closed in 30 days.</p><div className="who"><span className="av">PS</span><span><b>Priya Shah</b><small>Buyer, Dallas</small></span></div></div><div className="tcard reveal"><div className="stars">★★★★★</div><p>Finally a search that filters by commute time. Genius.</p><div className="who"><span className="av">DO</span><span><b>David Okafor</b><small>Buyer, Atlanta</small></span></div></div></div>
    </div></section>
    
    <section id="book" style={{background:'var(--bg2)'}}><div className="container">
      <div className="sec-head center reveal"><span className="eyebrow">Get started</span><h2>Book a viewing or a seller consult</h2><p>Pick a time and we&#x27;ll confirm your viewing or listing consultation.</p></div>
      <div className="book reveal"><iframe src="https://calendly.com/ndubuisiokolieezinne/30min?hide_gdpr_banner=1" title="Book a time" loading="lazy"></iframe></div>
      <p className="book-note">Prefer email? <a href="#contact" style={{color:'var(--blue)',fontWeight:'600'}}>Send us a message</a> and we'll reply within one business day.</p>
    </div></section>
    
    <section id="contact"><div className="container">
      <div className="sec-head center reveal"><span className="eyebrow">Contact</span><h2>Get in touch</h2><p>Buying, renting, or selling? Tell us what you need and we&#x27;ll help.</p></div>
      <form className="form-card reveal" data-lead="1">
        <div className="row"><input name="first_name" placeholder="First name *" required /><input name="last_name" placeholder="Last name *" required /></div>
        <input name="email" type="email" placeholder="Work email *" required />
        <input name="topic" placeholder="City or property of interest" />
        <textarea name="message" placeholder="How can we help?"></textarea>
        <button type="submit" className="btn btn-blue">Send message</button>
      </form>
    </div></section>
    
    <section><div className="container">
      <div className="sec-head center reveal"><span className="eyebrow">FAQ</span><h2>Your questions, answered</h2></div>
      <div className="faq reveal"><details><summary>Is it free to search and book viewings?</summary><div className="a">Yes. Browsing, saving searches, booking viewings, and messaging agents are always free for renters and buyers.</div></details><details><summary>How do you keep listings accurate?</summary><div className="a">Every listing is verified and updated in real time, so you never chase a home that&#x27;s already taken.</div></details><details><summary>What does it cost to sell?</summary><div className="a">List for a flat $99 per listing, or choose 1% at close. Either way you get a pro listing page and qualified leads.</div></details><details><summary>Do you cover my area?</summary><div className="a">Nestable covers every major metro with homes for sale and rent, and we&#x27;re expanding constantly.</div></details><details><summary>Are my documents secure?</summary><div className="a">Yes. Applications and contracts are protected with bank-grade encryption.</div></details><details><summary>Can I work with an agent?</summary><div className="a">Absolutely. Connect with a vetted local agent any time, or handle it yourself. Your choice.</div></details></div>
    </div></section>
    
    <section className="cta"><div className="container cta-in reveal">
      <h2>Your next place is one search away</h2><p>Browse verified listings, book viewings instantly, and move in sooner with Nestable.</p>
      <div className="acts"><a href="#book" className="btn btn-blue">Start searching</a><a href="#contact" className="btn btn-ghost">List a property</a></div>
    </div></section>
    
    <footer><div className="container">
      <div className="foot">
        <div><a href="#" className="logo"><span className="mk"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-8 9 8M5 10v10h14V10"/></svg></span>Nestable</a>
        <p className="blurb">A modern property platform to search, view, and list homes for sale and rent, all in one clean place.</p>
        <div className="socials"><a href="#">𝕏</a><a href="#">in</a><a href="#">f</a><a href="#">▶</a></div></div>
        <div><h4>Explore</h4><a href="#product">Buy</a><a href="#a">Rent</a><a href="#b">Sell</a><a href="#pricing">Pricing</a></div><div><h4>Company</h4><a href="#">About</a><a href="#">Agents</a><a href="#">Blog</a><a href="#contact">Contact</a></div><div><h4>Legal</h4><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Fair Housing</a></div>
      </div>
      <div className="foot-bottom"><div className="container" style={{width:'100%',padding:'0'}}><span>© 2026 Nestable. All rights reserved.</span><span>hello@nestable.co</span></div></div>
    </div></footer>
    
  </>);
}
