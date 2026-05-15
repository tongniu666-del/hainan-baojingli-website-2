
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

const A = '/assets/'

function Header({ setPage }) {
  return (
    <header className="header">
      <div className="brand" onClick={() => setPage('home')}>
        <div className="brand-cn">海南宝晶利科技有限公司</div>
        <div className="brand-en">HAINAN BAOJINGLI TECHNOLOGY CO., LTD.</div>
      </div>
      <nav>
        <button onClick={() => setPage('home')}>首页</button>
        <a href="#about">关于我们</a>
        <a href="#products">产品/服务</a>
        <a href="#chairman">董事长致辞</a>
        <a href="#contact">联系我们</a>
      </nav>
    </header>
  )
}

function Home({ setPage }) {
  return (
    <>
      <Header setPage={setPage} />

      <section className="hero">
        <div className="hero-mask"></div>
        <div className="hero-content">
          <p className="eyebrow">International Trading & Japanese Food Partnership</p>
          <h1>Bridging Global Trade</h1>
          <p className="hero-text">
            海南宝晶利科技有限公司专注于国际大宗商品贸易及日本高端调味品品牌合作，
            致力于构建连接中国、日本与全球市场的高品质贸易平台。
          </p>
        </div>
      </section>

      <section id="about" className="section beige">
        <div className="two-col">
          <div>
            <p className="eyebrow dark">About Us</p>
            <h2>Global Trading<br />with Trust & Precision</h2>
            <p>
              海南宝晶利科技有限公司是一家立足国际市场的综合贸易企业，主营乙二醇（MEG）、
              精对苯二甲酸（PTA）等大宗化工商品贸易。
            </p>
            <p>
              同时，公司拥有日本知名调味品品牌的中国市场独家授权，持续推动高品质日本食品进入中国市场。
            </p>
            <p>
              我们坚持日式企业精神中的“匠心、诚信、长期主义”，以稳定供应链与国际化合作能力，为客户创造长期价值。
            </p>
          </div>
          <img className="round-img" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop" alt="Trade" />
        </div>
      </section>

      <section id="products" className="section white">
        <div className="center">
          <p className="eyebrow dark">Products & Services</p>
          <h2>Main Business Areas</h2>
        </div>

        <div className="cards two">
          <div className="card">
            <img className="card-img" src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop" alt="Chemical storage tanks" />
            <div className="card-body">
              <h3>大宗化工贸易</h3>
              <p>乙二醇（MEG）</p>
              <p>精对苯二甲酸（PTA）</p>
              <p>国际供应链合作</p>
              <p>亚洲市场贸易服务</p>
            </div>
          </div>

          <div className="card">
            <img className="card-img" src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1200&auto=format&fit=crop" alt="Japanese food" />
            <div className="card-body">
              <h3>日本调味品品牌授权</h3>

              <button className="brand-card" onClick={() => setPage('nibishi')}>
                <img src={A + 'nibishi-logo.png'} alt="Nibishi Logo" />
                <div>
                  <strong>ニビシ醤油株式会社</strong>
                  <span>1919年创立于日本九州福冈，点击查看品牌与产品详情</span>
                </div>
              </button>

              <button className="brand-card" onClick={() => setPage('kaneyoshi')}>
                <img src={A + 'kaneyoshi-logo.webp'} alt="Kaneyoshi Logo" />
                <div>
                  <strong>金芳酱油酿造元</strong>
                  <span>日本百年酿造品牌，点击查看品牌与产品详情</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="chairman" className="section beige">
        <div className="two-col">
          <img className="portrait" src={A + 'chairman.jpg'} alt="董事长赵力宾" />
          <div>
            <p className="eyebrow dark">Chairman Message</p>
            <h2>Building Long-Term<br />International Partnerships</h2>
            <p>“贸易，不仅是商品的流通，更是文化、信任与价值的传递。”</p>
            <p>
              多年来，我们始终深耕国际贸易领域，一方面专注于乙二醇（MEG）、精对苯二甲酸（PTA）等大宗商品贸易业务，
              以专业、高效、稳健的供应链服务连接全球市场；另一方面，我们也不断探索东方饮食文化中蕴含的匠心精神与长期价值。
            </p>
            <p>
              在食品进出口领域，我们有幸获得ニビシ与金芳的独家授权合作。跨越百年传承的，不只是酿造工艺，
              更是一种对于时间、自然与品质的敬畏。
            </p>
            <p>
              日本传统酱油文化强调“四时酿造、天然熟成、匠人坚守”，每一滴酱油背后，都承载着世代传承的风味记忆与东方饮食哲学。
            </p>
            <p>
              未来，我们将继续以开放的国际化视野，连接产业与市场，融合商业与文化，在稳健发展的同时，
              持续探索东方饮食文化在全球市场中的更多可能。
            </p>
            <div className="signature">董事长 赵力宾</div>
          </div>
        </div>
      </section>

      <section id="contact" className="section white">
        <div className="two-col">
          <div>
            <p className="eyebrow dark">Contact Us</p>
            <h2>Get in Touch</h2>
            <p>欢迎全球贸易伙伴、日本品牌合作方及渠道客户与我们建立长期合作。</p>
            <p><strong>Company</strong><br />海南宝晶利科技有限公司</p>
            <p><strong>Email</strong><br />info@company.com</p>
            <p><strong>Address</strong><br />Hainan, China</p>
          </div>

          <form className="form">
            <input placeholder="Your Name" />
            <input placeholder="Your Email" />
            <textarea rows="6" placeholder="Your Message"></textarea>
            <button type="button">Send Message</button>
          </form>
        </div>
      </section>

      <footer>© 2026 HAINAN BAOJINGLI TECHNOLOGY CO., LTD. All Rights Reserved.</footer>
    </>
  )
}

