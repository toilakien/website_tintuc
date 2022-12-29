export function formatLinkImage(a: any) {
  const arr = a.trim().split("/");
  const aeee = arr[arr.length - 1];
  console.log("../assets/images/" + aeee.toString());

  return "../assets/images/" + aeee.toString();
}
