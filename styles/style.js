import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0faff",
    //alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  textInput: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#007AFF",
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 15,
  },
  buttonOutline: {
    borderColor: "#007AFF",
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 5,
    borderWidth: 1,
    marginBottom: 15,
  },
  buttonTextOutline: {
    color: "#007AFF",
    fontWeight: "bold",
    fontSize: 18,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  picker: {
    width: "100%",
    height: 50,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#007AFF",
  },
  label: {
    width: "100%",
    textAlign: "left",
    marginBottom: 5,
    fontSize: 18,
  },
  datePickerButton: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 15,
    padding: 10,
  },
  datePickerButtonText: {
    fontSize: 16,
  },

  //list
  listItem: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  distanceText: {
    marginLeft: 10,
    color: "#007AFF",
  },
  dateText: {
    marginBottom: 5,
    fontWeight: "bold",
  },

  //settings
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  radioText: {
    marginLeft: 8,
    fontSize: 16,
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },

  summaryItem: {
    alignItems: "center",
    padding: 5,
  },

  summaryText: {
    fontSize: 14,
    marginTop: 4,
  },
});
