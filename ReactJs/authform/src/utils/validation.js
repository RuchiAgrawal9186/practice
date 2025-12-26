// for form validation

export const validation = (formData, isLogin) => {
  // take formData and signup/login tab checking
  const newErrors = {};

  // name validation for signup
  if (!isLogin && !formData?.name?.trim()) {
    newErrors.name = "Name is required";
  }

  // email validation for signup and login with regex

  if (!formData?.email?.trim()) {
    newErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = "Enter a valid email address";
  }

  // Password validation for signup and login with regex
  if (!formData?.password) {
    newErrors.password = "Password is required";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
      formData.password
    )
  ) {
    newErrors.password =
      "Password must contain uppercase, lowercase, number, special character & min 6 characters";
  }

  // Confirm password (Signup only) check password and confirm password is match or not match
  if (!isLogin) {
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
  }

  return newErrors; // return all errors if there
};
