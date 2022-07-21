import React, { createContext } from "react";
export const DataContext= createContext()
const jeansWear=[
    {
       id:9, price:799, image:"https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011354935-Red-MAROON-1000011354935-05062022_01-2100.jpg", size:['XS','S','M','L','XL','XXL'], color:'red',title: "Max solid v-neck top"
    },

    {
      id:16, price:899, image:"https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011354922-Black-BLACKP-1000011354922-19062022_01-2100.jpg",size:['XS','S','M','L','XL','XXL'], color:'red',title: "Max solid v-neck top"
  },

  {
    id:10, price:999, image:"https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011345955-Red-BRICK-1000011345955-29052022_01-2100.jpg",size:['XS','S','M','L','XL','XXL'], color:'red',title: "Max solid v-neck top"
},

{
  id:11, price:599, image:"https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011070452-Beige-IVORY-1000011070452-26042022_01-2100.jpg",size:['XS','S','M','L','XL','XXL'], color:'red',title: "Max solid v-neck top"
},

{
  id:12, price:699, image:"https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011070502-Black-BLACK-1000011070502-29052022_01-2100.jpg",size:['XS','S','M','L','XL','XXL'], color:'red',title: "Max solid v-neck top"
},

{
  id:13, price:859, image:"https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011354858-Green-DARKGREEN-1000011354858-05062022_01-2100.jpg", size:['XS','S','M','L','XL','XXL'], color:'red',title: "Max solid v-neck top"
},

{
  id:14, price:949, image:"https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011354922-Black-BLACK-1000011354922-19062022_01-2100.jpg", size:['XS','S','M','L','XL','XXL'], color:'red',title: "Max solid v-neck top"
},

{
  id:15, price:1099, image:"https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011345930-Beige-IVORYP-1000011345930-29052022_01-2100.jpg", size:['XS','S','M','L','XL','XXL'], color:'red',title: "Max solid v-neck top"
},
  
]
export const DataProvider = ({children})=>{
   
return(
    <DataContext.Provider value={{jeansWear}}>{children}</DataContext.Provider>
)
}