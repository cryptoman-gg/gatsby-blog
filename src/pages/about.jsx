import React from 'react';
import Layout from '../layout';
import papan01 from '../../static/Konfest.png';
import SEO from '../components/SEO';
import './about.scss';

const About = () => {
  return (
    <Layout>
      <SEO title="About" path="/about" />
      <article className="about">
        <img src={papan01} className="user-avatar" alt="papan01" />
        <section className="about-context">
          <div>
            <h3>タクちゃん</h3>
            <p className="time">2021-08-12</p>
            <p>
              東京大学を卒業し、仮想通貨投資をはじめ1年で億り人を達成。<a href="https://h.accesstrade.net/sp/cc?rk=0100nerr00lj0h">コインチェック</a>
　　　　　　　　で投資を開始し、1か月後に<a href="https://www.binance.com/ja/register?ref=WSWDIJ94">バイナンス</a>へ移行し原資を蓄える。バイナンスからすぐに魔界デビュー
　　　　　　　　moonrat,GMR,NFTartなどの100倍銘柄をうまくつかみ億り人を達成
            </p>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default About;
