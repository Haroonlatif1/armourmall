import React from 'react'
import { useState, useReducer, useEffect, createContext, } from 'react';
import { reducer } from "./reducer";
export const contextz = createContext();

export const Context = (props) => {

  const [newarrival, setnewarrival] = useState([
    {
      id: "1",
      imag: "/ak.png",
      price: 220,
      title: "Ak47",
      desc: "AK-47 has become an iconic firearm known for its reliability in harsh conditions and ease of use.",
      quantity: 1,
      rating: 4.5,
    },
    {
      id: "2",
      imag: "/mk107.png",
      title: "MK-107",
      price: 560,
      desc: "Provide operators with a reliable and effective tool in various scenarios.",
      quantity: 1,
      rating: 4.0,
    },
    {
      id: "3",
      imag: "/mk107.png",
      title: "MK-107nihhk",
      price: 560,
      desc: "Provide operators with a reliable and effective tool in various scenarios.",
      quantity: 1,
      rating: 3.7,
    },
    {
      id: "4",
      imag: "/mk107.png",
      title: "MK-107ooo",
      price: 560,
      desc: "Provide operators with a reliable and effective tool in various scenarios.",
      quantity: 1,
      rating: 4.2,
    },
    {
      id: "5",
      imag: "/mk107.png",
      title: "MK-1079787",
      price: 560,
      desc: "Provide operators with a reliable and effective tool in various scenarios.",
      quantity: 1,
      rating: 4.8,
    },
    {
      id: "6",
      imag: "/beretta.png",
      price: 150,
      title: "Beretta M9",
      desc: "Introduced in the 1980s, the M9 has become an iconic sidearm, favored for its durability and ease of use.",
      quantity: 1,
      rating: 3.9,
    },
  ]);
  
  const [newAntique, setnewAntique] = useState([
    {
      id: "1",
      imag: "/antique1.png",
      price: 220,
      title: "Special 9mm",
      desc: "AK-47 has become an iconic firearm known for its reliability in harsh conditions and ease of use.",
      quantity: 1,
      rating: 4.2,
    },
    {
      id: "2",
      imag: "/antique2.png",
      title: "Gold Pistol h6",
      price: 560,
      desc: "Provide operators with a reliable and effective tool in various scenarios.",
      quantity: 1,
      rating: 4.7,
    },
    {
      id: "3",
      imag: "/antique3.png",
      price: 150,
      title: "GK-99",
      desc: "Introduced in the 1980s, the M9 has become an iconic sidearm, favored for its durability and ease of use.",
      quantity: 1,
      rating: 3.5,
    },{
      id: "4",
      imag: "/antique3.png",
      price: 150,
      title: "GK-99",
      desc: "Introduced in the 1980s, the M9 has become an iconic sidearm, favored for its durability and ease of use.",
      quantity: 1,
      rating: 3,
    },{
      id: "5",
      imag: "/antique3.png",
      price: 150,
      title: "GK-99",
      desc: "Introduced in the 1980s, the M9 has become an iconic sidearm, favored for its durability and ease of use.",
      quantity: 1,
      rating: 1,
    },{
      id: "6",
      imag: "/antique3.png",
      price: 150,
      title: "GK-99",
      desc: "Introduced in the 1980s, the M9 has become an iconic sidearm, favored for its durability and ease of use.",
      quantity: 1,
      rating: 5,
    },{
      id: "7",
      imag: "/antique3.png",
      price: 150,
      title: "GK-99",
      desc: "Introduced in the 1980s, the M9 has become an iconic sidearm, favored for its durability and ease of use.",
      quantity: 1,
      rating: 2.5,
    },
  ]);
  const [newHandgun, setnewHandgun] = useState([
    {
      id: "1",
      imag: "/beretta.png",
      price: 220,
      title: "Beretta M9",
      desc: "AK-47 has become an iconic firearm known for its reliability in harsh conditions and ease of use.",
      quantity: 1,
      rating: 4.6,
    },
    {
      id: "2",
      imag: "/handgun2.png",
      title: "Special 9mm",
      price: 560,
      desc: "Provide operators with a reliable and effective tool in various scenarios.",
      quantity: 1,
      rating: 4.1,
    },
    {
      id: "3",
      imag: "/handgun1.png",
      price: 150,
      title: "30KL",
      desc: "Introduced in the 1980s, the M9 has become an iconic sidearm, favored for its durability and ease of use.",
      quantity: 1,
      rating: 3.8,
    },{
      id: "4",
      imag: "/beretta.png",
      price: 220,
      title: "Beretta M9",
      desc: "AK-47 has become an iconic firearm known for its reliability in harsh conditions and ease of use.",
      quantity: 1,
      rating: 4,
    },{
      id: "5",
      imag: "/beretta.png",
      price: 220,
      title: "Beretta M9",
      desc: "AK-47 has become an iconic firearm known for its reliability in harsh conditions and ease of use.",
      quantity: 1,
      rating: 5,
    },
    {
      id: "6",
      imag: "/beretta.png",
      price: 220,
      title: "Beretta M9",
      desc: "AK-47 has become an iconic firearm known for its reliability in harsh conditions and ease of use.",
      quantity: 1,
      rating: 3,
    },
  ]);
  
  const [newriffle, setnewriffle] = useState([
    {
      id: "1",
      imag: "/rifle3.png",
      price: 220,
      title: "MK-107",
      desc: "AK-47 has become an iconic firearm known for its reliability in harsh conditions and ease of use.",
      quantity: 1,
      rating: 4.4,
    },
    {
      id: "2",
      imag: "/rifle2.png",
      title: "Thunder-2",
      price: 560,
      desc: "Provide operators with a reliable and effective tool in various scenarios.",
      quantity: 1,
      rating: 4.2,
    },
    {
      id: "3",
      imag: "/ak.png",
      price: 150,
      title: "Ak-47",
      desc: "Introduced in the 1980s, the M9 has become an iconic sidearm, favored for its durability and ease of use.",
      quantity: 1,
      rating: 4.7,
    },{
      id: "4",
      imag: "/rifle3.png",
      price: 220,
      title: "MK-107",
      desc: "AK-47 has become an iconic firearm known for its reliability in harsh conditions and ease of use.",
      quantity: 1,
      rating: 4,
    },
    {
      id: "5",
      imag: "/rifle3.png",
      price: 220,
      title: "MK-107",
      desc: "AK-47 has become an iconic firearm known for its reliability in harsh conditions and ease of use.",
      quantity: 1,
      rating: 3.5,
    },
    {
      id: "6",
      imag: "/rifle3.png",
      price: 220,
      title: "MK-107",
      desc: "AK-47 has become an iconic firearm known for its reliability in harsh conditions and ease of use.",
      quantity: 1,
      rating: 4.4,
    },
    {
      id: "7",
      imag: "/rifle3.png",
      price: 220,
      title: "MK-107",
      desc: "AK-47 has become an iconic firearm known for its reliability in harsh conditions and ease of use.",
      quantity: 1,
      rating: 5,
    },
  ]);
  
  const [newShotgun, setnewShotgun] = useState([
    {
      id: "1",
      imag: "/shotgun2.png",
      price: 220,
      title: "Shotgun 1",
      desc: "AK-47 has become an iconic firearm known for its reliability in harsh conditions and ease of use.",
      quantity: 1,
      rating: 4.3,
    },
    {
      id: "2",
      imag: "/shotgun3.png",
      price: 220,
      title: "Shotgun 2",
      desc: "AK-47 has become an iconic firearm known for its reliability in harsh conditions and ease of use.",
      quantity: 1,
      rating: 4.6,
    },
    {
      id: "3",
      imag: "/shotgun4.png",
      price: 220,
      title: "Shotgun 3",
      desc: "AK-47 has become an iconic firearm known for its reliability in harsh conditions and ease of use.",
      quantity: 1,
      rating: 4.1,
    },{
      id: "4",
      imag: "/shotgun2.png",
      price: 220,
      title: "Shotgun 1",
      desc: "AK-47 has become an iconic firearm known for its reliability in harsh conditions and ease of use.",
      quantity: 1,
      rating: 4.3,
    },{
      id: "5",
      imag: "/shotgun2.png",
      price: 220,
      title: "Shotgun 1",
      desc: "AK-47 has become an iconic firearm known for its reliability in harsh conditions and ease of use.",
      quantity: 1,
      rating: 5,
    },{
      id: "6",
      imag: "/shotgun2.png",
      price: 220,
      title: "Shotgun 1",
      desc: "AK-47 has become an iconic firearm known for its reliability in harsh conditions and ease of use.",
      quantity: 1,
      rating: 3,
    },{
      id: "7",
      imag: "/shotgun2.png",
      price: 220,
      title: "Shotgun 1",
      desc: "AK-47 has become an iconic firearm known for its reliability in harsh conditions and ease of use.",
      quantity: 1,
      rating: 2,
    },
  ]);
  
  const [newSniper, setnewSniper] = useState([
    {
      id: "1",
      imag: "/sniperravinR29X.png",
      price: 6000,
      title: "A1-HS",
      desc: "AK-47 has become an iconic firearm known for its reliability in harsh conditions and ease of use.",
      quantity: 1,
      rating: 4.9,
    },
    {
      id: "2",
      imag: "/sniper3.png",
      title: "BON-990",
      price: 2050,
      desc: "Provide operators with a reliable and effective tool in various scenarios.",
      quantity: 1,
      rating: 4.2,
    },
    {
      id: "3",
      imag: "/sniperrifle1.png",
      price: 4000,
      title: "100x Copp Z",
      desc: "Introduced in the 1980s, the M9 has become an iconic sidearm, favored for its durability and ease of use.",
      quantity: 1,
      rating: 4.5,
    },{
      id: "4",
      imag: "/sniperravinR29X.png",
      price: 6000,
      title: "A1-HS",
      desc: "AK-47 has become an iconic firearm known for its reliability in harsh conditions and ease of use.",
      quantity: 1,
      rating: 0,
    },
    {
      id: "5",
      imag: "/sniperravinR29X.png",
      price: 6000,
      title: "A1-HS",
      desc: "AK-47 has become an iconic firearm known for its reliability in harsh conditions and ease of use.",
      quantity: 1,
      rating: 4.9,
    },
    {
      id: "6",
      imag: "/sniperravinR29X.png",
      price: 6000,
      title: "A1-HS",
      desc: "AK-47 has become an iconic firearm known for its reliability in harsh conditions and ease of use.",
      quantity: 1,
      rating: 3.5,
    },{
      id: "7",
      imag: "/sniperravinR29X.png",
      price: 6000,
      title: "A1-HS",
      desc: "AK-47 has become an iconic firearm known for its reliability in harsh conditions and ease of use.",
      quantity: 1,
      rating: 4,
    },
  ]);
  const [logintext, setlogintext] = useState("LOG IN")

      

      const Allproducts = [
        newarrival,
        newHandgun,
        newShotgun,
        newSniper,
        newAntique,
        newriffle
      ];
      
      const [CurrentPage, setCurrentPage] = useState(1)
      const [PostPerPage, setPostPerPage] = useState(4)
      
      const lastindex = Math.min(PostPerPage * CurrentPage, newarrival.length);
      const l=PostPerPage * CurrentPage
      const firstindex = Math.max(l- PostPerPage, 0);
      const PaginatedProducts = newarrival.slice(firstindex, lastindex);
      
      
      const lastindex2 = Math.min(PostPerPage * CurrentPage, newHandgun.length);
      const l1=PostPerPage * CurrentPage
      const firstindex2 = Math.max(l1- PostPerPage, 0);
      const PaginatedProducts1 = newriffle.slice(firstindex2, Math.min(lastindex2, newHandgun.length));
      
      
      const lastindex3= Math.min(PostPerPage * CurrentPage, newriffle.length);
      const l2=PostPerPage * CurrentPage
      const firstindex3 = Math.max(l2- PostPerPage, 0);
      const PaginatedProducts2 = newriffle.slice(firstindex3, Math.min(lastindex3, newriffle.length));
      
      
      const lastindex4 = Math.min(PostPerPage * CurrentPage, newAntique.length);
      const l3=PostPerPage * CurrentPage
      const firstindex4 = Math.max(l3- PostPerPage, 0);     
       const PaginatedProducts3 = newAntique.slice(firstindex4, lastindex4);
      
      
      const lastindex5 = Math.min(PostPerPage * CurrentPage, newShotgun.length);
      const l4=PostPerPage * CurrentPage
      const firstindex5 = Math.max(l4- PostPerPage, 0);       const PaginatedProducts4 = newShotgun.slice(firstindex5, Math.min(lastindex5, newShotgun.length));
      
      
      
      const lastindex6 = Math.min(PostPerPage * CurrentPage, newSniper.length);
      const l5=PostPerPage * CurrentPage
      const firstindex6 = Math.max(l5- PostPerPage, 0);       const PaginatedProducts5 = newSniper.slice(firstindex6, Math.min(lastindex6, newSniper.length));
      
      




    const [cartItems, setCartItems] = useState([{
      id: 2,
      imag: "/mk107.png",
      title: "MK-107nihhk",
      price: 560,
      desc: "provide operators with a reliable and effective tool in various scenarios. ",
      quantity: 1,
    }])
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [se, setse] = useState()
const yomo=(item)=>{
  setse(item)
}
  const searchProducts = () => {
    const searchTerm = se;
    const Allproductsflat=Allproducts.flat()
    const filtered = Allproductsflat.filter((product) => {
      if (searchTerm === "" || product.title.toLowerCase().includes(searchTerm)) {
        return true;
      } else {
        return false;
      }
    });
    setFilteredProducts(filtered);
  };
const handler = (e) => {
  e.preventDefault();
  searchProducts();
 
};
useEffect(() => {
  searchProducts();
}, [se]);
    const init = {
      item: cartItems,
      totalq: 0,
      totalam: 0
    };

    const [state, dispatch] = useReducer(reducer, init);
    const addToCart = (product) => {
      dispatch({
        type:"ADD",
        payload:product
      })
      };
      const [xyz, setxyz] = useState(true)
      const [xyz2, setxyz2] = useState([])
      const data=(product)=>{
        setxyz2([...xyz2,product])
        }

    const totalamm  = state.totalq;
    const totalammm = state.totalam;
  
    const onClicked2 = () => {
      dispatch({
        type: "REMOVE_ITEM2",
      });
    };
  
    const increment = (id) => {
      dispatch({
        type: "INCREMENT",
        payload: id,
      });
    };
  
    const decrement = (id) => {
      dispatch({
        type: "DECREMENT",
        payload: id,
      });
    };
  
    const onClicked = (id) => {
      dispatch({
        type: "REMOVE_ITEM",
        payload: id,
      });
    };
  
    useEffect(() => {
      dispatch({
        type: "QUANTITY",
      });
    }, [state.item]);
  return (
    <div>  <contextz.Provider value={{...state,totalamm,totalammm,newarrival,setCurrentPage,
      setnewarrival,filteredProducts,yomo,
      addToCart,
      onClicked,
      onClicked2,
      logintext,setlogintext,
      increment,handler,
      decrement,PaginatedProducts,
      PaginatedProducts1,
      PaginatedProducts2,
      PaginatedProducts3,
      PaginatedProducts4,
      PaginatedProducts5,
      xyz,xyz2,setxyz,data,
      setxyz2
      }}>
        {props.children}</contextz.Provider></div>
  )
}

export default Context