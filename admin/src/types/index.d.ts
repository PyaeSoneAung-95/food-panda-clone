type Employee = {
  _id: string;
  name: string;
  email: string;
  image: string;
};

type Restaurant = {
  _id: string;
  name: string;
  image: string;
  category: string;
  location: string;
  author_id: string;
};
type Menu = {
  _id: string;
  name: string;
  price: string;
  image: string;
  category: string;
};

type RestaurantDetail = {
  menus: Menu[];
} & Restaurant;

type RestaurantForm = {
  name: string;
  image: string | File;
  category: string;
  location: string;
};

type AuthContext = {
  user: Employee | null;
  addUser: (data: Employee) => void;
  removeUser: () => void;
};

type RestaurantContext = {
  toggleRefetch: () => void;
  restaurants: Restaurant[];
};

type MenuContext = {
  toggleRefetch: () => void;
  restaurantDetail: Restaurant | null;
  menus: Menu[];
};

type InputProps = {
  name: string;
  label: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "name">;

type LoginForm = {
  email: string;
  password: string;
};

type SignupForm = {
  name: string;
  email: string;
  password: string;
};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  containerStyles?: string;
  children: React.ReactNode;
};

type AspectRatioProps = {
  ratio?: number;
  children?: React.ReactNode;
  customStyles?: string;
};

type ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T | null;
};
