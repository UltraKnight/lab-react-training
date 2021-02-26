import React from 'react';
import IdCard from './idCard/IdCard';
import Greetings from './greetings/Greetings';
import Random from './random/Random';
import BoxColor from './boxColor/BoxColor';
import CreditCard from './creditCard/CreditCard';
import Rating from './rating/Rating';
import DriverCard from './driverCard/DriverCard';
import LikeButton from './likeButton/LikeButton';
import ClickablePicture from './clickablePicture/ClickablePicture';
import Dice from './dice/Dice';
import Carousel from './carousel/Carousel';
import NumbersTable from './numbersTable/NumbersTable';
import FaceBook from './faceBook/FaceBook';
import './App.css';
import SignupPage from './signupPage/SignupPage';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <Greetings lang="de">Ludwig</Greetings>

      <Random min={1} max={6}/>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" />
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222" />

      <Rating>1.42</Rating>
      <Rating>1.57</Rating>
      <Rating>3.27</Rating>
      <Rating>4.44</Rating>
      <Rating>5</Rating>

      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}
      />

      <LikeButton />

      <ClickablePicture
        img='/img/persons/maxence.png'
        imgClicked='/img/persons/maxence-glasses.png'
      />

      <Dice />

      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />

      <NumbersTable limit={12} />
      <FaceBook />
      <SignupPage />
    </div>
  );
}

export default App;