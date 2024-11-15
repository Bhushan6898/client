import HomeView from "./views/Home";
import SignInView from "./views/account/SignIn";
import SignUpView from "./views/account/SignUp"; // Import SignUpView
import ForgotPasswordView from "./views/account/ForgotPassword";
import OrdersView from "./views/account/Orders";
import WishlistView from "./views/account/Wishlist";
import NotificationView from "./views/account/Notification";
import MyProfileView from "./views/account/MyProfile";
import ProductListView from "./views/product/List";
import ProductDetailView from "./views/product/Detail";
import StarZoneView from "./views/product/StarZone";
import CartView from "./views/cart/Cart";
import CheckoutView from "./views/cart/Checkout";
import InvoiceView from "./views/cart/Invoice";
import DocumentationView from "./views/Documentation";
import NotFoundView from "./views/pages/404";
import InternalServerErrorView from "./views/pages/500";
import ContactUsView from "./views/pages/ContactUs";
import SupportView from "./views/pages/Support";
import BlogView from "./views/blog/Blog";
import BlogDetailView from "./views/blog/Detail";
import Addproduct from "./components/add_product/add";
import Building_material from "./components/building_material/building_material";
import Billing from "./components/billing/billing";
import Billinggdata from "./components/billing/billinggdata";
import Electric_material from "./components/electric/electric_material";
 import Dashboard from "./components/dashbord/indexs";
export const appRoutes = [
  { path: "/", element: <HomeView /> },
  { path: "/signin", element: <SignInView /> },
  { path: "/account/signup", element: <SignUpView /> }, // Ensure this route is defined
  { path: "/account/forgotpassword", element: <ForgotPasswordView /> },
  { path: "/account/profile", element: <MyProfileView /> },
  { path: "/account/orders", element: <OrdersView /> },
  { path: "/dashbord", element: <Dashboard /> },
  { path: "/account/wishlist", element: <WishlistView /> },
  { path: "/account/notification", element: <NotificationView /> },
  { path: "/category", element: <ProductListView /> },
  { path: "/addproduct", element: <Addproduct /> },
  { path: "/building", element: <Building_material /> },
  { path: "/billing", element: <Billing /> },
  { path: "/billingdata", element: <Billinggdata /> },
  { path: "/electric", element: <Electric_material /> },
  { path: "/product/detail", element: <ProductDetailView /> },
  { path: "/star/zone", element: <StarZoneView /> },
  { path: "/cart", element: <CartView /> },
  { path: "/checkout", element: <CheckoutView /> },
  { path: "/invoice", element: <InvoiceView /> },
  { path: "/documentation", element: <DocumentationView /> },
  { path: "/contact-us", element: <ContactUsView /> },
  { path: "/support", element: <SupportView /> },
  { path: "/blog", element: <BlogView /> },
  { path: "/blog/detail", element: <BlogDetailView /> },
  { path: "/500", element: <InternalServerErrorView /> },
  { path: "*",  element: <HomeView  /> }// Catch-all for undefined routes
];
