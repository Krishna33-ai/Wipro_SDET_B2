// //question 1
// const rawFlights = [
//   "London-Paris:150",
//   "New York-Tokyo:invalid",
//   "Dubai-Mumbai:450",
//   "Berlin-Rome:95"
// ];

// function cleanflights(rawflights) {
//     const parsed = rawflights.map(flight => {       
//         const [route, priceStr] = flight.split(":");
//         const [from, to] = route.split("-");
//         const price = Number(priceStr);            
//         return {
//             from,
//             to,
//             price: isNaN(price) ? 0 : price         
//         };
//     });

//     const filtered = parsed.filter(f => f.price >= 100 && f.price <= 500);
//     const sorted = filtered.sort((a, b) => a.price - b.price);  
//     return JSON.stringify(sorted, null, 2);
// }

// console.log(cleanflights(rawFlights));

//question 2

const cart = [
  { name: "Smartphone",  price: 800, category: "Electronics" },
  { name: "Toaster",     price: 50,  category: "Home"        },
  { name: "Headphones",  price: 250, category: "Electronics" },
  { name: "Monitor",     price: 150, category: "Electronics" }
];


const isEligible = (product) => {
    if (!product || product.price == null || !product.category) return false;
    return product.category === "Electronics" && product.price > 200;
};


function applyPromo(cart, promoCallback) {
    if (!cart || !Array.isArray(cart)) return [];

    let discountCount = 0;
    let totalSaving   = 0;

    const updatedCart = cart.map(product => {
        if (promoCallback(product)) {
            const saving   = product.price * 0.10;
            totalSaving   += saving;
            discountCount += 1;
            return { ...product, price: product.price - saving, isDiscounted: true };
        }
        return { ...product, isDiscounted: false };
    });

    
    console.log(`Promotion applied! ${discountCount} items were discounted for a total saving of $${totalSaving}.`);

    
    setTimeout(() => {
        console.log("Server response:", JSON.stringify(updatedCart, null, 2));
    }, 1000);

    return updatedCart;
}

applyPromo(cart, isEligible);