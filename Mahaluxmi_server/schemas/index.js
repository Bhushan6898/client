import mongoose from "mongoose";

const Schema = mongoose.Schema;

const clientSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  mobileNumber: { type: String },
  email: { type: String },
  country: { type: String },
  city: { type: String },
  state: { type: String },
  password: { type: String },
  role: { type: String, default: "client" },
  profileImage: { type: String },
  status: { type: String, enum: ["active", "inactive"], default: "inactive" },
  permissions: { 
    type: String, 
    enum: ["Granted", "notGranted"],  // Change "granted" to "Granted"
    default: "notGranted" 
  }
});


export const clientModel = mongoose.model("client", clientSchema, "client");
const otp = new mongoose.Schema({
  otp: { type: String },
  email: { type: String },
  created_at: { type: Date, default: Date.now, expires: '2m' }
})
export const otpmodel = mongoose.model("otp", otp, "otp");
const billSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  productList: [
    {
      productName: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true }
    }
  ],
  totalAmount: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const BillModel = mongoose.model('Bill', billSchema);

export default BillModel;
const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  category: { type: String, required: true }, // e.g., Tools, Electrical, Plumbing, etc.
  brand: { type: String },
  sku: { type: String, unique: true, required: true }, // Stock Keeping Unit
  imageUrl: { type: String }, // URL for product image
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  addedBy: { type: mongoose.Schema.Types.ObjectId, ref: "client" }, // Reference to the user who added the product
});

productSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

export const productModel = mongoose.model("product", productSchema, "products");


const notificationSchema = new Schema({
  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "client",
    required: true
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "client"
  },
  type: {
    type: String,
    enum: ["productUpdate", "billing", "system", "custom"],
    required: true
  },
  message: { type: String, required: true },
  link: { type: String },
  status: {
    type: String,
    enum: ["unread", "read"],
    default: "unread"
  },
  createdAt: { type: Date, default: Date.now },
  readAt: { type: Date }
});
export const notificationModel = mongoose.model("Notification", notificationSchema, "notifications");