@import '~@fortawesome/fontawesome-free/css/all.min.css';



body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif, 'Epilouge';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: Epilouge;
  overflow: visible;
  background-size: cover;
}



code {
  font-family: Helvetica;
}

.cta {
  background-color: #4CAF50;
  /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
}

/*main fields CSS */

.product-form {
  display: flex;
  width: 50%;
  flex-direction: column;
  margin-top: 50px;
  margin: 0 auto;
}

.inputLabels {
  width: 40%;
  grid-column: 1 / 2;
  font-family: Helvetica;
  /* Heading */
  font-size: 20px;
  line-height: 30px;
  color: #565E6CFF;
  /* neutral-600 */
  text-align: left;
  /* overflow: hidden; */
  margin-top: 5px;
  margin-top: 5px;
}

.gst-col{
  margin-top: -25px;
  margin-bottom: -5px;
}
.product-form-input {
  flex: 1;
  width: 390px;
  height: 25px;
  padding: 10px;
  /* margin-top: 5px; */
  border: 1px solid gray;
  font-size: 14px;
  background: #F3F4F6FF;
  border-radius: 5px;
}

.product-form-input-2 {
  flex: 1;
  width: 325px;
  height: 25px;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid gray;
  font-size: 14px;
  background: #F3F4F6FF;
  margin-right: 2px;
  border-radius: 5px;
  /* margin-bottom: 5px; */
}

.product-form-input-3 {
  float: left;
  flex: 1;
  height: 100%;
  font-size: 14px;
  border: 1px solid gray;
  background: #F3F4F6FF;
  box-sizing: border-box;
  width: 50px;
  margin-right: 10px;
  border-radius: 5px;
}

.product-form-input-end {
  float: left;
  flex: 1;
  height: 100%;
  font-size: 14px;
  border: 1px solid gray;
  background: #F3F4F6FF;
  box-sizing: border-box;
  width: 50px;
  border-radius: 5px;
}

.product-form-input-4 {
  float: left;
  flex: 1;
  height: 100%;
  font-size: 14px;
  border: 1px solid gray;
  background: #F3F4F6FF;
  box-sizing: border-box;
  width: 400px;
  margin-right: 10px;
  border-radius: 5px;
}

.product-form-inputs-5 {
  float: left;
  flex: 1;
  height: 45px;
  font-size: 14px;
  border: 1px solid gray;
  background: #F3F4F6FF;
  box-sizing: border-box;
  width: 132px;
  margin-right: 10px;
  margin-top: 5px;
  border-radius: 5px;
}

.measurementDimensions {
  width: 30px;
  height: 100%;
  font-size: 14px;
  background: #F3F4F6FF;
  margin-right: 5px;
  float: left;
  /* margin-bottom: 30px; */
}

.form-label {
  margin-right: 1.35px;
  float: left;
  font-family: Helvetica;
  font-size: 15px;
  line-height: 30px;
  color: #565E6CFF;
  margin-top: 7px;
}

/* Button 1 */
.button {
  position: absolute;
  top: 334px;
  left: 586px;
  height: 52px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Helvetica;
  /* Body */
  font-size: 18px;
  line-height: 28px;
  color: #FFFFFFFF;
  /* white */
  background: #00BDD6FF;
  /* primary-500 */
  opacity: 1;
  border: none;
  border-radius: 6px;
  /* border-l */
}

/* Hover */
.button:hover {
  color: #FFFFFFFF;
  /* white */
  background: #00A9C0FF;
  /* primary-550 */
}

/* Pressed */
.button:hover:active {
  color: #FFFFFFFF;
  /* white */
  background: #0095A9FF;
  /* primary-600 */
}

/* Disabled */
.button:disabled {
  opacity: 0.4;
}

/* header CSS */
img {
  margin-left: 10vh;
  width: 7vh;
  margin-top: 3vh;
  height: 3vw;
}

.logo {
  width: 100vx;
  height: 12vh;
  background-color: #5c64c4;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #5c64c4;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 5 vw;
  width: 100%;
  overflow: visible;
}

.logo {
  flex: 0 0 auto;
}

.logo img {
  height: 3rem;
  width: 4rem;
}

