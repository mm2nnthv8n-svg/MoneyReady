import type { Lesson } from "../types";

// BUDGETING COURSE CONTENT. Edit the text between the quotes.
// To add a lesson, copy one block below, paste it after the last one, and change the words.
// "Needs source review" means nobody has checked this against an official source yet.
const REVIEW = "Needs source review";

export const budgetingLessons: Lesson[] = [
  {
    slug: "what-is-a-budget",
    title: "What a budget is",
    objective: "Explain what a budget is and why people make one.",
    lastReviewed: REVIEW,
    steps: [
      { type: "text", heading: "A budget is a plan for your money", body: "A budget compares the money you expect to receive with the money you expect to spend or save. It does not have to be strict. It is a way to decide where your money goes instead of wondering where it went." },
      { type: "definition", term: "Budget", meaning: "A plan that matches expected income with spending and saving for a period of time, often one month." },
      { type: "example", body: "Maya gets $200 a month from a part-time job. She expects to spend $60 on food out, $40 on her phone plan, and $30 on bus fare. Her plan shows $70 left to save or spend on something else." },
      { type: "why", body: "When you can see your plan, you can spot a shortfall before it happens and choose what matters most to you." },
    ],
    takeaways: ["A budget is a plan that compares income with spending and saving.", "It helps you make choices on purpose.", "Different people will have different budgets."],
    questions: [
      { kind: "multiple-choice", prompt: "What does a budget compare?", options: ["Income and planned spending and saving", "Your age and your grades", "Prices at two stores"], answer: 0, explanation: "A budget lines up the money coming in with the money going out or set aside.", whyItMatters: "Seeing both sides at once shows whether your plan adds up." },
      { kind: "true-false", prompt: "A budget has to look exactly the same for every person.", options: ["True", "False"], answer: 1, explanation: "Income, costs, and goals are different for everyone.", whyItMatters: "Your budget should fit your situation, not someone else's." },
      { kind: "scenario", prompt: "Maya plans to spend $130 of her $200. How much is left?", options: ["$70", "$130", "$330"], answer: 0, explanation: "$200 minus $130 is $70.", whyItMatters: "Knowing what is left lets you decide to save it or spend it on purpose." },
    ],
  },
  {
    slug: "income",
    title: "Income",
    objective: "Tell the difference between pay before deductions and take-home pay.",
    lastReviewed: REVIEW,
    steps: [
      { type: "text", heading: "Income is money coming in", body: "Income can come from a job, an allowance, gifts, or selling things. A budget starts with what you expect to receive, not what you hope to receive." },
      { type: "definition", term: "Take-home pay (net pay)", meaning: "The amount you actually receive after taxes and other deductions are taken out of your paycheck." },
      { type: "example", body: "A job pays $12 an hour and you work 20 hours. That is $240 before anything is taken out. Your paycheck may show less. Plan with the amount you actually receive." },
      { type: "why", body: "If you budget with the bigger number, you may plan to spend money you never get." },
    ],
    takeaways: ["Income is money coming in.", "Budget with take-home pay, not the bigger number.", "Income that changes a lot is harder to plan around."],
    questions: [
      { kind: "multiple-choice", prompt: "Which amount should you use when budgeting?", options: ["Your take-home pay", "The amount before deductions", "A guess about a future raise"], answer: 0, explanation: "Take-home pay is the money you can actually spend or save.", whyItMatters: "It keeps your plan based on real money." },
      { kind: "true-false", prompt: "Income that changes from month to month, like babysitting, can make planning harder.", options: ["True", "False"], answer: 0, explanation: "When income varies, it is harder to know what to expect.", whyItMatters: "Many people plan with a cautious estimate when income is uneven." },
      { kind: "scenario", prompt: "You worked 15 hours at $10 an hour. Some pay is withheld and your paycheck shows $138. Which number goes in your budget?", options: ["$150", "$138", "$10"], answer: 1, explanation: "$138 is what you actually receive.", whyItMatters: "Using $150 would make you plan $12 you never get." },
    ],
  },
  {
    slug: "fixed-and-variable-expenses",
    title: "Fixed and variable expenses",
    objective: "Sort expenses into fixed and variable.",
    lastReviewed: REVIEW,
    steps: [
      { type: "definition", term: "Fixed expense", meaning: "A cost that stays about the same each month, like a phone plan or subscription." },
      { type: "definition", term: "Variable expense", meaning: "A cost that changes from month to month, like food or entertainment." },
      { type: "example", body: "A $15 monthly streaming subscription is fixed. What you spend on snacks or rides with friends can be different every month." },
      { type: "why", body: "Variable costs are often where you can adjust quickly. Fixed costs usually take more effort to change." },
    ],
    takeaways: ["Fixed expenses stay about the same.", "Variable expenses change.", "Knowing which is which shows where you have flexibility."],
    questions: [
      { kind: "multiple-choice", prompt: "Which is most likely a variable expense?", options: ["A flat-fee subscription", "Spending on snacks", "A phone plan with a set price"], answer: 1, explanation: "Snack spending changes depending on what you buy each month.", whyItMatters: "Variable costs are easier to change month to month." },
      { kind: "true-false", prompt: "A fixed expense can never change.", options: ["True", "False"], answer: 1, explanation: "Fixed means it is usually steady, but you can change a plan or cancel something.", whyItMatters: "Reviewing fixed costs from time to time can reveal options." },
      { kind: "scenario", prompt: "Your budget is $20 short this month. Which type of expense is usually quicker to adjust?", options: ["Variable expenses", "Fixed expenses", "Neither can be changed"], answer: 0, explanation: "You can often spend less on things like food out or entertainment right away.", whyItMatters: "Knowing where you can flex helps you fix a shortfall." },
    ],
  },
  {
    slug: "needs-vs-wants",
    title: "Needs vs. wants",
    objective: "Describe the difference between needs and wants, and why the line can be blurry.",
    lastReviewed: REVIEW,
    steps: [
      { type: "text", heading: "Needs and wants", body: "Needs are things you require to live, stay safe, and meet responsibilities, like basic food or getting to work. Wants make life more enjoyable, but you could go without them." },
      { type: "text", heading: "The line is blurry", body: "A phone may be a need for some people and a want for others, and a basic plan is different from the newest model. There is no single right answer, so think about your own situation and priorities." },
      { type: "example", body: "A ride to your job might be a need. Ordering delivery instead of eating what is at home is more of a want." },
      { type: "why", body: "Sorting needs from wants helps you decide what to protect first when money is tight." },
    ],
    takeaways: ["Needs are required; wants are optional.", "People draw the line in different places.", "Wants are not bad. You just choose them on purpose."],
    questions: [
      { kind: "multiple-choice", prompt: "Which is most clearly a want?", options: ["Limited-edition sneakers when you already have shoes", "Bus fare to your job", "Basic groceries"], answer: 0, explanation: "You already have shoes, so the new pair is optional.", whyItMatters: "Spotting wants shows where you can choose." },
      { kind: "true-false", prompt: "Everyone draws the line between needs and wants in exactly the same place.", options: ["True", "False"], answer: 1, explanation: "Situations and priorities differ.", whyItMatters: "It is your choice to make, based on your life." },
      { kind: "scenario", prompt: "This week you can cover only one: getting to work or a new video game. Which is usually the higher priority?", options: ["Getting to work", "The video game"], answer: 0, explanation: "Getting to work protects your income.", whyItMatters: "Protecting income usually comes before optional spending." },
    ],
  },
  {
    slug: "saving-and-emergency-funds",
    title: "Saving and emergency funds",
    objective: "Explain why people save and what an emergency fund is for.",
    lastReviewed: REVIEW,
    steps: [
      { type: "text", heading: "Saving is setting money aside", body: "Saving means keeping money for later. You can save for short goals, like a gift, or longer ones, like a car." },
      { type: "definition", term: "Emergency fund", meaning: "Money set aside for unexpected costs, such as a broken phone or a repair, so you do not have to borrow." },
      { type: "example", body: "A cracked phone screen costs $120 to fix. With $150 saved, it is a bad day. With $0 saved, you may have to borrow or skip other costs." },
      { type: "text", heading: "Start small", body: "Many people build an emergency fund in small steps. A small cushion is better than none, and you can grow it over time." },
      { type: "why", body: "Surprises happen to everyone. Savings can turn a crisis into an inconvenience." },
    ],
    takeaways: ["Saving is money set aside for later.", "An emergency fund is for surprises.", "Small amounts add up."],
    questions: [
      { kind: "multiple-choice", prompt: "What is an emergency fund mainly for?", options: ["Unexpected costs", "Buying things on sale", "Holiday gifts"], answer: 0, explanation: "It covers surprises you did not plan for.", whyItMatters: "It can keep one bad week from turning into debt." },
      { kind: "true-false", prompt: "Saving only matters if you can save a large amount.", options: ["True", "False"], answer: 1, explanation: "Small, regular amounts add up and build the habit.", whyItMatters: "Starting small is better than waiting." },
      { kind: "scenario", prompt: "Your phone breaks and costs $120 to fix. Which situation leaves you with the most options?", options: ["Having some savings set aside", "Having no savings", "Both are the same"], answer: 0, explanation: "With savings you can pay without borrowing.", whyItMatters: "More options means less stress and often lower cost." },
    ],
  },
  {
    slug: "build-a-monthly-budget",
    title: "Build a monthly budget",
    objective: "Build a simple monthly budget and see the tradeoffs.",
    lastReviewed: REVIEW,
    steps: [
      { type: "text", heading: "Put it together", body: "A simple monthly budget has three parts: your income, your planned spending and saving, and what is left. Start with take-home income, list fixed costs, estimate variable costs, then decide how much to save." },
      { type: "text", heading: "Your turn", body: "You just started a summer job and take home $1,000 this month. Decide how you will use it." },
      { type: "allocator" },
      { type: "why", body: "Checking your plan at the end of the month shows what to change next time." },
    ],
    takeaways: ["Start with take-home income.", "Plan fixed costs, estimate variable costs, choose savings.", "Update your budget when things change."],
    questions: [
      { kind: "multiple-choice", prompt: "What is the first step in building a budget?", options: ["Know your take-home income", "Buy something you want", "Close your account"], answer: 0, explanation: "You can only plan money you know you have.", whyItMatters: "Everything else is built on that number." },
      { kind: "scenario", prompt: "You planned $1,050 of spending on $1,000 of income. What does that mean?", options: ["You planned to spend $50 more than you earn", "You are $50 ahead", "Nothing, it balances itself"], answer: 0, explanation: "Spending above income creates a gap that has to be covered somehow.", whyItMatters: "Spotting the gap early lets you adjust before it becomes a problem." },
      { kind: "true-false", prompt: "You should update your budget when your income or costs change.", options: ["True", "False"], answer: 0, explanation: "A budget is a living plan, not a one-time document.", whyItMatters: "An outdated budget stops matching real life." },
    ],
  },
  {
    slug: "assessment",
    title: "Course assessment",
    objective: "Check what you learned in the Budgeting course.",
    assessment: true,
    lastReviewed: REVIEW,
    steps: [],
    takeaways: ["You can explain what a budget is.", "You can separate fixed from variable and needs from wants.", "You know why saving for surprises matters."],
    questions: [
      { kind: "multiple-choice", prompt: "A budget is best described as...", options: ["A plan matching income with spending and saving", "A type of loan", "A bank account"], answer: 0, explanation: "It is a plan for your money.", whyItMatters: "Planning is what makes the rest possible." },
      { kind: "multiple-choice", prompt: "Which income number should go in your budget?", options: ["Take-home pay", "A possible future raise", "The highest amount you ever earned"], answer: 0, explanation: "Take-home pay is what you actually receive.", whyItMatters: "It keeps the plan realistic." },
      { kind: "true-false", prompt: "Variable expenses can change from month to month.", options: ["True", "False"], answer: 0, explanation: "That is what makes them variable.", whyItMatters: "They are often where you can adjust quickly." },
      { kind: "multiple-choice", prompt: "Which is most likely a fixed expense?", options: ["A flat-fee monthly subscription", "Snacks", "Rides with friends"], answer: 0, explanation: "The price is the same each month.", whyItMatters: "Fixed costs are the base of your plan." },
      { kind: "scenario", prompt: "You have $40 left after needs. You want to go out, buy a game, and save some. Which approach fits best?", options: ["Decide your priorities and split it on purpose", "There is exactly one correct split", "Spend it all first, then see"], answer: 0, explanation: "There is no universal split. What matters is that you choose.", whyItMatters: "Choosing on purpose is the point of budgeting." },
      { kind: "true-false", prompt: "An emergency fund is for planned purchases.", options: ["True", "False"], answer: 1, explanation: "It is for unexpected costs.", whyItMatters: "Keeping it separate protects it for real surprises." },
      { kind: "scenario", prompt: "Your phone repair costs $120 and you have $150 saved. What happens?", options: ["You can cover it and have $30 left", "You are $30 short", "You have $270"], answer: 0, explanation: "$150 minus $120 is $30.", whyItMatters: "Savings turn a surprise into a manageable cost." },
      { kind: "multiple-choice", prompt: "Why review your budget regularly?", options: ["Income and costs change", "Budgets expire every week", "It is required by law"], answer: 0, explanation: "Life changes, so plans should too.", whyItMatters: "A current budget is a useful budget." },
    ],
  },
];
