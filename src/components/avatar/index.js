import React from "react"
import PropTypes from "prop-types"

import Image8Bit from "../8bit"

import "./avatar.scss"

const avatars = {
   1: require("./1.jpg"),
   2: require("./2.jpg"),
   3: require("./3.jpg"),
   4: require("./4.jpg"),
   5: require("./5.jpg"),
   6: require("./6.jpg")
}

const Avatar = ({ id = 1 }) => (
   <div className="avatar">
      <Image8Bit src={avatars[id]} />
   </div>
)

Avatar.propTypes = {
   simulating: PropTypes.bool,
   onSelectAll: PropTypes.func,
   onToggleFight: PropTypes.func,
   onReset: PropTypes.func
}

export default Avatar
