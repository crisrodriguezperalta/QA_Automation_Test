export function generateUser() {
  const timestamp = Date.now();

  return {
    id: timestamp % 2147483647,
    username: `qa_user_${timestamp}`,
    firstName: "Cristina",
    lastName: "QA",
    email: `qa_${timestamp}@example.com`,
    password: "QaTest123!",
    phone: "593999999999",
    userStatus: 1
  };
}