const Header = (props) => {
  return (
<div>
    <div className="ui fixed menu">
        <div className="ui container center ">
            <h2 className="ui blue header" > {props.attention}</h2>
        </div>
    </div>
</div>
  )
}

export default Header