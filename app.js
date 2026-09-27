const SUPABASE_URL = "https://yfnuncmhnsclqdxpahox.supabase.co";
const SUPABASE_KEY = "sb_publishable_V0W510JYnf0gRXI4_xydHg__MdSGGJP";

document.getElementById("f").addEventListener("submit", async (e) => {
  e.preventDefault();

  const student = {
    full_name: document.getElementById("name").value,
    dob: document.getElementById("dob").value,
    roll_no: document.getElementById("roll").value,
    guardian_name: document.getElementById("guardian").value,
    phone: document.getElementById("phone").value
  };

  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/students`,
    {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=representation"
      },
      body: JSON.stringify(student)
    }
  );

  if (response.ok) {
    document.getElementById("msg").innerHTML =
      "✅ Registration Successful";
  } else {
    const err = await response.text();
    console.log(err);
    alert("Database Error");
  }
});
