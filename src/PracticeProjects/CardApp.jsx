import Card from './Card.jsx'

function CardApp() {
  const fruits = [{name:'apple', calories: 56},
                    {name:'pineapple',calories: 52},
                    {name:'orange',calories: 45},
                    {name:'watermelon',calories: 67},
                    {name:'strawberry',calories: 78}
                ];
  const foods = [{name:'rice', calories: 43},
                    {name:'pizza',calories: 123},
                    {name:'shawarma',calories: 23},
                    {name:'beans',calories: 456},
                    {name:'spaghetti',calories: 98}
                ];
  return(
    <div className="grid md:grid-cols-4">
      <Card title="First Card" description="This is the description for the first class using props" isValid={true}/>
      <Card title="Second Card" description="This is the description for the second class using props" isValid={true}/>
      <Card title="Third Card" description="This is the description for the third class using props" isValid={false}/>
      <Card/>
    </div>
  );
}

export default CardApp
