import toast from "react-hot-toast";

class HttpErrorException {
  public message: string;

  constructor(message: string) {
    this.message = message;

    toast.error(this.message);
  }
}

export default HttpErrorException;
