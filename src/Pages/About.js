// src/Pages/About.js
import '../Styles/About.css';

const About = () => {
const teamMembers = [
    {
      id: 1,
      name: "أنطونيو الحاج",
      nameEn: "Antonio El Hajj",
      position: "الطاهي التنفيذي",
      positionEn: "Executive Chef",
      image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "تدرب في مطاعم إيطاليا وإسبانيا مع أكثر من 15 عاماً من الخبرة في المطبخ الإيطالي الأصيل",
      bioEn: "Trained in Italy and Spain with over 15 years of experience in authentic Italian cuisine"
    },
    {
      id: 2,
      name: "لارا شديد",
      nameEn: "Lara Chdid",
      position: "شيف الحلويات",
      positionEn: "Pastry Chef",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "متخصصة في الحلويات الإيطالية التقليدية مع لمسة لبنانية مميزة",
      bioEn: "Specializing in traditional Italian desserts with a unique Lebanese touch"
    },
    {
      id: 3,
      name: "مارك ضومط",
      nameEn: "Marc Doumit",
      position: "خبير النبيذ",
      positionEn: "Sommelier",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "يختار أفضل أنواع النبيذ من كروم إيطاليا ولبنان لتكملة تجربتكم الغذائية",
      bioEn: "Curating the finest wines from Italian and Lebanese vineyards to complement your dining experience"
    }
  ];
  const features = [
    {
      icon: "🍝",
      title: "مكونات طازجة من السوق المحلي",
      titleEn: "Fresh Ingredients from Local Markets",
      description: "نشتري أفضل المكونات مباشرة من أسواق بيروت المحلية والمزارع العضوية في لبنان"
    },
    {
      icon: "👨‍🍳",
      title: "طهاة من لبنان وإيطاليا",
      titleEn: "Chefs from Lebanon & Italy",
      description: "فريقنا الطهوي يجمع بين الخبرة الإيطالية الأصيلة واللمسة اللبنانية المميزة"
    },
    {
      icon: "🍷",
      title: "نبيذ من لبنان وإيطاليا",
      titleEn: "Wines from Lebanon & Italy",
      description: "قائمة نبيذ مختارة بعناية تضم أفضل منتجات كروم لبنان وإيطاليا"
    },
    {
      icon: "💚",
      title: "وصفات عائلية أصلية",
      titleEn: "Authentic Family Recipes",
      description: "أطباق تقليدية تم نقلها عبر أجيال من العائلات الإيطالية واللبنانية"
    }
  ];

  const milestones = [
    { year: "2015", event: "افتتاح المطعم في الحمرا", eventEn: "Restaurant opening in Hamra" },
    { year: "2017", event: "أفضل مطعم إيطالي في بيروت", eventEn: "Best Italian Restaurant in Beirut" },
    { year: "2019", event: "توسعة المكان وإضافة الطابق الثاني", eventEn: "Expansion and second floor addition" },
    { year: "2022", event: "جائزة التميز في الخدمة", eventEn: "Service Excellence Award" },
    { year: "2024", event: "أفضل تجربة طعام إيطالي في لبنان", eventEn: "Best Italian Dining Experience in Lebanon" }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>قصتنا في الحمرا</h1>
          <h2>Our Story in Hamra</h2>
          <p>من قلب بيروت... نقدم لكم أطيب المأكولات الإيطالية</p>
          <p>From the heart of Beirut... we bring you the finest Italian cuisine</p>
        </div>
      </section>

      <div className="about-container">
        {/* Story Section */}
        <section className="story-section">
          <div className="story-content">
            <div className="story-text">
              <h2>منذ 2015 في الحمرا</h2>
              <h3>Since 2015 in Hamra</h3>
              <p>
                بدأت رحلتنا في شارع الحمرا، الشارع الأكثر حيوية في بيروت. من خلال حبنا للطعام الإيطالي الأصيل 
                والثقافة اللبنانية الغنية، قررنا إنشاء مكان يجمع بين أفضل ما في العالمين.
              </p>
              <p>
                Our journey began on Hamra Street, Beirut's most vibrant avenue. With our love for 
                authentic Italian food and rich Lebanese culture, we decided to create a place that 
                combines the best of both worlds.
              </p>
              <p>
                اليوم، بعد nearly a decade، أصبح غوستو إيتاليانو وجهة محبوبة لكل من السكان المحليين 
                والزوار الدوليين الذين يبحثون عن تجربة طعام إيطالية حقيقية في قلب بيروت.
              </p>
              <p>
                Today, after nearly a decade, Gusto Italiano has become a beloved destination for 
                both local residents and international visitors seeking an authentic Italian dining 
                experience in the heart of Beirut.
              </p>

              {/* Milestones */}
              <div className="milestones">
                <h4>محطات مهمة في رحلتنا</h4>
                <h5>Key Milestones in Our Journey</h5>
                <div className="milestone-timeline">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="milestone-item">
                      <div className="milestone-year">{milestone.year}</div>
                      <div className="milestone-content">
                        <p className="arabic">{milestone.event}</p>
                        <p className="english">{milestone.eventEn}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Hamra Street Beirut" 
              />
              <div className="image-caption">
                <p>موقعنا في شارع الحمرا، بيروت</p>
                <p>Our location on Hamra Street, Beirut</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Hamra Section */}
        <section className="location-section">
          <div className="location-content">
            <div className="location-image">
              <img 
                src="https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Vibrant Hamra Street" 
              />
            </div>
            <div className="location-text">
              <h2>لماذا اخترنا الحمرا؟</h2>
              <h3>Why We Chose Hamra?</h3>
              <p>
                الحمرا ليست مجرد مكان - إنها روح بيروت. في هذا الشارع التاريخي، حيث تلتقي الثقافات 
                وتتعدد اللغات، وجدنا المنزل المثالي لمطعمنا.
              </p>
              <p>
                Hamra is not just a location - it's the soul of Beirut. In this historic street, 
                where cultures meet and languages multiply, we found the perfect home for our restaurant.
              </p>
              <div className="location-features">
                <div className="location-feature">
                  <span className="feature-icon">🎓</span>
                  <span>قرب الجامعة الأمريكية</span>
                  <span className="english-text">Near American University of Beirut</span>
                </div>
                <div className="location-feature">
                  <span className="feature-icon">🎭</span>
                  <span>حي ثقافي وفني</span>
                  <span className="english-text">Cultural & Artistic District</span>
                </div>
                <div className="location-feature">
                  <span className="feature-icon">🌍</span>
                  <span>مجتمع دولي متنوع</span>
                  <span className="english-text">Diverse International Community</span>
                </div>
                <div className="location-feature">
                  <span className="feature-icon">🚶</span>
                  <span>موقع مميز سيراً على الأقدام</span>
                  <span className="english-text">Prime Walkable Location</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <h2>ما يميزنا</h2>
          <h3>What Makes Us Special</h3>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <h5>{feature.titleEn}</h5>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <div className="team-header">
            <h2>فريقنا</h2>
            <h3>Meet Our Team</h3>
            <p>الوجوه اللبنانية والإيطالية التي تصنع تجربتكم الفريدة</p>
            <p>The Lebanese and Italian faces behind your unique experience</p>
          </div>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div key={member.id} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h4>{member.name}</h4>
                  <h5>{member.nameEn}</h5>
                  <p className="position">{member.position}</p>
                  <p className="position-en">{member.positionEn}</p>
                  <p className="bio">{member.bio}</p>
                  <p className="bio-en">{member.bioEn}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lebanese-Italian Fusion Section */}
        <section className="fusion-section">
          <div className="fusion-content">
            <div className="fusion-text">
              <h2>اللمسة اللبنانية في المطبخ الإيطالي</h2>
              <h3>Lebanese Touch in Italian Cuisine</h3>
              <p>
                نحن نؤمن بأن الطعام يجمع الناس. من خلال دمج الدفء اللبناني مع الأناقة الإيطالية، 
                نخلق تجربة طعام فريدة تروي قصة حب بين ثقافتين غنيتين.
              </p>
              <p>
                We believe food brings people together. By blending Lebanese warmth with Italian 
                elegance, we create a unique dining experience that tells a love story between two rich cultures.
              </p>
              <div className="fusion-highlights">
                <div className="fusion-item">
                  <strong>زيت زيتون لبناني:</strong> نستخدم زيت الزيتون البكر الممتاز من بساتين لبنان
                </div>
                <div className="fusion-item">
                  <strong>أعشاب طازجة:</strong> نبتاع أعشابنا الطازجة من مزارع الجبل اللبناني
                </div>
                <div className="fusion-item">
                  <strong>ضيافة لبنانية:</strong> نرحب بكم كما نرحب بأعز أصدقائنا في منازلنا
                </div>
              </div>
            </div>
            <div className="fusion-image">
              <img 
                src="https://images.unsplash.com/photo-1551248429-40975aa4de74?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Lebanese Italian Fusion Cuisine" 
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <div className="cta-content">
            <h2>زورونا في الحمرا</h2>
            <h3>Visit Us in Hamra</h3>
            <p>تعالوا لتجربوا قصة حب بين بيروت وإيطاليا</p>
            <p>Come experience a love story between Beirut and Italy</p>
            <div className="cta-buttons">
              <button className="btn btn-primary" onClick={() => window.location.href = '/reservations'}>
                احجز طاولتك / Book Your Table
              </button>
              <button className="btn btn-secondary" onClick={() => window.location.href = '/contact'}>
                تواصل معنا / Contact Us
              </button>
            </div>
            <div className="cta-address">
              <p>📍 شارع الحمرا، بيروت، لبنان</p>
              <p>📍 Hamra Street, Beirut, Lebanon</p>
              <p>📞 +961 1 123 456</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;