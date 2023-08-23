import React from "react";
import clock from "../../../assets/blogs/Clock.png";
import book from "../../../assets/blogs/book.png";

const Articles = (props) => {
  const data = props.data;

  const cardStyle = {
    width: "100%",
    margin: "0 auto",
    border: "none",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",

    // borderRadius: "20px",
  };

  

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
       
        <div className="col-12 d-flex m-auto" >
          <div className="col-12 col-md-4">
            
              {Array.isArray(data) &&
                data.slice(0, 1).map((item, index) => (
                  <div key={index} style={{paddingLeft:"1rem",paddingRight:"1rem"}}>
                    <a
                      href={`/details/${item.id}`}
                      className="col-12 card d-flex flex-column "
                      style={{
                        ...cardStyle,
                        height: "27rem",
                        // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.166),rgba(0, 0, 0, 0.144)),url(${item?.attributes?.blog_info?.image?.data?.[0].attributes.url})`,
                      }}
                    >
                        <div><h6>{item.attributes?.blog_info?.main_content.slice(0, 300)}...</h6></div>
                        <div
                        style={{
                            ...cardStyle,
                            height: "100%",
                            position:"relative",
                            borderRadius:"20px",
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.166),rgba(0, 0, 0, 0.144)),url(${item?.attributes?.blog_info?.image?.data?.[0].attributes.url})`,
                          }}
                        >
                      <div className="position-absolute  p-3 bg-opacity-50 " style={{top:"0"}}>
                        <h6 style={{color:"white",fontWeight:"600"}}>{item.attributes?.main_title}</h6>
                      </div>
                      <div className="position-absolute  p-3 bg-opacity-50 " style={{bottom:"0"}}>
                       <button style={{borderRadius:"1rem",padding:"0.5rem",fontSize:"0.7rem",letterSpacing:"0.3px",border:"0px",color:"white",backgroundColor:"black",width:"6rem"}}>Read Article</button>
                      </div>

                        </div>
                        
                      
                    </a>
                  </div>
                ))}
           
          </div>

          <div className="d-none d-md-block col-md-4" >
          <div className="col-12" >
            
            {Array.isArray(data) &&
              data.slice(1,2).map((item, index) => (
                <div key={index} style={{paddingLeft:"1rem",paddingRight:"1rem"}}>
                  <a
                    href={`/details/${item.id}`}
                    className="col-12 card d-flex flex-column "
                    style={{
                      ...cardStyle,
                      height: "27rem",
                      position:"relative",
                      borderTopLeftRadius:"3rem",
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.166),rgba(0, 0, 0, 0.144)),url(${item?.attributes?.blog_info?.image?.data?.[0].attributes.url})`,
                    }}
                  >
                      
                    <div className="position-absolute  p-3 bg-opacity-50 " style={{top:"0"}}>
                      <h6 style={{color:"white",fontWeight:"600"}}>{item.attributes?.main_title}</h6>
                    </div>
                    <div className="position-absolute  p-3 bg-opacity-50 " style={{bottom:"0"}}>
                     <button style={{borderRadius:"1rem",padding:"0.5rem",fontSize:"0.7rem",letterSpacing:"0.3px",border:"0px",color:"white",backgroundColor:"black",width:"6rem"}}>Read Article</button>
                    </div>

                     
                      
                    
                  </a>
                </div>
              ))}
         
        </div>

          </div>
          <div className="d-none d-md-block col-md-4" >
          <div className="col-12">
            
            {Array.isArray(data) &&
              data.slice(4, 5).map((item, index) => (
                <div key={index} style={{paddingLeft:"1rem",paddingRight:"1rem"}}>
                  <a
                    href={`/details/${item.id}`}
                    className="col-12 card d-flex flex-column "
                    style={{
                      ...cardStyle,
                      height: "24rem",
                      position:"relative",
                      borderTopRightRadius:"3rem",
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.166),rgba(0, 0, 0, 0.144)),url(${item?.attributes?.blog_info?.image?.data?.[0].attributes.url})`,
                    }}
                  >
                      
                    <div className="position-absolute  p-3 bg-opacity-50 " style={{top:"0"}}>
                      <h6 style={{color:"white",fontWeight:"600"}}>{item.attributes?.main_title}</h6>
                    </div>
                    <div className="position-absolute  p-3 bg-opacity-50 " style={{bottom:"0"}}>
                     <button style={{borderRadius:"1rem",padding:"0.5rem",fontSize:"0.7rem",letterSpacing:"0.3px",border:"0px",color:"white",backgroundColor:"black",width:"6rem"}}>Read Article</button>
                    </div>

                     
                      
                    
                  </a>
                </div>
              ))}
         
        </div>
          <div className="col-12" style={{paddingLeft:"1rem",paddingRight:"1rem",}}>
            <button style={{width:"100%",textAlign:"center",marginTop:"0.5rem",borderRadius:"10px",fontSize:"22px",backgroundColor:"black",color:"white"}}>View all</button>
          </div>
          </div>
        </div>

       
      </div>
    </>
  );
};

export default Articles;
