export interface UserRequestDto {
  name: string;
  email: string;
  password: string;
  curriculum?: string;
  skills?: [];
}
