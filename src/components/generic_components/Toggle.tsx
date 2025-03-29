{
/* Using in Parent Component:
const [toggle, setToggle] = useState(false)
<div className='grid grid-cols-1 px-4 py-4 content-center'>
  <Toggle toggle={toggle} setToggle={setToggle} />
  <DisplayResult toggle={toggle} />
</div> 
*/
}
      

type ToggleProps = {
    toggle: boolean;
    text: string;
    size: "sm" | "xl";
    setToggle: (value: boolean) => void;
  };
  
  export const Toggle = ({toggle, text, size, setToggle}: ToggleProps) => {
    
    const handleToggle = () => {
      setToggle(!toggle);
    }

    const sizeVariants = {
      sm: "relative w-[calc(var(--spacing)*20)] h-[calc(var(--spacing)*10)] bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[calc(var(--spacing)*1)] after:start-[calc(var(--spacing)*1)] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[calc(var(--spacing)*8)] after:w-[calc(var(--spacing)*8)] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600",
      xl: "relative w-[calc(var(--spacing)*40)] h-[calc(var(--spacing)*20)] bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[calc(var(--spacing)*2)] after:start-[calc(var(--spacing)*2)] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[calc(var(--spacing)*16)] after:w-[calc(var(--spacing)*16)] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"
    };

    const textVariants = {
      xl: "ms-3 text-4xl font-medium text-gray-900 dark:text-gray-300",
      sm: "ms-2 text-2xl font-medium text-gray-900 dark:text-gray-300"
    }
  
    return (
      <>
        <div className='grid grid-cols-1 px-4 py-4 content-center'>
          <label className="inline-flex mx-auto items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" id="toggleCheckbox" onChange={handleToggle} checked={toggle} />
            <div className={`${sizeVariants[size]}`}></div>
            <h1 className={`${textVariants[size]}`}>{text}  {toggle ? "On" : "Off"}</h1>
          </label>
        </div>
      </>
    )
  }
  
  

type DisplayProps = {
    toggle:boolean;
  }
export const DisplayResult = ({toggle}: DisplayProps) => {
    return (
      <>
        <div className='grid grid-cols-1 px-4 py-4 content-center'>
          <div className="mx-auto">
            <h1 className="text-4xl font-medium text-gray-900 dark:text-gray-300">RR Will {toggle ? '' : 'Not'} Win</h1>
          </div>
        </div>
      </>
    )
  }