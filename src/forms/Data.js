

const Data = (props) => {
  return (
    <>
      {props.array.map((data) => (<li key={data.id}>{data.email}</li>))}
    </>
  )
}

export default Data
