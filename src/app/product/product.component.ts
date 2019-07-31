import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productArr=[];
  menuTitle="";
  menuDesc="";
  constructor(router: Router) {
    let groundArr=[
      {name:'Chilli Powder',img:'assets/images/product/ground/chilli-powder.jpg'},
      {name:'Coriander Powder',img:'assets/images/product/ground/dhania-powder.jpg'},
      {name:'Jeera Powder',img:'assets/images/product/ground/jeera-powder.jpg'},
      {name:'Turmeric Powder',img:'assets/images/product/ground/turmeric-powder.jpg'},
      /*{name:'Curry Leaf Powder',img:'assets/images/product/ground/curry-leaf-powder.jpg'},
      {name:'Dal Chini',img:'assets/images/product/ground/dal-chini.jpg'},
      {name:'Dried Mango Powder',img:'assets/images/product/ground/dried-mango-powder.jpg'},
      {name:'Garam Masala Powder',img:'assets/images/product/ground/garam-masala-powder.jpg'},
      {name:'Green Cardamon Powder',img:'assets/images/product/ground/green-cardamon-powder.jpg'},
      {name:'Kashmiri Chilli Powder',img:'assets/images/product/ground/kashmiri-chilli-powder.jpg'},
      {name:'Organic Ginger',img:'assets/images/product/ground/organic-ginger.jpg'},
      {name:'Tej Patta',img:'assets/images/product/ground/tej-patta.jpg'},
      {name:'Turmeric Powder',img:'assets/images/product/ground/turmeric-powder.jpg'}*/
    ];

    let blendArr=[
      {name:'Garam Masala',img:'assets/images/product/blend/garam-masala1.jpg'},
      {name:'Garam Masala',img:'assets/images/product/blend/garam-masala2.jpg'},
      /*{name:'Garlic Powder',img:'assets/images/product/blend/dehydrated-garlic-powder.png'},
      {name:'Biryani Masala',img:'assets/images/product/blend/Biryani-masala.jpg'},
      {name:'Chat Masala',img:'assets/images/product/blend/chat-masala.jpg'},
      {name:'Sabji Masala',img:'assets/images/product/blend/sabji-masala.jpg'},
      {name:'Meat Masala',img:'assets/images/product/blend/meat-masala-paste.jpg'},
      {name:'Chicken Masala',img:'assets/images/product/blend/chicken-masala-powder.jpg'},*/
    ];
    let otherArr=[
      {name:'Wheat Flour',img:'assets/images/product/other/atta1.jpg'},
      {name:'Flour',img:'assets/images/product/other/atta2.jpg'},
	  {name:'Gram Flour',img:'assets/images/product/other/gram-flour.jpeg'},
	  {name:'Maida',img:'assets/images/product/other/maida.jpg'},
	  {name:'Natural Gram Flour',img:'assets/images/product/other/natural-gram-flour.jpg'}
    ];
	let dehydArr=[
      {name:'Garlic Flakes',img:'assets/images/product/dehyd/garlic-flakes.jpg'},
	  {name:'Garlic Powder',img:'assets/images/product/dehyd/garlic-powder.jpg'},
	  {name:'Red Onion Flakes',img:'assets/images/product/dehyd/red-onion-flakes.jpg'},
	  
    ];
	let wholeArr=[
      {name:'Black Pepper',img:'assets/images/product/whole/black-pepper.jpg'},
      {name:'Cardamom',img:'assets/images/product/whole/cardamom.jpg'},
	  {name:'Cloves',img:'assets/images/product/whole/cloves.jpg'},
	  {name:'Cumin Seeds',img:'assets/images/product/whole/cumin-seeds.jpg'},
	  {name:'Red Chilli Whole',img:'assets/images/product/whole/red-chilli-whole.jpg'}
	  
    ];
	
    router.events.subscribe((url:any) => {
      if(router.url=="/product/ground"){
        this.menuTitle="Ground Spices";
        this.productArr=groundArr;
		this.menuDesc=`Spices & herbs (eg., black pepper, turmeric, cinnamon) have been used by Indians for thousands of years for both culinary & health purposes. Unlike earlier times, spices today throughout the world are frequently used in almost every cuisine, largely to improve flavour and to provide new tastes.
We at Prayansh from the start are focused on providing maximum flavour with minimum quantity.`;
      }else if(router.url=="/product/blend"){
        this.menuTitle="Blended Spices";
        this.productArr=blendArr;
		this.menuDesc=`Spices & herbs (eg., black pepper, turmeric, cinnamon) have been used by Indians for thousands of years for both culinary & health purposes. Unlike earlier times, spices today throughout the world are frequently used in almost every cuisine, largely to improve flavour & to provide new tastes.
We at Prayansh from the start are focused on providing maximum flavour with minimum quantity.`;
      }else if(router.url=="/product/other"){
        this.menuTitle="Flour";
        this.productArr=otherArr;
		this.menuDesc=`In flour, we have three highly consumed flours namely, Wheat flour (Atta), All-purpose flour (Maida) and Gram flour (Besan). These have different usage in variety of cuisines globally.
`;
      }else if(router.url=="/product/dehyd"){
        this.menuTitle="Dehydrated Vegetables";
        this.productArr=dehydArr;
		this.menuDesc=`Our brand deals in exclusive and high quality Dehydrated vegetables, particularly Onions & Garlics..
`;
      }else{
        this.menuTitle="Whole Spices";
        this.productArr=wholeArr;
		this.menuDesc=`Spices & herbs (eg., black pepper, turmeric, cinnamon) have been used by Indians for thousands of years for both culinary & health purposes. Unlike earlier times, spices today throughout the world are frequently used in almost every cuisine, largely to improve flavour and to provide new tastes.
We at Prayansh from the start are focused on providing maximum flavour with minimum quantity.`;
      }
    }); 
  }

  ngOnInit() {
  }

}
