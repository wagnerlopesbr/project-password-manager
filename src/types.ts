export type ButtonProps = {
  children: React.ReactNode;
  handleClick: () => void;
};

export type FormProps = {
  handleClick: () => void;
  passwordAdd: (newPassword: FormInputType) => void;
};

export type FormInputType = {
  service: string;
  login: string;
  password: string;
  url: string;
};
