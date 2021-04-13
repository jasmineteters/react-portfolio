import React from 'react'

function Skills() {
  return (
    <>
      <div className=' flex justify-center mt-10'>
        <div className='flex flex-col tablet:w-1/3 justify-center phone:m-3 tablet:m-5 p-5 shadow-2xl rounded-2x hover:bg-silverSand hover:bg-opacity-50 rounded-2xl'>
          <h1 className='text-center text-2xl font-bold font-bioRhyme text-oxfordBlue'>
            My Technical Skills:
          </h1>
          <div className='flex flex-col text-left text-lg font-cabin font-thin'>
            <li>Languages: HTML, CSS, Javascript, Python</li>
            <li>Database Management: Mysql, Sequelize MongoDb, Mongoose</li>

            <li>
              Libraries / Frameworks: jQuery, React.js, Express.js, TailwindCSS,
              Bootstrap
            </li>

            <li>
              Other Technologies: Node.js, Handlebars, Git, Heroku, AJAX,
              IndexedDB API
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills
