async function loadWithError() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/xxx123");

    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    console.log(data);

  } catch (err) {
    console.error("Fetch Error:", err.message);
  }
}

loadWithError();
