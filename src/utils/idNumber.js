export const idNumber = ({ id }) => {
  return id.toString().length === 1 ? `#00${id}` : id.toString().length === 2 ? `#0${id}` : `#${id}`
}
