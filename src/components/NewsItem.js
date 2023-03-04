import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;  //destructuring
    return (
      <div className="my-3">
              
        <div className="card" >
          <img src={imageUrl} className="card-img-top" alt="..."/ >
          <div className="card-body">
            <h5 className="card-title">{title} 
             <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:1}}>
                {source}
                <span className="visually-hidden">unread messages</span>
             </span>
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {new Date(date).toString()}</small></p>

            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sn">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
