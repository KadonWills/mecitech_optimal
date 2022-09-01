import  {BarLoader}  from 'react-spinners'

const Splash = () => (
    <div className='z-[100]  m-0 p-0 fixed top-0 left-0 w-[100vw] h-full bg-light bg-opacity-90'>
        <img src="" alt="solar panels image" className="fixed top-0 left-0 w-[100vw] h-[100vh] object-contain" />
        <div className="w-full h-[100vh] relative grid place-content-center text-center m-0 bg-opacity-70  bg-light dark:bg-dark text-primary dark:text-light ">
            <div className='scale-110'>
                <h1 className="text-[60px] tracking-[0.245em] leading-[1.8em] font-black">OPTIMAL</h1>
                <p className="text-[25px] font-light">SOLAR SYSTEMS MANAGEMENT</p>

                <BarLoader color='#0f9922' className='mx-auto my-2' height={2} />

            </div>

            <div className="absolute text-sm bottom-5 right-5">MECITECH</div>
        </div>

    </div>
)

export default Splash