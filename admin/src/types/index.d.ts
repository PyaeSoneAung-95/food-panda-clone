type Employee = {
  _id: string;
  name: string;
  email: string;
  image: string;
};

type AuthContext = {
  user: Employee | null;
  addUser: (data: Employee) => void;
  removeUser: () => void;
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
  data: T;
};
