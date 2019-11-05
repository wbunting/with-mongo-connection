const apiHandler = (res, method, handlers) => {
  if (!Object.keys(handlers).includes(method)) {
    res.setHeader('Allow', Object.keys(handlers))
    res.status(405).end(`Method ${method} Not Allowed`)
  } else {
    handlers[method](res)
  }
}

export default apiHandler;