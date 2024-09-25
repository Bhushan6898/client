// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // Connects i18next with react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "appTitle": "Mahaluxmi Hardware",
          "signIn": "Sign In",
          "signUp": "Sign Up",
          "welcomeMessage": "Hello! Please sign in or sign up.",
          "allPages": "All Pages",
          "checkout": "Checkout",
          "contactUs": "Contact Us",
          "blog": "Blog",
          "blogDetail": "Blog Detail",
          "buildingMaterial": "Building Material",
          "plumbing": "Plumbing",
          "electronics": "Electronics",
          "addProduct": "Add Product",
          "View": "View Products",
          "Forgotpassword": "Forgot password",
          "Or": "Or you can join with",
          "Create": "Create",
          "formSubmitSuccess": "Form submitted successfully!",
          "formSubmitError": "Failed to submit the form, please try again.",
          "firstName": "First Name",
          "firstNamePlaceholder": "Enter your first name",
          "lastName": "Last Name",
          "lastNamePlaceholder": "Enter your last name",
          "mobileNumber": "Mobile Number",
          "mobileNumberPlaceholder": "Enter your mobile number",
          "email": "Email",
          "emailPlaceholder": "Enter your email address",
          "password": "Password",
          "city": "City",
          "cityPlaceholder": "Enter your city",
          "state": "State",
          "statePlaceholder": "Enter your state",
          "country": "Country",
          "countryPlaceholder": "Enter your country",
          "orJoinWith": "Or you can join with"
        },
      },
      hi: {
        translation: {
          "appTitle": "महालक्ष्मी हार्डवेयर",
          "signIn": "साइन इन करें",
          "signUp": "साइन अप करें",
          "welcomeMessage": "नमस्ते! कृपया साइन इन या साइन अप करें।",
          "allPages": "सभी पृष्ठ",
          "checkout": "चेकआउट",
          "contactUs": "संपर्क करें",
          "blog": "ब्लॉग",
          "blogDetail": "ब्लॉग विवरण",
          "buildingMaterial": "निर्माण सामग्री",
          "plumbing": "प्लंबिंग",
          "electronics": "इलेक्ट्रॉनिक्स",
          "addProduct": "उत्पाद जोड़ें",
          "View": "उत्पाद देखें",
          "Forgotpassword": "पासवर्ड भूल गए",
          "Or": "या आप जुड़ सकते हैं",
          "Create": "बनाएं",
          "formSubmitSuccess": "फॉर्म सफलतापूर्वक सबमिट किया गया!",
          "formSubmitError": "फॉर्म जमा करने में विफल, कृपया पुनः प्रयास करें।",
          "firstName": "पहला नाम",
          "firstNamePlaceholder": "अपना पहला नाम दर्ज करें",
          "lastName": "अंतिम नाम",
          "lastNamePlaceholder": "अपना अंतिम नाम दर्ज करें",
          "mobileNumber": "मोबाइल नंबर",
          "mobileNumberPlaceholder": "अपना मोबाइल नंबर दर्ज करें",
          "email": "ईमेल",
          "emailPlaceholder": "अपना ईमेल पता दर्ज करें",
          "password": "पासवर्ड",
          "city": "शहर",
          "cityPlaceholder": "अपना शहर दर्ज करें",
          "state": "राज्य",
          "statePlaceholder": "अपना राज्य दर्ज करें",
          "country": "देश",
          "countryPlaceholder": "अपना देश दर्ज करें",
          "orJoinWith": "या आप जुड़ सकते हैं"
        },
      },
      mr: {
        translation: {
          "appTitle": "महालक्ष्मी हार्डवेअर",
          "signIn": "साइन इन करा",
          "signUp": "साइन अप करा",
          "welcomeMessage": "नमस्कार! कृपया साइन इन किंवा साइन अप करा.",
          "allPages": "सर्व पृष्ठे",
          "checkout": "चेकआउट",
          "contactUs": "संपर्क साधा",
          "blog": "ब्लॉग",
          "blogDetail": "ब्लॉग तपशील",
          "buildingMaterial": "बांधकाम साहित्य",
          "plumbing": "प्लंबिंग",
          "electronics": "इलेक्ट्रॉनिक्स",
          "addProduct": "उत्पादन जोडा",
          "View": "उत्पादने पहा",
          "Forgotpassword": "पासवर्ड विसरलात?",
          "Or": "किंवा आपण सामील होऊ शकता",
          "Create": "तयार करा",
          "formSubmitSuccess": "फॉर्म यशस्वीरित्या सबमिट झाला!",
          "formSubmitError": "फॉर्म सबमिट करण्यात अयशस्वी, कृपया पुन्हा प्रयत्न करा.",
          "firstName": "पहिले नाव",
          "firstNamePlaceholder": "तुमचे पहिले नाव प्रविष्ट करा",
          "lastName": "शेवटचे नाव",
          "lastNamePlaceholder": "तुमचे शेवटचे नाव प्रविष्ट करा",
          "mobileNumber": "मोबाइल नंबर",
          "mobileNumberPlaceholder": "तुमचा मोबाइल नंबर प्रविष्ट करा",
          "email": "ईमेल",
          "emailPlaceholder": "तुमचा ईमेल पत्ता प्रविष्ट करा",
          "password": "पासवर्ड",
          "city": "शहर",
          "cityPlaceholder": "तुमचे शहर प्रविष्ट करा",
          "state": "राज्य",
          "statePlaceholder": "तुमचे राज्य प्रविष्ट करा",
          "country": "देश",
          "countryPlaceholder": "तुमचा देश प्रविष्ट करा",
          "orJoinWith": "किंवा आपण सामील होऊ शकता"
        },
      },
    },
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language if the selected one is unavailable
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;