function Nibishi({ setPage }) {
  return (
    <div>
      <SubHeader title="ニビシ醤油株式会社" subtitle="EXCLUSIVE DISTRIBUTION BRAND" setPage={setPage} />
      <main className="section beige">
        <div className="two-col">
          <div>
            <img className="logo-large" src={A + 'nibishi-logo.png'} alt="Nibishi Logo" />
            <h2>伝統を、日々の食卓へ。</h2>
            <p>
              ニビシ酱油于1919年在日本九州福冈创立，是日本百年酱油企业之一。
              品牌始终坚持九州、福冈地区传统风味的传承，并荣获国际食品安全标准“FSSC22000”认证。
            </p>
            <p>
              海南宝晶利科技有限公司作为其授权合作方，致力于将具有日本传统酿造文化与稳定品质的调味产品引入中国市场，
              为家庭餐桌、餐饮渠道及食品行业客户提供更丰富、更纯正的日式风味体验。
            </p>
          </div>
          <div className="product-feature"><img src={A + 'nibishi-200ml.jpg'} alt="Nibishi Soy Sauce" /></div>
        </div>

        <ProductGrid items={[
          ['nibishi-200ml.jpg', '200ml Premium Soy Sauce'],
          ['nibishi-1l.jpg', '1L Traditional Soy Sauce'],
          ['nibishi-low-salt.jpg', 'Low Sodium Soy Sauce']
        ]} />
      </main>
    </div>
  )
}

function Kaneyoshi({ setPage }) {
  return (
    <div>
      <SubHeader title="金芳酱油酿造元" subtitle="JAPANESE TRADITIONAL BREWING BRAND" setPage={setPage} />
      <main className="section beige">
        <div className="two-col">
          <div>
            <img className="logo-wide" src={A + 'kaneyoshi-logo.webp'} alt="Kaneyoshi Logo" />
            <h2>百年酿造，东方风味。</h2>
            <p>
              金芳酱油设立于日本大正后期，于日本九州福冈创立，是日本百年酱油企业之一。
              产品符合日本农业标准（JAS）认证及HACCP标准，坚持采用纯天然酿造工艺。
            </p>
            <p>
              用于制作酱油的曲霉在盐水中缓慢发酵，并经过长达两年的自然熟成。
              漫长的陈酿过程，使酱油逐渐形成天然鲜味与浓郁香气。
            </p>
            <p>
              随着时间推移，酱油的风味会受到四季温度、空气与环境变化的影响，
              从而呈现更加复杂且醇厚的层次感。
            </p>
          </div>
          <div className="product-feature"><img src={A + 'kaneyoshi-traditional.jpg'} alt="Kaneyoshi Products" /></div>
        </div>

        <section className="video-placeholder">
          <p className="eyebrow dark">Brand Video</p>
          <h2>金芳酱油产品宣传视频</h2>
          <div className="placeholder-box">
            宣传视频区域已预留。为避免文件过大影响部署，当前版本暂不包含视频文件。
            后续可将视频上传至腾讯视频、优酷、YouTube 或企业服务器后嵌入。
          </div>
        </section>

        <ProductGrid items={[
          ['kaneyoshi-premium.webp', 'Kaneyoshi Premium Series'],
          ['kaneyoshi-traditional.jpg', 'Traditional Soy Sauce Series'],
          ['kaneyoshi-akatsuki.webp', 'Akatsuki Premium Series']
        ]} />
      </main>
    </div>
  )
}

function SubHeader({ title, subtitle, setPage }) {
  return (
    <header className="sub-header">
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <button onClick={() => setPage('home')}>返回官网首页</button>
    </header>
  )
}

function ProductGrid({ items }) {
  return (
    <section className="product-grid">
      <h2>产品展示</h2>
      <div className="cards three">
        {items.map(([img, title]) => (
          <div className="product" key={img}>
            <img src={A + img} alt={title} />
            <p>{title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function App() {
  const [page, setPage] = useState('home')
  if (page === 'nibishi') return <Nibishi setPage={setPage} />
  if (page === 'kaneyoshi') return <Kaneyoshi setPage={setPage} />
  return <Home setPage={setPage} />
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
