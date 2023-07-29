import React from 'react'

export const MovieCard = ({name,img,des}) => {
  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
    <article className="card">
          <header className="title-header d-flex align-items-center justify-content-center">
            <h3>{name}</h3>
          </header>
          <div className="card-block">
            <div className="img-card">
              <img src={`https://image.tmdb.org/t/p/w500/${img}`} alt="Movie" className="w-100" />
            </div>
            <p className="tagline card-text text-xs-center">
             {des.slice(0,70)}{des.length>100?"...":""}
            </p>
            <a href="#" className="btn btn-primary btn-block">
              <i className="fa fa-eye" /> See More Details
            </a>
          </div>
          </article>

</div>

    </>
  )
}
