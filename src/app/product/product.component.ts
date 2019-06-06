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
  constructor(router: Router) {
    let groundArr=[
      {name:'Black Papper',img:'assets/images/product/ground/black-pepper-powder.jpg'},
      {name:'Black Cardamon',img:'assets/images/product/ground/black-cardamom.jpg'},
      {name:'Cinnamon Powder',img:'assets/images/product/ground/cinnamon.jpg'},
      {name:'Coriander Powder',img:'assets/images/product/ground/coriander.jpg'},
      {name:'Curry Leaf Powder',img:'assets/images/product/ground/curry-leaf-powder.jpg'},
      {name:'Dal Chini',img:'assets/images/product/ground/dal-chini.jpg'},
      {name:'Dried Mango Powder',img:'assets/images/product/ground/dried-mango-powder.jpg'},
      {name:'Garam Masala Powder',img:'assets/images/product/ground/garam-masala-powder.jpg'},
      {name:'Green Cardamon Powder',img:'assets/images/product/ground/green-cardamon-powder.jpg'},
      {name:'Kashmiri Chilli Powder',img:'assets/images/product/ground/kashmiri-chilli-powder.jpg'},
      {name:'Organic Ginger',img:'assets/images/product/ground/organic-ginger.jpg'},
      {name:'Tej Patta',img:'assets/images/product/ground/tej-patta.jpg'},
      {name:'Turmeric Powder',img:'assets/images/product/ground/turmeric-powder.jpg'}
    ];

    let blendArr=[
      {name:'Biryani Pulav Masala',img:'assets/images/product/blend/biriyani-pulav-masala.jpg'},
      {name:'Pav Bhaji Masala',img:'assets/images/product/blend/PavBhaji.jpg'},
      {name:'Garlic Powder',img:'assets/images/product/blend/dehydrated-garlic-powder.png'},
      {name:'Biryani Masala',img:'assets/images/product/blend/Biryani-masala.jpg'},
      {name:'Chat Masala',img:'assets/images/product/blend/chat-masala.jpg'},
      {name:'Sabji Masala',img:'assets/images/product/blend/sabji-masala.jpg'},
      {name:'Meat Masala',img:'assets/images/product/blend/meat-masala-paste.jpg'},
      {name:'Chicken Masala',img:'assets/images/product/blend/chicken-masala-powder.jpg'},
    ];
    let otherArr=[
      {name:'Wheat Flour',img:'assets/images/product/other/wheat-flour-atta.jpg'},
      {name:'Besan',img:'assets/images/product/other/besan-flour.jpg'}
    ];
    router.events.subscribe((url:any) => {
      if(router.url=="/product/ground"){
        this.menuTitle="Ground Spices";
        this.productArr=groundArr;
      }else if(router.url=="/product/blend"){
        this.menuTitle="Blend Spices";
        this.productArr=blendArr;
      }else if(router.url=="/product/other"){
        this.menuTitle="Other Product";
        this.productArr=otherArr;
      }else{
        this.menuTitle="Whole Spices";
        this.productArr=groundArr.concat(blendArr);
      }
    }); 
  }

  ngOnInit() {
  }

}
