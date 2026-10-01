import type { Lesson } from "../types";

// BANKING & SAVING COURSE CONTENT. Edit the text between the quotes.
// "Needs source review" means nobody has checked this against an official source yet.
const REVIEW = "Needs source review";

export const bankingLessons: Lesson[] = [
  {
    slug: "checking-and-savings",
    title: "Checking and savings accounts",
    objective: "Describe what checking and savings accounts are for and how they differ.",
    lastReviewed: REVIEW,
    steps: [
      { type: "definition", term: "Checking account", meaning: "A bank account built for everyday spending. You can pay bills, use a debit card, and move money in and out easily." },
      { type: "definition", term: "Savings account", meaning: "A bank account meant for money you want to keep rather than spend soon. It usually pays interest, and it may limit how often you can take money out." },
      { type: "example", body: "Sam gets paid into checking and uses it for food and rides. Each payday, Sam moves $25 into savings so it stays separate from daily spending." },
      { type: "text", heading: "Opening an account as a teen", body: "Many banks require a parent or guardian to open or co-own an account if you are under 18. Rules and options differ by bank, so it is worth asking." },
      { type: "why", body: "Keeping spending money and saved money in different places makes it harder to spend your savings by accident." },
    ],
    takeaways: ["Checking is for everyday spending.", "Savings is for money you want to keep.", "Keeping them separate helps you protect your savings."],
    questions: [
      { kind: "multiple-choice", prompt: "Which account is mainly built for everyday spending?", options: ["Savings account", "Checking account", "Neither"], answer: 1, explanation: "Checking accounts are designed for frequent payments and withdrawals.", whyItMatters: "Using the right account for the job keeps your money organized." },
      { kind: "true-false", prompt: "Keeping savings in a separate account can make it harder to spend by accident.", options: ["True", "False"], answer: 0, explanation: "Separating the money adds a small barrier between you and your savings.", whyItMatters: "Small barriers help people stick to their savings goals." },
      { kind: "scenario", prompt: "Sam wants to save for a trip but keeps spending the money in checking. What could help?", options: ["Moving savings to a separate savings account", "Checking the balance less often", "Spending more now"], answer: 0, explanation: "A separate account keeps the money out of everyday reach.", whyItMatters: "Where money sits changes how easily it gets spent." },
    ],
  },
  {
    slug: "debit-cards-atms-and-fees",
    title: "Debit cards, ATMs, and fees",
    objective: "Explain how debit cards and ATMs work and how fees can add up.",
    lastReviewed: REVIEW,
    steps: [
      { type: "definition", term: "Debit card", meaning: "A card linked to your checking account. When you use it, the money comes out of your own account, not from a loan." },
      { type: "text", heading: "ATMs", body: "An ATM lets you take out cash or check your balance. Using an ATM that is not run by your bank can mean fees from both the ATM owner and your own bank." },
      { type: "text", heading: "Fees", body: "Some accounts charge fees, such as monthly fees or fees for spending more than your balance. Depending on the bank and the choices you make, a purchase might be declined or a fee might apply. Reading the fee list before opening an account helps." },
      { type: "example", body: "A $3 ATM fee plus a $2 fee from your bank is $5 to take out $20. Doing that every week adds up to about $260 over a year." },
      { type: "why", body: "Fees are small each time, but they can quietly take a real share of your money." },
    ],
    takeaways: ["A debit card spends your own money from checking.", "Out-of-network ATMs can cost extra.", "Read the fee list before you choose an account."],
    questions: [
      { kind: "multiple-choice", prompt: "When you pay with a debit card, where does the money come from?", options: ["A loan from the bank", "Your own account", "The store"], answer: 1, explanation: "A debit card draws from the money in your linked account.", whyItMatters: "It is a different thing from borrowing, which has to be paid back with interest." },
      { kind: "scenario", prompt: "An out-of-network ATM charges you $3 and your bank charges $2 to take out $20. What is the total fee?", options: ["$3", "$5", "$20"], answer: 1, explanation: "$3 plus $2 is $5.", whyItMatters: "Fees stack, so a small withdrawal can be costly." },
      { kind: "true-false", prompt: "Reading an account's fee list before you open it can help you avoid surprise costs.", options: ["True", "False"], answer: 0, explanation: "Fees differ from bank to bank and account to account.", whyItMatters: "Choosing a lower-fee account keeps more of your money." },
    ],
  },
  {
    slug: "interest-and-apy",
    title: "Interest and APY",
    objective: "Explain what interest and APY mean and why savings accounts can pay different amounts.",
    lastReviewed: REVIEW,
    steps: [
      { type: "definition", term: "Interest", meaning: "Money a bank pays you for keeping your money with it. On a loan, it is the money you pay for borrowing." },
      { type: "definition", term: "APY (annual percentage yield)", meaning: "The yearly rate of return on a savings account, including the effect of interest being added to the balance over time. It lets you compare accounts fairly." },
      { type: "text", heading: "High-yield savings accounts", body: "A high-yield savings account is a savings account that pays a higher rate than many standard ones. Rates change over time, so it is worth comparing APYs and checking for fees or minimum balances." },
      { type: "example", body: "If $1,000 earns a 4% APY for one year, it earns about $40. At 0.5%, it earns about $5. The rates here are made up to show the idea. Real rates change." },
      { type: "why", body: "Over time, a higher APY on the same money means more earned with no extra effort." },
    ],
    takeaways: ["Interest is what the bank pays you to hold your money.", "APY lets you compare savings accounts.", "Compare rates and also check fees and minimums."],
    questions: [
      { kind: "multiple-choice", prompt: "What does APY help you do?", options: ["Compare what savings accounts pay", "Find the nearest ATM", "Count your fees"], answer: 0, explanation: "APY puts accounts on the same yearly footing.", whyItMatters: "Comparing fairly helps you pick the better place for your savings." },
      { kind: "scenario", prompt: "With made-up rates, $1,000 at a 4% APY earns about how much in one year?", options: ["$4", "$40", "$400"], answer: 1, explanation: "4% of $1,000 is $40.", whyItMatters: "Doing the quick math shows what a rate means in dollars." },
      { kind: "true-false", prompt: "Savings account rates stay the same forever.", options: ["True", "False"], answer: 1, explanation: "Banks can change the rates they pay.", whyItMatters: "It is worth checking your rate from time to time." },
    ],
  },
  {
    slug: "keeping-money-safe",
    title: "Keeping your money safe: FDIC and NCUA",
    objective: "Explain what FDIC and NCUA insurance is and what it covers.",
    lastReviewed: REVIEW,
    steps: [
      { type: "definition", term: "FDIC insurance", meaning: "Protection from a U.S. government agency for deposits at FDIC-insured banks. If an insured bank fails, covered deposits are protected up to a limit." },
      { type: "definition", term: "NCUA insurance", meaning: "A similar protection for deposits at federally insured credit unions." },
      { type: "text", heading: "The limit", body: "The standard coverage limit is currently $250,000 per depositor, per insured bank, per ownership category. Check the agencies' websites for current rules, since they can change." },
      { type: "text", heading: "What is not covered", body: "This insurance protects deposits like checking and savings. It does not protect investments like stocks, and it does not cover money you lose to a scam." },
      { type: "why", body: "Before putting money anywhere, it helps to confirm the bank or credit union is federally insured." },
    ],
    takeaways: ["FDIC covers deposits at insured banks. NCUA covers insured credit unions.", "There is a coverage limit.", "Insurance does not cover investments."],
    questions: [
      { kind: "multiple-choice", prompt: "What does FDIC insurance protect?", options: ["Stock investments", "Deposits at insured banks", "Money lost to scams"], answer: 1, explanation: "It protects covered deposits if an insured bank fails.", whyItMatters: "Knowing what is covered tells you what is safe." },
      { kind: "true-false", prompt: "NCUA insurance applies to deposits at federally insured credit unions.", options: ["True", "False"], answer: 0, explanation: "NCUA is the agency for federally insured credit unions.", whyItMatters: "Credit unions have their own protection." },
      { kind: "scenario", prompt: "You are choosing where to open an account. What is a smart first check?", options: ["Whether it is federally insured", "Whether its logo looks nice", "How many ads it runs"], answer: 0, explanation: "Insurance protects your deposits if the institution fails.", whyItMatters: "It is a quick check that protects your money." },
    ],
  },
  {
    slug: "compound-interest-and-emergency-savings",
    title: "Compound interest and emergency savings",
    objective: "Explain how compound interest works and how it connects to saving for emergencies.",
    lastReviewed: REVIEW,
    steps: [
      { type: "definition", term: "Compound interest", meaning: "Interest earned on your original money and also on the interest you already earned." },
      { type: "example", body: "Take $1,000 earning 5% a year (a made-up rate). After year one it is $1,050. In year two, the 5% applies to $1,050, so it grows to $1,102.50. Simple interest on the original $1,000 would give only $1,100." },
      { type: "text", heading: "Time helps", body: "The longer money stays in the account, the more the interest-on-interest effect adds up. Adding to the account regularly adds to it too." },
      { type: "text", heading: "Emergency savings", body: "An emergency fund is money set aside for surprises. Keeping it in a savings account means it can earn interest while it waits, and it stays easy to reach." },
      { type: "why", body: "Small, steady amounts saved early have more time to grow than larger amounts saved later." },
    ],
    takeaways: ["Compound interest is interest on interest.", "Time and regular deposits help it grow.", "A savings account is a common home for emergency money."],
    questions: [
      { kind: "multiple-choice", prompt: "What makes compound interest different from simple interest?", options: ["It pays interest on earlier interest too", "It has no limit", "It only works for loans"], answer: 0, explanation: "Interest gets added to the balance, and then earns interest itself.", whyItMatters: "That is why saving longer can matter so much." },
      { kind: "scenario", prompt: "With a made-up 5% rate, $1,000 grows to $1,050 after year one. About how much is it after year two?", options: ["$1,100", "$1,102.50", "$1,200"], answer: 1, explanation: "5% of $1,050 is $52.50, so the total is $1,102.50.", whyItMatters: "The second year earned more than the first because of compounding." },
      { kind: "true-false", prompt: "Money in a savings account for emergencies can earn interest while it waits.", options: ["True", "False"], answer: 0, explanation: "Many savings accounts pay interest on the balance.", whyItMatters: "Your safety cushion can grow a little while it sits." },
    ],
  },
  {
    slug: "assessment",
    title: "Course assessment",
    objective: "Check what you learned in the Banking & Saving course.",
    assessment: true,
    lastReviewed: REVIEW,
    steps: [],
    takeaways: ["You know what checking and savings accounts are for.", "You can spot fees and compare APYs.", "You know what FDIC and NCUA insurance cover."],
    questions: [
      { kind: "multiple-choice", prompt: "A checking account is mainly for...", options: ["Everyday spending", "Locking money away for years", "Investing in stocks"], answer: 0, explanation: "Checking is built for frequent use.", whyItMatters: "Using the right account keeps money organized." },
      { kind: "true-false", prompt: "A debit card spends money you already have in your account.", options: ["True", "False"], answer: 0, explanation: "It draws from your linked account.", whyItMatters: "That is different from borrowing." },
      { kind: "scenario", prompt: "You pay $2 to your bank and $3 to the ATM owner to take out cash. What is the total fee?", options: ["$2", "$3", "$5"], answer: 2, explanation: "$2 plus $3 is $5.", whyItMatters: "Fees can stack up." },
      { kind: "multiple-choice", prompt: "APY is useful because it...", options: ["Lets you compare savings accounts", "Shows your balance", "Removes all fees"], answer: 0, explanation: "It puts yearly earnings on a common basis.", whyItMatters: "It helps you choose an account." },
      { kind: "scenario", prompt: "With a made-up 4% APY, about how much does $500 earn in a year?", options: ["$2", "$20", "$200"], answer: 1, explanation: "4% of $500 is $20.", whyItMatters: "Turning a rate into dollars makes it concrete." },
      { kind: "multiple-choice", prompt: "FDIC insurance does NOT protect...", options: ["Savings deposits at an insured bank", "Stock investments", "Checking deposits at an insured bank"], answer: 1, explanation: "It covers deposits, not investments.", whyItMatters: "Knowing the limits avoids false confidence." },
      { kind: "true-false", prompt: "Compound interest means earning interest on interest.", options: ["True", "False"], answer: 0, explanation: "Earlier interest becomes part of the balance.", whyItMatters: "It is why time matters in saving." },
      { kind: "scenario", prompt: "You are picking where to keep emergency money. Which is a good first check?", options: ["That the bank or credit union is federally insured", "That it has the flashiest app", "That it advertises the most"], answer: 0, explanation: "Insurance protects your deposits.", whyItMatters: "Your safety fund should be safe." },
    ],
  },
];
