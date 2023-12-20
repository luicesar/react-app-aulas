import React, { Component } from "react";

/** Criando componente para exibir os dados
 * 
 */
class Feed extends Component {

  render() {
      return (
        <div key={this.props.id}>
            <h3>{this.props.username}</h3>
            <a>
                {this.props.curtidas} curtidas / {this.props.comentarios} comentários
            </a>
            <hr />
        </div>
      );
    }
  }
    
export default Feed;