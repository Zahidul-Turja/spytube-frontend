import API from "./axios";

export async function getAuthUrl() {
  const res = await API.get("/auth/google/url");
  return res.data;
}

export async function exchangeCodeForToken(code) {
  const res = await API.post("/auth/google", { code });
  return res.data;
}

export async function checkToken(token) {
  try {
    const res = await API.get(`/auth/verify_token/${token}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return { detail: "Unknown error" };
  }
}

export async function getDashboardData(token) {
  try {
    const res = await API.get("/analytics/dashboard", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return { detail: "Unknown error" };
  }
}

export async function getCurrentUser() {
  const token = localStorage.getItem("access_token");
  if (!token) return null;
  try {
    const res = await API.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return { detail: "Unknown error" };
  }
}
