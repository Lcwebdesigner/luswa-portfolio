from pathlib import Path
p=Path('/mnt/data/portfolio_upgrade/index.html')
s=p.read_text()
s=s.replace('<title>Luswa Clinton | IT Specialist & Web Developer</title>', '<title>Luswa Clinton | ICT Professional, C Programming Educator & Web Developer</title>\n  <meta name="keywords" content="Luswa Clinton, ICT tutor, assistant ICT tutor, C programming, Diploma ICT, web developer, ICT support, Kenya">\n  <meta name="theme-color" content="#07111f">')
s=s.replace('<a href="#home">Home</a><a href="#about">About</a><a href="#skills">Skills</a>\n        <a href="#projects">Projects</a><a href="#services">Services</a><a href="#contact">Contact</a>', '<a href="#home">Home</a><a href="#about">About</a><a href="#skills">Skills</a>\n        <a href="#projects">Projects</a><a href="#teaching">Teaching</a><a href="#notes">Download Notes</a><a href="#teachers-resources">Teachers’ Resources</a><a href="#contact">Contact</a>')
s=s.replace('IT SPECIALIST • WEB DEVELOPER • C TUTOR', 'ICT PROFESSIONAL • C PROGRAMMING • WEB DEVELOPMENT')
s=s.replace('Building practical <span>digital solutions</span> that work.', 'Technology, programming and <span>practical learning</span>.')
s=s.replace("I'm <strong>Luswa Clinton</strong>, an IT professional focused on web development, ICT support and programming education.", "I'm <strong>Luswa Clinton</strong>, a Diploma-qualified ICT professional with practical experience in ICT support, web development and C programming learning activities. I am interested in supporting practical, learner-centred ICT training.")
s=s.replace('href="assets/Mr.%20Luswa%20CV.pdf"', 'href="assets/Clinton_Luswa_CV.pdf"')
s=s.replace('<a class="btn secondary" href="#contact">Let\'s Connect</a>', '<a class="btn secondary" href="#teaching">Explore Teaching</a>')
s=s.replace('<div><strong>C</strong><small>Programming Tutor</small></div>', '<div><strong>ICT</strong><small>Practical Learning</small></div>')
s=s.replace('<p>I am an IT professional with practical experience in computer-related services, web development and programming. I enjoy turning ideas into responsive, user-friendly websites and helping learners understand programming concepts.</p>\n          <p>My toolkit includes <strong>HTML, CSS, JavaScript, WordPress and C programming</strong>. I also have hands-on experience as a Cyber Assistant, providing ICT and digital services to clients.</p>', '<p>I am a Diploma-qualified ICT professional from Eldoret National Polytechnic (KNEC examined, 2023), with practical experience in computer-related services, web development and programming. I enjoy explaining programming concepts and creating practical digital learning resources.</p>\n          <p>My technical toolkit includes <strong>C programming, HTML, CSS, JavaScript, WordPress, computer troubleshooting, software installation and basic networking</strong>. I have approximately three years of experience operating an independent cyber business and assisting customers with digital tasks.</p>\n          <p>I enrolled for TVET Trainer Coursework (ICT Option) at Kenya School of TVET in January 2026. My studies are currently deferred due to financial constraints; I intend to resume when circumstances allow. I do not present this coursework as completed.</p>')
s=s.replace('<div><span>Speciality</span><strong>Web & ICT</strong></div>', '<div><span>Qualification</span><strong>Diploma in ICT</strong></div>')
s=s.replace('<div><span>Email</span><strong>luswaclinton2@gmail.com</strong></div>', '<div><span>Institution</span><strong>Eldoret National Polytechnic</strong></div>')
# Insert education and teaching sections before projects
marker='    <section id="projects" class="section">'
insert='''    <section id="teaching" class="section alt">
      <div class="container">
        <div class="section-heading centered reveal">
          <p class="eyebrow">ICT TRAINING & LEARNING</p>
          <h2>Making programming easier to understand.</h2>
          <p class="section-sub">A practical learning approach built around explanation, demonstration, guided exercises and real programming tasks.</p>
        </div>
        <div class="teaching-grid">
          <article class="teaching-panel reveal">
            <span class="resource-kicker">TEACHING APPROACH</span>
            <h3>Explain. Demonstrate. Practise.</h3>
            <p>I believe learners build confidence when programming theory is connected to practical examples. My approach is to break concepts into manageable steps, demonstrate code, give learners time to practise and encourage problem-solving.</p>
            <ul class="check-list"><li>Beginner-friendly explanations of C programming</li><li>Board demonstrations and code walkthroughs</li><li>Practical exercises and small programming projects</li><li>Revision questions and formative assessment</li></ul>
          </article>
          <article class="teaching-panel reveal">
            <span class="resource-kicker">SUBJECT AREAS</span>
            <h3>ICT and programming topics</h3>
            <div class="topic-pills"><span>C fundamentals</span><span>Variables & data types</span><span>Input & output</span><span>Operators</span><span>Selection</span><span>Loops</span><span>Arrays</span><span>Functions</span><span>Pointers</span><span>Web development</span><span>Computer support</span></div>
            <p class="muted-note">Topics shown reflect areas of interest and practical knowledge. Teaching assignments should match the institution’s approved curriculum and role requirements.</p>
          </article>
        </div>
        <div class="teaching-evidence reveal">
          <div><strong>Practical training evidence</strong><p>Selected photographs from C programming learning and demonstration activities.</p></div>
          <a class="btn primary" href="#projects">View Training Photos</a>
        </div>
      </div>
    </section>

    <section id="notes" class="section">
      <div class="container">
        <div class="section-heading centered reveal">
          <p class="eyebrow">LEARNING LIBRARY</p>
          <h2>Download C programming notes.</h2>
          <p class="section-sub">Study notes and learning materials for Diploma-level ICT learners. More topics will be added as they are prepared.</p>
        </div>
        <div id="notesGrid" class="resource-grid" aria-live="polite"></div>
        <p class="resource-help">To publish a new topic, upload its PDF to Google Drive, set sharing to “Anyone with the link – Viewer”, then paste the share link into <code>resource-links.js</code>.</p>
      </div>
    </section>

    <section id="teachers-resources" class="section alt">
      <div class="container">
        <div class="section-heading centered reveal">
          <p class="eyebrow">FOR TRAINERS & EDUCATORS</p>
          <h2>Teachers’ resources.</h2>
          <p class="section-sub">Planning and assessment materials designed to support structured classroom delivery and practical learning.</p>
        </div>
        <div id="teacherResourcesGrid" class="resource-grid teacher-resource-grid" aria-live="polite"></div>
        <div class="resource-note reveal"><strong>Resource note</strong><p>These are independently prepared teaching resources. Trainers should adapt them to the current approved curriculum, institutional scheme of work, learner level and assessment requirements. They are not represented as official KNEC or TVET CDACC publications.</p></div>
        <p class="resource-help">Add or update teacher-resource Google Drive links in <code>resource-links.js</code>. Keep the Drive files set to Viewer access.</p>
      </div>
    </section>

    <section id="education" class="section">
      <div class="container">
        <div class="section-heading centered reveal"><p class="eyebrow">EDUCATION & PROFESSIONAL DEVELOPMENT</p><h2>Qualifications and ongoing development.</h2></div>
        <div class="timeline">
          <article class="timeline-item reveal"><span class="timeline-date">2023</span><div><h3>Diploma in Information Communication Technology</h3><p>Eldoret National Polytechnic • KNEC examined</p><span class="status-badge complete">Completed</span></div></article>
          <article class="timeline-item reveal"><span class="timeline-date">2026</span><div><h3>TVET Trainer Coursework – ICT Option</h3><p>Kenya School of TVET (KSTVET) • Enrolled January 2026</p><span class="status-badge deferred">Studies deferred</span><p class="muted-note">Deferred due to financial constraints; not yet completed.</p></div></article>
          <article class="timeline-item reveal"><span class="timeline-date">Feb 2026</span><div><h3>Cisco Certificate – Basic Computer Repair and Maintenance</h3><p>Kenya School of TVET (KSTVET)</p><span class="status-badge complete">Certificate obtained</span></div></article>
        </div>
        <div class="cv-callout reveal"><div><h3>Need my full qualifications and experience?</h3><p>Download my current CV for a concise overview of my background.</p></div><a class="btn primary" href="assets/Clinton_Luswa_CV.pdf" download>Download CV ↓</a></div>
      </div>
    </section>

'''
s=s.replace(marker, insert+marker)
s=s.replace('<span>IT Specialist • Web Developer</span>', '<span>ICT Professional • C Programming • Web Development</span>')
s=s.replace('<script src="script.js"></script>', '<script src="resource-links.js"></script>\n  <script src="script.js"></script>')
p.write_text(s)
