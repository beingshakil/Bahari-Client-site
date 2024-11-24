import './NewsLetter.css'

function NewsLetter() {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offer on Your Email</h1>
        <p>Subscribe to our NewsLetter and stay Updated</p>
        <div>
            <input type="email" placeholder='Enter Your Email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter