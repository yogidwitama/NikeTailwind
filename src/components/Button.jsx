
const Button = ({label, iconUrl}) => {
  return (
    <div className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-red-500 rounded-lg text-white'>
      {label}
      <img src={iconUrl} alt="arrow right"  className="ml-2 rounded-full w-5 h-5"/>
    </div>
  )
}

export default Button
