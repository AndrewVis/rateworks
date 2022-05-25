import React from 'react'



class SignIn extends React.Component {
  render () {
  return (
    <div className="bg-white text-black flex flex-col justify-center pt-10 min-h-screen">
    <div className="flex-1 flex flex-col justify-center items-center pt=10 lg:pt-6">
    <div className="pb-10">
    </div>
    <h2 className="text-4xl font-bold">Sign in!</h2>
    <form className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w- lg:min-w-[500]">
      <input id="email" 
      name="email" 
      required maxLength={50} 
      type="text" 
      placeholder="E-mail"
      className="bg-white text-center text-black outline-none border-2 border-black rounded-3xl px-8 py-2"/>
      <input id="password" 
      name="email"
      type="text"
      required maxLength={50}
      placeholder="Password"
      className="bg-white text-black text-center outline-none border-2 border-black rounded-3xl px-8 py-2"/>
      <div className="text-center ">
        <link href="/broker"/>
        <button  type="submit" className="bg-black text-white rounded-3xl px-8 py-2">GO</button>
        <link/>
      </div>
      <div>
        <h3 className="text-2xl text-center pt-5 font-bold">OR</h3>
      </div>
      <div className="flex flex-row items-center justify-center gap-8 mt-6">
        <img src="/assets/LinkedIn_logo_initials.png" width={70} height={30} alt="logo"/>
        <img src="/assets/Google__G__Logo.svg.webp" width={70} height={30} alt="logo"/>
      </div>
    </form>
    </div>
  </div>
    );
  }
}

export default SignIn;