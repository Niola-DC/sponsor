import {
  ArrowTrendingDownIcon,
  ClipboardDocumentCheckIcon,
  EyeSlashIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import Product1 from "../assets/image/product-1.png";
import Product2 from "../assets/image/product-2.png";
import Product3 from "../assets/image/product-3.png";

export const PRODUCT_DETAILS = [
  {
    title: "Transparent Education Loans",
    description:
      "PaySkul offers education loans with flexible repayment options, ensuring that students can pursue their dreams without the burden of financial stress.",
    image: Product1,
  },
  {
    title: "Get Your Books Now, Pay Later",
    description:
      "No need to wait for your textbooks! PaySkul allows you to access your favorite books now and pay for them later with easy loan options and manageable payments.",
    image: Product2,
  },
  {
    title: "Hassle-Free Loans for Your Perfect School",
    description:
      "Finding the right school just got easier! Whether you're securing education for yourself or your child, PaySkul provides affordable loans to cover tuition and expenses.",
    image: Product3,
  },
];

export const PRIORITY_DETAILS = [
  {
    icon: WalletIcon,
    text: "Flexible repayment plans",
  },
  {
    icon: ArrowTrendingDownIcon,
    text: "Low interest rate",
  },
  {
    icon: ClipboardDocumentCheckIcon,
    text: "Easy Application Process",
  },
  {
    icon: EyeSlashIcon,
    text: "No hidden charges",
  },
];

export const FAQ = [
  {
    id: 1,
    question: "WHAT IS PAYSKUL?",
    answer:
      "Payskul is a digital platform that helps Parents and Students flexibly access low interest rates to pay tuition fees, books, uniforms, excursions amongst other school related financial demands while also giving accessibility to some Educational Insurance to help students globally achieve their academic goals.",
  },
  {
    id: 2,
    question: "WHAT DO I NEED TO SIGN UP FOR PAYSKUL?",
    answer:
      "To sign up for Payskul, you either need to be a Working Class/Business Owning Parent applying for a Child or a Student of 18 Years and above on a regular pay roll with some good Credit Score; Have a Valid National ID, BVN e.t.c Then you have to be an active Student of a School or enrolling student of a school. Finally, your school has to be enrolled on the Payskul Platform",
  },
  {
    id: 3,
    question: "WHAT SETS PAYSKUL APART?",
    answer:
      "Payskul stands out due to its low interest rates, fast processing times for tuition and other school-related expenses, and easy access to affordable educational options. Additionally, Payskul offers educational insurance to support students in achieving their academic goals.",
  },

  {
    id: 4,
    question: "CAN I USE PAYSKUL FOR POSTGRADUATE STUDIES?",
    answer:
      "Currently, Payskul is available to students who are actively enrolled or enrolling in a school. If you meet the eligibility criteria and are enrolled in a postgraduate program at a school registered with Payskul, you should be able to use the platform to help finance your education.",
  },
];
