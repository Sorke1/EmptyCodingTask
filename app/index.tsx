import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

type EventCardProps = {
  title: string;
  icon: string;
};

export default function App() {
  const events: { title: string; icon: string }[] = [];
  events.push({ title: "Feier", icon: "🎉" });
  events.push({ title: "Football", icon: "🏈" });
  events.push({ title: "Nachtisch", icon: "🍨" });
  events.push({ title: "Halloween", icon: "🎃" });
  events.push({ title: "Werkstatt", icon: "🪚" });
  return (
    <View style={styles.column}>
      {events.map((event) => (
          <EventCard key={event.title} title={event.title} icon={event.icon} />
      ))}
    </View>
  );
}

function EventCard({ title, icon }: EventCardProps) {
  const [layout, setLayout] = useState({ width: 0, height: 0 });
  const circleSize = Math.max(0, layout.height - 24);

  return (
    <View
      style={styles.container}
      onLayout={(e) => setLayout(e.nativeEvent.layout)}>
      <View style={[styles.iconCircle, { width: circleSize, height: circleSize }]}>
          <Text style={{ fontSize: circleSize * 0.6 }}>
              {icon}
          </Text>
      </View>
          <View style={styles.textWrapper}>
              <Text style={styles.title}>{title}</Text>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  column: {
    width: "25%",
    height: "90%",
    marginTop: 24,
    padding: 32,
    gap: 12,
    flexDirection: "column",
    alignSelf: "center",
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#191F27",
},
  container: {
    minWidth: 90,
    borderRadius: 16,
    padding: 10,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",           
    alignContent: "center",     
    justifyContent: "center",   
    alignItems: "center",
    backgroundColor: "#7B61FF",
  },
  iconCircle: {
    aspectRatio: 1,            
    borderRadius: 999,           
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
   },
  textWrapper: {
    width: "65%",
    justifyContent: "center",
    alignItems: "center",
    },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },
});