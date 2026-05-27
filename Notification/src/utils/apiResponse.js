class apiResponse {
  constructor(statusCode, message = "Success", data) {
    ((this.message = message),
      (this.statusCode = statusCode),
      (this.success = statusCode < 400),
      (this.data = data));
  }
}

export default apiResponse;
