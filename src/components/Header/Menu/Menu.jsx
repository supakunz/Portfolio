import { useEffect } from 'react'
import { MENULINKS } from '../../../../constants'

const Menu = () => {
  useEffect(() => {
    const checkbox = document.querySelector(".checkbox-toggle");
    if (!checkbox) return;

    const handleLinkClick = (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;
      checkbox.checked = false;
    };

    document.addEventListener("click", handleLinkClick);

    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);

  return (
    <>
      <div className="menu fixed top-0 left-0 w-full h-full overflow-hidden invisible flex items-center justify-center">
        <div className="flex-none overflow-hidden flex items-center justify-center ">
          <ul className='list-none py-4 px-0 block max-h-screen text-center'>
            {MENULINKS.map((item) => (
              <li key={item.name} className='p-0 m-6 text-2xl block'>
                <a className="link relative inline font-bold text-4xl duration-300 hover:no-underline" href={`#${item.ref}`}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Menu
