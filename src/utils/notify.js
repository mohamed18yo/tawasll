import { toast } from "react-toastify";

export const notify = (type, message) =>
  toast(message, { type: type });