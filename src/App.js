import Header from './Header'
import alanBtn from '@alan-ai/alan-sdk-web'
import { useEffect, useState } from 'react';
import { Data } from './Data'
import Card from './Card';

function App() {
  const [category, setCategory] = useState([])
  useEffect(()=>{
    alanBtn({
      key: '8abc6b70c9fc318fb63ff413aba54c8b2e956eca572e1d8b807a3e2338fdd0dc/stage',
    onCommand:({ command,product })=>{
      if (command === 'show'){
        filter(product)
      }
    },
    });
    filter("");
  }, []);

  const filter = (names)=>{
    // const filtered = Data.filter(function(item){
    //   if(item.name.includes(names)){
    //     return true
    //   }else return null
    // })

    const filtered = Data.filter((item)=>item.name.includes(names))

    console.log(filtered)
    setCategory(filtered)
  }

  return (
    <div className="app">
      <Header />
      <div style={{display: 'flex', flexWrap: 'wrap' }}>
      {
        category.map((item) => (
          <Card image={item.image} name={item.name} rating={item.rating} actualPrice={item.actualPrice} offerPrice={item.offerPrice} 

          />
        ))
      }
      </div>
    </div>
  );
}

export default App;
