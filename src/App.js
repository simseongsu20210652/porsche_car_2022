function Car({ name, picture }) {
  return (
    <div>
    <h2>I like porsche {name} </h2>
    <img src={picture} alt={name} />
    </div>
  );
}

const carILike = [
  {
    name: '718',
    image: 'https://nav.porsche.com/00BC524/frontshot-assets/1920/718.jpg',
  },
  {
    name: '718 Boxster in my dream car',
    image: 'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjJu5PcI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO3jZ60KZA5WTQSGgfNkSZ0DyCIhT89oiiikIvXDrxG668uzFkGk67giFCWh0RAoagTVkv10imE4qTDmL3Ui1ccwABGwqZ8H4RUSkNNRAY6nL2lFXKdwHqkEq81Otw5kNC5JrnZ6WETkepNVuhmxS1uKvT9d',
  },
  {
    name: '911',
    image: 'https://nav.porsche.com/00BC524/frontshot-assets/1920/911.jpg',
  },
  {
    name: '911 Carrera S Coupe in my dream car',
    image: 'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjJu5PcI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO8xV60KkzFWTQe3eaifY3O1BDPiT89oChikIvRtBCr45sZou35ESv6aIrY4WuT2P3a678nw1d94qTrtf3Ui66KwAkHp2KHRMihNyDxMCK%25OnQyEMakQjirJR',
  },
  {
    name: 'Taycan',
    image: 'https://nav.porsche.com/00BC524/frontshot-assets/1920/taycan.jpg',
  },
  {
    name: 'Taycan Turbo S in my dream car',
    image: 'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjJu5PcI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO3vU60KZOxWTQSGgfNkST0DyIM5T89NzqikIUFDrxMAO8uzNqgk6paV1maolzX2g8PxpjnwibcBl9pbEzMRo',
  },
  {
    name: 'Panamera',
    image: 'https://nav.porsche.com/00BC524/frontshot-assets/1920/panamera.jpg',
  },
  {
    name: 'Panamera GTS in my dream car',
    image: 'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjJu5PcI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9V7KM82PhQ5kxbgfNC480DyoA%25T89oPFikIvRdBCr4NzZou3QFSv6Cb5Y4WuOhP3a6isnw1WhkEeqzp3Ui6cSwABWzJelZa3pRHocQdfcmNZ09IWjmuixJLDIGNqoDzZ6Km',
  },
  {
    name: 'Macan',
    image: 'https://nav.porsche.com/00BC524/frontshot-assets/1920/macan.jpg',
  },
  {
    name: 'But I dont like Macan',
    image: 'https://cphoto.asiae.co.kr/listimglink/6/2019092010143173842_1568942071.png',
  },
  {
    name: 'Cayenne',
    image: 'https://nav.porsche.com/00BC524/frontshot-assets/1920/cayenne.jpg'
  },
  {
    name: 'Cayenne Coupe in my dream car',
    image: 'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjJu5PcI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9ko60KkzFWTQetmaifRwN1BDPsOqZ8PUXUSknXJAYCEfulPoLQtHnvGkQ2E48lP3a6sDnw1WBJEeqagCLRUMowAB65belZatFRHS1wKV2vdftDdbySTIrdbrCBzpG8rFyUv87SWQb',
  }
];
function App() {
  return (
  <div>
    {carILike.map(dish => 
    <Car key={dish.name} name={dish.name} picture={dish.image}  />
    )}
    </div>
  );
}
export default App;
