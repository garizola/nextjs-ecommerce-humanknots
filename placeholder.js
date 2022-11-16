return (
    <div className='slugContainer'>
        
        <div className='product-details-container'>
            <div>

                <div className='image-container'>
                    
                    <img id="slidecaption" src={urlFor(image && image[index])} alt=""/>

                </div>
                
            </div>
            <div
                className='product-detail-desc'
            >

                <h1>{name}</h1>
                
                <h4>{details}</h4>
                <p className='price'>
                    ${price}
                </p>
                <div className='sizes'>
                {sizes?.map((size) => 
                    
                    <button key={size}
                        
                    >{size}</button>
                    
                    
                )}
               
                </div>
                
                <div className='quantity'>
                    <span className="minus" > <AiOutlineMinus /> </span>
                    <span className="num"></span>
                    <span className="plus" > <AiOutlinePlus /> </span>
                </div>
                <div className='buttons'>
                    <button type='button' className='add-to-cart'
                    onClick="">
                        Add To Cart
                    </button>

                </div>
                {/* <div className='buttons'>
                    <button type='button' className='add-to-cart'
                    onClick=''>
                        Buy Now
                    </button>

                </div> */}
            </div>
        </div>
        {/* <div className="marquee-w">
          
          <div className="marquee">
          <span>SUPPORT LOCAL JIU-JITSU</span>
          </div>
        
        </div> */}
        <div className='maylike-products-wrapper'>
            <h2>Other Products</h2>
            <div className='marquee1'>
                <div className='maylike-products-container track'>
                    {products.map((item) => (
                        <Product key={item._id} product={item}/>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )