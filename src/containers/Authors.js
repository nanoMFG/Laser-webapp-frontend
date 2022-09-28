import React, {useEffect, useState} from 'react'
import Author from "../components/Author";

const Authors = ({authors, isFilter}) => {
  const [name, setName] = useState('')
  const [institution, setInstitution] = useState('')
  const [filteredAuthors, setFilteredAuthors] = useState(authors)

  useEffect(() => {
    const filtered = authors.filter((author) => {
      const name_ = author.first_name + ' ' + author.last_name
      const institution_ = author.institution
      return name_.toLowerCase().includes(name.toLowerCase())
        && institution_.toLowerCase().includes(institution.toLowerCase())
    })
    setFilteredAuthors(filtered)
  }, [name, institution, authors])
  if (!authors) {
    return null
  }
  let scrollbarClass = 'w-full'
  let searchBar
  if (!isFilter) {
    scrollbarClass += ' border p-3 h-screen-3/4  overflow-y-scroll'
    searchBar =
      <div className='flex flex-col border rounded mb-2 p-2'>
        <h6 className='block tracking-wide text-gray-700 font-bold align-middle mx-auto'>Name</h6>
        <div className='flex flex-row justify-center mb-2'>
          <div className="w-full md:w-2/3 px-3 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                   htmlFor="name">
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="name" type="text" value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <h6 className='block tracking-wide text-gray-700 font-bold align-middle mx-auto'>Institution</h6>
        <div className='flex flex-row justify-center mb-2'>
          <div className="w-full md:w-2/3 px-3 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                   htmlFor="institution">
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="institution" type="text" value={institution}
              onChange={(e) => setInstitution(e.target.value)}
            />
          </div>
        </div>
      </div>
  }
  return (
    <>
      {searchBar}
      <div className={scrollbarClass}>
        {filteredAuthors.map((author, i) =>
          <Author
            key={i}
            id={author.id}
            firstName={author.first_name}
            lastName={author.last_name}
            institution={author.institution}
            isCurrentFilter={author.isAddedToFilter}
            isFilter={isFilter}
          />
        )}
      </div>
    </>
  )
}

export default Authors
