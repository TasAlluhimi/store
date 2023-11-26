import './App.css'
import NavBar from './components/NavBar'
import Main from './components/Main'
import Cards from './components/Cards'
import Ad from './components/Ad';

function App() {

  return (
    <>
     <NavBar />
     <Main />

     <h2 className="ml-44 font-bold mb-10">Top Categories Of The Month</h2>
     <hr />

     <div className="flex flex-wrap gap-5 w-[90vw] justify-center items-center ml-10 mt-5">

     <Cards src="https://nouthemes.net/html/martfury/img/categories/shop/5.jpg" title="Electronics" des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus delectus sunt in corporis illum sequi!"/>

     <Cards src="https://nouthemes.net/html/martfury/img/categories/shop/1.jpg" title="Clothings" des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus delectus sunt in corporis illum sequi!"/>

     <Cards src="https://nouthemes.net/html/martfury/img/categories/shop/9.jpg" title="Computers" des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus delectus sunt in corporis illum sequi!"/>


     <Cards src="https://nouthemes.net/html/martfury/img/categories/shop/2.jpg" title="Home & Kitchen" des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus delectus sunt in corporis illum sequi!"/>

     <Cards src="https://nouthemes.net/html/martfury/img/categories/shop/10.jpg" title="Healthy & Beauty" des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus delectus sunt in corporis illum sequi!"/>

     <Cards src="https://nouthemes.net/html/martfury/img/categories/shop/6.jpg" title="Jewelry & Watch" des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus delectus sunt in corporis illum sequi!"/>

     </div>

     <Ad />
    </>
  )
}

export default App
