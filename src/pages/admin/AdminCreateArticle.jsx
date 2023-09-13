export const AdminCreateArticle = () => {
  return (
    <div>
    <p>Choose the size of the t-shirt</p>
  <select onChange={(e) => handleChange(e)}>
    <option value="S">S</option>
    <option value="M">M</option>
    <option value="L">L</option>
    <option value="XL">XL</option>
   </select>
</div>
  )
}
