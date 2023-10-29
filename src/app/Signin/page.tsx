import Image from 'next/image'


const Signin = () => {  
    return (
        <>
            <div className="flex">

                <div className="bg-black flex-col w-[60%] h-screen">
                    <div className="pt-80 px-20 space-y-6">
                        <Image alt='logo' src="/logo-w.png"
                            width={166}
                            height={62}
                            quality={100}
                            />
                        <p className='text-white text-2xl font-light tracking-wider'>Efficiency is the bridge that turns tasks into accomplishments.</p>
                            
                            <div className="w-60 h-50 px-1 py-2 bg-emerald-500 rounded-full justify-center items-center flex">
                            <div className="text-white text-xl font-normal">Read More</div>
                        </div>
                    </div>
                </div>

                <div className='w-[40%] bg-white flex'>
                    <div className="flex flex-col w-full">
                        <h1 className='text-zinc-800 text-[26px] font-bold'>Hello Again!</h1>
                        <p className='text-zinc-800 text-lg font-normal'>Welcome Back</p>

                        <div className="relative w-[307px] h-[60px] px-[26px] py-[18px] bg-white rounded-full border border-stone-300 flex-col justify-center items-start gap-2.5 inline-flex">
                            <div className="absolute opacity-30 text-zinc-800 text-sm font-normal">Email Address</div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
    }

export default Signin;