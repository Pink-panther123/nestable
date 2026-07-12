'use client';
import { useEffect } from 'react';
const WEB3FORMS_KEY = '8934ee71-1c5c-4898-89ce-d7ef181933be';
const SITE_NAME = 'Nestable';
const hideImg = (e) => { e.currentTarget.style.display = 'none'; };
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
    
    
    <header className="nav"><div className="wrap">
      <a href="#" className="logo">Nest<b>able</b></a>
      <nav className="menu" id="menu"><a href="#product">Buy</a><a href="#a">Rent</a><a href="#b">Sell</a><a href="#listings">Listings</a><a href="#pricing">Pricing</a></nav>
      <div className="nav-r"><a href="#book" className="btn">List a property</a><button className="burger" id="burger">☰</button></div>
    </div></header>
    
    <section className="hero"><div className="wrap"><div className="hero-grid">
      <div>
        <span className="eyebrow">Property listings, simplified</span>
        <h1>Find your next home, <em>faster</em></h1>
        <p>Nestable brings every listing into one calm, searchable place. Filter by what matters, book viewings instantly, and move in sooner.</p>
        <form className="searchbar" data-lead="1"><input name="query" placeholder="Search a city, neighborhood, or ZIP..." required /><button type="submit">Search</button></form>
        <div className="stat-row"><div className="st"><b>12k+</b><span>Verified listings</span></div><div className="st"><b>48</b><span>Metros covered</span></div><div className="st"><b>4.9★</b><span>Mover rating</span></div></div>
      </div>
      <div className="hero-art">
        <div className="main imgph"><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80" alt="Modern home exterior" loading="lazy" onError={hideImg} /></div>
        <div className="badge"><b>$512,000</b><span>Sunset Loft · Downtown</span></div>
      </div>
    </div></div></section>
    
    <section id="product"><div className="wrap">
      <div className="sh reveal"><span className="eyebrow">Why Nestable</span><h2>Property search that does real work</h2><p>Everything you need to browse, book, and move, without the runaround.</p></div>
      <div className="feat reveal">
        <div className="c"><div className="ic">01</div><h3>Smart search</h3><p>Filter by price, beds, commute, schools, and the details that matter to you.</p></div>
        <div className="c"><div className="ic">02</div><h3>Instant viewings</h3><p>Book a tour in two taps and get confirmed on the spot.</p></div>
        <div className="c"><div className="ic">03</div><h3>Real prices</h3><p>Transparent pricing and price history, no surprises at the door.</p></div>
        <div className="c"><div className="ic">04</div><h3>Verified listings</h3><p>Every home checked so you never chase a place that's already gone.</p></div>
        <div className="c"><div className="ic">05</div><h3>Market insights</h3><p>See how a neighborhood is trending before you commit.</p></div>
        <div className="c"><div className="ic">06</div><h3>Buyers &amp; renters</h3><p>One account for browsing, saving, applying, and closing.</p></div>
        <div className="c"><div className="ic">07</div><h3>Trusted agents</h3><p>Connect with vetted local agents when you want a hand.</p></div>
        <div className="c"><div className="ic">08</div><h3>Secure applications</h3><p>Apply and share documents safely, all in one place.</p></div>
      </div>
    </div></section>
    
    <section id="a"><div className="wrap">
      <div className="ed reveal">
        <div className="txt"><span className="eyebrow">For renters</span><h2>Rent without the runaround</h2><p>Search verified rentals, book viewings instantly, and apply online. No endless calls, no ghost listings, no wasted weekends.</p>
          <ul><li>Verified, up-to-date rentals</li><li>Instant viewing bookings</li><li>Online applications</li><li>Saved searches &amp; alerts</li></ul>
          <div className="card-chat"><div className="l"><span className="who">You:</span> Any 2-beds near downtown under $2k?</div><div className="l"><span className="who">Nestable:</span> 6 matches, 2 open today. Book one?</div><div className="tag">✦ Viewing booked · confirmed</div></div>
        </div>
        <div className="art imgph"><img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1000&q=80" alt="Bright apartment interior" loading="lazy" onError={hideImg} /></div>
      </div>
    </div></section>
    
    <section id="b"><div className="wrap">
      <div className="ed rev reveal">
        <div className="txt"><span className="eyebrow">For sellers</span><h2>List once, reach everyone</h2><p>Put your property in front of serious, pre-qualified buyers with professional photos, market pricing guidance, and viewing scheduling built in.</p>
          <ul><li>Professional listing page</li><li>Pricing guidance</li><li>Qualified buyer leads</li><li>Offer management</li></ul>
          <div className="card-chat"><div className="l"><span className="who">Nestable:</span> Your listing is live with 3 saved buyers.</div><div className="l"><span className="who">You:</span> How do viewings work?</div><div className="l"><span className="who">Nestable:</span> They book your calendar. First is Saturday at noon.</div><div className="tag">✦ Listing live · 3 interested buyers</div></div>
        </div>
        <div className="art imgph"><img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&q=80" alt="House exterior with pool" loading="lazy" onError={hideImg} /></div>
      </div>
    </div></section>
    
    <section id="listings"><div className="wrap">
      <div className="sh reveal"><span className="eyebrow">On the market</span><h2>Featured listings</h2></div>
      <div className="listings reveal">
        <div className="lc"><div className="ph imgph"><img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80" alt="The Willow House" loading="lazy" onError={hideImg} /><span className="price">$729,000</span></div><div className="body"><h3>The Willow House</h3><div className="addr">2418 Barton Hills Dr, Austin TX</div><div className="specs"><span><b>4</b> beds</span><span><b>3</b> baths</span><span><b>2,640</b> sqft</span></div></div></div>
        <div className="lc"><div className="ph imgph"><img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" alt="Cedar Creek Estate" loading="lazy" onError={hideImg} /><span className="badge">Featured</span><span className="price">$1,485,000</span></div><div className="body"><h3>Cedar Creek Estate</h3><div className="addr">104 Cedar Creek Ln, Westlake TX</div><div className="specs"><span><b>5</b> beds</span><span><b>4.5</b> baths</span><span><b>4,380</b> sqft</span></div></div></div>
        <div className="lc"><div className="ph imgph"><img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" alt="Sunset Loft" loading="lazy" onError={hideImg} /><span className="price">$512,000</span></div><div className="body"><h3>Sunset Loft</h3><div className="addr">809 W 5th St #1204, Austin TX</div><div className="specs"><span><b>2</b> beds</span><span><b>2</b> baths</span><span><b>1,190</b> sqft</span></div></div></div>
      </div>
    </div></section>
    
    <section><div className="wrap">
      <div className="sh center reveal"><span className="eyebrow">Connected</span><h2>Everything in one place</h2><p>Nestable works with the services that make moving easier.</p></div>
      <div className="tags reveal"><span>MLS</span><span>Zillow feed</span><span>Google Maps</span><span>Stripe</span><span>DocuSign</span><span>Plaid</span><span>Mortgage APIs</span><span>Calendly</span><span>Twilio</span><span>Mailchimp</span><span>QuickBooks</span></div>
    </div></section>
    
    <section id="pricing"><div className="wrap">
      <div className="sh center reveal"><span className="eyebrow">Pricing</span><h2>Simple pricing for buyers and sellers</h2><p>Browsing is always free. Only pay when you list.</p></div>
      <div className="price reveal">
        <div className="plan"><div className="nm">Browse &amp; Rent</div><div className="amt">$0</div><div className="per">free forever</div><ul><li>Unlimited search</li><li>Saved searches &amp; alerts</li><li>Book viewings</li><li>Apply online</li><li>Message agents</li></ul><a href="#book" className="btn ghost">Start searching</a></div>
        <div className="plan hot"><div className="nm">List Your Property</div><div className="amt">$99</div><div className="per">per listing, or 1% at close</div><ul><li>Professional listing page</li><li>Pro photo guidance</li><li>Qualified buyer leads</li><li>Viewing scheduler</li><li>Offer management</li></ul><a href="#book" className="btn">List a property</a></div>
      </div>
    </div></section>
    
    <section><div className="wrap">
      <div className="sh center reveal"><span className="eyebrow">Loved by movers</span><h2>Movers who found home with us</h2></div>
      <div className="tg reveal">
        <div className="tc"><div className="st">★★★★★</div><p>Booked three viewings in one afternoon and signed a lease that week.</p><div className="who"><b>Hannah Miles</b><small>Renter, Austin</small></div></div>
        <div className="tc"><div className="st">★★★★★</div><p>Listed my condo Friday, had two offers by Monday. The leads were real.</p><div className="who"><b>Marcus Reed</b><small>Seller, Denver</small></div></div>
        <div className="tc"><div className="st">★★★★★</div><p>The price history saved me from overpaying. Loved the transparency.</p><div className="who"><b>Sofia Nguyen</b><small>Buyer, Seattle</small></div></div>
        <div className="tc"><div className="st">★★★★★</div><p>Verified listings meant no wasted trips to places already gone.</p><div className="who"><b>Tyler Ross</b><small>Renter, Chicago</small></div></div>
        <div className="tc"><div className="st">★★★★★</div><p>My agent match was perfect. Closed in 30 days.</p><div className="who"><b>Priya Shah</b><small>Buyer, Dallas</small></div></div>
        <div className="tc"><div className="st">★★★★★</div><p>Finally a search that filters by commute time. Genius.</p><div className="who"><b>David Okafor</b><small>Buyer, Atlanta</small></div></div>
      </div>
    </div></section>
    
    <section id="book"><div className="wrap">
      <div className="sh center reveal"><span className="eyebrow">Get started</span><h2>Book a viewing or seller consult</h2><p>Pick a time and we'll confirm your viewing or listing consultation.</p></div>
      <div className="book reveal"><iframe src="https://calendly.com/ndubuisiokolieezinne/30min?hide_gdpr_banner=1" title="Book a time" loading="lazy"></iframe></div>
    </div></section>
    
    <section id="contact"><div className="wrap">
      <div className="sh center reveal"><span className="eyebrow">Contact</span><h2>Get in touch</h2><p>Buying, renting, or selling? Tell us what you need and we'll help.</p></div>
      <form className="formx reveal" data-lead="1">
        <div className="row"><input name="first_name" placeholder="First name *" required /><input name="last_name" placeholder="Last name *" required /></div>
        <input name="email" type="email" placeholder="Email *" required />
        <input name="topic" placeholder="City or property of interest" />
        <textarea name="message" placeholder="How can we help?"></textarea>
        <button type="submit" className="btn">Send message</button>
      </form>
    </div></section>
    
    <section id="faq"><div className="wrap">
      <div className="sh center reveal"><span className="eyebrow">FAQ</span><h2>Your questions, answered</h2></div>
      <div className="faq reveal">
        <details><summary>Is it free to search and book viewings?</summary><div className="a">Yes. Browsing, saving searches, booking viewings, and messaging agents are always free for renters and buyers.</div></details>
        <details><summary>How do you keep listings accurate?</summary><div className="a">Every listing is verified and updated in real time, so you never chase a home that's already taken.</div></details>
        <details><summary>What does it cost to sell?</summary><div className="a">List for a flat $99 per listing, or choose 1% at close. Either way you get a pro listing page and qualified leads.</div></details>
        <details><summary>Do you cover my area?</summary><div className="a">Nestable covers every major metro with homes for sale and rent, and we're expanding constantly.</div></details>
        <details><summary>Are my documents secure?</summary><div className="a">Yes. Applications and contracts are protected with bank-grade encryption.</div></details>
        <details><summary>Can I work with an agent?</summary><div className="a">Absolutely. Connect with a vetted local agent any time, or handle it yourself. Your choice.</div></details>
      </div>
    </div></section>
    
    <section><div className="wrap"><div className="cta reveal">
      <h2>Your next place is<br />one search away</h2>
      <p>Browse verified listings, book viewings instantly, and move in sooner with Nestable.</p>
      <div className="acts"><a href="#book" className="btn">Start searching</a><a href="#contact" className="btn ghost">List a property</a></div>
    </div></div></section>
    
    <footer><div className="wrap">
      <div className="foot">
        <div><a href="#" className="logo">Nest<b>able</b></a><p>A calm, modern property platform to search, view, and list homes for sale and rent, all in one place.</p><div className="soc"><a href="#">𝕏</a><a href="#">◎</a><a href="#">f</a></div></div>
        <div><h4>Explore</h4><a href="#product">Buy</a><a href="#a">Rent</a><a href="#b">Sell</a><a href="#pricing">Pricing</a></div>
        <div><h4>Company</h4><a href="#">About</a><a href="#">Agents</a><a href="#">Blog</a><a href="#contact">Contact</a></div>
        <div><h4>Legal</h4><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Fair Housing</a></div>
      </div>
      <div className="fbtm"><span>© 2026 Nestable. All rights reserved.</span><span>hello@nestable.co</span></div>
    </div></footer>
    
  </>);
}
