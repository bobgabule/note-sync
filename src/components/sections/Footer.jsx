import { footerCols } from "../../utils/content";
import Logo from "../icons/Logo";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-bottom -mt-1">
      <div className="m-auto flex max-w-[90rem] justify-between px-24 py-32">
        <div>
          <a className="flex items-center gap-x-3" href="#">
            <Logo className="stroke-primary-500" width={4.5} alt="NoteSync logo icon" />
            <p className="text-primary-50 text-xl font-bold tracking-tight">Note<span className="text-primary-500">Sync</span></p>
          </a>
        </div>
        <div className="grid grid-cols-[repeat(4,max-content)] gap-x-24">
          { footerCols.map(( col ) => (
            <div key={col.id}>
              <p className="text-primary-50 mb-8 text-xl/loose font-semibold tracking-tight">{col.category}</p>
              <ul className="flex flex-col gap-y-4">
                { col.links.map(( link, index ) => (
                  <li key={index} className="cursor-pointer">
                    <a href="#" className="text-primary-50 hover:text-primary-500 transition-properties text-lg/8 font-light">{link}</a>
                  </li>
                )) }
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer