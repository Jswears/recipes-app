const axiosInstance = {
  get: jest.fn(() => Promise.resolve({data: 'mocked data'})),
};

export default axiosInstance;
