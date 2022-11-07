import Image from "next/image";
import admin_logo from "../../../Assets/images/admin_logo.png";
const SideBar = () => {
  return (
    <section id='side_bar' className='Admin'>
      <div className='sidebar_content'>
        <div className='logo'>
          <a href='index.html'>
            <Image src={admin_logo} alt='' width={"auto"} height={50} />
          </a>
        </div>
        <div className='menuItem'>
          <ul>
            <li className='active'>
              <a href='/' className='active d_flex'>
                <div className='svg'>
                  <svg
                    width={22}
                    height={22}
                    viewBox='0 0 22 22'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M18.7987 0H2.34984C1.05743 0 0 1.05743 0 2.34984V18.7987C0 20.0911 1.05743 21.1485 2.34984 21.1485H18.7987C20.0911 21.1485 21.1485 20.0911 21.1485 18.7987V2.34984C21.1485 1.05743 20.0911 0 18.7987 0ZM2.34984 18.7987V2.34984H9.39934V18.7987H2.34984ZM18.7987 18.7987H11.7492V10.5743H18.7987V18.7987ZM18.7987 8.22442H11.7492V2.34984H18.7987V8.22442Z'
                      fill='#A16CF8'
                    />
                  </svg>
                </div>
                Dashboard
              </a>
            </li>
            <li>
              <a href='order' className='d_flex'>
                <div className='svg'>
                  <svg
                    width={20}
                    height={26}
                    viewBox='0 0 20 26'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M17.6218 3.34717H2.365C1.71684 3.34717 1.19141 3.87261 1.19141 4.52077V23.2983C1.19141 23.9465 1.71684 24.4719 2.365 24.4719H17.6218C18.2699 24.4719 18.7954 23.9465 18.7954 23.2983V4.52077C18.7954 3.87261 18.2699 3.34717 17.6218 3.34717Z'
                      stroke='#A16CF8'
                      strokeWidth='1.67657'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M6.47267 1V4.52079M13.5143 1V4.52079M5.29907 9.80198H14.6879M5.29907 14.4964H12.3407M5.29907 19.1908H9.99346'
                      stroke='#A16CF8'
                      strokeWidth='1.67657'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                Orders
              </a>
            </li>
            <li className='dropdown'>
              <a
                href='#'
                className='d_flex dropdown-toggle'
                role='button'
                id='dropdownMenuLink'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <div className='svg'>
                  <svg
                    width={21}
                    height={21}
                    viewBox='0 0 21 21'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M0.875 0C0.642936 0 0.420376 0.0921874 0.256282 0.256282C0.0921874 0.420376 0 0.642936 0 0.875C0 1.10706 0.0921874 1.32962 0.256282 1.49372C0.420376 1.65781 0.642936 1.75 0.875 1.75H1.3055C1.4955 1.75033 1.68023 1.81249 1.83177 1.9271C1.98332 2.0417 2.09344 2.20252 2.1455 2.38525L4.921 12.0977C5.07798 12.6459 5.40915 13.128 5.86443 13.4712C6.31971 13.8144 6.87435 14 7.4445 14H15.4403C15.965 14.0001 16.4777 13.8429 16.9122 13.5488C17.3468 13.2546 17.6831 12.837 17.878 12.3498L20.4575 5.89925C20.5635 5.63382 20.603 5.34646 20.5723 5.06228C20.5416 4.7781 20.4418 4.50575 20.2816 4.26905C20.1214 4.03235 19.9056 3.8385 19.6532 3.70443C19.4008 3.57037 19.1193 3.50018 18.8335 3.5H4.284L3.82725 1.904C3.67067 1.35585 3.3399 0.873576 2.88495 0.530069C2.42999 0.186562 1.87557 0.000497644 1.3055 0H0.875ZM6.6045 11.6147L4.7845 5.25H18.8317L16.2522 11.7005C16.1872 11.8627 16.0752 12.0017 15.9304 12.0997C15.7857 12.1976 15.615 12.25 15.4403 12.25H7.4445C7.2545 12.2497 7.06977 12.1875 6.91823 12.0729C6.76668 11.9583 6.65656 11.7975 6.6045 11.6147ZM7.875 21C8.21972 21 8.56106 20.9321 8.87954 20.8002C9.19802 20.6683 9.4874 20.4749 9.73116 20.2312C9.97491 19.9874 10.1683 19.698 10.3002 19.3795C10.4321 19.0611 10.5 18.7197 10.5 18.375C10.5 18.0303 10.4321 17.6889 10.3002 17.3705C10.1683 17.052 9.97491 16.7626 9.73116 16.5188C9.4874 16.2751 9.19802 16.0817 8.87954 15.9498C8.56106 15.8179 8.21972 15.75 7.875 15.75C7.17881 15.75 6.51113 16.0266 6.01884 16.5188C5.52656 17.0111 5.25 17.6788 5.25 18.375C5.25 19.0712 5.52656 19.7389 6.01884 20.2312C6.51113 20.7234 7.17881 21 7.875 21ZM7.875 19.25C7.64294 19.25 7.42038 19.1578 7.25628 18.9937C7.09219 18.8296 7 18.6071 7 18.375C7 18.1429 7.09219 17.9204 7.25628 17.7563C7.42038 17.5922 7.64294 17.5 7.875 17.5C8.10706 17.5 8.32962 17.5922 8.49372 17.7563C8.65781 17.9204 8.75 18.1429 8.75 18.375C8.75 18.6071 8.65781 18.8296 8.49372 18.9937C8.32962 19.1578 8.10706 19.25 7.875 19.25ZM14.875 21C15.2197 21 15.5611 20.9321 15.8795 20.8002C16.198 20.6683 16.4874 20.4749 16.7312 20.2312C16.9749 19.9874 17.1683 19.698 17.3002 19.3795C17.4321 19.0611 17.5 18.7197 17.5 18.375C17.5 18.0303 17.4321 17.6889 17.3002 17.3705C17.1683 17.052 16.9749 16.7626 16.7312 16.5188C16.4874 16.2751 16.198 16.0817 15.8795 15.9498C15.5611 15.8179 15.2197 15.75 14.875 15.75C14.1788 15.75 13.5111 16.0266 13.0188 16.5188C12.5266 17.0111 12.25 17.6788 12.25 18.375C12.25 19.0712 12.5266 19.7389 13.0188 20.2312C13.5111 20.7234 14.1788 21 14.875 21ZM14.875 19.25C14.6429 19.25 14.4204 19.1578 14.2563 18.9937C14.0922 18.8296 14 18.6071 14 18.375C14 18.1429 14.0922 17.9204 14.2563 17.7563C14.4204 17.5922 14.6429 17.5 14.875 17.5C15.1071 17.5 15.3296 17.5922 15.4937 17.7563C15.6578 17.9204 15.75 18.1429 15.75 18.375C15.75 18.6071 15.6578 18.8296 15.4937 18.9937C15.3296 19.1578 15.1071 19.25 14.875 19.25Z'
                      fill='white'
                    />
                  </svg>
                </div>
                Products
                <div className='arrow'>
                  <i className='fas fa-chevron-down' />
                </div>
              </a>
              <ul className='dropdown-menu' aria-labelledby='dropdownMenuLink'>
                <li>
                  <a className='dropdown-item' href='product'>
                    Product
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='add_category'>
                    Product Category
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href='courier' className='d_flex'>
                <div className='svg'>
                  <svg
                    width={23}
                    height={19}
                    viewBox='0 0 23 19'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M1.6364 8.18194H11.4548V9.81834H1.6364V8.18194ZM0 4.09094H8.18199V5.72734H0V4.09094Z'
                      fill='white'
                    />
                    <path
                      d='M22.8434 8.67782L20.3888 2.95043C20.3258 2.80322 20.2209 2.67775 20.0872 2.5896C19.9536 2.50145 19.797 2.45451 19.6368 2.4546H17.1822V0.818199C17.1822 0.601199 17.096 0.393087 16.9426 0.239645C16.7891 0.0862031 16.581 0 16.364 0H3.27284V1.6364H15.5458V11.9097C15.173 12.1262 14.8467 12.4144 14.5858 12.7576C14.3249 13.1008 14.1345 13.4922 14.0256 13.9094H8.88405C8.68491 13.1381 8.21131 12.4659 7.55202 12.0189C6.89273 11.5718 6.09302 11.3805 5.30279 11.4809C4.51257 11.5812 3.78607 11.9664 3.25949 12.5641C2.7329 13.1618 2.44238 13.931 2.44238 14.7276C2.44238 15.5242 2.7329 16.2934 3.25949 16.8911C3.78607 17.4888 4.51257 17.8739 5.30279 17.9743C6.09302 18.0747 6.89273 17.8834 7.55202 17.4363C8.21131 16.9892 8.68491 16.3171 8.88405 15.5458H14.0256C14.2036 16.248 14.6107 16.8708 15.1824 17.3157C15.7541 17.7606 16.4578 18.0021 17.1822 18.0021C17.9066 18.0021 18.6104 17.7606 19.1821 17.3157C19.7538 16.8708 20.1609 16.248 20.3388 15.5458H22.0914C22.3084 15.5458 22.5165 15.4596 22.67 15.3061C22.8234 15.1527 22.9096 14.9446 22.9096 14.7276V9.00019C22.9097 8.88935 22.8871 8.77966 22.8434 8.67782ZM5.72744 16.364C5.40379 16.364 5.08741 16.268 4.81831 16.0882C4.5492 15.9084 4.33946 15.6528 4.2156 15.3538C4.09175 15.0548 4.05934 14.7258 4.12248 14.4083C4.18562 14.0909 4.34148 13.7993 4.57033 13.5705C4.79919 13.3416 5.09076 13.1858 5.40819 13.1226C5.72562 13.0595 6.05465 13.0919 6.35366 13.2158C6.65267 13.3396 6.90825 13.5493 7.08806 13.8185C7.26787 14.0876 7.36384 14.4039 7.36384 14.7276C7.36341 15.1615 7.19086 15.5774 6.88407 15.8842C6.57728 16.191 6.16131 16.3636 5.72744 16.364ZM17.1822 4.091H19.0968L20.851 8.18199H17.1822V4.091ZM17.1822 16.364C16.8586 16.364 16.5422 16.268 16.2731 16.0882C16.004 15.9084 15.7943 15.6528 15.6704 15.3538C15.5465 15.0548 15.5141 14.7258 15.5773 14.4083C15.6404 14.0909 15.7963 13.7993 16.0251 13.5705C16.254 13.3416 16.5456 13.1858 16.863 13.1226C17.1804 13.0595 17.5094 13.0919 17.8085 13.2158C18.1075 13.3396 18.363 13.5493 18.5428 13.8185C18.7227 14.0876 18.8186 14.4039 18.8186 14.7276C18.8182 15.1615 18.6457 15.5774 18.3389 15.8842C18.0321 16.191 17.6161 16.3636 17.1822 16.364ZM21.2732 13.9094H20.3388C20.1586 13.2085 19.7509 12.5873 19.1797 12.1431C18.6084 11.6989 17.9059 11.4568 17.1822 11.4548V9.81839H21.2732V13.9094Z'
                      fill='white'
                    />
                  </svg>
                </div>
                Courier
              </a>
            </li>
            <li className='dropdown'>
              <a
                href='stock'
                className='d_flex dropdown-toggle'
                role='button'
                id='dropdownMenuLink'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <div className='svg'>
                  <svg
                    width={21}
                    height={19}
                    viewBox='0 0 21 19'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M1.96875 0.984375C1.96875 0.723303 1.86504 0.472923 1.68043 0.288317C1.49583 0.103711 1.24545 0 0.984375 0C0.723303 0 0.472923 0.103711 0.288317 0.288317C0.103711 0.472923 0 0.723303 0 0.984375L0 17.3906C0 17.934 0.441 18.375 0.984375 18.375H20.0156C20.2767 18.375 20.5271 18.2713 20.7117 18.0867C20.8963 17.9021 21 17.6517 21 17.3906C21 17.1296 20.8963 16.8792 20.7117 16.6946C20.5271 16.51 20.2767 16.4063 20.0156 16.4063H1.96875V0.984375ZM20.7113 4.305C20.8851 4.1184 20.9798 3.87158 20.9753 3.61656C20.9708 3.36154 20.8675 3.11823 20.6871 2.93787C20.5068 2.75752 20.2635 2.65421 20.0084 2.64971C19.7534 2.64521 19.5066 2.73987 19.32 2.91375L13.125 9.10875L9.88313 5.86688C9.69855 5.68253 9.44836 5.57899 9.1875 5.57899C8.92664 5.57899 8.67645 5.68253 8.49187 5.86688L4.22625 10.1325C4.05237 10.3191 3.95771 10.5659 3.96221 10.8209C3.96671 11.076 4.07002 11.3193 4.25037 11.4996C4.43073 11.68 4.67404 11.7833 4.92906 11.7878C5.18408 11.7923 5.4309 11.6976 5.6175 11.5238L9.1875 7.95375L12.4294 11.1956C12.6139 11.38 12.8641 11.4835 13.125 11.4835C13.3859 11.4835 13.6361 11.38 13.8206 11.1956L20.7113 4.305Z'
                      fill='white'
                    />
                  </svg>
                </div>
                Stock
                <div className='arrow'>
                  <i className='fas fa-chevron-down' />
                </div>
              </a>
              <ul className='dropdown-menu' aria-labelledby='dropdownMenuLink'>
                <li>
                  <a className='dropdown-item' href='inventory'>
                    Inventory
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='stock_in'>
                    Stock In
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='product_return'>
                    Product Return
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href='bulk-sms' className='d_flex'>
                <div className='svg'>
                  <svg
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M12 0C5.3832 0 0 4.3068 0 9.6C0 13.0896 2.2776 16.218 6 17.9208V24L12.408 19.194C18.8364 19.0224 24 14.784 24 9.6C24 4.3068 18.6168 0 12 0ZM12 16.8H11.6004L8.4 19.2V16.2996L7.6308 16.0032C4.404 14.7612 2.4 12.3072 2.4 9.6C2.4 5.6292 6.7068 2.4 12 2.4C17.2932 2.4 21.6 5.6292 21.6 9.6C21.6 13.5708 17.2932 16.8 12 16.8Z'
                      fill='white'
                    />
                    <path
                      d='M6 6H18V8.4H6V6ZM6 10.8H14.4V13.2H6V10.8Z'
                      fill='white'
                    />
                  </svg>
                </div>
                Bulk SMS
              </a>
            </li>
            <li>
              <a href='customer' className='d_flex'>
                <div className='svg'>
                  <svg
                    width={24}
                    height={22}
                    viewBox='0 0 24 22'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M16.3587 18.752L15.7187 13.628C15.628 12.9022 15.2753 12.2346 14.7269 11.7506C14.1785 11.2667 13.4722 10.9997 12.7407 11H10.5367C9.80565 11.0002 9.09981 11.2674 8.55182 11.7513C8.00382 12.2352 7.65139 12.9026 7.56073 13.628L6.91973 18.752C6.88455 19.0335 6.90967 19.3193 6.99341 19.5903C7.07715 19.8614 7.2176 20.1116 7.40544 20.3242C7.59327 20.5368 7.82419 20.707 8.08286 20.8235C8.34153 20.94 8.62203 21.0002 8.90573 21H14.3737C14.6574 21.0001 14.9377 20.9398 15.1963 20.8232C15.4548 20.7066 15.6856 20.5364 15.8734 20.3238C16.0611 20.1112 16.2014 19.8611 16.2851 19.5901C16.3688 19.3191 16.3939 19.0334 16.3587 18.752V18.752Z'
                      stroke='white'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M11.6396 7C13.2965 7 14.6396 5.65685 14.6396 4C14.6396 2.34315 13.2965 1 11.6396 1C9.98279 1 8.63965 2.34315 8.63965 4C8.63965 5.65685 9.98279 7 11.6396 7Z'
                      stroke='white'
                      strokeWidth={2}
                    />
                    <path
                      d='M3.63965 10C4.74422 10 5.63965 9.10457 5.63965 8C5.63965 6.89543 4.74422 6 3.63965 6C2.53508 6 1.63965 6.89543 1.63965 8C1.63965 9.10457 2.53508 10 3.63965 10Z'
                      stroke='white'
                      strokeWidth={2}
                    />
                    <path
                      d='M19.6396 10C20.7442 10 21.6396 9.10457 21.6396 8C21.6396 6.89543 20.7442 6 19.6396 6C18.5351 6 17.6396 6.89543 17.6396 8C17.6396 9.10457 18.5351 10 19.6396 10Z'
                      stroke='white'
                      strokeWidth={2}
                    />
                    <path
                      d='M3.63925 13H3.33325C2.85981 12.9999 2.4017 13.1678 2.04042 13.4738C1.67914 13.7798 1.43813 14.204 1.36025 14.671L1.02725 16.671C0.979458 16.9575 0.994667 17.2511 1.07181 17.5311C1.14896 17.8112 1.2862 18.0711 1.47397 18.2928C1.66175 18.5144 1.89556 18.6925 2.15914 18.8146C2.42272 18.9368 2.70974 19 3.00025 19H6.63925M19.6392 13H19.9452C20.4187 12.9999 20.8768 13.1678 21.2381 13.4738C21.5993 13.7798 21.8404 14.204 21.9182 14.671L22.2512 16.671C22.299 16.9575 22.2838 17.2511 22.2067 17.5311C22.1295 17.8112 21.9923 18.0711 21.8045 18.2928C21.6167 18.5144 21.3829 18.6925 21.1194 18.8146C20.8558 18.9368 20.5687 19 20.2782 19H16.6392'
                      stroke='white'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                Customers
              </a>
            </li>
            <li>
              <a href='website_setting' className='d_flex'>
                <div className='svg'>
                  <svg
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M9.64286 1V4.14286L8.07143 4.92857L5.71429 2.57143L2.57143 5.71429L4.92857 8.07143L4.14286 9.64286H1V14.3571H4.14286L4.92857 15.9286L2.57143 18.2857L5.71429 21.4286L8.07143 19.0714L9.64286 19.8571V23H14.3571V19.8571L15.9286 19.0714L18.2857 21.4286L21.4286 18.2857L19.0714 15.9286L19.8571 14.3571H23V9.64286H19.8571L19.0714 8.07143L21.4286 5.71429L18.2857 2.57143L15.9286 4.92857L14.3571 4.14286V1H9.64286Z'
                      stroke='white'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M12.0003 15.1429C13.736 15.1429 15.1431 13.7358 15.1431 12C15.1431 10.2643 13.736 8.85718 12.0003 8.85718C10.2645 8.85718 8.85742 10.2643 8.85742 12C8.85742 13.7358 10.2645 15.1429 12.0003 15.1429Z'
                      stroke='white'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                Website Settings
              </a>
            </li>
            <li>
              <a href='plugin' className='d_flex'>
                <div className='svg'>
                  <svg
                    width={18}
                    height={29}
                    viewBox='0 0 18 29'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M7.2 0C7.43869 0 7.66761 0.0948212 7.8364 0.263604C8.00518 0.432387 8.1 0.661305 8.1 0.9V5.4H13.5V0.9C13.5 0.661305 13.5948 0.432387 13.7636 0.263604C13.9324 0.0948212 14.1613 0 14.4 0C14.6387 0 14.8676 0.0948212 15.0364 0.263604C15.2052 0.432387 15.3 0.661305 15.3 0.9V5.4H17.1C17.3387 5.4 17.5676 5.49482 17.7364 5.6636C17.9052 5.83239 18 6.06131 18 6.3V11.7C18 13.3709 17.3363 14.9733 16.1548 16.1548C14.9733 17.3363 13.3709 18 11.7 18C11.6964 18.7812 11.682 19.521 11.628 20.196C11.5542 21.1212 11.4012 22.0014 11.0574 22.7592C10.7088 23.5606 10.0913 24.2151 9.3114 24.6096C8.505 25.02 7.5042 25.2 6.3 25.2C4.5036 25.2 3.402 25.794 2.7468 26.4924C2.15525 27.1171 1.81769 27.9398 1.8 28.8H0C0 27.6912 0.4176 26.3394 1.4346 25.2576C2.4732 24.156 4.0698 23.4 6.3 23.4C7.3458 23.4 8.0316 23.2416 8.4924 23.0058C8.9262 22.7844 9.2124 22.4658 9.4176 22.0158C9.6354 21.537 9.765 20.898 9.8316 20.0538C9.8802 19.4418 9.8946 18.7614 9.8982 18C8.22765 17.9995 6.62568 17.3356 5.44459 16.1541C4.2635 14.9727 3.6 13.3706 3.6 11.7V6.3C3.6 6.06131 3.69482 5.83239 3.8636 5.6636C4.03239 5.49482 4.2613 5.4 4.5 5.4H6.3V0.9C6.3 0.661305 6.39482 0.432387 6.5636 0.263604C6.73239 0.0948212 6.96131 0 7.2 0V0ZM5.4 7.2V11.7C5.4 12.8935 5.87411 14.0381 6.71802 14.882C7.56193 15.7259 8.70653 16.2 9.9 16.2H11.7C12.8935 16.2 14.0381 15.7259 14.882 14.882C15.7259 14.0381 16.2 12.8935 16.2 11.7V7.2H5.4Z'
                      fill='white'
                    />
                  </svg>
                </div>
                Plugins
              </a>
            </li>
            <li>
              <a href='offer' className='d_flex'>
                <div className='svg'>
                  <svg
                    width={20}
                    height={20}
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M19.41 9.58L10.41 0.58C10.05 0.22 9.55 0 9 0H2C0.9 0 0 0.9 0 2V9C0 9.55 0.22 10.05 0.59 10.42L9.59 19.42C9.95 19.78 10.45 20 11 20C11.55 20 12.05 19.78 12.41 19.41L19.41 12.41C19.78 12.05 20 11.55 20 11C20 10.45 19.77 9.94 19.41 9.58ZM11 18.01L2 9V2H9V1.99L18 10.99L11 18.01Z'
                      fill='white'
                    />
                    <path
                      d='M4.5 6C5.32843 6 6 5.32843 6 4.5C6 3.67157 5.32843 3 4.5 3C3.67157 3 3 3.67157 3 4.5C3 5.32843 3.67157 6 4.5 6Z'
                      fill='white'
                    />
                  </svg>
                </div>
                Offers
              </a>
            </li>
            <li>
              <a href='support_ticket' className='d_flex'>
                <div className='svg'>
                  <svg
                    width={20}
                    height={20}
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M19.41 9.58L10.41 0.58C10.05 0.22 9.55 0 9 0H2C0.9 0 0 0.9 0 2V9C0 9.55 0.22 10.05 0.59 10.42L9.59 19.42C9.95 19.78 10.45 20 11 20C11.55 20 12.05 19.78 12.41 19.41L19.41 12.41C19.78 12.05 20 11.55 20 11C20 10.45 19.77 9.94 19.41 9.58ZM11 18.01L2 9V2H9V1.99L18 10.99L11 18.01Z'
                      fill='white'
                    />
                    <path
                      d='M4.5 6C5.32843 6 6 5.32843 6 4.5C6 3.67157 5.32843 3 4.5 3C3.67157 3 3 3.67157 3 4.5C3 5.32843 3.67157 6 4.5 6Z'
                      fill='white'
                    />
                  </svg>
                </div>
                Support Ticket
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
