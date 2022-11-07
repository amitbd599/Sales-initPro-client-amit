const Support_ticket_part = () => {
  return (
    <>
      <section id='ClientList' className='Admin openTicket'>
        <div className='container custom_width'>
          {/* Header */}
          <div className='row d_flex bgss'>
            <div className='col-lg-5'>
              <div className='header_part d_flex'>
                {/* svg */}
                <div className='svg'>
                  <svg
                    width={41}
                    height={41}
                    viewBox='0 0 41 41'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M29.3097 11.3198C28.6296 10.6395 28.2314 9.72746 28.1947 8.76618C28.158 7.80489 28.4856 6.86518 29.1119 6.13499C29.1637 6.07427 29.1906 5.9962 29.1873 5.91645C29.1839 5.8367 29.1506 5.76116 29.0939 5.70497L25.4861 2.09309C25.4264 2.03349 25.3456 2 25.2613 2C25.1769 2 25.0961 2.03349 25.0364 2.09309L19.2859 7.84365C19.0737 8.05576 18.9139 8.3144 18.8191 8.59905C18.7246 8.88435 18.565 9.14372 18.3528 9.35659C18.1407 9.56945 17.8818 9.72995 17.5969 9.82535C17.312 9.92027 17.0531 10.0801 16.8406 10.2922L2.09309 25.0364C2.03349 25.0961 2 25.1769 2 25.2613C2 25.3456 2.03349 25.4264 2.09309 25.4861L5.70088 29.0939C5.75707 29.1506 5.83262 29.1839 5.91237 29.1873C5.99211 29.1906 6.07018 29.1637 6.13091 29.1119C6.86094 28.4849 7.80085 28.1568 8.76247 28.1933C9.72409 28.2297 10.6365 28.6281 11.3169 29.3085C11.9974 29.989 12.3957 30.9013 12.4322 31.863C12.4686 32.8246 12.1405 33.7645 11.5136 34.4945C11.4618 34.5552 11.4348 34.6333 11.4382 34.7131C11.4415 34.7928 11.4749 34.8684 11.5316 34.9245L15.1393 38.5323C15.199 38.5919 15.2798 38.6254 15.3642 38.6254C15.4485 38.6254 15.5294 38.5919 15.589 38.5323L30.3373 23.7848C30.5494 23.5723 30.7092 23.3134 30.8042 23.0286C30.8986 22.7433 31.0583 22.4839 31.2704 22.271C31.4826 22.0582 31.7414 21.8977 32.0264 21.8023C32.311 21.7075 32.5697 21.5476 32.7818 21.3355L38.5323 15.5849C38.5919 15.5253 38.6254 15.4444 38.6254 15.3601C38.6254 15.2758 38.5919 15.1949 38.5323 15.1353L34.9245 11.5275C34.8684 11.4708 34.7928 11.4374 34.7131 11.4341C34.6333 11.4307 34.5552 11.4577 34.4945 11.5095C33.7653 12.1368 32.8262 12.4658 31.8649 12.4307C30.9037 12.3955 29.9911 11.9988 29.3097 11.3198V11.3198Z'
                      stroke='#888888'
                      strokeWidth={3}
                      strokeMiterlimit={10}
                    />
                    <path
                      d='M19.8629 10.8654L18.5132 9.51562M23.4617 14.4642L22.5616 13.5649M27.0605 18.0638L26.1612 17.1637M31.1098 22.1122L29.76 20.7625'
                      stroke='#888888'
                      strokeWidth={3}
                      strokeMiterlimit={10}
                      strokeLinecap='round'
                    />
                  </svg>
                </div>
                {/* Text Part */}
                <div className='text'>
                  <h3>Support Ticket</h3>
                  <p>Create coupons for your customers</p>
                </div>
              </div>
            </div>
          </div>
          {/* Create Coupons  */}
          <div className='row d_flex'>
            <div className='col-lg-12'>
              <div className='product_information Offers'>
                {/* Ticket Subject */}
                <div className='custome_input'>
                  <label> Ticket Subject </label>
                  <input type='text' placeholder='Enter ticket subject here' />
                </div>
                {/* Attachment */}
                <div className='custome_input'>
                  <label> Attachment </label>
                  <input type='file' placeholder='Attach Files/Images' />
                </div>
                {/* Ticket Details */}
                <div className='custome_input'>
                  <label> Ticket Details </label>
                  <textarea
                    name=''
                    rows={5}
                    defaultValue={"Write description here"}
                  />
                </div>
                {/* Sub Category Name */}
                <div className='custome_input'>
                  <a href='' className='Save'>
                    Submit
                  </a>
                  <a href='' className='Cancle'>
                    Cancle
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Support_ticket_part;
