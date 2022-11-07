import Image from "next/image";
import Select from "react-select";
import Ellipse from "../../../Assets/images/Ellipse 32.png";
const Stock_in_part = () => {
  const options = [
    { value: "Name", label: "Name" },
    { value: "Time", label: "Time" },
    { value: "Date", label: "Date" },
  ];
  return (
    <>
      <section id='ClientList' className='Admin openTicket'>
        <div className='container custom_width'>
          {/* Header */}
          <div className='row d_flex bgss'>
            <div className='col-lg-3'>
              <div className='header_part d_flex'>
                {/* svg */}
                <div className='svg'>
                  <svg
                    width={39}
                    height={39}
                    viewBox='0 0 39 39'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M17.55 7.8C18.1025 7.8 18.566 7.6128 18.9403 7.2384C19.3134 6.8653 19.5 6.4025 19.5 5.85C19.5 5.2975 19.3134 4.83405 18.9403 4.45965C18.566 4.08655 18.1025 3.9 17.55 3.9C16.9975 3.9 16.5347 4.08655 16.1616 4.45965C15.7872 4.83405 15.6 5.2975 15.6 5.85C15.6 6.4025 15.7872 6.8653 16.1616 7.2384C16.5347 7.6128 16.9975 7.8 17.55 7.8ZM15.6 39H3.9C2.8275 39 1.90905 38.6185 1.14465 37.8554C0.38155 37.091 0 36.1725 0 35.1V7.8C0 6.7275 0.38155 5.80905 1.14465 5.04465C1.90905 4.28155 2.8275 3.9 3.9 3.9H12.09C12.48 2.7625 13.1703 1.8278 14.1609 1.0959C15.1528 0.3653 16.2825 0 17.55 0C18.8175 0 19.9472 0.3653 20.9391 1.0959C21.9297 1.8278 22.62 2.7625 23.01 3.9H31.2C32.2725 3.9 33.1909 4.28155 33.9553 5.04465C34.7184 5.80905 35.1 6.7275 35.1 7.8V17.55H31.2V7.8H27.3V13.65H7.8V7.8H3.9V35.1H15.6V39ZM24.375 36.9037L16.0875 28.6163L18.8175 25.8862L24.375 31.4438L35.3925 20.4263L38.1225 23.1562L24.375 36.9037Z'
                      fill='#747474'
                    />
                  </svg>
                </div>
                {/* Text Part */}
                <div className='text'>
                  <h3>Inventory</h3>
                  <p>Your Product Inventory</p>
                </div>
              </div>
            </div>
            <div className='col-lg-9'>
              <div className='FilterBy d_flex'>
                {/* Filter By Item */}
                <div className='reactSelectBody me-3'>
                  <Select
                    className='select__color'
                    defaultValue={options[0]}
                    options={options}
                    styles={{
                      option: (provided, state) => ({
                        ...provided,
                        borderBottom: "1px solid #ddd",
                        color: state.isSelected ? "#fff" : "#666",
                        background: state.isSelected ? "#556FF6" : "#fff",
                        cursor: "pointer",
                        margin: "0px",
                        ":active": {
                          backgroundColor: "#ddd",
                          cursor: "pointer",
                        },
                      }),
                      singleValue: (provided, state) => ({
                        ...provided,
                        color: "#fff",

                        fontSize: "15px",
                      }),
                      control: (styles) => ({
                        ...styles,
                        backgroundColor: "#556FF6",
                        padding: "3px 0px",
                        margin: "0px 0px",
                        border: "none",

                        ":focus-within": {
                          ...styles[":focus-within"],
                          border: "none",
                          boxShadow: "none",
                        },
                      }),
                      menuList: (styles) => ({
                        ...styles,
                        margin: "0px",
                        padding: "0px",
                      }),
                      noOptionsMessage: (styles) => ({
                        ...styles,
                        background: "red",
                        color: "#fff",
                      }),
                    }}
                  />
                </div>
                {/* Filter By Item */}
                <div className='FilterBy_item'>
                  <div className='custome_input'>
                    <input type='text' name='' placeholder='Search here...' />
                    <div className='search'>
                      <svg
                        width={18}
                        height={18}
                        viewBox='0 0 18 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M16.3078 16.7113L12.6943 13.0914M14.6968 8.25366C14.6968 10.0695 13.9754 11.811 12.6914 13.095C11.4074 14.379 9.66595 15.1003 7.8501 15.1003C6.03425 15.1003 4.29277 14.379 3.00876 13.095C1.72476 11.811 1.00342 10.0695 1.00342 8.25366C1.00342 6.43781 1.72476 4.69633 3.00876 3.41233C4.29277 2.12833 6.03425 1.40698 7.8501 1.40698C9.66595 1.40698 11.4074 2.12833 12.6914 3.41233C13.9754 4.69633 14.6968 6.43781 14.6968 8.25366V8.25366Z'
                          stroke='#A3A3A3'
                          strokeWidth={2}
                          strokeLinecap='round'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Create Invoice */}
                <div className='custome_input d_flex'>
                  {/* Filter By Item */}
                  <div className='FilterBy_item d_flex DownloadReport'>
                    <div className='dropdown_part'>
                      <span
                        className='dropdown-toggle d_flex'
                        id='dropdownMenuButton1'
                        data-bs-toggle='dropdown'
                        aria-expanded='false'
                      >
                        Download Report
                        <div className='arrow'>
                          <svg
                            width={11}
                            height={6}
                            viewBox='0 0 11 6'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M0.244629 0.501221L5.40989 5.66649L10.5752 0.501221H0.244629Z'
                              fill='#747474'
                            />
                          </svg>
                        </div>
                      </span>
                      <ul
                        className='dropdown-menu'
                        aria-labelledby='dropdownMenuButton1'
                      >
                        <li>
                          <a className='dropdown-item' href='#'>
                            As PDF
                          </a>
                        </li>
                        <li>
                          <a className='dropdown-item' href='#'>
                            As Xml
                          </a>
                        </li>
                        <li>
                          <a className='dropdown-item' href='#'>
                            As Doc File
                          </a>
                        </li>
                        {/* up arrow */}
                        <div className='up_arrow'>
                          <svg
                            width={11}
                            height={6}
                            viewBox='0 0 11 6'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M10.3306 5.16528L5.1653 1.6953e-05L3.48091e-05 5.16528L10.3306 5.16528Z'
                              fill='#F3ECFF'
                            />
                          </svg>
                        </div>
                      </ul>
                    </div>
                  </div>
                  <a href='add_product.html' className='CreateInvoice'>
                    Add Stock
                    <svg
                      width={12}
                      height={12}
                      viewBox='0 0 12 12'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M6 11V6M6 6V1M6 6H11M6 6H1'
                        stroke='white'
                        strokeWidth={2}
                        strokeLinecap='round'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Table Part  */}
          <div className='col-lg-12'>
            <div className='table_part'>
              <table className='table'>
                <tbody>
                  <tr>
                    <th>SL</th>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Selling Price</th>
                    <th>Product Code</th>
                    <th>Quantity</th>
                    <th>Action</th>
                  </tr>
                  {/* item */}
                  <tr>
                    <td>18811</td>
                    <td>
                      <Image
                        src={Ellipse}
                        alt='Picture of the author'
                        width={"auto"}
                        height={"auto"}
                      />
                    </td>
                    <td>Mike Smith</td>
                    <td>01234567890</td>
                    <td>3292</td>
                    <td>184</td>
                    <td className='action'>
                      <a href=''>
                        <svg
                          width={25}
                          height={25}
                          viewBox='0 0 25 25'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M24.172 12.2344C23.2532 9.85754 21.658 7.80204 19.5836 6.32194C17.5092 4.84184 15.0466 4.00201 12.5002 3.90625C9.95368 4.00201 7.49108 4.84184 5.41672 6.32194C3.34236 7.80204 1.74716 9.85754 0.828281 12.2344C0.766224 12.406 0.766224 12.594 0.828281 12.7656C1.74716 15.1425 3.34236 17.198 5.41672 18.6781C7.49108 20.1582 9.95368 20.998 12.5002 21.0938C15.0466 20.998 17.5092 20.1582 19.5836 18.6781C21.658 17.198 23.2532 15.1425 24.172 12.7656C24.2341 12.594 24.2341 12.406 24.172 12.2344ZM12.5002 19.5312C8.35953 19.5312 3.98453 16.4609 2.39859 12.5C3.98453 8.53906 8.35953 5.46875 12.5002 5.46875C16.6408 5.46875 21.0158 8.53906 22.6017 12.5C21.0158 16.4609 16.6408 19.5312 12.5002 19.5312Z'
                            fill='#747474'
                          />
                          <path
                            d='M12.5 7.8125C11.5729 7.8125 10.6666 8.08742 9.89577 8.60249C9.12491 9.11756 8.5241 9.84964 8.16932 10.7062C7.81453 11.5627 7.7217 12.5052 7.90257 13.4145C8.08344 14.3238 8.52988 15.159 9.18544 15.8146C9.841 16.4701 10.6762 16.9166 11.5855 17.0974C12.4948 17.2783 13.4373 17.1855 14.2938 16.8307C15.1504 16.4759 15.8824 15.8751 16.3975 15.1042C16.9126 14.3334 17.1875 13.4271 17.1875 12.5C17.1875 11.2568 16.6936 10.0645 15.8146 9.18544C14.9355 8.30636 13.7432 7.8125 12.5 7.8125ZM12.5 15.625C11.8819 15.625 11.2777 15.4417 10.7638 15.0983C10.2499 14.755 9.8494 14.2669 9.61288 13.6959C9.37635 13.1249 9.31447 12.4965 9.43505 11.8903C9.55563 11.2842 9.85325 10.7273 10.2903 10.2903C10.7273 9.85325 11.2842 9.55562 11.8903 9.43505C12.4965 9.31447 13.1249 9.37635 13.6959 9.61288C14.2669 9.8494 14.755 10.2499 15.0983 10.7638C15.4417 11.2777 15.625 11.8819 15.625 12.5C15.625 13.3288 15.2958 14.1237 14.7097 14.7097C14.1237 15.2958 13.3288 15.625 12.5 15.625Z'
                            fill='#747474'
                          />
                        </svg>
                      </a>
                    </td>
                  </tr>
                  {/* item */}
                  <tr>
                    <td>18811</td>
                    <td>
                      <Image
                        src={Ellipse}
                        alt='Picture of the author'
                        width={"auto"}
                        height={"auto"}
                      />
                    </td>
                    <td>Mike Smith</td>
                    <td>01234567890</td>
                    <td>3292</td>
                    <td>184</td>
                    <td className='action'>
                      <a href=''>
                        <svg
                          width={25}
                          height={25}
                          viewBox='0 0 25 25'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M24.172 12.2344C23.2532 9.85754 21.658 7.80204 19.5836 6.32194C17.5092 4.84184 15.0466 4.00201 12.5002 3.90625C9.95368 4.00201 7.49108 4.84184 5.41672 6.32194C3.34236 7.80204 1.74716 9.85754 0.828281 12.2344C0.766224 12.406 0.766224 12.594 0.828281 12.7656C1.74716 15.1425 3.34236 17.198 5.41672 18.6781C7.49108 20.1582 9.95368 20.998 12.5002 21.0938C15.0466 20.998 17.5092 20.1582 19.5836 18.6781C21.658 17.198 23.2532 15.1425 24.172 12.7656C24.2341 12.594 24.2341 12.406 24.172 12.2344ZM12.5002 19.5312C8.35953 19.5312 3.98453 16.4609 2.39859 12.5C3.98453 8.53906 8.35953 5.46875 12.5002 5.46875C16.6408 5.46875 21.0158 8.53906 22.6017 12.5C21.0158 16.4609 16.6408 19.5312 12.5002 19.5312Z'
                            fill='#747474'
                          />
                          <path
                            d='M12.5 7.8125C11.5729 7.8125 10.6666 8.08742 9.89577 8.60249C9.12491 9.11756 8.5241 9.84964 8.16932 10.7062C7.81453 11.5627 7.7217 12.5052 7.90257 13.4145C8.08344 14.3238 8.52988 15.159 9.18544 15.8146C9.841 16.4701 10.6762 16.9166 11.5855 17.0974C12.4948 17.2783 13.4373 17.1855 14.2938 16.8307C15.1504 16.4759 15.8824 15.8751 16.3975 15.1042C16.9126 14.3334 17.1875 13.4271 17.1875 12.5C17.1875 11.2568 16.6936 10.0645 15.8146 9.18544C14.9355 8.30636 13.7432 7.8125 12.5 7.8125ZM12.5 15.625C11.8819 15.625 11.2777 15.4417 10.7638 15.0983C10.2499 14.755 9.8494 14.2669 9.61288 13.6959C9.37635 13.1249 9.31447 12.4965 9.43505 11.8903C9.55563 11.2842 9.85325 10.7273 10.2903 10.2903C10.7273 9.85325 11.2842 9.55562 11.8903 9.43505C12.4965 9.31447 13.1249 9.37635 13.6959 9.61288C14.2669 9.8494 14.755 10.2499 15.0983 10.7638C15.4417 11.2777 15.625 11.8819 15.625 12.5C15.625 13.3288 15.2958 14.1237 14.7097 14.7097C14.1237 15.2958 13.3288 15.625 12.5 15.625Z'
                            fill='#747474'
                          />
                        </svg>
                      </a>
                    </td>
                  </tr>
                  {/* item */}
                  <tr>
                    <td>18811</td>
                    <td>
                      <Image
                        src={Ellipse}
                        alt='Picture of the author'
                        width={"auto"}
                        height={"auto"}
                      />
                    </td>
                    <td>Mike Smith</td>
                    <td>01234567890</td>
                    <td>3292</td>
                    <td>184</td>
                    <td className='action'>
                      <a href=''>
                        <svg
                          width={25}
                          height={25}
                          viewBox='0 0 25 25'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M24.172 12.2344C23.2532 9.85754 21.658 7.80204 19.5836 6.32194C17.5092 4.84184 15.0466 4.00201 12.5002 3.90625C9.95368 4.00201 7.49108 4.84184 5.41672 6.32194C3.34236 7.80204 1.74716 9.85754 0.828281 12.2344C0.766224 12.406 0.766224 12.594 0.828281 12.7656C1.74716 15.1425 3.34236 17.198 5.41672 18.6781C7.49108 20.1582 9.95368 20.998 12.5002 21.0938C15.0466 20.998 17.5092 20.1582 19.5836 18.6781C21.658 17.198 23.2532 15.1425 24.172 12.7656C24.2341 12.594 24.2341 12.406 24.172 12.2344ZM12.5002 19.5312C8.35953 19.5312 3.98453 16.4609 2.39859 12.5C3.98453 8.53906 8.35953 5.46875 12.5002 5.46875C16.6408 5.46875 21.0158 8.53906 22.6017 12.5C21.0158 16.4609 16.6408 19.5312 12.5002 19.5312Z'
                            fill='#747474'
                          />
                          <path
                            d='M12.5 7.8125C11.5729 7.8125 10.6666 8.08742 9.89577 8.60249C9.12491 9.11756 8.5241 9.84964 8.16932 10.7062C7.81453 11.5627 7.7217 12.5052 7.90257 13.4145C8.08344 14.3238 8.52988 15.159 9.18544 15.8146C9.841 16.4701 10.6762 16.9166 11.5855 17.0974C12.4948 17.2783 13.4373 17.1855 14.2938 16.8307C15.1504 16.4759 15.8824 15.8751 16.3975 15.1042C16.9126 14.3334 17.1875 13.4271 17.1875 12.5C17.1875 11.2568 16.6936 10.0645 15.8146 9.18544C14.9355 8.30636 13.7432 7.8125 12.5 7.8125ZM12.5 15.625C11.8819 15.625 11.2777 15.4417 10.7638 15.0983C10.2499 14.755 9.8494 14.2669 9.61288 13.6959C9.37635 13.1249 9.31447 12.4965 9.43505 11.8903C9.55563 11.2842 9.85325 10.7273 10.2903 10.2903C10.7273 9.85325 11.2842 9.55562 11.8903 9.43505C12.4965 9.31447 13.1249 9.37635 13.6959 9.61288C14.2669 9.8494 14.755 10.2499 15.0983 10.7638C15.4417 11.2777 15.625 11.8819 15.625 12.5C15.625 13.3288 15.2958 14.1237 14.7097 14.7097C14.1237 15.2958 13.3288 15.625 12.5 15.625Z'
                            fill='#747474'
                          />
                        </svg>
                      </a>
                    </td>
                  </tr>
                  {/* item */}
                  <tr>
                    <td>18811</td>
                    <td>
                      <Image
                        src={Ellipse}
                        alt='Picture of the author'
                        width={"auto"}
                        height={"auto"}
                      />
                    </td>
                    <td>Mike Smith</td>
                    <td>01234567890</td>
                    <td>3292</td>
                    <td>184</td>
                    <td className='action'>
                      <a href=''>
                        <svg
                          width={25}
                          height={25}
                          viewBox='0 0 25 25'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M24.172 12.2344C23.2532 9.85754 21.658 7.80204 19.5836 6.32194C17.5092 4.84184 15.0466 4.00201 12.5002 3.90625C9.95368 4.00201 7.49108 4.84184 5.41672 6.32194C3.34236 7.80204 1.74716 9.85754 0.828281 12.2344C0.766224 12.406 0.766224 12.594 0.828281 12.7656C1.74716 15.1425 3.34236 17.198 5.41672 18.6781C7.49108 20.1582 9.95368 20.998 12.5002 21.0938C15.0466 20.998 17.5092 20.1582 19.5836 18.6781C21.658 17.198 23.2532 15.1425 24.172 12.7656C24.2341 12.594 24.2341 12.406 24.172 12.2344ZM12.5002 19.5312C8.35953 19.5312 3.98453 16.4609 2.39859 12.5C3.98453 8.53906 8.35953 5.46875 12.5002 5.46875C16.6408 5.46875 21.0158 8.53906 22.6017 12.5C21.0158 16.4609 16.6408 19.5312 12.5002 19.5312Z'
                            fill='#747474'
                          />
                          <path
                            d='M12.5 7.8125C11.5729 7.8125 10.6666 8.08742 9.89577 8.60249C9.12491 9.11756 8.5241 9.84964 8.16932 10.7062C7.81453 11.5627 7.7217 12.5052 7.90257 13.4145C8.08344 14.3238 8.52988 15.159 9.18544 15.8146C9.841 16.4701 10.6762 16.9166 11.5855 17.0974C12.4948 17.2783 13.4373 17.1855 14.2938 16.8307C15.1504 16.4759 15.8824 15.8751 16.3975 15.1042C16.9126 14.3334 17.1875 13.4271 17.1875 12.5C17.1875 11.2568 16.6936 10.0645 15.8146 9.18544C14.9355 8.30636 13.7432 7.8125 12.5 7.8125ZM12.5 15.625C11.8819 15.625 11.2777 15.4417 10.7638 15.0983C10.2499 14.755 9.8494 14.2669 9.61288 13.6959C9.37635 13.1249 9.31447 12.4965 9.43505 11.8903C9.55563 11.2842 9.85325 10.7273 10.2903 10.2903C10.7273 9.85325 11.2842 9.55562 11.8903 9.43505C12.4965 9.31447 13.1249 9.37635 13.6959 9.61288C14.2669 9.8494 14.755 10.2499 15.0983 10.7638C15.4417 11.2777 15.625 11.8819 15.625 12.5C15.625 13.3288 15.2958 14.1237 14.7097 14.7097C14.1237 15.2958 13.3288 15.625 12.5 15.625Z'
                            fill='#747474'
                          />
                        </svg>
                      </a>
                    </td>
                  </tr>
                  {/* item */}
                  <tr>
                    <td>18811</td>
                    <td>
                      <Image
                        src={Ellipse}
                        alt='Picture of the author'
                        width={"auto"}
                        height={"auto"}
                      />
                    </td>
                    <td>Mike Smith</td>
                    <td>01234567890</td>
                    <td>3292</td>
                    <td>184</td>
                    <td className='action'>
                      <a href=''>
                        <svg
                          width={25}
                          height={25}
                          viewBox='0 0 25 25'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M24.172 12.2344C23.2532 9.85754 21.658 7.80204 19.5836 6.32194C17.5092 4.84184 15.0466 4.00201 12.5002 3.90625C9.95368 4.00201 7.49108 4.84184 5.41672 6.32194C3.34236 7.80204 1.74716 9.85754 0.828281 12.2344C0.766224 12.406 0.766224 12.594 0.828281 12.7656C1.74716 15.1425 3.34236 17.198 5.41672 18.6781C7.49108 20.1582 9.95368 20.998 12.5002 21.0938C15.0466 20.998 17.5092 20.1582 19.5836 18.6781C21.658 17.198 23.2532 15.1425 24.172 12.7656C24.2341 12.594 24.2341 12.406 24.172 12.2344ZM12.5002 19.5312C8.35953 19.5312 3.98453 16.4609 2.39859 12.5C3.98453 8.53906 8.35953 5.46875 12.5002 5.46875C16.6408 5.46875 21.0158 8.53906 22.6017 12.5C21.0158 16.4609 16.6408 19.5312 12.5002 19.5312Z'
                            fill='#747474'
                          />
                          <path
                            d='M12.5 7.8125C11.5729 7.8125 10.6666 8.08742 9.89577 8.60249C9.12491 9.11756 8.5241 9.84964 8.16932 10.7062C7.81453 11.5627 7.7217 12.5052 7.90257 13.4145C8.08344 14.3238 8.52988 15.159 9.18544 15.8146C9.841 16.4701 10.6762 16.9166 11.5855 17.0974C12.4948 17.2783 13.4373 17.1855 14.2938 16.8307C15.1504 16.4759 15.8824 15.8751 16.3975 15.1042C16.9126 14.3334 17.1875 13.4271 17.1875 12.5C17.1875 11.2568 16.6936 10.0645 15.8146 9.18544C14.9355 8.30636 13.7432 7.8125 12.5 7.8125ZM12.5 15.625C11.8819 15.625 11.2777 15.4417 10.7638 15.0983C10.2499 14.755 9.8494 14.2669 9.61288 13.6959C9.37635 13.1249 9.31447 12.4965 9.43505 11.8903C9.55563 11.2842 9.85325 10.7273 10.2903 10.2903C10.7273 9.85325 11.2842 9.55562 11.8903 9.43505C12.4965 9.31447 13.1249 9.37635 13.6959 9.61288C14.2669 9.8494 14.755 10.2499 15.0983 10.7638C15.4417 11.2777 15.625 11.8819 15.625 12.5C15.625 13.3288 15.2958 14.1237 14.7097 14.7097C14.1237 15.2958 13.3288 15.625 12.5 15.625Z'
                            fill='#747474'
                          />
                        </svg>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stock_in_part;