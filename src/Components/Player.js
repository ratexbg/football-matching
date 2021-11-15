
import PropTypes from 'prop-types'

const Player = ({name,rate,role}) => {
  

  return (
    <div className="container">
      
      <div className="hori">

        <img className="players" src='/a.jpg' alt='no img'
          width="50"
          height="50"
        />

        <h1 className="redHeader">{name}</h1>
        

      </div>

      <div className="verti">
       <h4 className="blueHeader" >Rating: {rate} | Best Pos: { role }</h4>
      </div>


    </div>
  )

  
}

export default Player
