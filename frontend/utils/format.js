export default function formatDate(date) {
  const d = new Date(date);
  const day = d.getDate();
  const month = d.toLocaleString("en-GB", { month: "long" });
  const year = d.getFullYear();
  return `${day} ${month} ${year}`;
}
