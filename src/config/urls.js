const BASE_URL = "https://dummyjson.com"

const getApiUrl = (endPoint) => BASE_URL + endPoint

const PRODUCTS = getApiUrl("/products")
const USERS = getApiUrl("/users")
const POSTS = getApiUrl("/posts")
const COMMENTS = getApiUrl("/comments")
const QUOTES = getApiUrl("/quotes")




