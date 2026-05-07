//question 1
const rawFlights = [
  "London-Paris:150",
  "New York-Tokyo:invalid",
  "Dubai-Mumbai:450",
  "Berlin-Rome:95"
];

function cleanflights(rawflights) {
    const parsed = rawflights.map(flight => {       
        const [route, priceStr] = flight.split(":");
        const [from, to] = route.split("-");
        const price = Number(priceStr);            
        return {
            from,
            to,
            price: isNaN(price) ? 0 : price         
        };
    });

    const filtered = parsed.filter(f => f.price >= 100 && f.price <= 500);
    const sorted = filtered.sort((a, b) => a.price - b.price);  
    return JSON.stringify(sorted, null, 2);
}

console.log(cleanflights(rawFlights));

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


//question 3
const rawMovies = [
  "Inception|Sci-Fi|12000",
  "The Lion King|Animation|8000",
  "Mad Max|Action|invalid",
  "The Matrix|Sci-Fi|15000",
  "Gladiator|Action|4500"
];

const topGenres = ["Action", "Sci-Fi"];

const isTopContent = (entry) => {
  if (!entry || entry.views == null) return false;
  return topGenres.includes(entry.genre) && entry.views > 5000;
};


function buildStreamReport(movieList) {
  if (!movieList || !Array.isArray(movieList)) return "[]";

  const catalog = movieList.map(item => {
    const parts      = item.split("|");
    const title      = parts[0] || "Unknown";
    const category   = parts[1] || "Unknown";
    const rawCount   = Number(parts[2]);
    const viewCount  = isNaN(rawCount) ? 0 : rawCount;

    return { name: title, genre: category, views: viewCount };
  });

  const highlights = catalog.filter(isTopContent);

  const ranked = highlights.sort((x, y) => y.views - x.views);

  return JSON.stringify(ranked, null, 2);
}

console.log(buildStreamReport(rawMovies));

question 4
const employees = [
  { id: 101, name: "Alice",   salary: 6000 },
  { id: 102, name: "Bob",     salary: 3500 },
  { id: 103, name: "Charlie", salary: 5200 }
];

const taxLogic = (salary) => {
  if (salary == null || isNaN(salary)) return 0;
  return salary > 5000 ? 0.20 : 0.10;
};

function calculatePayroll(staff, taxCallback) {
  if (!staff || !Array.isArray(staff)) return [];

  let totalPayout = 0;

  const ledger = staff.map(person => {
    const gross     = person.salary || 0;
    const rate      = taxCallback(gross);
    const deduction = gross * rate;
    const netSalary = gross - deduction;
    const standing  = netSalary > 4000 ? "Premium" : "Standard";
    totalPayout    += netSalary;

    return { ...person, taxRate: rate, deduction, netSalary, status: standing };
  });

  console.log(`Payroll Processed: Total Net Payout is $${totalPayout} for ${staff.length} employees.`);

  setTimeout(() => {
    console.log("Server confirmed:", JSON.stringify(ledger, null, 2));
  }, 2000);

  return ledger;
}

calculatePayroll(employees, taxLogic);
