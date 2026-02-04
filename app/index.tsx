import { CSSProperties } from "react";

export default function App() {
  const events = [
    { title: "Feier", icon: "🎉" },
    { title: "Football", icon: "🏈" },
    { title: "Nachtisch", icon: "🍨" },
    { title: "Halloween", icon: "🎃" },
    { title: "Werkstatt", icon: "🪚" },
  ];
  return (
    <div style={styles.column}>
      {events.map((event) => (
        <EventCard key={event.title} title={event.title} icon={event.icon} />
      ))}
    </div>
  );
}

function EventCard({ title, icon }: { title: string; icon: string }) {
  return (
    <div style={styles.container}>
      <div style={styles.iconCircle}>
        <span style={styles.emojiIcon}>{icon}</span>
      </div>
      <div style={styles.textWrapper}>
        <span style={styles.title}>{title}</span>
      </div>
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {
  column: {
    width: "25%",
    height: "90%",
    marginTop: 24,
    padding: 32,
    gap: 12,
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#191F27",
  },
  container: {
    borderRadius: 16,
    display: "flex",
    flex: 1, 
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "5%",
    backgroundColor: "#7B61FF",
   },
  iconCircle: {
    display: "flex",
    height: "80%", 
    aspectRatio: "1 / 1", 
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    containerType: "size", 
  },
  emojiIcon: { 
    fontSize: "65cqmin", 
    lineHeight: 1,
  },
  textWrapper: {
    width: "65%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,   
  }
};