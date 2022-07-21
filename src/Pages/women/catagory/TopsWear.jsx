import React, { useContext, useEffect, useRef, useState } from 'react'
import { Box, Flex, Image, Link,Text,Grid,Button,Select } from "@chakra-ui/react";
import HoverComp from '../../../components/women/HoverComp';
import { CartContext } from '../../../context/CartContext';
// import Hover from '../../../components/navbarComp/Hover';


const topsWear=[
    {
        id:"1",price:799, image:"https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011354935-Red-MAROON-1000011354935-05062022_01-2100.jpg", size:['XS','S','M','L','XL','XXL'], color:'red',title: "Max solid v-neck top"
    },

    {
      id:"2",price:899, image:"https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011354922-Black-BLACKP-1000011354922-19062022_01-2100.jpg",size:['XS','S','M','L','XL','XXL'], color:'red',title: "Max solid v-neck top"
  },

  {
    id:"3",price:999, image:"https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011345955-Red-BRICK-1000011345955-29052022_01-2100.jpg",size:['XS','S','M','L','XL','XXL'], color:'red',title: "Max solid v-neck top"
},

{
  id:"4",price:599, image:"https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011070452-Beige-IVORY-1000011070452-26042022_01-2100.jpg",size:['XS','S','M','L','XL','XXL'], color:'red',title: "Max solid v-neck top"
},

{
  id:"5",price:699, image:"https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011070502-Black-BLACK-1000011070502-29052022_01-2100.jpg",size:['XS','S','M','L','XL','XXL'], color:'red',title: "Max solid v-neck top"
},

{
  id:"6",price:859, image:"https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011354858-Green-DARKGREEN-1000011354858-05062022_01-2100.jpg", size:['XS','S','M','L','XL','XXL'], color:'red',title: "Max solid v-neck top"
},

{
  id:"7",price:949, image:"https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011354922-Black-BLACK-1000011354922-19062022_01-2100.jpg", size:['XS','S','M','L','XL','XXL'], color:'red',title: "Max solid v-neck top"
},

{
  id:"8",price:1099, image:"https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011345930-Beige-IVORYP-1000011345930-29052022_01-2100.jpg", size:['XS','S','M','L','XL','XXL'], color:'red',title: "Max solid v-neck top"
},
  
]



const TopsWear = () => {
  const {state,dispatch}= useContext(CartContext)
  const [update,setUpdate] = useState(false)
  
  const [data,setData]=useState(topsWear)
  const [size,setSize]= useState()

  const handleLow=()=>{
    // console.log("amit")
     let x= data.sort((a,b)=>{return +a.price- +b.price })
        setData(x)
        setUpdate(!update)
    
  }


  const handleHigh=()=>{
    // console.log("amit")
     let x= data.sort((a,b)=>{return +b.price- +a.price })
        setData(x)
        setUpdate(!update)
    
  }




  // console.log(data)
  const handleSubmit=(id)=>{
    
    // console.log(id)
    // console.log(size)
    topsWear.filter(el=>{
      if(el.id==id){
        dispatch({type:'add', id: id,imgUrl:el.image,size:size, price:el.price})
      }
    })
  }


useEffect(()=>{
  
},[update])

  return (
    <Box mt={'2rem'} >
      <Box mb={'2rem'} >
        <Button  mr={'1rem'} onClick={handleLow}>Low to high</Button>
        <Button onClick={handleHigh}>High to low</Button>
      </Box>
    <Grid templateColumns={`repeat(4,1fr)`}gap="2px">
    {data.map(el=>(
      <Box key={el.id}>
     <Link>
     <Box>
        <Image src={el.image}/>
         <Text>{el.title}</Text>
      </Box>
         <Text>{el.price}</Text>

         </Link>
         {/* <HoverComp/> */}
         <Select onChange={(e)=>setSize(e.target.value)} name="select">
          {el.size.map((size,i)=>(

          <option key={i} value={size}>{size}</option>
          ))}
         </Select>
         <Button bg='tomato'  onClick={()=>handleSubmit(el.id)}>Add to cart</Button>
    </Box>
        
    ))}
    </Grid>
    </Box>
  )
}

export default TopsWear