.nav {
  display: flex;
  align-items: center;
  margin-right: 3rem;
}

.social-media {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: -5rem;
}

.social-media li {
  margin-right: 1rem;
}

.social-media a {
  color: #ffffff;
  font-size: 1.5rem;
}

.formFields {
  display: flex;
  /* margin-top: 10px; */
}

.productDetails {
  /* margin-left: 400px; */
  margin-bottom: 20px;
  font-family: Helvetica;
  /* Heading */
  font-size: 32px;
  line-height: 48px;
  color: #171A1FFF;
  text-align: center;
   /* neutral-900 */
}

/* Set font family and font size for placeholder */
input::placeholder {
  font-family: Helvetica;
  font-size: 14px;
  margin-left: 10px;
}

/* Set font family and font size for select input options */
.dropdown {
  font-family: Helvetica;
  font-size: 14px;
  margin-left: 10px !important;
}

/* Set font family and font size for select input */
select {
  width: 413px;
  height: 47px;
  /* margin-bottom: 30px; */
  font-size: 14px;
  background: #F3F4F6FF;
  font-family: Helvetica;
  color: gray;
  font-size: 14px;
  flex: 1;
  border-radius: 5px;
}

/* button */
.submitButton {
  /* Button 1 */
  top: 334px;
  left: 586px;
  height: 52px;
  margin-top: 20px;
  width: 300px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Helvetica;
  /* Body */
  font-size: 18px;
  line-height: 28px;
  color: #FFFFFFFF;
  /* white */
  background: #00BDD6FF;
  /* primary-500 */
  opacity: 1;
  border: none;
  border-radius: 6px;
  margin-left: 250px;
  /* border-l */
}

/* Hover */
.button:hover {
  color: #FFFFFFFF;
  /* white */
  background: #00A9C0FF;
  /* primary-550 */
}

/* Pressed */
.button:hover:active {
  color: #FFFFFFFF;
  /* white */
  background: #0095A9FF;
  /* primary-600 */
}

/* Disabled */
.button:disabled {
  opacity: 0.4;
}

input::placeholder {
  font-size: 1rem;
  font-style: Helvetica;
}

.sidep {

  font-family: Helvetica;
  font-size: 14px;
  line-height: 22px;
  margin-top: -5px;
  color: #171A1FFF;
}

#percentOrValue {
  width: 60px;
  height: 47px;
  font-size: 14px;
  background: #F3F4F6FF;
  margin-right: 10px;
}

.radio {
  display: grid;
  grid-template-columns: auto auto;
  grid-row-gap: 0px;
  align-items: center;
}

.radio-item {
  /* margin-right: 5px; */
}




#add {
  font-family: Helvetica;
  /* Heading */
  font-size: 20px;
  line-height: 30px;
  color: #565E6CFF;
  /* neutral-600 */
  margin-right: 50px;
}

.area {
  margin-top: -20px;
}

.shipmentOptions {
  width: 100%;
  height: 2.5rem;
}

.Shipping {
  margin-left: -21.8rem;
}

.addShipping {
  margin-top: 1rem;
}

.line option {
  margin-left: 2rem;
}

/* table CSS */
table {
  border-collapse: collapse;
  width: 45%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  align-items: left;
  margin-left: 28%;
  margin-right: 25%;
}

table {
  border: 2px solid #ddd;
  /* overflow: hidden; */
}

table th,
table td {
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
}

table th {
  background-color: #f2f2f2;
}

.table-title{
   font-family: Helvetica; 
  font-size: 16px; 
  line-height: 22px; 
  color: #565E6CFF;
  text-align: center;
}
/* table tbody tr:nth-child(odd) {
  background-color: #f9f9f9;
}

table tbody tr:hover {
  background-color: #f5f5f5;
} */ 

.table .text{
  position: absolute; 
  top: 79px; 
  left: 21px; 

}


.formFields .line {
  display: flex;
  align-items: flex-end;
}

.formFields .line label.area {
  text-align: right;
  margin-top: 10px;
}

.titles {
  display: flex;
  margin-left: 220px;
  margin-bottom: -35px;
}

.national {
  margin-top: -100px;
  margin-left: 30px;
}

.para {
  margin-left: 100px;
  margin-top: 60px;
  margin-bottom: 30px;
}



