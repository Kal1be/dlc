
function CallAction() {
  return (
    <div className="md:flex items-center gap-6 border-4 border-green-700  p-4 rounded-xl ">
        <div className="flex-1">
            <h2 className="text-2xl my-6 font-medium">Do you want to build your career and live your dream life join Ahmadu Bello University!</h2>
          <p className="my-6">Ahmadu Bello university program click in this button to check their website.</p>
            <button className="w-full p-2 rounded-lg text-white bg-green-700 my-4">
              <a href="https://abu.edu.ng/" target="_blank" rel="noopener noreferrer">Ahmadu Bello University</a>
            </button>
        </div>
        <div className="flex-1">
            <img src="/nice.jpg" className="w-full" alt="" />
        </div>
     
    </div>
  )
}

export default CallAction
