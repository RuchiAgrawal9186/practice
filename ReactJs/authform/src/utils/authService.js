// for storing user data in localstorage for signup and login purpose

// define key to store data into in local storage
const USER_KEYS = "users";

// get all data from localstorage
export const getUsers = () => {
  const users = localStorage.getItem(USER_KEYS);
  return users ? JSON.parse(users) : [];
};

// insert data into localstorage
export const setUsers = (userData) => {
  return localStorage.setItem(USER_KEYS, JSON.stringify(userData));
};

// signup validation

export const signUpUser = (userData) => {
  const users = getUsers();

  const userExist = users?.some((el) => el?.email === userData?.email); // check already given email is there or not

  if (userExist) {
    return { message: "Email already exist", success: false };
  }

  // if its first time then it will store data in localstorage

  users.push(userData);
  setUsers(users);
  return { success: true, message: "SignUp successfully" };
};

// login validation

export const loginUser = (userData) => {
  const users = getUsers();

  // check give email and password is match with any exist data
  const user = users?.find(
    (el) => el?.email === userData?.email && el?.password === userData?.password
  );

  if (user) {
    return { success: true, message: "Login successfully" };
  } else {
    return {
      success: false,
      message: "Invalid email or password / don't have account",
    };
  }
};
