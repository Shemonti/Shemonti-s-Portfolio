import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
// import Button from '../components/Button';
import AboutImg from '../assets/images/diu2.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;
const Button = styled.button`
  font-size: 20px;
  padding: 25px 60px;
  border-radius: 10px;
  margin: 10px 0px;
  cursor: pointer;
  color: black;
  .button {
    background-color: ${(props) =>
      props.outline ? 'transperant' : 'var(--gray-1)'};

    display: inline-block;
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Shemonti Barua</span>
              </p>
              <h2 className="about__heading">A Web developer</h2>
              <div className="about__info">
                <PText>
                  I am from chittagong, Bangladesh. A place of beauty and
                  nature. Since my childhood, i love art and design. I always
                  try to design stuff with my unique point of view. I also love
                  to create things that can be usefull to others.
                  <br /> <br />
                  I started coding since I entered into university.Coding is
                  also an art for me. I love it and now I have the opportunity
                  to design along with the coding. I find it really interesting
                  and I enjoyed the process a lot.
                  <br />
                  <br />I am also a Machine Learning enthusiast.I have done a
                  course on Machine Learning. Also have some projects on machine
                  learning.I have Interest in deep learning aslo. I want to go
                  abroad for higher study on machine learning.
                </PText>
              </div>
              <a href="https://drive.google.com/file/d/1wYNk5BgoHI-QRxCygIX_RIYevESiwpYg/view?usp=sharing">
                <Button btnText="Download CV">Download CV</Button>
              </a>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['Holy Cross School, Dhaka']}
              />
              <AboutInfoItem
                title="Collage"
                items={['Holy Cross College ,Dhaka']}
              />
              <AboutInfoItem
                title="Varsity"
                items={['Chittagong University of Engineering and Technology']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'Express', 'PHP']}
              />
              <AboutInfoItem
                title="Design"
                items={['Photoshop', 'After Effects']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="Jun 2021 - Oct 2021"
                items={['React Developer Interns at Mechanic koi ']}
              />
              <AboutInfoItem
                title="Mar 2022 - Present"
                items={[
                  'Global Business Relationship Manager(Internship) at TESCOM Business Solutions  ',
                ]}
              />
              {/* <AboutInfoItem
                title="2016-"
                items={['Freelance web Developer']}
              /> */}
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
