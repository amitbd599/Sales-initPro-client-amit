import Image from "next/image";
import Select from "react-select";
import Ellipse from "../../../Assets/images/Ellipse 16.png";
const Product_return = () => {
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
            <div className='col-lg-4'>
              <div className='header_part d_flex'>
                {/* svg */}
                <div className='svg'>
                  <svg
                    width={37}
                    height={35}
                    viewBox='0 0 37 35'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M7.3932 9.98873L10.2491 9.1144C10.4742 9.04558 10.7106 9.02176 10.9448 9.0443C11.1791 9.06684 11.4066 9.1353 11.6144 9.24577C11.8222 9.35624 12.0062 9.50656 12.1559 9.68814C12.3056 9.86973 12.4181 10.079 12.4869 10.3041C12.5557 10.5291 12.5796 10.7655 12.557 10.9998C12.5345 11.234 12.466 11.4616 12.3555 11.6694C12.2451 11.8771 12.0948 12.0612 11.9132 12.2109C11.7316 12.3606 11.5223 12.473 11.2972 12.5419L4.44412 14.6381C4.21895 14.7069 3.98243 14.7307 3.74807 14.7081C3.5137 14.6855 3.2861 14.6169 3.07827 14.5062C2.87044 14.3956 2.68646 14.245 2.53684 14.0632C2.38723 13.8814 2.27492 13.6719 2.20633 13.4467L0.110078 6.59353C0.0412568 6.36848 0.0174367 6.13207 0.0399775 5.89782C0.0625182 5.66356 0.130978 5.43604 0.241449 5.22824C0.35192 5.02044 0.502238 4.83644 0.68382 4.68673C0.865403 4.53703 1.07469 4.42456 1.29974 4.35573C1.75425 4.21674 2.24536 4.264 2.66503 4.48711C3.0847 4.71021 3.39855 5.09089 3.53754 5.5454L4.32587 8.12719C8.6402 1.4819 17.199 -1.37581 24.7975 1.73811C27.0698 2.66953 29.1105 4.0876 30.7758 5.89255C32.4412 7.6975 33.6907 9.84547 34.4366 12.1853C34.5131 12.4107 34.5439 12.6491 34.5272 12.8865C34.5105 13.1239 34.4467 13.3557 34.3394 13.5682C34.2322 13.7806 34.0837 13.9696 33.9026 14.1241C33.7215 14.2785 33.5114 14.3954 33.2847 14.4677C33.0579 14.5401 32.819 14.5666 32.5819 14.5456C32.3449 14.5246 32.1143 14.4566 31.9038 14.3455C31.6933 14.2344 31.507 14.0825 31.3559 13.8987C31.2047 13.7148 31.0917 13.5027 31.0235 13.2747C30.2666 10.8978 28.8528 8.78345 26.9455 7.17582C25.0381 5.56818 22.715 4.53279 20.2442 4.1892C17.7735 3.8456 15.256 4.20782 12.9824 5.23403C10.7088 6.26024 8.77174 7.90858 7.39499 9.98873H7.3932ZM29.4791 24.6714L26.2989 25.4652C26.0686 25.5283 25.828 25.5448 25.5913 25.5136C25.3545 25.4825 25.1264 25.4043 24.9203 25.2837C24.7142 25.1632 24.5343 25.0026 24.3911 24.8115C24.248 24.6204 24.1445 24.4027 24.0867 24.171C24.0289 23.9393 24.018 23.6984 24.0546 23.4625C24.0912 23.2265 24.1746 23.0003 24.2999 22.797C24.4252 22.5938 24.5899 22.4176 24.7843 22.2789C24.9786 22.1402 25.1988 22.0417 25.4317 21.9893L31.9587 20.3607C32.2988 20.1989 32.6814 20.1487 33.0517 20.2174C33.4085 20.2643 33.7428 20.4176 34.0113 20.6573C34.2797 20.8969 34.4698 21.2119 34.5567 21.5611L36.291 28.5128C36.3937 28.9694 36.3138 29.448 36.0681 29.8464C35.8225 30.2448 35.4308 30.5312 34.9767 30.6445C34.5227 30.7578 34.0423 30.6889 33.6383 30.4526C33.2344 30.2163 32.9389 29.8313 32.8152 29.3799L32.2239 27.0114C30.4988 29.4938 28.1361 31.4651 25.3848 32.7175C22.6334 33.9699 19.5951 34.457 16.5901 34.1276C13.5851 33.7982 10.7246 32.6645 8.30983 30.8458C5.8951 29.0271 4.01557 26.5908 2.86924 23.7935L2.40341 22.6576C2.31424 22.4399 2.26883 22.2067 2.26977 21.9714C2.27072 21.7361 2.31801 21.5032 2.40893 21.2862C2.49985 21.0692 2.63263 20.8722 2.79968 20.7065C2.96674 20.5407 3.1648 20.4096 3.38256 20.3204C3.82234 20.1403 4.31564 20.1423 4.75396 20.3259C4.97099 20.4168 5.16799 20.5496 5.33371 20.7167C5.49942 20.8837 5.63061 21.0818 5.71979 21.2995L6.18562 22.4337C7.09892 24.6622 8.60346 26.599 10.5369 28.035C12.4703 29.4711 14.7592 30.3519 17.1565 30.5824C19.5539 30.8129 21.9687 30.3843 24.1403 29.3429C26.3119 28.3016 28.1579 26.6869 29.4791 24.6732V24.6714Z'
                      fill='#747474'
                    />
                  </svg>
                </div>
                {/* Text Part */}
                <div className='text'>
                  <h3>Product Return</h3>
                  <p>Record your product returned from delivery</p>
                </div>
              </div>
            </div>
            <div className='col-lg-8'>
              <div className='FilterBy d_flex'>
                {/* Filter By Item */}
                <div className='FilterBy_item d_flex'>
                  <h3>Filter By:</h3>
                  <div className='reactSelectBody'>
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

export default Product_return;