.addtionalShippingCost {
  margin-top: 30px;
}

.hidden {
  display: flex;
}

.tableHeading {
  margin-left: 30%;
  width: 712px;
  font-family: Helvetica;
  font-size: 25px;
  line-height: 33px;
  color: #171A1FFF;
  margin-top: 50px;
  display: flex;
  /* text-align: center; */
}

.one {
  width: 425px;
  height: 50px;
  box-sizing: border-box;
  display: flex;
  /* margin-top: 10px;
margin-bottom: 10px; */
}

.two {
  width: 415px;
  height: 50px;
  box-sizing: border-box;
  display: flex;
  /* margin-top: 20px;
margin-bottom: 10px; */
}
.four{
  width: 425px;
  height: 70px;
  box-sizing: border-box;
  display: flex;
  /* background-color: red;  */
}
@media (max-width:1450px) {
  /* .inputLabels {
    display: none;
  } */
  .formFields{
    display: block;
   }
   .submitButton{
    margin-left: 0px;
   }
   .productDetails{
    margin-left: 10rem;
   }
   .tableHeading {
    margin-left: 10rem;
  }
 
}

@media (max-width: 768px) {
  .formFields{
    margin-top: 0px;
    margin-left: -20px;
  }
  .product-form-input {
    flex: 1;
    width: 320px;
    height: 25px;
    padding: 10px;
    /* margin-top: 5px; */
    border: 1px solid gray;
    font-size: 14px;
    background: #F3F4F6FF;
    border-radius: 5px;
    
  }
  .productDetails{
    text-align: center;
    font-size: 22px;
  }
  .header{
    width: 120%;
  }
  .product-form-input-2 {
    flex: 1;
    width: 250px;
    height: 25px;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid gray;
    font-size: 14px;
    background: #F3F4F6FF;
    margin-right: 2px;
    border-radius: 5px;
    /* margin-bottom: 5px; */
  }
  
  .product-form-input-3 {
    float: left;
    flex: 1;
    height: 100%;
    font-size: 14px;
    border: 1px solid gray;
    background: #F3F4F6FF;
    box-sizing: border-box;
    width: 50px;
    margin-right: 10px;
    border-radius: 5px;
  }
  
  .product-form-input-end {
    float: left;
    flex: 1;
    height: 100%;
    font-size: 14px;
    border: 1px solid gray;
    background: #F3F4F6FF;
    box-sizing: border-box;
    width: 50px;
    border-radius: 5px;
  }
  
  .product-form-input-4 {
    float: left;
    flex: 1;
    height: 100%;
    font-size: 14px;
    border: 1px solid gray;
    background: #F3F4F6FF;
    box-sizing: border-box;
    width: 50px;
    margin-right: 10px;
    border-radius: 5px;
  }
  
  .product-form-inputs-5 {
    float: left;
    flex: 1;
    height: 45px;
    font-size: 14px;
    border: 1px solid gray;
    background: #F3F4F6FF;
    box-sizing: border-box;
    width: 110px;
    margin-right: 10px;
    margin-top: 5px;
    border-radius: 5px;
  }
  
  .measurementDimensions {
    width: 20px;
    height: 100%;
    font-size: 14px;
    background: #F3F4F6FF;
    margin-right: 5px;
    float: left;
    /* margin-bottom: 30px; */
  }
  select {
    width: 345px;
    height: 47px;
    /* margin-bottom: 30px; */
    font-size: 14px;
    background: #F3F4F6FF;
    font-family: Helvetica;
    color: gray;
    font-size: 14px;
    flex: 1;
    border-radius: 5px;
  }
.one{
  width: 360px;
}
.two{
  width: 350px;
}
.four{
  width: 305px;
  height: 70px;
  box-sizing: border-box;
  display: flex;
}
.social-media{
  display: none;
}
.inputLabels{
  font-size: 16px;
  margin-top: 0px;
}
.shipmentOptions{
  padding-left: 5px;
}
.radio {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}

.radio-item {
  margin-right: 0px;
}

.shipmentOptions {
  margin-left: 5px;
}

.sidep{
  margin-bottom: 0px;
  font-size: 14px;
}

}
