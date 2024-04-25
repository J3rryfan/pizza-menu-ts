export default function Footer() {
  const hour = new Date().getHours()
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && openHour <= closeHour;
  console.log(isOpen);

  return (
    <footer>
      {new Date().toLocaleTimeString()}. We're currently open
    </footer>
  )
}
