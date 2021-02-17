import React from 'react'

function ContactContent() {

  let mailchimpStyle = {
    position: 'absolute', 
    left: '-5000px',
  }
  return (
    <>
    <div
      className="flex flex-col laptop:flex-row justify-evenly w-auto my-10 tablet:m-10"
    >
      <div
        id="mc_embed_signup"
        className="flex laptop:w-1/2 desktop:w-1/3 laptop:mx-auto shadow-2xl rounded-2xl mx-5 p-10"
      >
        <form
          action="https://gmail.us7.list-manage.com/subscribe/post?u=5e90c5a3b6dad6124a547ee57&amp;id=59c17bc10d"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate w-full laptop:w-1\/2"
          target="_blank"
          novalidate
        >
          <div id="mc_embed_signup_scroll">
            <p
              className="text-oxfordBlue font-light text-3xl p-5 text-center font-bioRhyme"
            >
              Hey there 👋 , if you want to get ahold of me, sign up below!
            </p>
            <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>
            <div className="mc-field-group font-cabin my-5 p-2 pl-5">
              <label for="mce-FNAME">First Name </label><br />
              <input
                type="text"
                value=""
                name="FNAME"
                className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight h-10"
                id="mce-FNAME"
              />
            </div>
            <div className="mc-field-group font-cabin my-5 p-2 pl-5">
              <label for="mce-LNAME">Last Name </label><br />
              <input
                type="text"
                value=""
                name="LNAME"
                className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight h-10"
                id="mce-LNAME"
              />
            </div>
            <div className="mc-field-group font-cabin my-5 p-2 pl-5">
              <label for="mce-EMAIL"
                >Email Address <span className="asterisk">*</span> </label
              ><br />
              <input
                type="email"
                value=""
                name="EMAIL"
                className="required email text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight h-10"
                id="mce-EMAIL"
              />
            </div>
            <div className="mc-field-group size1of2 font-cabin my-5 p-2 pl-5">
              <label for="mce-PHONE">Phone Number </label> <br />
              <input
                type="text"
                name="PHONE"
                className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight h-10"
                value=""
                id="mce-PHONE"
              />
            </div>
            <div className="mc-field-group font-cabin my-5 p-2 pl-5">
              <label for="mce-MMERGE3">What brings you to JT web dev </label>
              <select
                name="MMERGE3"
                className="border-black border-1 text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight h-10"
                id="mce-MMERGE3"
              >
                <option value=""></option>
                <option value="I'm grading your portfolio">
                  I'm grading your portfolio
                </option>
                <option value="I need a website">I need a website</option>
                <option value="I want to hire you">I want to hire you</option>
                <option value="Something else">Something else</option>
              </select>
            </div>
            <div className="mc-field-group font-cabin my-5 p-2 pl-5">
              <label for="mce-MMERGE6">Additional Comments? </label><br />
              <input
                type="text"
                value=""
                name="MMERGE6"
                className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight h-10"
                id="mce-MMERGE6"
              />
            </div>
            <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
                style={{display: 'none'}}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{display: 'none'}}
              ></div>
            </div>
            {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
            <div style={{mailchimpStyle}} aria-hidden="true">
              <input
                type="text"
                name="b_5e90c5a3b6dad6124a547ee57_59c17bc10d"
                tabindex="-1"
                value=""
              />
            </div>
            <div className="clear mx-auto">
              <input
                type="submit"
                value="Contact Me"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="py-2 px-3 text-white rounded-2xl shadow-2xl bg-oxfordBlue font-light font-cabin"
              />
            </div>
          </div>
        </form>
      </div>
      {/* <!--End mc_embed_signup--> */}
      <div className="p-5 flex my-auto mx-auto rounded-2xl animate-pulse">
        <div
          className="LI-profile-badge shadow-2xl"
          data-version="v1"
          data-size="medium"
          data-locale="en_US"
          data-type="horizontal"
          data-theme="light"
          data-vanity="jasmine-teters"
        >
          <a
            className="LI-simple-link font-cabin"
            href="https://www.linkedin.com/in/jasmine-teters?trk=profile-badge"
            >Jasmine Teters</a
          >
        </div>
      </div>
    </div>
    </>
  );
}

export default ContactContent
